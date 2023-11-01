import React from 'react';
import DatePicker from 'react-native-date-picker';
import { Color } from '../../../styles';

interface Props {
  onChange: (date: Date) => void;
}

export const DatePickerInput = ({ onChange }: Props) => {
  const now: Date = new Date();

  return (
    <DatePicker
      date={now}
      onDateChange={onChange}
      mode='date'
      theme='dark'
      fadeToColor={Color.DarkAnthracite}
      androidVariant='nativeAndroid'
    />
  );
};
