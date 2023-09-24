import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Color, Spacing, typographyStyles } from '../../styles';
import { flexBoxStyles } from '../../styles';
import { SearchLaunchesButton } from '../common';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

export const Header = ({ route, navigation }: BottomTabHeaderProps) => {
  const hasChildren: boolean = useMemo<boolean>(
    () => route.name === 'News',
    [route],
  );

  const hasSearchButton: boolean = useMemo<boolean>(
    () => route.name === 'Launches',
    [route],
  );

  useEffect(() => {
    navigation.addListener('state', (state) => {
      const title = state.data.state.routeNames[state.data.state.index];
      const color =
        title === 'Search Launches' ? Color.DarkAnthracite : Color.Black;
      StatusBar.setBackgroundColor(color);
    });
  }, [navigation]);

  return (
    route.name !== 'Launch' &&
    route.name !== 'Search Launches' && (
      <View
        style={[
          styles.container,
          !hasChildren && styles.hasChildren,
          hasSearchButton && styles.hasSearchButton,
        ]}
      >
        <Text style={styles.title}>{route.name}</Text>
        {hasSearchButton && <SearchLaunchesButton />}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Black,
    paddingTop: Spacing.Medium,
    paddingBottom: Spacing.ExtraLarge,
    paddingHorizontal: Spacing.ExtraLarge,
    ...flexBoxStyles.rowBetween,
  },
  hasChildren: {
    borderBottomColor: Color.DarkAnthracite,
    borderBottomWidth: 1,
  },
  hasSearchButton: {
    paddingLeft: Spacing.ExtraLarge,
    paddingRight: Spacing.Medium,
  },
  title: {
    ...typographyStyles.heading1,
  },
});
