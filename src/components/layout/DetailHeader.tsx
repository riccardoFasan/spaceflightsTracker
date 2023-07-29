import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Color, Spacing, flexBoxStyles, typographyStyles } from '../../styles';
import { StatusBar } from 'react-native';
import { Icon } from '../../lib';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

export const DeatailHeader = ({ title }: Props) => {
  const navigation = useNavigation();

  function back(): void {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar animated={true} backgroundColor={Color.Black} />
      <View style={styles.container}>
        <TouchableHighlight onPress={back}>
          <Icon style={styles.icon} name="chevron-left" />
        </TouchableHighlight>
        <Text style={styles.title}>{title}</Text>
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
  icon: {
    textAlign: 'center',
    fontSize: 28,
    color: Color.White,
    marginRight: Spacing.Small,
  },
  title: {
    ...typographyStyles.label,
  },
});
