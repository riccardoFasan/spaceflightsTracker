import React, { ReactNode } from 'react';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  flexBoxStyles,
} from '../../../styles';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
}

export const OptionWrapper = ({
  label,
  checked,
  onChange,
  children,
}: Props) => {
  function toggle(): void {
    onChange(!checked);
  }

  return (
    <Pressable onPress={toggle} style={styles.input}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: Spacing.Large,
    paddingHorizontal: Spacing.ExtraLarge,
    ...flexBoxStyles.rowBetween,
  },
  label: {
    color: Color.White,
    fontSize: FontSize.Medium,
    fontWeight: FontWeight.Regular,
    maxWidth: '90%',
    lineHeight: Spacing.ExtraLarge,
  },
});
