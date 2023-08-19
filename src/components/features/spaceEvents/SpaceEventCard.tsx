import { StyleSheet, Text } from 'react-native';
import { SpaceEvent } from '../../../models';
import { openURL } from '../../../services';
import { ListCard, ButtonPrimary } from '../../common';
import { FontWeight, Spacing, typographyStyles } from '../../../styles';
import { formatDateTime } from '../../../utilities';
import { SpaceEventBadge } from '.';
import { SpaceEventType } from '../../../enums';

interface Props {
  event: SpaceEvent;
}

export const SpaceEventCard = ({ event }: Props) => {
  function openSpaceEvent(): void {
    if (event.url) openURL(event.url);
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
        event.type !== SpaceEventType.Unknown && (
          <SpaceEventBadge event={event} />
        )
      }
    >
      <Text style={styles.cardText}>On:&nbsp;{formatDateTime(event.date)}</Text>
      <Text
        style={[
          styles.cardText,
          {
            fontWeight: FontWeight.Light,
            marginBottom: event.url ? Spacing.ExtraLarge : 0,
          },
        ]}
        numberOfLines={2}
      >
        {event.description}
      </Text>
      {event.url && (
        <ButtonPrimary
          title="Read more"
          onPress={openSpaceEvent}
        ></ButtonPrimary>
      )}
    </ListCard>
  );
};

const styles = StyleSheet.create({
  cardText: {
    ...typographyStyles.paragraph,
    paddingTop: Spacing.Small,
    fontWeight: FontWeight.Bold,
  },
});
