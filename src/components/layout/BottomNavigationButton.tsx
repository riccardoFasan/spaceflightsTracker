import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { Color, FontSize, FontWeight, Spacing, flexBoxStyles } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusAnimation } from '../../hooks';

interface Props {
  focused: boolean;
  name: string;
  icon: string;
  iconActive: string;
}

export const BottomNavigationButton = ({ focused, name, icon, iconActive }: Props) => {
  const [[backgroundScale, backgroundOpacity], toogleAnimation] = useFocusAnimation(0, 0);

  useEffect(() => {
    toogleAnimation(focused);
  }, [focused, toogleAnimation]);

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
        />
        <Icon
          style={[styles.icon, focused && styles.iconActive]}
          name={focused ? iconActive : icon}
        />
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
