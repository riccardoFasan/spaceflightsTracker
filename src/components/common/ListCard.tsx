import { ReactNode, useMemo } from 'react';
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
  const imageHeight: number = useMemo(
    () => Math.round(dimensions.height / content.imageRatio),
    [content.imageRatio]
  );

  return (
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
    borderRadius: Spacing.Large,
  },
  cardBody: {
    padding: Spacing.ExtraLarge,
  },
  cardTitle: typographyStyles.heading3,
});
