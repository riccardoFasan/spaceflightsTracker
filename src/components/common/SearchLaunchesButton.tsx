import React from 'react';
import { IconButton } from './IconButton';
import { useNavigation } from '@react-navigation/native';

export const SearchLaunchesButton = () => {
  const navigation = useNavigation<any>();

  function openModal(): void {
    navigation.navigate('Search Launches');
  }

  return <IconButton icon='magnify' onPress={openModal} />;
};
