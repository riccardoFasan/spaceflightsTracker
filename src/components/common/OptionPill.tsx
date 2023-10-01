import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, FontSize, Spacing, flexBoxStyles } from '../../styles';
import { useFocus } from '../../hooks';

interface Props {
  label: string;
  onPress: () => void;
}

export const OptionPill = ({ label, onPress }: Props) => {
  const [active, toogleActive] = useFocus(false);

  return (
    <Pressable
      onPressIn={toogleActive}
      onPressOut={toogleActive}
      onPress={onPress}
      style={[styles.button, active && styles.buttonActive]}
    >
      <Text style={styles.label}>{label}</Text>
      <Icon style={styles.icon} name='chevron-down' />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingRight: Spacing.Small,
    paddingLeft: Spacing.Medium,
    paddingVertical: Spacing.Small,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Color.LightAnthracite,
    borderRadius: Spacing.Medium,
    ...flexBoxStyles.rowCenter,
  },
  buttonActive: {
    backgroundColor: Color.LightAnthracite,
  },
  label: {
    fontSize: FontSize.Small,
    color: Color.White,
    marginRight: Spacing.Small,
  },
  icon: {
    fontSize: FontSize.Small,
    color: Color.White,
  },
});
