import { StyleSheet, Text } from 'react-native';
import { formatDateTime } from '../../utilities';
import { Article } from '../../models';
import { openURL } from '../../services';
import { ButtonSecondary } from './ButtonSecondary';
import { Spacing, typographyStyles, FontWeight } from '../../styles';
import { ListCard } from './ListCard';

interface Props {
  article: Article;
}

export const NewsCard = ({ article }: Props) => {
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
        pageName: 'Article',
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
    ...typographyStyles.paragraph,
    paddingTop: Spacing.Small,
    fontWeight: FontWeight.Bold,
  },
  cardTextSmall: {
    fontWeight: FontWeight.Light,
    marginBottom: Spacing.ExtraLarge,
  },
});
