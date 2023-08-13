import { Launch } from '../../models';
import { LaunchStatus } from '../../enums';
import { CardBadge, Countdown } from '.';
import { View, StyleSheet } from 'react-native';
import { Color, Spacing, FontWeight, FontSize } from '../../styles';

export const LaunchStatusBadge = ({ launch }: { launch: Launch }) => {
  return launch.status === LaunchStatus.GoForLaunch && launch.window ? (
    <View style={styles.badge}>
      <Countdown date={launch.window.start} styles={styles.badgeText} />
    </View>
  ) : (
    <CardBadge text="To Be Determined" />
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: Color.Red,
    padding: Spacing.Medium,
    borderRadius: Spacing.Medium,
    top: Spacing.Large,
    left: Spacing.Large,
    paddingVertical: 6,
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
