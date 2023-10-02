import React, { ReactNode, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  VirtualizedList,
} from 'react-native';
import { uniqueBy } from '../../utilities';
import { showErrorMessage } from '../../services';
import { Color, flexBoxStyles } from '../../styles';
import { ListBatch } from '../../models/';
import { ApiController } from '../../models/apiControllerModel';

interface Props<T> {
  idKey: keyof T;
  batchSize: number;
  maxBatches: number;
  getBatch: (batch: number, batchSize: number) => ApiController<ListBatch<T>>;
  getCard: (item: T) => ReactNode;
}

export const ScrollableList = <T,>({
  idKey,
  batchSize,
  maxBatches,
  getBatch,
  getCard,
}: Props<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentBatch, setCurrentBatch] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const controller = getBatch(currentBatch, batchSize);

    async function loadBatch(): Promise<void> {
      try {
        setLoading(true);
        const { results, totalCount } = await controller.fetch();
        setItems((currentItems) =>
          uniqueBy(idKey, [...currentItems, ...results]),
        );
        setTotalCount(totalCount);
      } catch (e: unknown) {
        showErrorMessage('Error loading batch');
      } finally {
        if (refreshing) {
          setRefreshing(false);
        }
        setLoading(false);
      }
    }

    loadBatch();

    return () => controller.cancel();
  }, [currentBatch, getBatch, batchSize, idKey]);

  function loadNextBatch(): void {
    if (canLoadNextBatch()) {
      setCurrentBatch((batch: number) => batch + 1);
    }
  }

  function refresh(): void {
    const firstBatch: number = 1;
    setRefreshing(true);
    setCurrentBatch(firstBatch);
  }

  function canLoadNextBatch(): boolean {
    if (loading || refreshing) {
      return false;
    }
    const nextBatch: number = currentBatch + 1;
    if (nextBatch >= maxBatches) {
      return false;
    }
    if (nextBatch * batchSize >= totalCount) {
      return false;
    }
    return true;
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
            <ActivityIndicator size='large' color={Color.LightBlue} />
          </View>
        )
      }
      onEndReached={() => loadNextBatch()}
    />
  );
};

const dimensions = Dimensions.get('window');
const windowheight = Math.round(dimensions.height);
const bottomBarHeight = 100;
const topBarHeight = 150;

const styles = StyleSheet.create({
  list: {
    position: 'relative',
  },
  spinnerContainer: {
    ...flexBoxStyles.columnCenter,
    marginBottom: bottomBarHeight / 3,
  },
  spinnerContainerCentered: {
    height: windowheight - bottomBarHeight - topBarHeight,
    marginVertical: 0,
  },
});
