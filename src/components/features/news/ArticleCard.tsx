import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { formatDateTime } from '../../../utilities';
import { Article } from '../../../models';
import { openURL } from '../../../services';

interface Props {
  article: Article;
}

export const ArticleCard = ({ article }: Props) => {
  function openArticle(): void {
    openURL(article.url);
  }

  return (
    <View key={article.id} style={styles.card}>
      {article.image && (
        <Image
          accessibilityLabel={article.title}
          alt={article.title}
          style={styles.cardImage}
          resizeMode={'cover'}
          source={{ uri: article.image }}
          progressiveRenderingEnabled={true}
        />
      )}
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{article.title}</Text>
        <Text style={styles.cardText}>
          {formatDateTime(article.publishedAt)}
        </Text>
        <Text style={[styles.cardText, styles.cardTextSmall]} numberOfLines={2}>
          {article.summary}
        </Text>
        <Pressable onPress={openArticle}>
          <Text style={styles.buttonText}>Read More</Text>
        </Pressable>
        {/* TODO: notification button */}
      </View>
    </View>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height / 3.25);

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
    lineHeight: 24,
  },
  cardTextSmall: {
    fontWeight: '300',
    marginBottom: 20,
  },
  buttonText: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#0681C7',
    textAlign: 'center',
    color: '#0681C7',
    fontSize: 16,
    fontWeight: '700',
  },
});
