import { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Color, Spacing, typographyStyles } from '../../styles';
import { FontWeight } from '../../styles/typographyStyles';

interface Props {
  title: string;
  onPress: () => void;
}

export const ButtonSecondary = ({ title, onPress }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  function onPressIn(): void {
    setActive(true);
  }

  function onPressOut(): void {
    setActive(false);
  }

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Text style={[styles.button, active && styles.buttonActive]}>
        {title}
      </Text>
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
  buttonActive: {
    backgroundColor: Color.Blue,
    color: Color.White,
  },
});
