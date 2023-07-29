import React from 'react';
import { BottomNavigationBar, Header } from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS, shouldShowNavigation } from './services';

const Stack = createBottomTabNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

export const App = () => {
  return (
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
        {SCREENS.map((screen) => (
          <Screen
            options={{ title: screen.name }}
            name={screen.name}
            component={screen.component}
            key={screen.name}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};
