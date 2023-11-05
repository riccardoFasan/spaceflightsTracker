import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from './IconButton';

interface Props {
  icon?: string;
  callback?: () => void;
}

export const BackButton = ({ icon, callback }: Props) => {
  const navigation = useNavigation();

  function back(): void {
    navigation.goBack();
    if (callback) {
      callback();
    }
  }

  return <IconButton icon={icon || 'arrow-left'} onPress={back} />;
};
