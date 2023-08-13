import { StyleSheet, Text } from 'react-native';
import { SpaceEvent } from '../../../models';
import { openURL } from '../../../services';
import { ListCard, ButtonSecondary } from '../../common';
import { FontWeight, Spacing, typographyStyles } from '../../../styles';
import { formatDateTime } from '../../../utilities';
import { EventTypeBadge } from '.';
import { EventType } from '../../../enums';

interface Props {
  event: SpaceEvent;
}

export const SpaceEventCard = ({ event }: Props) => {
  function openSpaceEvent(): void {
    openURL(event.url);
  }

  return (
    <ListCard
      content={{
        id: event.id,
        title: event.name,
        image: event.image,
        imageRatio: 3.125,
        pageName: 'Article',
      }}
      badge={
        event.type !== EventType.Unknown && <EventTypeBadge type={event.type} />
      }
    >
      <Text style={styles.cardText}>On: {formatDateTime(event.date)}</Text>
      <Text style={[styles.cardText, styles.cardTextSmall]} numberOfLines={2}>
        {event.description}
      </Text>
      <ButtonSecondary
        title="Read more"
        onPress={openSpaceEvent}
      ></ButtonSecondary>
    </ListCard>
  );
};

const styles = StyleSheet.create({
  cardText: {
    ...typographyStyles.paragraph,
    paddingTop: Spacing.Small,
    fontWeight: FontWeight.Bold,
  },
  cardTextSmall: {
    fontWeight: FontWeight.Light,
    marginBottom: Spacing.ExtraLarge,
  },
});
