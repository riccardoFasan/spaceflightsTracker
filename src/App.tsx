import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {BottomNavigationBar} from './components/BottomNavigationBar';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../assets/majesty-icons-config.json';

export const App = () => {
  const Icon = createIconSetFromFontello(fontelloConfig);
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#0C0E10',
      }}>
      <ScrollView>
        <Icon name="rocket-3-start" size={30} color="#900" />
        <Text>Hello world</Text>
      </ScrollView>
      <BottomNavigationBar />
    </SafeAreaView>
  );
};
