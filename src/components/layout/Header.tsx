import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, Spacing, typographyStyles } from '../../styles';
import { StatusBar } from 'react-native';
import { flexBoxStyles } from '../../styles';

interface Props {
  title: string;
  hasChildren: boolean;
  action?: React.FC<any>;
}

export const Header = ({ title, hasChildren, action }: Props) => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={Color.Black} />
      <View style={[styles.container, !hasChildren && styles.hasChildren]}>
        <Text style={styles.title}>{title}</Text>
        {action()}
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
