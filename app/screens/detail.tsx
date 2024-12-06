import 
  Animated, { 
  Extrapolation, 
  interpolate, 
  runOnJS, 
  useAnimatedStyle, 
  useDerivedValue, 
  useSharedValue, 
  withSpring, 
  withTiming 
} from "react-native-reanimated";

import { useContext, useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import { Image } from 'expo-image';
import { Dimensions, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";

import { 
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
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

const { height, width } = Dimensions.get('window');

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
  const top = useSharedValue<number>(-120);
  const height = useSharedValue(238);
  const scrollY = useSharedValue(0);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    top.value = withTiming(isSwiping ? 0 : -120, { duration: 300 });
  }, [isSwiping]);

  const animatedStyle = useAnimatedStyle(() => {
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
    setIsSwiping(true);
    SoundService.play('POP_PICK');
    setTimeout(() => {
      setShowContent(false);
    }, 100);
  }

  function foo(): void {
    setIsSwiping(false);

    setTimeout(() => {
      setShowContent(true);
    }, 325);
  }

  function onGestureFinish() {
    'worklet';
    rotateX.value = withTiming(0, {duration: 250});
    rotateY.value = withTiming(0, {duration: 250});

    runOnJS(foo)()
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
    SoundService.play('POP_PICK');
    setIsFavorite(prev => !prev);
  }

  const animatedScale = useDerivedValue(() =>
    withSpring(
      interpolate(height.value, [120, 500], [1, 0.5], 'clamp'),
      {
        damping: 20,
        stiffness: 90,
        restDisplacementThreshold: 0.01, // Precisión para detener la animación
        restSpeedThreshold: 0.01,
      }
    )
  );
  
  const animatedTranslateY = useDerivedValue(() =>
    withSpring(
      interpolate(height.value, [120, 500], [0, Platform.OS === 'web' ? -164 : -124], 'clamp'),
      {
        damping: 20,
        stiffness: 90,
        restDisplacementThreshold: 0.01, // Precisión para detener la animación
        restSpeedThreshold: 0.01,
      }
    )
  );
  
  const picanimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: animatedTranslateY.value },
      { scale: animatedScale.value },
    ],
  }));

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    scrollY.value = yOffset;

    height.value = interpolate(
      yOffset,
      [0, 380], // Rango del desplazamiento
      [120, 500], // Rango de altura
      'clamp' // Limitar los valores interpolados al rango
    );
  };

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

  const fooanimatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(height.value, { damping: 20, stiffness: 90 }), // Animamos la altura con spring
    };
  });

  return (
    
      <Animated.View style={styles.container}>
        {showContent && <RenderFavoriteToggle></RenderFavoriteToggle>}
        <Animated.View>
          {
            Platform.OS === 'web' ? (
              <Animated.View style={[opacityStyle, picanimatedStyle]}>
                <Image style={[styles.image, cardStyles.card, {top: -120}]}
                      source={CARD_IMAGE_MAP[id]}
                       />
              </Animated.View>
            ) : (<>
              <GestureDetector gesture={gesture}>
                <Animated.View style={[opacityStyle, rotationStyle, cardStyles.card, picanimatedStyle]}>
                  <Image style={styles.image}
                        source={CARD_IMAGE_MAP[id]}
                        contentFit={'fill'} />
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
        showContent && 
        <Animated.ScrollView showsVerticalScrollIndicator={false}
        scrollEventThrottle={75}
        onScroll={handleScroll}
                    contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    style={[cardStyles.scrollContainer, fooanimatedStyle]}>
          <ThemedView>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
            <ThemedText>HI</ThemedText>
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
    height: 238, 
    backgroundColor: 'white', 
    position: 'absolute', 
    bottom: 0, 
    touchAction: 'none', 
    borderTopLeftRadius: 60, 
    borderTopRightRadius: 60,
    boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.2)',
    padding: 20
  }
})