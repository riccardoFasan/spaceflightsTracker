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
    <OptionWrapper key={id} label={label} onChange={onChange}>
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
  radioChecked: {
    borderColor: Color.LightBlue,
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    // It ignores the border radius if the background color is not set. IDK why.
    backgroundColor: 'transparent',
  },
  radioInnerChecked: {
    backgroundColor: Color.LightBlue,
  },
});
