import { View, Text, StyleSheet } from 'react-native';
import { Color, Spacing, flexBoxStyles, typographyStyles } from '../../styles';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '../common';

interface Props {
  backLabel: string;
}

export const DeatailHeader = ({ backLabel }: Props) => {
  const navigation = useNavigation();

  function back(): void {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar animated={true} backgroundColor={Color.Black} />
      <View style={styles.container}>
        <IconButton icon="arrow-left" onPress={back} />
        <Text style={styles.title}>{backLabel}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Black,
    paddingTop: Spacing.Medium,
    paddingBottom: Spacing.Large,
    paddingHorizontal: Spacing.Medium,
    borderBottomColor: Color.DarkAnthracite,
    borderBottomWidth: 1,
    ...flexBoxStyles.rowStartCenter,
  },
  title: {
    ...typographyStyles.label,
  },
});
