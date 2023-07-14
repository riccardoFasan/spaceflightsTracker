import { Pressable, StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationButton } from './NavigationButton';
import { Color } from '../../styles';

export const BottomNavigationBar = ({
  state,
  navigation,
}: BottomTabBarProps) => {
  function isFocused(index: number): boolean {
    return state.index === index;
  }

  function navigateToUpcomings(): void {
    navigation.navigate('Upcomings');
  }

  function navigateToNews(): void {
    navigation.navigate('News');
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToUpcomings}>
        <NavigationButton
          focused={isFocused(0)}
          name="upcomings"
          icon="rocket-3-start"
        />
      </Pressable>
      <Pressable onPress={navigateToNews}>
        <NavigationButton
          focused={isFocused(1)}
          name="news"
          icon="globe-earth"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    paddingBottom: 22,
    backgroundColor: Color.DarkAnthracite,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
