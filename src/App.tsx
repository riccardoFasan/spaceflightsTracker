import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { BottomNavigationBar, List } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <List></List>
        </ScrollView>
        <BottomNavigationBar />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#0C0E10',
  },
});
