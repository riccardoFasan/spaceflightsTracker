import { UpcomingLaunch } from '../../../models';
import { UpcomingLaunchStatus } from '../../../enums';
import { StyleSheet, Text, View } from 'react-native';
import { formatDateTime } from '../../../utilities';
import { Color, Spacing } from '../../../styles';
import { Countdown, ListCard } from '../../common';
import {
  FontSize,
  FontWeight,
  typographyStyles,
} from '../../../styles/typographyStyles';

interface Props {
  launch: UpcomingLaunch;
}

export const UpcomingLaunchCard = ({ launch }: Props) => {
  return (
    <ListCard
      content={{
        id: launch.id,
        title: launch.name,
        image: launch.image,
        imageRatio: 2.75,
      }}
      badge={
        launch.status === UpcomingLaunchStatus.GoForLaunch && launch.window ? (
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
        )
      }
    >
      {launch.window && (
        <Text style={styles.cardText}>
          {formatDateTime(launch.window.start)}
        </Text>
      )}
      {launch.pad?.location && (
        <Text style={styles.cardTextSmall}>{launch.pad.location.name}</Text>
      )}
      {/* TODO: notification button */}
    </ListCard>
  );
};

const styles = StyleSheet.create({
  cardText: {
    ...typographyStyles.paragraph,
    fontWeight: FontWeight.Medium,
    paddingTop: Spacing.Small,
  },
  cardTextSmall: {
    ...typographyStyles.paragraph,
    fontSize: FontSize.Small,
    fontWeight: FontWeight.Light,
  },
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
