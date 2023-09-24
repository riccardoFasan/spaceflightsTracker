import { useRef } from 'react';
import { Animated } from 'react-native';

export function useFocusAnimation(
  ...values: (0 | 1)[]
): [Animated.Value[], (active: boolean) => void] {
  const ref = useRef<Animated.Value[]>([]);

  values.forEach((_, i) => (ref.current[i] = new Animated.Value(0)));

  const focusAnimation = generateAnimation(ref.current, 1);
  const blurAnimation = generateAnimation(ref.current, 0);

  const toggleAnimation = (active: boolean) => {
    const animation = active ? focusAnimation : blurAnimation;
    animation.start();
  };

  return [ref.current, toggleAnimation];
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
    animatedValues.map((animatedValue) =>
      Animated.timing(animatedValue, config),
    ),
  );
}
