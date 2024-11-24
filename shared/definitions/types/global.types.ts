import { PropsWithChildren, ReactNode } from "react";
import { TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?: ThemeTextType;
};

export type ThemeTextType = 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'headerTitle';

export type ParallaxProps = PropsWithChildren<{
  title: string,
  modalContent: ReactNode,
  modalTitle: string
}>;

export type ErrorType = 'error' | 'info' | 'warning';