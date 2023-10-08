import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Color, Spacing } from '../../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: ReactNode;
}

export const ListPage = ({ children }: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.Black,
    paddingHorizontal: Spacing.ExtraLarge,
    paddingTop: Spacing.Large,
  },
});
