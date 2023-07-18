import { View } from 'react-native';

export const LaunchPage = ({ navigation, route }: any) => {
  const lauchId: string = route.params.id;

  return <View>LaunchPage of {lauchId}</View>;
};
