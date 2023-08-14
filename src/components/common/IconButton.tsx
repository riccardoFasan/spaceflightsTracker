import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, Spacing } from '../../styles';
import { useActive } from '../../hooks';

interface Props {
  icon: string;
  onPress: () => void;
}

export const IconButton = ({ icon, onPress }: Props) => {
  const [active, toogleActive] = useActive(false);

  return (
    <Pressable
      style={[styles.button, active && styles.buttonActive]}
      onPress={onPress}
      onPressIn={toogleActive}
      onPressOut={toogleActive}
    >
      <Icon style={styles.icon} name={icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    padding: Spacing.Medium,
    backgroundColor: Color.Black,
  },
  buttonActive: {
    backgroundColor: Color.DarkAnthracite,
  },
  icon: {
    textAlign: 'center',
    fontSize: 28,
    color: Color.White,
    marginRight: Spacing.Small,
  },
});
