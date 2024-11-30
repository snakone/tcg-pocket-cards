import { BlurView } from 'expo-blur';
import { ReactElement, useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { LoadingStyles } from '@/shared/styles/component.styles';

const LoadingOverlay = () => {
  const rotation = useSharedValue(0);
  const dots = 10;

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }), -1);
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const points = Array.from({ length: dots });

  return (
    <SafeAreaView style={[LoadingStyles.size]}>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <View style={LoadingStyles.box}>
        <Animated.View style={[animatedStyle]}>
          <Svg height="50" width="50" viewBox="0 0 100 100">
            { points.map((_, index) => createCircle(index, points.length)) }
          </Svg>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

function createCircle(i: number, length: number): ReactElement {
  const angle = (i * 360) / length;
  const x = 50 + 35 * Math.cos((angle * Math.PI) / 180); 
  const y = 50 + 35 * Math.sin((angle * Math.PI) / 180); 
  return (
    <Circle key={i} cx={x} cy={y} r="6" fill={'skyblue'}/>
  );
}

export default LoadingOverlay;