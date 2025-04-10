import { PropsWithChildren, ReactNode } from "react";
import { StyleProp, TextProps, ViewStyle } from "react-native";
import { ROUTES_MAP } from "../utils/constants";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?: ThemeTextType;
};

export type ThemeTextType = 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'headerTitle';

export type ParallaxProps = PropsWithChildren<{
  title: string,
  modalContent?: ReactNode,
  modalTitle?: string,
  modalHeight?: number | 'auto',
  styles?: StyleProp<ViewStyle>,
  showHeader?: boolean,
  showToggle?: boolean;
}>;

export type ErrorType = 'error' | 'info' | 'warning' | 'delete';
export type LanguageType = 'es' | 'en' | 'ja';
export type ModalType = 'cards' | 'attacks' | 'cardsSort' | 'attacksSort' | 'avatar' | 'coin' | 'best';
export type DataKey = 'favorites' | 'decks' | 'trades' | 'collection';
export type FilterKey = 'cards' | 'attacks' | 'collection' | 'decks';
export type RouteKey = keyof typeof ROUTES_MAP;

export type GamesType = 'memory' | 'quiz';