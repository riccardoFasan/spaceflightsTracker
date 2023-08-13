import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LAUNCH_SCREENS } from '../../services';
import { TopTabBar } from '../layout';

const Tab = createMaterialTopTabNavigator();

export const UpcomingsPage = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
      {LAUNCH_SCREENS.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};
