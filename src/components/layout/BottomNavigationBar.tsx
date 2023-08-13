import { Pressable, StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationButton } from './NavigationButton';
import { Color, Spacing, flexBoxStyles } from '../../styles';

export const BottomNavigationBar = ({
  state,
  navigation,
}: BottomTabBarProps) => {
  function isActive(routeName: string): boolean {
    return state.routes[state.index].name === routeName;
  }

  function navigate(routeName: string): void {
    if (isActive(routeName)) return;
    navigation.navigate(routeName);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate('Upcomings')}>
        <NavigationButton
          focused={isActive('Upcomings')}
          name="upcomings"
          icon="rocket-3-start"
        />
      </Pressable>
      <Pressable onPress={() => navigate('News')}>
        <NavigationButton
          focused={isActive('News')}
          name="news"
          icon="globe-earth"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.Large,
    backgroundColor: Color.DarkAnthracite,
    ...flexBoxStyles.rowAround,
  },
});
