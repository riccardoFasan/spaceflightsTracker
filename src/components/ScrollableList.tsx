import { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  VirtualizedList,
} from 'react-native';
import {
  RootState,
  fetchFirstBatch,
  refreshFirstBatch,
  fetchNextBatch,
  store,
} from '../store';
import { UpcomingLaunchCard } from './UpcomingLaunchCard';
import { useSelector } from 'react-redux';
import { UpcomingLaunch } from '../models';

export const ScrollableList = () => {
  const items = useSelector((state: RootState) => state.upcomingLaunches.items);
  const loading = useSelector(
    (state: RootState) => state.upcomingLaunches.loading
  );
  const refreshing = useSelector(
    (state: RootState) => state.upcomingLaunches.refreshing
  );

  const refresh = () => store.dispatch(refreshFirstBatch());

  const nextBatch = () => store.dispatch(fetchNextBatch());

  useEffect(() => {
    store.dispatch(fetchFirstBatch());
  }, [store.dispatch]);

  return (
    <VirtualizedList
      initialNumToRender={2}
      getItemCount={(_) => items.length}
      getItem={(data, i) => data[i]}
      data={items}
      renderItem={({ item }: { item: UpcomingLaunch }) => (
        <UpcomingLaunchCard launch={item} />
      )}
      onRefresh={() => refresh()}
      refreshing={refreshing}
      style={styles.list}
      ListFooterComponent={() =>
        loading && (
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
