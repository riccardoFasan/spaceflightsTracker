import { ReactNode } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Color, Spacing } from '../../styles';
import { typographyStyles } from '../../styles/typographyStyles';
import { useNavigation } from '@react-navigation/native';

interface Content {
  id: string;
  title: string;
  image?: string;
  imageRatio: number;
  pageName: string;
}

interface Props {
  content: Content;
  children: ReactNode;
  badge?: ReactNode;
}

const dimensions = Dimensions.get('window');

export const ListCard = ({ content, children, badge }: Props) => {
  const navigation = useNavigation<any>();

  const imageHeight: number = Math.round(
    dimensions.height / content.imageRatio
  );

  function navigateToDetailPage(): void {
    navigation.navigate(content.pageName, { id: content.id });
  }

  return (
    <TouchableHighlight onPress={() => navigateToDetailPage()}>
      <View key={content.id} style={styles.card}>
        {content.image && (
          <Image
            accessibilityLabel={content.title}
            alt={content.title}
            style={[styles.cardImage, { height: imageHeight }]}
            resizeMode={'cover'}
            source={{ uri: content.image }}
            progressiveRenderingEnabled={true}
          />
        )}
        {badge}
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{content.title}</Text>
          {children}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    borderRadius: Spacing.Large,
    borderWidth: 1,
    width: '100%',
    marginBottom: Spacing.ExtraLarge,
    borderColor: Color.Anthracite,
    backgroundColor: Color.DarkAnthracite,
  },
  cardImage: {
    width: '100%',
    borderRadius: 16,
  },
  cardBody: {
    padding: Spacing.ExtraLarge,
  },
  cardTitle: typographyStyles.heading3,
});
