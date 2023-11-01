import React from 'react';
import { Color, FontSize, flexBoxStyles } from '../../../styles';
import { StyleSheet, View } from 'react-native';
import { OptionWrapper } from './OptionWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const OptionCheckbox = ({ id, label, checked, onChange }: Props) => {
  return (
    <OptionWrapper key={id} label={label} checked={checked} onChange={onChange}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Icon style={styles.icon} name='check-bold' />}
      </View>
    </OptionWrapper>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Color.DarkGray,
    ...flexBoxStyles.columnCenter,
  },
  checkboxChecked: {
    backgroundColor: Color.LightBlue,
    borderColor: Color.LightBlue,
  },
  icon: {
    textAlign: 'center',
    fontSize: FontSize.Medium,
    color: Color.White,
  },
});
