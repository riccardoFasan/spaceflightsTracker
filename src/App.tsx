import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigationBar, Header } from './components';
import {
  shouldShowNavigation,
  getRouteAction,
  TAB_SCREENS,
  hasChildren,
  MODAL_SCREENS,
} from './services';
import { NotificationProvider } from './contexts';

const TabStack = createBottomTabNavigator();
const { Navigator: TabNavigator, Screen: TabScreen } = TabStack;

const ModalsStack = createNativeStackNavigator();
const { Group: ModalsGroup, Screen: ModalScreen } = ModalsStack;

export const App = () => {
  return (
    <NotificationProvider>
      <NavigationContainer>
        <TabNavigator
          screenOptions={{
            header: ({ route }) =>
              shouldShowNavigation(route.name) && (
                <Header
                  title={route.name}
                  hasChildren={hasChildren(route.name)}
                  action={getRouteAction(route.name)}
                />
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
          {TAB_SCREENS.map((screen) => (
            <TabScreen
              options={{ title: screen.name }}
              name={screen.name}
              component={screen.component}
              key={screen.name}
            />
          ))}
          <ModalsGroup screenOptions={{ presentation: 'modal' }}>
            {MODAL_SCREENS.map((screen) => (
              <ModalScreen
                name={screen.name}
                component={screen.component}
                key={screen.name}
              />
            ))}
          </ModalsGroup>
        </TabNavigator>
      </NavigationContainer>
    </NotificationProvider>
  );
};
