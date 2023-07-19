import { View, Text, StyleSheet } from 'react-native';
import { Color, Spacing } from '../../styles';
import {
  FontSize,
  FontWeight,
  typographyStyles,
} from '../../styles/typographyStyles';
interface Props {
  title: string;
  subtitle: string;
  text: string;
}

export const DetailSection = ({ title, subtitle, text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.ExtraExtraLarge,
  },
  title: {
    ...typographyStyles.heading2,
    marginBottom: Spacing.Small,
  },
  subtitle: {
    letterSpacing: 1,
    fontSize: FontSize.Small,
    fontWeight: FontWeight.Light,
    textTransform: 'uppercase',
    color: Color.DarkGray,
    marginBottom: Spacing.ExtraSmall,
  },
  text: {
    ...typographyStyles.paragraph,
  },
});
