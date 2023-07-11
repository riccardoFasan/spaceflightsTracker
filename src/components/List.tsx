import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, fetchBatch, store } from '../store';
import { UpcomingLaunchCard } from './UpcomingLaunchCard';

export const List = () => {
  const items = useSelector((state: RootState) => state.upcomingLaunches.items);
  //   const loading = useSelector(
  //     (state: RootState) => state.upcomingLaunches.loading
  //   );
  store.dispatch(fetchBatch(1));

  return (
    <View style={styles.list}>
      {items.map((item) => (
        <UpcomingLaunchCard launch={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
});
