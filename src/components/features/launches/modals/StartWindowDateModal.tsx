import React from 'react';
import { FieldModal } from '../../../common/modals';
import { DatePickerInput } from '../../../common';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { flexBoxStyles } from '../../../../styles';

export const StartWindowDateModal = () => {
  return (
    <FieldModal title='start window'>
      <View style={styles.pickerWrapper}>
        <DatePickerInput />
      </View>
    </FieldModal>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    ...flexBoxStyles.rowCenter,
  },
});
