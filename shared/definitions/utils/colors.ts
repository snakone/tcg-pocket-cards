import { Platform } from "react-native";

const tintColorLight = '#0a7ea4';

export const Colors = {
  light: {
    text: Platform.OS === 'web' ? '#6C6C6D' : '#8E8E8F',
    bold: '#11181C',
    background: '#F2F2F2',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    skeleton: '#d2d2d2'
  }
};
