import React from 'react';
import { Color, flexBoxStyles } from '../../../styles';
import { StyleSheet, View } from 'react-native';
import { OptionWrapper } from './OptionWrapper';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const OptionRadio = ({ label, checked, onChange }: Props) => {
  return (
    <OptionWrapper label={label} checked={checked} onChange={onChange}>
      <View style={[styles.radio, checked && styles.radioChecked]}>
        <View
          style={[styles.radioInner, checked && styles.radioInnerChecked]}
        />
      </View>
    </OptionWrapper>
  );
};

const styles = StyleSheet.create({
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.DarkGray,
    ...flexBoxStyles.columnCenter,
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  radioChecked: {
    borderColor: Color.LightBlue,
  },
  radioInnerChecked: {
    backgroundColor: Color.LightBlue,
  },
});
