import React from 'react';
import { BottomNavigationBar, UpcomingLaunchesList } from './components';
import { ArticlesList } from './components/features/news/ArticlesList';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBar={(props) => <BottomNavigationBar {...props} />}
        initialRouteName="Upcomings"
      >
        <Screen
          options={{ headerShown: false }}
          name="Upcomings"
          component={UpcomingLaunchesList}
        />
        <Screen
          options={{ headerShown: false }}
          name="News"
          component={ArticlesList}
        />
      </Navigator>
    </NavigationContainer>
  );
};
