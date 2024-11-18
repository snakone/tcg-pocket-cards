import { ICONS_MAPPING, IconSymbolName } from '@/shared/definitions/utils/switches';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function IconSymbol({
  name,
  size = 24,
  color = 'black',
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={ICONS_MAPPING[name]} style={style} />;
}

export const SvgStackSymbol = (props: SvgProps) => (
  <Svg
    fill={props.color}
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    style={props.style}
    {...props}
  >
    <Path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 
             160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" />
  </Svg>
)
