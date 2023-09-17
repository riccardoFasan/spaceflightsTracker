import React from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

export const SearchLaunchesModal = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Hello World</Text>
      <Button title='Close' onPress={() => navigation.goBack()} />
    </View>
  );
};
