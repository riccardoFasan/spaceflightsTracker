import { ReactNode, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  VirtualizedList,
} from 'react-native';
import { uniqueBy } from '../../utilities';
import { showErrorMessage } from '../../services';

interface Props<T> {
  idKey: keyof T;
  getCard: (item: T) => ReactNode;
  getBatch: (batch: number) => Promise<T[]>;
}

export const ScrollableList = <T,>({ idKey, getCard, getBatch }: Props<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentBatch, setCurrentBatch] = useState<number>(0);

  useEffect(() => {
    loadBatch(currentBatch);
  }, [currentBatch]);

  function nextBatch(): void {
    if (loading) return;
    const nextBatch: number = currentBatch + 1;
    setCurrentBatch(nextBatch);
  }

  function refresh(): void {
    setItems([]);
    const firstBatch: number = 1;
    setRefreshing(true);
    setCurrentBatch(firstBatch);
  }

  async function loadBatch(batch: number): Promise<void> {
    try {
      setLoading(true);
      const newItems: T[] = await getBatch(batch);
      const totalItems: T[] = uniqueBy(idKey, [...items, ...newItems]);
      setItems(totalItems);
    } catch (e: unknown) {
      console.log(e);
      showErrorMessage('Error loading batch');
    } finally {
      if (refreshing) setRefreshing(false);
      setLoading(false);
    }
  }

  return (
    <VirtualizedList
      initialNumToRender={2}
      getItemCount={(_) => items.length}
      getItem={(data, i) => data[i]}
      data={items}
      renderItem={({ item }: { item: T }) => getCard(item) as any}
      onRefresh={() => refresh()}
      refreshing={refreshing}
      style={styles.list}
      ListFooterComponent={() =>
        loading &&
        !refreshing && (
          <View
            style={[
              styles.spinnerContainer,
              items.length === 0 && styles.spinnerContainerCentered,
            ]}
          >
            <ActivityIndicator size="large" color="#00A3FF" />
          </View>
        )
      }
      onEndReached={() => nextBatch()}
    ></VirtualizedList>
  );
};

const dimensions = Dimensions.get('window');
const windowheight = Math.round(dimensions.height);
const bottomBarHeight = 100;

const styles = StyleSheet.create({
  list: {
    position: 'relative',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: bottomBarHeight / 3,
  },
  spinnerContainerCentered: {
    height: windowheight - bottomBarHeight,
    marginVertical: 0,
  },
});
