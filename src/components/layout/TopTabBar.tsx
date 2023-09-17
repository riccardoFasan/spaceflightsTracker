import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { StyleSheet, Pressable, View } from 'react-native';
import { Color, Spacing, flexBoxStyles } from '../../styles';
import { TopTapBarButton } from '.';

export const TopTabBar = ({ state, descriptors, navigation, position }: MaterialTopTabBarProps) => {
  function isActive(routeName: string): boolean {
    return state.routes[state.index].name === routeName;
  }

  function navigate(routeName: string): void {
    if (isActive(routeName)) {
      return;
    }
    navigation.navigate(routeName);
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route) => (
        <Pressable onPress={() => navigate(route.name)} key={route.name}>
          <TopTapBarButton name={route.name} active={isActive(route.name)} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flexBoxStyles.rowAround,
    backgroundColor: Color.Black,
    paddingHorizontal: Spacing.Large,
    borderBottomColor: Color.DarkAnthracite,
    borderBottomWidth: 1,
  },
});
