import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigationBar, Header } from './components';
import { ROOT_SCREENS, shouldShowNavigation, hasChildren } from './services';
import { NotificationProvider } from './contexts';

const Stack = createBottomTabNavigator();
const { Navigator } = Stack;
const { Screen } = Stack;

export const App = () => {
  return (
    <NotificationProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            header: ({ route }) =>
              shouldShowNavigation(route.name) && (
                <Header title={route.name} hasChildren={hasChildren(route.name)} />
              ),
          }}
          tabBar={({ state, descriptors, navigation, insets }) =>
            shouldShowNavigation(state.index) && (
              <BottomNavigationBar
                state={state}
                descriptors={descriptors}
                navigation={navigation}
                insets={insets}
              />
            )
          }
          initialRouteName='Launches'
        >
          {ROOT_SCREENS.map((screen) => (
            <Screen
              options={{ title: screen.name }}
              name={screen.name}
              component={screen.component}
              key={screen.name}
            />
          ))}
        </Navigator>
      </NavigationContainer>
    </NotificationProvider>
  );
};
