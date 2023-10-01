import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Color, Spacing, typographyStyles, FontWeight } from '../../../styles';
import { useFocus } from '../../../hooks';

interface Props {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({ title, onPress }: Props) => {
  const [focus, toogleFocus] = useFocus(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={toogleFocus}
      onPressOut={toogleFocus}
    >
      <Text style={[styles.button, focus && styles.buttonFocus]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...typographyStyles.paragraph,
    fontWeight: FontWeight.Bold,
    paddingVertical: Spacing.Medium,
    backgroundColor: 'transparent',
    borderRadius: Spacing.Large,
    borderWidth: 1,
    textAlign: 'center',
    color: Color.Blue,
    borderColor: Color.Blue,
  },
  buttonFocus: {
    backgroundColor: Color.Blue,
    color: Color.White,
  },
});
