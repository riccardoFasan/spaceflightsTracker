import { Launch } from '../../models';
import { LaunchStatus } from '../../enums';
import { Countdown } from '.';
import { Text, View, StyleSheet } from 'react-native';
import { Color, Spacing, FontWeight, FontSize } from '../../styles';

export const LaunchStatusBadge = ({ launch }: { launch: Launch }) => {
  return launch.status === LaunchStatus.GoForLaunch && launch.window ? (
    <View style={[styles.badge, styles.badgeTimer]}>
      <Countdown
        date={launch.window.start}
        styles={[styles.badgeText, styles.badgeTextCountdown]}
      />
    </View>
  ) : (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>To Be Determined</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: Color.Anthracite + 80,
    padding: Spacing.Medium,
    borderRadius: Spacing.Medium,
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
  badgeTextCountdown: {
    fontSize: FontSize.Small,
    fontWeight: FontWeight.ExtraBold,
  },
  badgeTimer: {
    backgroundColor: Color.Red,
    paddingVertical: 6,
  },
});
