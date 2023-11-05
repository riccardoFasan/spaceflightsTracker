import React, { ReactNode, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Dimensions,
  VirtualizedList,
} from 'react-native';
import { uniqueBy } from '../../utilities';
import { showErrorMessage } from '../../services';
import { Color, flexBoxStyles } from '../../styles';
import { ListBatch } from '../../models';
import { ApiController } from '../../models/apiControllerModel';

interface Props<T> {
  idKey: keyof T;
  batchSize: number;
  getBatch: (
    batch: number,
    batchSize: number,
    filters?: object,
  ) => ApiController<ListBatch<T>>;
  getItemComponent: (item: T) => ReactNode;
  filters?: object;
}

export const SearchableList = <T,>({
  idKey,
  batchSize,
  getBatch,
  getItemComponent,
  filters,
}: Props<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setItems([]);

    if (!filters) {
      return;
    }

    const controller = getBatch(1, batchSize, filters);

    async function loadBatch(): Promise<void> {
      try {
        setLoading(true);
        const { results } = await controller.fetch();
        setItems(uniqueBy(idKey, results));
      } catch (e: unknown) {
        if ((e as any).name !== 'CanceledError') {
          showErrorMessage('Error loading batch');
        }
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    loadBatch();

    return () => controller?.cancel();
  }, [getBatch, batchSize, idKey, filters]);

  return (
    <VirtualizedList
      initialNumToRender={2}
      getItemCount={(_) => items.length}
      getItem={(data, i) => data[i]}
      data={items}
      renderItem={({ item }: { item: T }) => getItemComponent(item) as any}
      style={styles.list}
      ListFooterComponent={() => (
        <>
          {loading && (
            <View
              style={[
                styles.footerContainer,
                items.length === 0 && styles.footerContainerCentered,
              ]}
            >
              <ActivityIndicator size='large' color={Color.LightBlue} />
            </View>
          )}
          {!loading && !items.length && (
            <View
              style={[styles.footerContainer, styles.footerContainerCentered]}
            >
              <Text>No results found</Text>
            </View>
          )}
        </>
      )}
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
  footerContainer: {
    ...flexBoxStyles.columnCenter,
    marginVertical: bottomBarHeight / 3,
  },
  footerContainerCentered: {
    height: windowheight - bottomBarHeight - topBarHeight,
    marginVertical: 0,
  },
});
