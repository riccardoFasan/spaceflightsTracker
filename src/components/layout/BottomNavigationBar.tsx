import { Pressable, StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigationButton } from '.';
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
        <BottomNavigationButton
          focused={isActive('Upcomings')}
          name="upcomings"
          icon="rocket-launch-outline"
          iconActive="rocket-launch"
        />
      </Pressable>
      <Pressable onPress={() => navigate('News')}>
        <BottomNavigationButton
          focused={isActive('News')}
          name="news"
          icon="newspaper-variant-multiple-outline"
          iconActive="newspaper-variant-multiple"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flexBoxStyles.rowAround,
    paddingVertical: Spacing.Large,
    backgroundColor: Color.DarkAnthracite,
  },
});
