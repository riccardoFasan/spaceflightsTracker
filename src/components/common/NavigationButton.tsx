import { Animated, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../../lib';
import { useEffect, useRef } from 'react';

interface Props {
  focused: boolean;
  name: string;
  icon: string;
}

export const NavigationButton = ({ focused, name, icon }: Props) => {
  const backgroundScale = useRef<Animated.Value>(new Animated.Value(0)).current;
  const backgroundOpacity = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  const focusAnimation = Animated.parallel([
    Animated.timing(backgroundScale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }),
    Animated.timing(backgroundOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    if (focused) {
      focusAnimation.start();
      return;
    }
    focusAnimation.reset();
  }, [focused, focusAnimation]);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Animated.View
          style={[
            styles.iconBackground,
            { transform: [{ scaleX: backgroundScale }] },
            { opacity: backgroundOpacity },
          ]}
        ></Animated.View>
        <Icon style={[styles.icon, focused && styles.iconActive]} name={icon} />
      </View>
      <Text style={[styles.text, focused && styles.textActive]}>{name}</Text>
    </View>
  );
};

const indicatorWidth: number = 65;
const indicatorHeight: number = 40;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'relative',
    width: indicatorWidth,
    height: indicatorHeight,
  },
  iconBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: indicatorWidth,
    height: indicatorHeight,
    borderRadius: 25,
    backgroundColor: '#09334C',
  },
  icon: {
    lineHeight: indicatorHeight,
    textAlign: 'center',
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
    marginTop: 4,
    color: '#9C9D9F',
  },
  textActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
