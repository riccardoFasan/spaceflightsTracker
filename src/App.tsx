import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {BottomNavigationBar} from './components/BottomNavigationBar';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Hello world</Text>
      </ScrollView>
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
