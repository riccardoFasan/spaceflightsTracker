import React from 'react';
import { BottomNavigationBar, LaunchesList } from './components';
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
          component={LaunchesList}
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
