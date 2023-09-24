import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ArticlesList, BlogsList, ReportsList } from '../../components';
import { TopTabBar } from '../layout';

const Tab = createMaterialTopTabNavigator();
const { Navigator } = Tab;
const { Screen } = Tab;

export const NewsPage = () => {
  return (
    <Navigator
      initialRouteName='Articles'
      tabBar={(props) => <TopTabBar {...props} />}
    >
      <Screen name='Articles' component={ArticlesList} key='Articles' />
      <Screen name='Blogs' component={BlogsList} key='Blogs' />
      <Screen name='ISS reports' component={ReportsList} key='ISS reports' />
    </Navigator>
  );
};
