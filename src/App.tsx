import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BottomNavigationBar,
  Header,
  LaunchPage,
  LaunchesPage,
  NewsPage,
  SearchLaunchesModal,
} from './components';
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
              route.name !== 'Launch' && <Header title={route.name} />,
          }}
          tabBar={({ state, descriptors, navigation, insets }) =>
            state.key !== 'Launch' && (
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
          <TabScreen
            options={{ title: 'Launches' }}
            name='Launches'
            component={LaunchesPage}
            key='Launches'
          />
          <TabScreen
            options={{ title: 'News' }}
            name='News'
            component={NewsPage}
            key='News'
          />
          <TabScreen
            options={{ title: 'Launch' }}
            name='Launch'
            component={LaunchPage}
            key='Launch'
          />

          <ModalsGroup screenOptions={{ presentation: 'modal' }}>
            <ModalScreen
              name='Search launches'
              component={SearchLaunchesModal}
              key='Search launches'
            />
          </ModalsGroup>
        </TabNavigator>
      </NavigationContainer>
    </NotificationProvider>
  );
};
