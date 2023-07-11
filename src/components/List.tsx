import React, { Suspense } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, fetchBatch, store } from '../store';
import { UpcomingLaunchCard } from './UpcomingLaunchCard';

export const List = () => {
  const items = useSelector((state: RootState) => state.upcomingLaunches.items);
    const loading = useSelector(
      (state: RootState) => state.upcomingLaunches.loading
    );
  store.dispatch(fetchBatch(1));

  return (
    <View style={styles.list}>
      {
loading && <ActivityIndicator size="large" color="#00A3FF" />
      }
      {!loading && items.map((item) => (
          <UpcomingLaunchCard key={item.id} launch={item} />
        ))}
      {/* <Suspense fallback={<ActivityIndicator size="large" color="#00A3FF" />}>
        {items.map((item) => (
          <UpcomingLaunchCard key={item.id} launch={item} />
        ))}
      </Suspense> */}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
});
