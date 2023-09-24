import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import {
  Color,
  FontWeight,
  Spacing,
  typographyStyles,
  flexBoxStyles,
} from '../../styles';
import { useEffect } from 'react';
import { useFocusAnimation } from '../../hooks';

interface Props {
  name: string;
  active: boolean;
}

export const TopTapBarButton = ({ name, active }: Props) => {
  const [[backgroundScale, backgroundOpacity], toogleAnimation] =
    useFocusAnimation(0, 0);

  useEffect(() => {
    toogleAnimation(active);
  }, [active, toogleAnimation]);

  return (
    <View style={flexBoxStyles.columnCenter}>
      <Text style={[styles.tab, active && styles.tabActive]}>{name}</Text>
      <Animated.View
        style={[
          styles.tabIndicator,
          {
            transform: [{ scaleX: backgroundScale }],
            opacity: backgroundOpacity,
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
