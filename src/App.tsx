import React from 'react';
import { BottomNavigationBar, LaunchesList, Header } from './components';
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
        screenOptions={{
          header: (props) => <Header title={props.route.name} />,
        }}
        tabBar={(props) => <BottomNavigationBar {...props} />}
        initialRouteName="Upcomings"
      >
        <Screen
          options={{ title: 'Upcomings' }}
          name="Upcomings"
          component={LaunchesList}
        />
        <Screen
          options={{ title: 'News' }}
          name="News"
          component={ArticlesList}
        />
      </Navigator>
    </NavigationContainer>
  );
};
