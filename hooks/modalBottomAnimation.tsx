import { useEffect } from 'react';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';

export function useBottomSlideAnimation(visible: boolean, height: number) {
  const distanceFromBottom = useSharedValue(height);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: distanceFromBottom.value }],
    };
  });

  useEffect(() => {
    distanceFromBottom.value = visible
      ? withTiming(0, { duration: 250 })
      : withTiming(height, { duration: 0 });
  }, [visible]);

  return animatedStyle;
}