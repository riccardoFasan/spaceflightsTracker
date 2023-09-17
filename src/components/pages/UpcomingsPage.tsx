import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LAUNCH_SCREENS } from '../../services';
import { TopTabBar } from '../layout';

const Tab = createMaterialTopTabNavigator();
const { Navigator } = Tab;
const { Screen } = Tab;

export const UpcomingsPage = () => {
  return (
    <Navigator initialRouteName="Launches" tabBar={(props) => <TopTabBar {...props} />}>
      {LAUNCH_SCREENS.map((screen) => (
        <Screen key={screen.name} name={screen.name} component={screen.component} />
      ))}
    </Navigator>
  );
};
