import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const BottomNavigationBar = () => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: '#181A1E',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="rocket"></Icon>
        <Text>upcomings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>news</Text>
      </TouchableOpacity>
    </View>
  );
};
