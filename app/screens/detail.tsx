import 
  Animated, { 
  Extrapolation, 
  interpolate, 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming 
} from "react-native-reanimated";

import { useContext, useEffect } from "react";
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import { Image } from 'expo-image';
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";

import { 
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload 
} from "react-native-gesture-handler";

import { ButtonStyles, DetailStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "@/components/ThemedView";
import { BACK_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { AppContext } from "../_layout";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import SoundService from "@/core/services/sounds.service";

export default function DetailScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { dispatch } = context;
  const styles = DetailStyles;
  const router = useRouter();
  const navigation = useNavigation();
  const opacity = useSharedValue(0.5);
  const opacityDuration = Platform.OS === 'web' ? 500 : 1000;
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const { id } = useLocalSearchParams<{ id: string }>();

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const rotationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 350 },
        { rotateX: `${rotateX.value}deg` },
        { rotateY: `${rotateY.value}deg` }
      ]
    };
  }, []);

  function onGestureBegin(
    event: GestureStateChangeEvent<PanGestureHandlerEventPayload>
  ) {
    'worklet';
    rotateX.value = withTiming(
      interpolate(
        event.y, 
        [0, styles.image.height], 
        [10, -10], Extrapolation.CLAMP
      ), {duration: 200}
    );

    rotateY.value = withTiming(
      interpolate(
        event.x, 
        [0, styles.image.width], 
        [-10, 10], 
        Extrapolation.CLAMP
      ), {duration: 200}
    );
  }

  function onGestureUpdate(
    event: GestureUpdateEvent<PanGestureHandlerEventPayload>
  ) {
    'worklet';
    rotateX.value = interpolate(
      event.y, 
      [0, styles.image.height], 
      [10, -10], Extrapolation.CLAMP
    );

    rotateY.value = interpolate(
      event.x, 
      [0, styles.image.width], 
      [-10, 10], 
      Extrapolation.CLAMP
    );
  }

  function onGestureFinish() {
    'worklet';
    rotateX.value = withTiming(0, {duration: 250});
    rotateY.value = withTiming(0, {duration: 250});
  }

  const gesture = Gesture.Pan()
                          .onBegin(onGestureBegin)
                          .onUpdate(onGestureUpdate)
                          .onFinalize(onGestureFinish);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: opacityDuration });
  }, []);

  async function goBack(): Promise<void> {
    dispatch({type: 'SET_NAVIGATING', value: false});
    if (router.canGoBack()) {
      await playSound();
      router.back();
    } else {
      router.replace('/');
    }
  }

  return (
    <Animated.View style={styles.container}>
      {
        Platform.OS === 'web' ? (
          <Animated.View style={opacityStyle}>
            <Image style={[styles.image, cardStyles.card]}
                   source={CARD_IMAGE_MAP[id]}
                   contentFit={'fill'} />
          </Animated.View>
        ) : (<>
          <GestureDetector gesture={gesture}>
            <Animated.View style={[
                opacityStyle, 
                rotationStyle, 
                cardStyles.card
              ]}>
              <Image style={styles.image}
                     source={CARD_IMAGE_MAP[id]}
                     contentFit={'fill'} />
            </Animated.View>
          </GestureDetector>
        </>)
      }
      <ThemedView style={styles.bottomContainer}>
        <TouchableOpacity style={ButtonStyles.button} 
                          onPress={goBack} 
                          accessibilityLabel={BACK_SENTENCE}>
          <View style={ButtonStyles.insetBorder}>
            <IconSymbol name="clear"></IconSymbol>
          </View>
        </TouchableOpacity>
      </ThemedView>
    </Animated.View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    boxShadow: '8px 12px 12px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: 20
  }
})