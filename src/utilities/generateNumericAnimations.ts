import { Animated } from "react-native";

export function generateNumericAnimations(
  ...animatedValues: Animated.Value[]
): [Animated.CompositeAnimation, Animated.CompositeAnimation] {
  return [
    generateAnimation(animatedValues, 1),
    generateAnimation(animatedValues, 0),
  ];
}

function generateAnimation(
  animatedValues: Animated.Value[],
  value: number
): Animated.CompositeAnimation {
  const config: Animated.TimingAnimationConfig = {
    toValue: value,
    duration: 200,
    useNativeDriver: true,
  };
  return Animated.parallel(
    animatedValues.map((animatedValue) =>
      Animated.timing(animatedValue, config)
    )
  );
}
