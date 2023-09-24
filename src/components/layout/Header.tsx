import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, Spacing, typographyStyles } from '../../styles';
import { StatusBar } from 'react-native';
import { flexBoxStyles } from '../../styles';

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  const hasChildren: boolean = useMemo<boolean>(
    () => title === 'News',
    [title],
  );

  return (
    <>
      <StatusBar animated={true} backgroundColor={Color.Black} />
      <View style={[styles.container, !hasChildren && styles.hasChildren]}>
        <Text style={styles.title}>{title}</Text>
        {/* {action && action(null)} */}
      </View>
    </>
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
  title: {
    ...typographyStyles.heading1,
  },
});
