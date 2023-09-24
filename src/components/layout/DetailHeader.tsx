import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, Spacing, flexBoxStyles, typographyStyles } from '../../styles';

import { BackButton } from '../common';

interface Props {
  backLabel: string;
}

export const DeatailHeader = ({ backLabel }: Props) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>{backLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Black,
    paddingTop: Spacing.Medium,
    paddingBottom: Spacing.Large,
    paddingHorizontal: Spacing.Medium,
    borderBottomColor: Color.DarkAnthracite,
    borderBottomWidth: 1,
    ...flexBoxStyles.rowStart,
  },
  title: {
    ...typographyStyles.label,
  },
});
