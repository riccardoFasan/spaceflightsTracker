import { Launch } from '../../../models';
import { StyleSheet, Text } from 'react-native';
import { formatDateTime } from '../../../utilities';
import { LaunchStatusBadge, ListCard } from '../../common';
import {
  FontSize,
  FontWeight,
  typographyStyles,
  Spacing,
} from '../../../styles';

interface Props {
  launch: Launch;
}

export const LaunchCard = ({ launch }: Props) => {
  return (
    <ListCard
      content={{
        id: launch.id,
        title: launch.name,
        image: launch.image,
        imageRatio: 3,
        pageName: 'Launch',
      }}
      badge={<LaunchStatusBadge launch={launch} />}
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
});
