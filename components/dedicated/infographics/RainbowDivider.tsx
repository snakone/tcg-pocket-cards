import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, LinearGradient, Stop } from 'react-native-svg';

const RainbowDivider = ({width, height}: {width?: any, height?: number} = {width: '100%', height: 5}) => {
  return (
    <View style={[styles.container, {width, height}]}>
      <Svg height="100%" width="100%" style={{borderRadius: 8}}>
        <LinearGradient id="rainbowGradient" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0%" stopColor="#FF0000" />
          <Stop offset="16%" stopColor="#FF7F00" />
          <Stop offset="33%" stopColor="#FFFF00" />
          <Stop offset="50%" stopColor="#00FF00" />
          <Stop offset="66%" stopColor="#0000FF" />
          <Stop offset="83%" stopColor="#4B0082" />
          <Stop offset="100%" stopColor="#8B00FF" />
        </LinearGradient>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#rainbowGradient)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 8,
    height: 5, 
    width: '100%', 
    margin: 'auto',
    marginBlock: 20,
  },
});

export default RainbowDivider;