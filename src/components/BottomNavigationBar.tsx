import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../lib';

export const BottomNavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View
          style={[styles.buttonIconWrapper, styles.buttonIconWrapperActive]}
        >
          <Icon
            style={[styles.buttonIcon, styles.buttonIconActive]}
            name="rocket-3-start"
          />
        </View>
        <Text style={[styles.buttonText, styles.buttonTextActive]}>
          upcomings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonIconWrapper}>
          <Icon style={styles.buttonIcon} name="globe-earth" />
        </View>
        <Text style={styles.buttonText}>news</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    paddingBottom: 22,
    backgroundColor: '#181A1E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconWrapper: {
    width: 65,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  buttonIconWrapperActive: {
    backgroundColor: '#212429',
  },
  buttonIcon: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 28,
    color: '#C5C6C7',
  },
  buttonIconActive: {
    color: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 8,
    color: '#C5C6C7',
  },
  buttonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
