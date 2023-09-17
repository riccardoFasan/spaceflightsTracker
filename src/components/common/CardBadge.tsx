import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color, FontSize, FontWeight, Spacing } from '../../styles';

interface Props {
  text: string;
  inline: boolean;
}

export const CardBadge = ({ text, inline }: Props) => {
  return (
    <View style={[styles.badge, inline ? styles.overImageBadge : styles.inlineBadge]}>
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Color.Anthracite + 80,
    padding: Spacing.Medium,
  },
  inlineBadge: {
    borderTopEndRadius: Spacing.Medium,
    borderTopStartRadius: Spacing.Medium,
  },
  overImageBadge: {
    borderRadius: Spacing.Medium,
    position: 'absolute',
    top: Spacing.Large,
    left: Spacing.Large,
  },
  badgeText: {
    color: Color.White,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 0.25,
    fontWeight: FontWeight.Bold,
    fontSize: FontSize.ExtraSmall,
  },
});
