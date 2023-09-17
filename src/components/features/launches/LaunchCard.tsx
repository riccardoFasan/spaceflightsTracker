import { useNavigation } from '@react-navigation/native';
import { Launch } from '../../../models';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { formatDateTime } from '../../../utilities';
import { ListCard, NotificationButton } from '../../common';
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
  const navigation = useNavigation<any>();

  function navigateToDetailPage(): void {
    navigation.navigate('Launch', { id: launch.id });
  }

  return (
    <TouchableHighlight onPress={() => navigateToDetailPage()}>
      <ListCard
        content={{
          id: launch.id,
          title: launch.name,
          image: launch.image,
          imageRatio: 2.75,
          pageName: 'Launch',
        }}
      >
        <View style={styles.cardContent}>
          {launch.window && (
            <Text style={styles.cardText}>
              On:&nbsp;
              {formatDateTime(launch.window.start)}
            </Text>
          )}
          {launch.pad?.location && (
            <Text style={styles.cardTextSmall}>{launch.pad.location.name}</Text>
          )}
        </View>
        {launch.window?.start && <NotificationButton launch={launch} />}
      </ListCard>
    </TouchableHighlight>
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
  cardContent: {
    marginBottom: Spacing.Large,
  },
});
