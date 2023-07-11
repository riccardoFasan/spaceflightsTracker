import { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { RootState, fetchBatch, refreshBatch, store } from '../store';
import { UpcomingLaunchCard } from './UpcomingLaunchCard';
import { useSelector } from 'react-redux';

export const ScrollableList = () => {
  const items = useSelector((state: RootState) => state.upcomingLaunches.items);
  const loading = useSelector(
    (state: RootState) => state.upcomingLaunches.loading
  );
  const refreshing = useSelector(
    (state: RootState) => state.upcomingLaunches.refreshing
  );

  const refresh = () => store.dispatch(refreshBatch());

  useEffect(() => {
    store.dispatch(fetchBatch(1));
  }, [store.dispatch]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => refresh()} />
      }
      style={styles.list}
    >
      {!loading &&
        items.map((item) => <UpcomingLaunchCard key={item.id} launch={item} />)}
      {loading && <ActivityIndicator size="large" color="#00A3FF" />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
});
