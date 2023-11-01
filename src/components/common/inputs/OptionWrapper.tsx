import React, { ReactNode } from 'react';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  flexBoxStyles,
} from '../../../styles';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useFocus } from '../../../hooks';

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}

export const OptionWrapper = ({
  label,
  checked,
  onChange,
  children,
}: Props) => {
  const [focus, toogleFocus] = useFocus(false);

  function toggle(): void {
    onChange(!checked);
  }

  return (
    <Pressable
      onPress={toggle}
      onPressIn={toogleFocus}
      onPressOut={toogleFocus}
      style={[styles.input, focus && styles.inputFocus]}
    >
      <Text style={styles.label}>{label}</Text>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: Spacing.Large,
    paddingHorizontal: Spacing.ExtraLarge,
    borderRadius: Spacing.Large,
    ...flexBoxStyles.rowBetween,
  },
  inputFocus: {
    backgroundColor: Color.Anthracite,
  },
  label: {
    color: Color.White,
    fontSize: FontSize.Medium,
    fontWeight: FontWeight.Regular,
    maxWidth: '90%',
    lineHeight: Spacing.ExtraLarge,
  },
});
