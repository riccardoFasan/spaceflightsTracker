import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { BottomNavigationBar, UpcomingLaunchesList } from './components';
import { ArticlesList } from './components/features/news/ArticlesList';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <UpcomingLaunchesList /> */}
      <ArticlesList />
      <BottomNavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#0C0E10',
  },
});
