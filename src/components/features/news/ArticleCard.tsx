import { StyleSheet, Text } from 'react-native';
import { formatDateTime } from '../../../utilities';
import { Article } from '../../../models';
import { openURL } from '../../../services';
import { ButtonSecondary } from '../../common/ButtonSecondary';
import { Color } from '../../../styles';
import { ListCard } from '../../common';

interface Props {
  article: Article;
}

export const ArticleCard = ({ article }: Props) => {
  function openArticle(): void {
    openURL(article.url);
  }

  return (
    <ListCard
      content={{
        id: article.id,
        title: article.title,
        image: article.image,
        imageRatio: 3.25,
      }}
    >
      <Text style={styles.cardText}>{formatDateTime(article.publishedAt)}</Text>
      <Text style={[styles.cardText, styles.cardTextSmall]} numberOfLines={2}>
        {article.summary}
      </Text>
      <ButtonSecondary
        title="Read more"
        onPress={openArticle}
      ></ButtonSecondary>
    </ListCard>
  );
};

const styles = StyleSheet.create({
  cardText: {
    color: Color.Gray,
    fontSize: 16,
    paddingTop: 4,
    fontWeight: '700',
    lineHeight: 24,
  },
  cardTextSmall: {
    fontWeight: '300',
    marginBottom: 20,
  },
});
