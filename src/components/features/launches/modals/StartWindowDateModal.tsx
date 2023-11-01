import React from 'react';
import { FieldModal } from '../../../common/modals';
import { DatePickerInput } from '../../../common';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { flexBoxStyles } from '../../../../styles';

interface Props {
  onChange: (company: Date) => void;
}

export const StartWindowDateModal = ({ onChange }: Props) => {
  return (
    <FieldModal title='start window'>
      <View style={styles.pickerWrapper}>
        <DatePickerInput onChange={onChange} />
      </View>
    </FieldModal>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    ...flexBoxStyles.rowCenter,
  },
});
