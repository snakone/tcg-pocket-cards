import 
  Animated, { 
  Extrapolation, 
  interpolate, 
  runOnJS, 
  ScrollEvent, 
  useAnimatedGestureHandler, 
  useAnimatedScrollHandler, 
  useAnimatedStyle, 
  useDerivedValue, 
  useSharedValue, 
  withSpring, 
  withTiming 
} from "react-native-reanimated";

import { useContext, useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import { Image } from 'expo-image';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, Platform, Pressable, ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "expo-router";

import { 
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload, 
} from "react-native-gesture-handler";

import { ButtonStyles, DetailStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "@/components/ThemedView";
import { BACK_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { AppContext } from "../_layout";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import SoundService from "@/core/services/sounds.service";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/shared/definitions/utils/colors";
import { ThemedText } from "@/components/ThemedText";

const INITIAL_INFO_HEIGHT = 150;
const MAX_HEIGHT = 500;
const ANDROID_INFO_HEIGHT = 200;
const ANDROID_MAX_HEIGHT = 450;

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
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(true);
  const top = useSharedValue<number>(0);
  const height = useSharedValue(INITIAL_INFO_HEIGHT);
  const heightAndroid = useSharedValue(ANDROID_INFO_HEIGHT);
  const scrollY = useSharedValue(0);
  const isAtMaxHeight = useSharedValue(false);
  const scrollRef = useRef<Animated.ScrollView>(null);
  const scrollYAndroid = useSharedValue(0);
  
  useEffect(() => {
    if (Platform.OS === 'web') return;
    top.value = withTiming(isSwiping ? 0 : -120, { duration: 300 });
  }, [isSwiping]);

  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: top.value }]
    };
  });

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

    runOnJS(foo2)()
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

  function foo2(): void {
    heightAndroid.value = withTiming(ANDROID_INFO_HEIGHT, { duration: 250 }, () => {
      runOnJS(setIsSwiping)(true);
    });

    setTimeout(() => {
      setShowContent(false);
    }, 20);
  }

  function foo(): void {
    heightAndroid.value = withTiming(ANDROID_INFO_HEIGHT, { duration: 250 }, () => {
      runOnJS(setIsSwiping)(false)
    });
    setTimeout(() => {
      setShowContent(true);
    }, 275);
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

  function handleFavorite(): void {
    setIsFavorite(prev => {
      if (!prev) SoundService.play('POP_PICK');
      return !prev;
    });
  }

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const handleWheel = (event: any) => {
    const deltaY = event.deltaY * 0.5;

    if (isAtMaxHeight.value) {
      if (scrollY.value === 0 && deltaY < 0) {
        isAtMaxHeight.value = false;
        height.value = Math.max(height.value + deltaY, INITIAL_INFO_HEIGHT);
      } else {
        if (scrollRef.current) {
          scrollY.value = Math.min(scrollY.value + deltaY, 300); // Change depending on the Scroll content height
          scrollRef.current.scrollTo({ y: scrollY.value, animated: false });
        }
      }
    } else {
      height.value = Math.min(Math.max(height.value + deltaY, INITIAL_INFO_HEIGHT), MAX_HEIGHT);
      if (height.value >= MAX_HEIGHT) {
        isAtMaxHeight.value = true;
      }
    }
  };

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const cardAnimatedScale = useDerivedValue(() =>
    withSpring(
      interpolate(height.value, [INITIAL_INFO_HEIGHT, MAX_HEIGHT], [1, 0.5], 'clamp'),
      {
        damping: 20,
        stiffness: 90,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      }
    )
  );
  
  const cardAnimatedTranslateY = useDerivedValue(() =>
    withSpring(
      interpolate(height.value, [INITIAL_INFO_HEIGHT, MAX_HEIGHT], [0, -225], 'clamp'),
      {
        damping: 20,
        stiffness: 90,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      }
    )
  );

  const cardAndroidAnimatedScale = useDerivedValue(() =>
    withSpring(
      interpolate(heightAndroid.value, [ANDROID_INFO_HEIGHT, ANDROID_MAX_HEIGHT], [1, 0.5], 'clamp'),
      {
        damping: 20,
        stiffness: 90,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      }
    )
  );
  
  const cardAndroidAnimatedTranslateY = useDerivedValue(() =>
    withSpring(
      interpolate(heightAndroid.value, [ANDROID_INFO_HEIGHT, ANDROID_MAX_HEIGHT], [0, -225 + 120], 'clamp'),
      {
        damping: 20,
        stiffness: 90,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      }
    )
  );

  const cardAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: cardAnimatedTranslateY.value },
      { scale: cardAnimatedScale.value },
    ],
  }));
  
  const cardAndroidAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: cardAndroidAnimatedTranslateY.value },
      { scale: cardAndroidAnimatedScale.value },
    ],
  }));

  const RenderFavoriteToggle = () => (
    <ThemedView style={cardStyles.favoriteContainer}>
      <TouchableOpacity onPress={handleFavorite} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
        {
          isFavorite ? 
          <MaterialIcons name="star" style={[cardStyles.favoriteIcon, {color: 'darkorange'}]}></MaterialIcons> :
          <MaterialIcons name="star-outline" style={cardStyles.favoriteIcon}></MaterialIcons>
        }
        
      </TouchableOpacity>
    </ThemedView>
  );

  const scrollAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value, { damping: 20, stiffness: 90 }),
    };
  });

  const scrollAndroidAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(heightAndroid.value, { damping: 20, stiffness: 90 }),
    };
  });


  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      let deltaY = event.translationY < 0 ? 10 : -10;
      if (isAtMaxHeight.value) {
        if (scrollYAndroid.value === 0 && deltaY < 0) {
          isAtMaxHeight.value = false;
          heightAndroid.value = Math.max(heightAndroid.value + deltaY, ANDROID_INFO_HEIGHT);
        }
      } else {
        heightAndroid.value = Math.min(Math.max(heightAndroid.value + deltaY, ANDROID_INFO_HEIGHT), ANDROID_MAX_HEIGHT);
        if (heightAndroid.value >= ANDROID_MAX_HEIGHT) {
          isAtMaxHeight.value = true;
          heightAndroid.value = ANDROID_MAX_HEIGHT;
        }
      }
    }
  );

  return (
      <Animated.View style={styles.container}>
        {showContent && <RenderFavoriteToggle></RenderFavoriteToggle>}
{   isSwiping &&     <ThemedView style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
          }}>
            <Pressable style={{flex: 1, width: '100%'}} onPress={foo}></Pressable>
        </ThemedView>
}
        <Animated.View style={Platform.OS !== 'web' && topAnimatedStyle}>
          {
            Platform.OS === 'web' ? (
              <Animated.View style={[opacityStyle, cardAnimatedStyle]}>
                <Image style={[styles.image, cardStyles.card]}
                      source={CARD_IMAGE_MAP[id]}
                       />
              </Animated.View>
            ) : (<>
              <GestureDetector gesture={gesture}>
                <Animated.View style={[opacityStyle, rotationStyle, cardStyles.card, cardAndroidAnimatedStyle]}>
                  <Pressable onPress={() => console.log('pressed')}>
                    <Image style={[styles.image]}
                          source={CARD_IMAGE_MAP[id]}
                          contentFit={'fill'} />
                  </Pressable>
                </Animated.View>
              </GestureDetector>
            </>)
          }
        </Animated.View>
        {
          showContent &&       
          <ThemedView style={styles.bottomContainer}>
            <TouchableOpacity style={ButtonStyles.button} 
                              onPress={goBack} 
                              accessibilityLabel={BACK_SENTENCE}>
              <View style={ButtonStyles.insetBorder}>
                <IconSymbol name="clear"></IconSymbol>
              </View>
            </TouchableOpacity>
          </ThemedView>
        }

{
        Platform.OS !== 'web' && showContent ?
        <ThemedView style={cardStyles.scrollContainer}>
          <GestureDetector gesture={panGesture} touchAction="pan-y">
            <ThemedView style={cardStyles.panContainer}>
              <ThemedView style={cardStyles.panIndicator}></ThemedView>
            </ThemedView>
          </GestureDetector>
          <Animated.ScrollView 
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={69}
            bounces={false}
            contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
            style={[scrollAndroidAnimatedStyle]}>
            <ThemedView>
            {
              new Array(40).fill(null).map((e, i) => <ThemedText key={i}>{i}</ThemedText>)
            }
            </ThemedView>
          </Animated.ScrollView>
        </ThemedView>


: Platform.OS === 'web' && showContent && <Animated.ScrollView 
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={69}
    onScroll={scrollHandler}
    scrollEnabled={false}
    ref={scrollRef}
    contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
    style={[cardStyles.scrollContainer, scrollAnimatedStyle]}>
    <ThemedView>
    {
      new Array(40).fill(null).map((e, i) => <ThemedText key={i}>{i}</ThemedText>)
    }
    </ThemedView>
  </Animated.ScrollView>
      }
      </Animated.View>

     
  );
};

const cardStyles = StyleSheet.create({
  card: {
    boxShadow: '8px 12px 12px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: 20
  },
  favoriteContainer: {
    position: 'absolute',
    right: 29,
    top: 22,
    bottom: 0,
    padding: 2
  },
  favoriteIcon: {
    fontSize: 32,
    width: 30,
    height: 30,
    color: Colors.light.icon,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {height: 2, width: 2},
    textShadowRadius: 4 
  },
  scrollContainer: {
    width: '100%',  
    backgroundColor: 'white', 
    position: 'absolute', 
    bottom: 0, 
    touchAction: 'none', 
    borderTopLeftRadius: 60, 
    borderTopRightRadius: 60,
  },
  panContainer: {
    borderTopLeftRadius: 60, 
    borderTopRightRadius: 60,
    height: 50,
    backgroundColor: Colors.light.background,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  },
  panIndicator: {
    width: 50,
    height: 6,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    backgroundColor: Colors.light.skeleton,
    marginInline: 'auto'
  }
})