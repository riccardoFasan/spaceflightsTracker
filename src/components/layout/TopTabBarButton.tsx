import { Animated, StyleSheet, Text, View } from 'react-native';
import {
  Color,
  FontWeight,
  Spacing,
  typographyStyles,
  flexBoxStyles,
} from '../../styles';
import { useEffect, useRef } from 'react';
import { generateNumericAnimations } from '../../utilities';

interface Props {
  name: string;
  active: boolean;
}

export const TopTapBarButton = ({ name, active }: Props) => {
  const backgroundScale = useRef<Animated.Value>(new Animated.Value(0)).current;
  const backgroundOpacity = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  const [focusAnimation, unfocusAnimation]: [
    Animated.CompositeAnimation,
    Animated.CompositeAnimation
  ] = generateNumericAnimations(backgroundScale, backgroundOpacity);

  useEffect(() => {
    const animation = active ? focusAnimation : unfocusAnimation;
    animation.start();
  }, [active]);

  return (
    <View style={flexBoxStyles.columnCenter}>
      <Text style={[styles.tab, active && styles.tabActive]}>{name}</Text>
      <Animated.View
        style={[
          styles.tabIndicator,
          {
            opacity: backgroundOpacity,
            transform: [{ scaleX: backgroundScale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    ...typographyStyles.paragraph,
    color: Color.Gray,
    textTransform: 'lowercase',
    paddingBottom: Spacing.Medium,
  },
  tabActive: {
    fontWeight: FontWeight.Bold,
    color: Color.White,
  },
  tabIndicator: {
    backgroundColor: Color.White,
    height: Spacing.Small,
    width: Spacing.ExtraExtraLarge,
    borderTopStartRadius: Spacing.ExtraSmall,
    borderTopEndRadius: Spacing.ExtraSmall,
  },
});
