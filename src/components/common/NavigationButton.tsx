import { Animated, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../../lib';
import { useEffect, useRef } from 'react';
import { Color, FontSize, FontWeight, Spacing } from '../../styles';
import { flexBoxStyles } from '../../styles/flexBoxStyles';

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

  const focusAnimation: Animated.CompositeAnimation = generateAnimation(1);
  const unfocusAnimation: Animated.CompositeAnimation = generateAnimation(0);

  useEffect(() => {
    if (focused) {
      focusAnimation.start();
      return;
    }
    unfocusAnimation.start();
  }, [focused, focusAnimation]);

  function generateAnimation(value: number): Animated.CompositeAnimation {
    const config: Animated.TimingAnimationConfig = {
      toValue: value,
      duration: 200,
      useNativeDriver: true,
    };
    return Animated.parallel([
      Animated.timing(backgroundScale, config),
      Animated.timing(backgroundOpacity, config),
    ]);
  }

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
    color: Color.White,
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
