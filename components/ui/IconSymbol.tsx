import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';
import Svg, { G, Path, Polygon, SvgProps } from 'react-native-svg';

import { ICONS_MAPPING, IconSymbolName } from '@/shared/definitions/utils/switches';

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
    viewBox="0 -930 920 920"
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
    style={[props.style]}
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

export const SvgTradeSymbol = (props: SvgProps) => (
  <Svg
    {...props}
    fill={props.color}
    width={28}
    height={28}
    viewBox="0 -960 960 960"
    style={[props.style]}
  >
    <Path d="M480-629 354-755l126-126 126 126-126 126ZM40-160v-160q0-29 20.5-49.5T110-390h141q17 0 
    32.5 8.5T310-358q29 42 74 65t96 23q51 0 96-23t75-65q11-15 26-23.5t32-8.5h141q29 0 49.5 20.5T920-320v160H660v-119q-36 
    33-82.5 51T480-210q-51 0-97-18t-83-51v119H40Zm120-300q-45 0-77.5-32.5T50-570q0-46 32.5-78t77.5-32q46 0 78 
    32t32 78q0 45-32 77.5T160-460Zm640 0q-45 0-77.5-32.5T690-570q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T800-460Z"/>
  </Svg>
)

export const SvgTradePassSymbol = (props: any) => {
  return (
    <Svg
      width={props?.width || 80}
      height={props?.height || 80}
      viewBox="0 0 512 512"
      scale={0.5}
      {...props}
    >
      <Polygon
        fill="#4FBA6F"
        points="512,256 317.793,114.759 317.793,211.862 211.862,211.862 211.862,300.138 317.793,300.138 317.793,397.241"
      />
      <Path
        fill="#4FBA6F"
        d="M158.897,211.862c-9.71,0-17.655,7.945-17.655,17.655v52.966c0,9.71,7.945,17.655,17.655,17.655 c9.71,0,17.655-7.945,17.655-17.655v-52.966C176.552,219.807,168.607,211.862,158.897,211.862"
      />
      <Path
        fill="#4FBA6F"
        d="M88.276,211.862c-9.71,0-17.655,7.945-17.655,17.655v52.966c0,9.71,7.945,17.655,17.655,17.655 s17.655-7.945,17.655-17.655v-52.966C105.931,219.807,97.986,211.862,88.276,211.862"
      />
      <Path
        fill="#4FBA6F"
        d="M17.655,211.862C7.945,211.862,0,219.807,0,229.517v52.966c0,9.71,7.945,17.655,17.655,17.655 s17.655-7.945,17.655-17.655v-52.966C35.31,219.807,27.366,211.862,17.655,211.862"
      />
    </Svg>
  );
};

export const ApprovedCheck = (props?: any) => (
  <Svg
    width={props.width || 22}
    height={props.height || 22}
    viewBox="0 0 22 22"
    fill="none"
    stroke={props.color || '#8E8E8F'}
  >
    <Path
      opacity="0.1"
      d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
      fill={props.color || '#8E8E8F'}
    />
    <Path
      d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
      strokeWidth="2"
    />
    <Path
      d="M9 12L10.6828 13.6828C10.858 13.858 11.142 13.858 11.3172 13.6828L15 10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClockSymbol = (props?: any) => (
  <Svg
    width={props.width || 22}
    height={props.height || 22}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || '#8E8E8F'}
  >
    <Path
      opacity="0.1"
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      fill={props.color || '#8E8E8F'}
    />
    <Path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      strokeWidth="2"
    />
    <G rotation={props.rotation} origin={[12, 12]}>
    <Path
      d="M12 7L12 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </G>

    <Path
      d="M21 4L20 3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" 
    />
  </Svg>
);

export const PercentageSymbol = (props?: any) => (
  <Svg
    width={props.width || 22}
    height={props.height || 22}
    viewBox="0 0 22 22"
    fill="none"
    stroke={props.color || '#8E8E8F'}
  >
    <Path
      opacity="0.1"
      d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
      fill={props.color || '#8E8E8F'}
    />
    <Path
      d="M16 8L8 16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 9.01001L9 9.00001"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 15.01L15 15"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
      strokeWidth="2"
    />
  </Svg>
);

export const CrossSquareIcon = (props?: any) => (
  <Svg
    width={props.width || 22}
    height={props.height || 22}
    viewBox="0 0 22 22"
    fill="none"
    stroke={props.color || '#8E8E8F'}
  >
    <Path
      opacity="0.1"
      d="M21 12H12V3H15.024C19.9452 3 21 4.05476 21 8.976V12Z"
      fill={props.color || '#8E8E8F'}
    />
    <Path
      opacity="0.1"
      d="M3 15.024V12H12V21H8.976C4.05476 21 3 19.9452 3 15.024Z"
      fill={props.color || '#8E8E8F'}
    />
    <Path
      d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
      strokeWidth="2"
    />
    <Path
      d="M12 3V21"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 12L3 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const StarSymbol = (props?: any) => (
  <Svg
    width={props.width || 22}
    height={props.height || 22}
    viewBox="0 0 22 22"
    fill="none"
    stroke={props.color || '#8E8E8F'}
  >
    <Path
      opacity="0.1"
      d="M16.9413 17.295L8.59907 8.95276C8.45891 8.98379 8.31404 9 8.16653 9L3.13533 9C3.08533 9 3.0603 9.06044 3.09565 9.09579L7.16773 13.1679C7.68133 13.6815 7.8761 14.4331 7.67657 15.1315L6.05626 20.8026C6.03697 20.8701 6.11226 20.9251 6.17069 20.8861L10.8905 17.7396C11.5623 17.2917 12.4375 17.2917 13.1093 17.7396L17.8369 20.8913C17.8926 20.9285 17.9645 20.8761 17.946 20.8117L16.9413 17.295Z"
      fill={props.color || '#8E8E8F'}
    />
    <Path
      d="M10.75 6L11.9369 3.15144V3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144V3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931V9C20.9326 9 20.9523 9.04768 20.9244 9.07557L20.8931 9.10687L17.5 12.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 9H3.13547V9C3.08548 9 3.06044 9.06044 3.09579 9.09579L3.13547 9.13547L7.16787 13.1679C7.68147 13.6815 7.87625 14.4331 7.67671 15.1315L6.06393 20.7762L6.0564 20.8026C6.03711 20.8701 6.1124 20.9251 6.17083 20.8861V20.8861L10.8906 17.7396C11.5624 17.2917 12.4376 17.2917 13.1094 17.7396L17.8186 20.879L17.837 20.8913C17.8928 20.9285 17.9646 20.8761 17.9462 20.8117V20.8117L16.8571 17"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <Path
      d="M3 3L21 21"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
