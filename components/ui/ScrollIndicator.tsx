import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useEffect } from 'react';

import Animated, { 
  useAnimatedStyle, 
  interpolate, 
  interpolateColor, 
  useSharedValue, 
  withRepeat, 
  withTiming, 
  SharedValue 
} from "react-native-reanimated";

import { ThemedView } from "../ThemedView";

interface ScrollIndicatorProps {
  contentHeight: number,
  scrollViewHeight: number,
  scrollY: SharedValue<number>,
  styles?: StyleProp<ViewStyle>
}

export default function ScrollIndicator({
  contentHeight,
  scrollViewHeight,
  scrollY, 
  styles
}: ScrollIndicatorProps) {
  const colorAnimation = useSharedValue(0);

  useEffect(() => {
    colorAnimation.value = withRepeat(
      withTiming(1, { duration: 4000 }),
      -1,
      true
    );

    scrollY.value = 0;
  }, []);

  const progressBarStyle = useAnimatedStyle(() => {
    const maxScroll = contentHeight - scrollViewHeight;
    const progress = interpolate(scrollY.value, [0, maxScroll], [5, 100]);

    const backgroundColor = interpolateColor(
      colorAnimation.value,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      ['skyblue', 'limegreen', 'gold', 'fuchsia', 'crimson', 'aqua']
    );

    return {
      width: `${progress}%`,
      backgroundColor,
    };
  });

  return (
    <ThemedView style={[scrollStyles.progressContainer, styles]}>
      <Animated.View style={[scrollStyles.progressBar, progressBarStyle]} />
    </ThemedView>
  )
}

const scrollStyles = StyleSheet.create({
  progressContainer: {
    position: 'absolute',
    top: -24,
    left: -24,
    right: 0,
    height: 3,
    backgroundColor: '#e0e0e0',
    zIndex: 1000,
    width: '120%'
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'skyblue',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
  },
})