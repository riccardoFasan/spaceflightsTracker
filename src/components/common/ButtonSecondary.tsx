import { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

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
    backgroundColor: 'transparent',
    paddingVertical: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#0681C7',
    textAlign: 'center',
    color: '#0681C7',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonActive: {
    backgroundColor: '#0681C7',
    color: '#fff',
  },
});
