import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, Spacing, flexBoxStyles } from '../../../styles';
import { useFocus } from '../../../hooks';

interface Props {
  icon: string;
  onPress: () => void;
}

export const IconButton = ({ icon, onPress }: Props) => {
  const [active, toogleActive] = useFocus(false);

  return (
    <Pressable
      style={[styles.button, active && styles.buttonActive]}
      onPress={onPress}
      onPressIn={toogleActive}
      onPressOut={toogleActive}
    >
      <Icon style={styles.icon} name={icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    padding: Spacing.Medium,
    backgroundColor: 'transparent',
    ...flexBoxStyles.rowCenter,
  },
  buttonActive: {
    backgroundColor: Color.WhiteTransparent,
  },
  icon: {
    textAlign: 'center',
    fontSize: 28,
    color: Color.White,
  },
});
