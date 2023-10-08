import React, { ReactNode, useMemo } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Color, Spacing, typographyStyles } from '../../styles';

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
  const height: number = useMemo(
    () => Math.round(dimensions.height / content.imageRatio),
    [content.imageRatio],
  );

  return (
    <View key={content.id} style={styles.wrapper}>
      <View style={styles.card}>
        {content.image && (
          <Image
            accessibilityLabel={content.title}
            alt={content.title}
            style={[styles.cardImage, { height }]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: Spacing.ExtraLarge,
  },
  card: {
    position: 'relative',
    borderRadius: Spacing.Large,
    borderWidth: 1,
    marginTop: Spacing.ExtraLarge,
    borderColor: Color.Anthracite,
    backgroundColor: Color.DarkAnthracite,
  },
  cardImage: {
    width: '100%',
    borderRadius: Spacing.Large,
  },
  cardBody: {
    padding: Spacing.ExtraLarge,
  },
  cardTitle: typographyStyles.heading3,
});
