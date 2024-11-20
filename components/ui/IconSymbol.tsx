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

export const SvgStylusSymbol = (props: SvgProps) => (
  <Svg
    fill={props.color}
    width={28}
    height={21}
    viewBox="0 -960 960 960"
    style={[props.style, ]}
    {...props}
  >
    <Path d="m 504.98951,-238.98152 440.60472,-428.23736 -68.39239,-66.47268 -440.60469,428.23736 z m 
            -343.27706,111.21387 q -131.523793,-6.3916 -195.97045,-53.68948 -64.446658,-47.29783 -64.446658,-136.78027 
            0,-83.09083 70.365229,-134.86281 70.365231,-51.77197 195.312819,-61.99855 51.29428,-3.83496 76.9414,-15.97898 
            25.64717,-12.14406 25.64717,-33.87551 0,-33.23634 -38.79954,-49.8545 -38.79951,-16.61817 -128.23568,-24.28808 l 
            9.20667,-102.26564 q 135.46951,10.22654 199.25853,53.05029 63.78904,42.82375 63.78904,123.35793 0,67.75098 
            -50.63665,106.1006 -50.63666,38.34962 -149.27952,46.01954 -84.175216,6.3916 -126.262822,30.04053 -42.0876126,23.64893 
            -42.0876126,64.55518 0,44.74122 36.8266616,64.55517 36.82665,19.81398 123.632353,23.64894 z m 368.26658,8.94824 
            -217.01424,-210.92288 502.42088,-488.31842 q 26.30473,-25.5664 62.47379,-25.5664 36.16904,0 62.4738,25.5664 l 
            92.06684,89.48245 q 26.3047,25.56641 26.3047,60.72022 0,35.15382 -26.3047,60.72021 z m -209.12281,42.184567 q 
            -22.35904,5.113289 -39.45712,-11.50487 -17.09811,-16.618177 -11.83714,-38.349617 l 43.40283,-203.25296 217.01424,210.92288 z" />
  </Svg>
)
