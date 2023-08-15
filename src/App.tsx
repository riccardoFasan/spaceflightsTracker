import React from 'react';
import { BottomNavigationBar, Header } from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROOT_SCREENS, shouldShowNavigation } from './services';
import { NotificationProvider } from './contexts';

const Stack = createBottomTabNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

export const App = () => {
  return (
    <NotificationProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            header: (props) =>
              shouldShowNavigation(props.route.name) && (
                <Header title={props.route.name} />
              ),
          }}
          tabBar={(props) =>
            shouldShowNavigation(props.state.index) && (
              <BottomNavigationBar {...props} />
            )
          }
          initialRouteName="Upcomings"
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
