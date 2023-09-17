import { useRef } from 'react';
import { Animated } from 'react-native';

export function useFocusAnimation(
  ...values: (0 | 1)[]
): [Animated.Value[], (active: boolean) => void] {
  const refs = values.map(() => useRef<Animated.Value>(new Animated.Value(0)).current);

  const focusAnimation = generateAnimation(refs, 1);
  const blurAnimation = generateAnimation(refs, 0);

  const toggleAnimation = (active: boolean) => {
    const animation = active ? focusAnimation : blurAnimation;
    animation.start();
  };

  return [refs, toggleAnimation];
}

function generateAnimation(
  animatedValues: Animated.Value[],
  value: number,
): Animated.CompositeAnimation {
  const config: Animated.TimingAnimationConfig = {
    toValue: value,
    duration: 200,
    useNativeDriver: true,
  };
  return Animated.parallel(
    animatedValues.map((animatedValue) => Animated.timing(animatedValue, config)),
  );
}
