import { UpcomingLaunch } from '../models/upcomingLaunchModel';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  launch: UpcomingLaunch;
}

export const UpcomingLaunchCard = ({ launch }: Props) => {
  return (
    <View key={launch.id} style={styles.card}>
      {launch.image && (
        <Image
          style={styles.cardImage}
          resizeMode={'cover'}
          source={{ uri: launch.image }}
        />
      )}
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{launch.name}</Text>
        {launch.window && (
          <Text style={styles.cardText}>
            {new Date(launch.window.start).toLocaleTimeString()}
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
const imageHeight = Math.round((dimensions.width * 9) / 16);

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    backgroundColor: '#181A1E',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#21242',
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
  },
  cardText: {
    color: '#C5C6C7',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 4,
  },
  cardTextSmall: {
    fontSize: 14,
    fontWeight: '300',
  },
});
