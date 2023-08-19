import { Launch } from '../../models';
import { LaunchStatus } from '../../enums';
import { CardBadge, Countdown } from '.';
import { View, StyleSheet } from 'react-native';
import { Color, Spacing, FontWeight, FontSize } from '../../styles';
import { useMemo } from 'react';

export const LaunchStatusBadge = ({ launch }: { launch: Launch }) => {
  const inlineBadge: boolean = useMemo(() => !!launch.image, [launch]);

  return launch.status === LaunchStatus.GoForLaunch && launch.window ? (
    <View
      style={[
        styles.badge,
        inlineBadge ? styles.overImageBadge : styles.inlineBadge,
      ]}
    >
      <Countdown date={launch.window.start} styles={styles.badgeText} />
    </View>
  ) : (
    <CardBadge inline={inlineBadge} text="To Be Determined" />
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Color.Red,
    padding: Spacing.Medium,
    paddingVertical: 6,
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
    fontSize: FontSize.Small,
    fontWeight: FontWeight.ExtraBold,
  },
});
