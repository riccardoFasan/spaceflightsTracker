import { UpcomingLaunch } from '../../../models';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { formatDateTime } from '../../../utilities';

interface Props {
  launch: UpcomingLaunch;
}

export const UpcomingLaunchCard = ({ launch }: Props) => {
  return (
    <View key={launch.id} style={styles.card}>
      {launch.image && (
        <Image
          accessibilityLabel={launch.name}
          alt={launch.name}
          style={styles.cardImage}
          resizeMode={'cover'}
          source={{ uri: launch.image }}
          progressiveRenderingEnabled={true}
        />
      )}
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{launch.name}</Text>
        {launch.window && (
          <Text style={styles.cardText}>
            {formatDateTime(launch.window.start)}
          </Text>
        )}
        {launch.pad && (
          <Text style={[styles.cardText, styles.cardTextSmall]}>
            {launch.pad.name}
          </Text>
        )}
        {/* TODO: notification button */}
      </View>
    </View>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height / 3);

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    backgroundColor: '#181A1E',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#212429',
    width: '100%',
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: imageHeight,
    borderRadius: 16,
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  cardText: {
    color: '#C5C6C7',
    fontSize: 16,
    paddingTop: 4,
    fontWeight: '700',
  },
  cardTextSmall: {
    fontSize: 14,
    fontWeight: '300',
  },
});
