import { Animated, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../../lib';
import { useEffect, useRef } from 'react';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  flexBoxStyles,
} from '../../styles';
import { generateNumericAnimations } from '../../utilities';

interface Props {
  focused: boolean;
  name: string;
  icon: string;
}

export const BottomNavigationButton = ({ focused, name, icon }: Props) => {
  const backgroundScale = useRef<Animated.Value>(new Animated.Value(0)).current;
  const backgroundOpacity = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  const [focusAnimation, unfocusAnimation]: [
    Animated.CompositeAnimation,
    Animated.CompositeAnimation
  ] = generateNumericAnimations(backgroundScale, backgroundOpacity);

  useEffect(() => {
    const animation = focused ? focusAnimation : unfocusAnimation;
    animation.start();
  }, [focused]);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Animated.View
          style={[
            styles.iconBackground,
            {
              transform: [{ scaleX: backgroundScale }],
              opacity: backgroundOpacity,
            },
          ]}
        ></Animated.View>
        <Icon style={[styles.icon, focused && styles.iconActive]} name={icon} />
      </View>
      <Text style={[styles.text, focused && styles.textActive]}>{name}</Text>
    </View>
  );
};

const indicatorWidth: number = 65;
const indicatorHeight: number = 34;

const styles = StyleSheet.create({
  container: flexBoxStyles.columnCenter,
  iconWrapper: {
    position: 'relative',
    width: indicatorWidth,
    height: indicatorHeight,
  },
  iconBackground: {
    position: 'absolute',
    width: indicatorWidth,
    height: indicatorHeight,
    borderRadius: Spacing.ExtraLarge,
    backgroundColor: Color.DarkBlue,
  },
  icon: {
    lineHeight: indicatorHeight,
    textAlign: 'center',
    fontSize: 28,
    color: Color.DarkGray,
  },
  iconActive: {
    color: Color.AccentBlue,
  },
  text: {
    textAlign: 'center',
    fontSize: FontSize.ExtraSmall,
    marginTop: Spacing.ExtraSmall,
    marginBottom: Spacing.Small,
    color: Color.DarkGray,
  },
  textActive: {
    color: Color.White,
    fontWeight: FontWeight.SemiBold,
  },
});
