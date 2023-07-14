import { UpcomingLaunch } from '../../../models';
import { UpcomingLaunchStatus } from '../../../enums';
import { StyleSheet, Text, View } from 'react-native';
import { formatDateTime } from '../../../utilities';
import { Color } from '../../../styles';
import { Countdown, ListCard } from '../../common';

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
        <Text style={[styles.cardText, styles.cardTextSmall]}>
          {launch.pad.location.name}
        </Text>
      )}
      {/* TODO: notification button */}
    </ListCard>
  );
};

const styles = StyleSheet.create({
  cardText: {
    color: Color.Gray,
    fontSize: 16,
    paddingTop: 4,
    fontWeight: '700',
  },
  cardTextSmall: {
    fontSize: 14,
    fontWeight: '300',
  },
  badge: {
    position: 'absolute',
    backgroundColor: Color.Anthracite + 80,
    padding: 8,
    borderRadius: 8,
    top: 20,
    left: 20,
  },
  badgeText: {
    color: Color.White,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.25,
    fontSize: 12,
  },
  badgeTextCountdown: {
    fontSize: 14,
    fontWeight: '800',
  },
  badgeTimer: {
    backgroundColor: Color.Red,
    paddingVertical: 6,
  },
});
