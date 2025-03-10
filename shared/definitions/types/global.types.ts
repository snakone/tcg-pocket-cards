import { PropsWithChildren, ReactNode } from "react";
import { StyleProp, TextProps, ViewStyle } from "react-native";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?: ThemeTextType;
};

export type ThemeTextType = 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'headerTitle';

export type ParallaxProps = PropsWithChildren<{
  title: string,
  modalContent?: ReactNode,
  modalTitle: string,
  modalHeight?: number | 'auto',
  styles?: StyleProp<ViewStyle>,
  showHeader?: boolean,
}>;

export type ErrorType = 'error' | 'info' | 'warning' | 'delete';
export type LanguageType = 'es' | 'en' | 'ja';