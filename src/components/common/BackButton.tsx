import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from './IconButton';

interface Props {
  icon?: string;
}

export const BackButton = ({ icon }: Props) => {
  const navigation = useNavigation();

  function back(): void {
    navigation.goBack();
  }

  return <IconButton icon={icon || 'arrow-left'} onPress={back} />;
};
