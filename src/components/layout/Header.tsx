import { View, Text, StyleSheet } from 'react-native';
import { Color, Spacing, typographyStyles } from '../../styles';
import { StatusBar } from 'react-native';

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={Color.Black} />
      <View style={styles.container}>
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
    paddingHorizontal: Spacing.Large,
    borderBottomColor: Color.DarkAnthracite,
    borderBottomWidth: 1,
  },
  title: {
    ...typographyStyles.heading1,
  },
});
