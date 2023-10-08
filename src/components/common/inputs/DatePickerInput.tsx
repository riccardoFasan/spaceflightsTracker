import React from 'react';
import DatePicker from 'react-native-date-picker';
import { Color } from '../../../styles';

export const DatePickerInput = () => {
  const now: Date = new Date();

  return (
    <DatePicker
      date={now}
      onDateChange={() => {}}
      mode='date'
      theme='dark'
      fadeToColor={Color.DarkAnthracite}
      androidVariant='nativeAndroid'
    />
  );
};
