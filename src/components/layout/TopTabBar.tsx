import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import {
  Color,
  FontWeight,
  Spacing,
  flexBoxStyles,
  typographyStyles,
} from '../../styles';

export const TopTabBar = ({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) => {
  function isActive(routeName: string): boolean {
    return state.routes[state.index].name === routeName;
  }

  function navigate(routeName: string): void {
    console.log(routeName, isActive(routeName));
    if (isActive(routeName)) return;
    navigation.navigate(routeName);
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route) => (
        <Pressable onPress={() => navigate(route.name)} key={route.name}>
          <View style={flexBoxStyles.columnCenter}>
            <Text
              style={[styles.tab, isActive(route.name) && styles.tabActive]}
              key={route.name}
            >
              {route.name}
            </Text>
            {isActive(route.name) && <View style={styles.tabActiveIndicator} />}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Black,
    paddingHorizontal: Spacing.Large,
    borderBottomColor: Color.DarkAnthracite,
    borderBottomWidth: 1,
    ...flexBoxStyles.rowAround,
  },
  tab: {
    ...typographyStyles.paragraph,
    color: Color.Gray,
    textTransform: 'lowercase',
    paddingBottom: Spacing.Medium,
  },
  tabActive: {
    fontWeight: FontWeight.Bold,
    color: Color.White,
  },
  tabActiveIndicator: {
    backgroundColor: Color.White,
    height: Spacing.Small,
    width: Spacing.ExtraExtraLarge,
    borderTopStartRadius: Spacing.ExtraSmall,
    borderTopEndRadius: Spacing.ExtraSmall,
  },
});
