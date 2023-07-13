import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '../../lib';

interface Props {
  focused: boolean;
  name: string;
  icon: string;
}

export const NavigationButton = ({ focused, name, icon }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
        <Icon style={[styles.icon, focused && styles.iconActive]} name={icon} />
      </View>
      <Text style={[styles.text, focused && styles.textActive]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 65,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  iconWrapperActive: {
    backgroundColor: '#09334C',
  },
  icon: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 28,
    color: '#9C9D9F',
  },
  iconActive: {
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 8,
    color: '#9C9D9F',
  },
  textActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
