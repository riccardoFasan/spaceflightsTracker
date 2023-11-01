import React from 'react';
import { Color, flexBoxStyles } from '../../../styles';
import { StyleSheet, View } from 'react-native';
import { OptionWrapper } from './OptionWrapper';

interface Props {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const OptionRadio = ({ id, label, checked, onChange }: Props) => {
  return (
    <OptionWrapper key={id} label={label} checked={checked} onChange={onChange}>
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
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Color.DarkGray,
    ...flexBoxStyles.columnCenter,
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 50,
  },
  radioChecked: {
    borderColor: Color.LightBlue,
  },
  radioInnerChecked: {
    backgroundColor: Color.LightBlue,
  },
});
