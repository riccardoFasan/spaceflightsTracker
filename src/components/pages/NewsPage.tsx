import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NEWS_SCREENS } from '../../services';
import { TopTabBar } from '../layout';

const Tab = createMaterialTopTabNavigator();
const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

export const NewsPage = () => {
  return (
    <Navigator
      initialRouteName="Articles"
      tabBar={(props) => <TopTabBar {...props} />}
    >
      {NEWS_SCREENS.map((screen) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Navigator>
  );
};
