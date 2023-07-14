import { ReactNode, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  VirtualizedList,
  SafeAreaView,
} from 'react-native';
import { uniqueBy } from '../../utilities';
import { showErrorMessage } from '../../services';
import { Color, Spacing, flexBoxStyles } from '../../styles';
import { ListBatch } from '../../models/listBatchModel';
import { invalidateCache } from '../../lib';

interface Props<T> {
  idKey: keyof T;
  batchSize: number;
  maxBatches: number;
  getBatch: (batch: number, batchSize: number) => Promise<ListBatch<T>>;
  invalidateCache: () => Promise<void>;
  getCard: (item: T) => ReactNode;
}

export const ScrollableList = <T,>({
  idKey,
  batchSize,
  maxBatches,
  getBatch,
  invalidateCache,
  getCard,
}: Props<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentBatch, setCurrentBatch] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    loadBatch(currentBatch);
  }, [currentBatch]);

  async function loadBatch(batch: number): Promise<void> {
    try {
      setLoading(true);
      const { results, totalCount } = await getBatch(batch, batchSize);
      const totalItems: T[] = uniqueBy(idKey, [...items, ...results]);
      setItems(totalItems);
      setTotalCount(totalCount);
    } catch (e: unknown) {
      showErrorMessage('Error loading batch');
    } finally {
      if (refreshing) setRefreshing(false);
      setLoading(false);
    }
  }

  function nextBatch(): void {
    if (canLoadNextBatch()) {
      const nextBatch: number = currentBatch + 1;
      setCurrentBatch(nextBatch);
    }
  }

  async function refresh(): Promise<void> {
    await invalidateCache();
    const firstBatch: number = 1;
    setRefreshing(true);
    setCurrentBatch(firstBatch);
  }

  function canLoadNextBatch(): boolean {
    if (loading || refreshing) return false;
    const nextBatch: number = currentBatch + 1;
    if (nextBatch >= maxBatches) return false;
    if (nextBatch * batchSize >= totalCount) return false;
    return true;
  }

  return (
    <SafeAreaView style={styles.container}>
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
              <ActivityIndicator size="large" color={Color.LightBlue} />
            </View>
          )
        }
        onEndReached={() => nextBatch()}
      ></VirtualizedList>
    </SafeAreaView>
  );
};

const dimensions = Dimensions.get('window');
const windowheight = Math.round(dimensions.height);
const bottomBarHeight = 100;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.Black,
  },
  list: {
    position: 'relative',
    paddingHorizontal: Spacing.ExtraLarge,
    paddingVertical: Spacing.Large,
  },
  spinnerContainer: {
    ...flexBoxStyles.columnCenter,
    marginBottom: bottomBarHeight / 3,
  },
  spinnerContainerCentered: {
    height: windowheight - bottomBarHeight,
    marginVertical: 0,
  },
});
