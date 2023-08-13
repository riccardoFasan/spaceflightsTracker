import { StyleSheet, Text, View } from 'react-native';
import { Color, FontSize, FontWeight, Spacing } from '../../styles';

interface Props {
  text: string;
}

export const CardBadge = ({ text }: Props) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: Color.Anthracite + 80,
    padding: Spacing.Medium,
    borderRadius: Spacing.Medium,
    top: Spacing.Large,
    left: Spacing.Large,
  },
  badgeText: {
    color: Color.White,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 0.25,
    fontWeight: FontWeight.Bold,
    fontSize: FontSize.ExtraSmall,
  },
});
