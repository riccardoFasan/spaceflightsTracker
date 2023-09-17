import { StyleSheet } from 'react-native';
import { Color } from './colorsStyles';

export enum FontWeight {
  Thin = '100',
  ExtraLight = '200',
  Light = '300',
  Regular = '400',
  Medium = '500',
  SemiBold = '600',
  Bold = '700',
  ExtraBold = '800',
  Black = '900',
}

export enum FontSize {
  ExtraSmall = 12,
  Small = 14,
  Medium = 16,
  Large = 18,
  ExtraLarge = 22,
  ExtraExtraLarge = 32,
}

export const typographyStyles = StyleSheet.create({
  paragraph: {
    fontFamily: 'Roboto',
    color: Color.Gray,
    fontSize: FontSize.Medium,
    fontWeight: FontWeight.Regular,
    lineHeight: calculateLineHeight(FontSize.Medium),
  },
  label: {
    fontFamily: 'Roboto',
    color: Color.White,
    fontSize: FontSize.Large,
    fontWeight: FontWeight.Medium,
  },
  heading1: {
    fontFamily: 'Roboto',
    color: Color.White,
    fontSize: FontSize.ExtraExtraLarge,
    fontWeight: FontWeight.Black,
  },
  heading2: {
    fontFamily: 'Roboto',
    color: Color.White,
    fontSize: FontSize.ExtraLarge,
    fontWeight: FontWeight.ExtraBold,
    lineHeight: calculateLineHeight(FontSize.ExtraLarge),
  },
  heading3: {
    fontFamily: 'Roboto',
    color: Color.White,
    fontSize: FontSize.Large,
    fontWeight: FontWeight.Black,
    lineHeight: calculateLineHeight(FontSize.Large),
  },
  heading4: {
    fontFamily: 'Roboto',
    color: Color.Gray,
    fontSize: FontSize.ExtraLarge,
    fontWeight: FontWeight.SemiBold,
    lineHeight: calculateLineHeight(FontSize.Medium),
  },
});

function calculateLineHeight(fontSize: FontSize, ratio: number = 1.5): number {
  return fontSize * ratio;
}
