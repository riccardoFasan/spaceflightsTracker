import React, { StyleSheet, Text } from 'react-native';
import { formatDateTime } from '../../../utilities';
import { Article, Blog, Report } from '../../../models';
import { openURL } from '../../../services';
import { PrimaryButton, ListCard } from '../../common';
import { Spacing, typographyStyles, FontWeight } from '../../../styles';

interface Props {
  article: Article | Report | Blog;
}

export const NewsCard = ({ article }: Props) => {
  function openArticle(): void {
    if (article.url) {
      openURL(article.url);
    }
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
      <Text
        style={[
          styles.cardText,
          {
            marginBottom: article.url ? Spacing.ExtraLarge : 0,
          },
        ]}
        numberOfLines={2}
      >
        {article.summary}
      </Text>
      {article.url && <PrimaryButton title='Read more' onPress={openArticle} />}
    </ListCard>
  );
};

const styles = StyleSheet.create({
  cardText: {
    ...typographyStyles.paragraph,
    paddingTop: Spacing.Small,
    fontWeight: FontWeight.Light,
  },
});
