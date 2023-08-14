import { StyleSheet, Text, Pressable } from 'react-native';
import { Color, Spacing, typographyStyles, FontWeight } from '../../styles';
import { useActive } from '../../hooks';

interface Props {
  title: string;
  onPress: () => void;
}

export const ButtonSecondary = ({ title, onPress }: Props) => {
  const [active, toogleActive] = useActive(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={toogleActive}
      onPressOut={toogleActive}
    >
      <Text style={[styles.button, active && styles.buttonActive]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...typographyStyles.paragraph,
    fontWeight: FontWeight.Bold,
    paddingVertical: Spacing.Medium,
    backgroundColor: 'transparent',
    borderRadius: Spacing.Large,
    borderWidth: 1,
    textAlign: 'center',
    color: Color.Blue,
    borderColor: Color.Blue,
  },
  buttonActive: {
    backgroundColor: Color.Blue,
    color: Color.White,
  },
});
