import { CREATE_GRID_HEIGHT, CREATE_GRID_MAX_HEIGHT, HEADER_HEIGHT, HEADER_MIN_HEIGHT } from '@/shared/styles/component.styles';
import { useDerivedValue, useAnimatedStyle, interpolate, Extrapolation, SharedValue } from 'react-native-reanimated';

const useHeaderAnimation = (scrollY: SharedValue<number>) => {
  const derivedHeight = useDerivedValue(() => interpolate(
    scrollY.value,
    [0, HEADER_HEIGHT],
    [HEADER_HEIGHT, HEADER_MIN_HEIGHT],
    Extrapolation.CLAMP
  ));

  const derivedPaddingTop = useDerivedValue(() => interpolate(
    scrollY.value,
    [0, HEADER_HEIGHT],
    [26, 0],
    Extrapolation.CLAMP
  ));

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
    paddingTop: derivedPaddingTop.value,
  }));

  const derivedTop = useDerivedValue(() => interpolate(
    scrollY.value,
    [0, HEADER_HEIGHT],
    [26, 7.5],
    Extrapolation.CLAMP
  ));

  const derivedOpacity = useDerivedValue(() => interpolate(
    scrollY.value,
    [0, HEADER_MIN_HEIGHT],
    [1, 0],
    Extrapolation.CLAMP
  ));

  const derivedGridHeight = useDerivedValue(() => interpolate(
    scrollY.value,
    [60, 90],
    [CREATE_GRID_HEIGHT, CREATE_GRID_MAX_HEIGHT],
    Extrapolation.CLAMP
  ));

  const animatedGridHeaderStyle = useAnimatedStyle(() => ({
    height: derivedGridHeight.value,
  }));

  const animatedIconStyle = useAnimatedStyle(() => ({
    top: derivedTop.value,
    opacity: derivedOpacity.value,
  }));

  const animatedTitleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [1, 0.8],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity: derivedOpacity.value,
    };
  });

  return {
    animatedHeaderStyle,
    animatedIconStyle,
    animatedTitleStyle,
    animatedGridHeaderStyle
  };
};

export default useHeaderAnimation;