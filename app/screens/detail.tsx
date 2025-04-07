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

import React, { useCallback } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import { Image } from 'expo-image';
import { Platform, Pressable, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import { 
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload, 
} from "react-native-gesture-handler";

import SoundService from "@/core/services/sounds.service";
import { DataRxjs } from "@/core/rxjs/DataRxjs";

import { AppContext } from "../_layout";
import { ButtonStyles, cardDetailStyles, DetailStyles } from '@/shared/styles/component.styles';
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { getImageLanguage } from "@/shared/definitions/utils/functions";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import DetailCardScroll from "@/components/dedicated/detail/detail.scroll";

const MAX_HEIGHT = 618;
const MIN_HEIGHT = 268;
const MOVING_HEIGHT = 70;

export default function DetailScreen() {
  console.log('Detail Screen')
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const styles = DetailStyles;
  const router = useRouter();
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(true);
  const top = useSharedValue<number>(0);
  const [card, setCard] = useState<Card>();
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const sheetRef = useRef<BottomSheet>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const animatedPosition = useSharedValue(0);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    setCard(state.cardState.cards.find(card => card.id === Number(id)));
  }, [state.cardState.loaded]);

  useEffect(() => {
    const favorites = DataRxjs.getDataSync<number[]>('favorites');
    setIsFavorite(favorites.includes(Number(id)))
  }, [])
  
  useEffect(() => {
    if (Platform.OS === 'web') return;
    top.value = withTiming(isSwiping ? 0 : (MOVING_HEIGHT * -1), { duration: 200 });
  }, [isSwiping]);

  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: top.value }]
    };
  });

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

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

    runOnJS(startSwipe)();
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

  function startSwipe(): void {
    setTimeout(() => runOnJS(setIsSwiping)(true), 200);
    setTimeout(() => sheetRef.current?.close(), 400);
    
  }

  function stopSwipe(): void {
    runOnJS(setIsSwiping)(false);
    setTimeout(() => sheetRef.current?.snapToIndex(0), 400);
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

  async function goBack(): Promise<void> {
    if (router.canGoBack()) {
      await playSound();
      router.back();
    } else {
      router.replace('/');
    }
  }

  function handleFavorite(): void {
    const value = Number(id);
    setIsFavorite(prev => {
      if (!prev) {
        SoundService.play('POP_PICK');
        DataRxjs.addFavorite(value);
      } else {
        SoundService.play('AUDIO_MENU_CLOSE');
        DataRxjs.removeFavorite(value);
      }
      return !prev;
    });
  }

  const cardAnimatedScale = useDerivedValue(() =>
    withSpring(
      interpolate(
        animatedPosition.value, 
        [MAX_HEIGHT, MIN_HEIGHT], 
        [1, 0.35],
         'clamp'
      ),
      {
        damping: 30,
        stiffness: 150,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      }
    )
  );
  
  const cardAnimatedTranslateY = useDerivedValue(() =>
    withSpring(
      interpolate(
        animatedPosition.value, 
        [MAX_HEIGHT, MIN_HEIGHT], 
        [-70, -270],
         'clamp'
      ),
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
      interpolate(
        animatedPosition.value, 
        [MAX_HEIGHT, MIN_HEIGHT], 
        [1, 0.35],
        'clamp'
      ),
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
      interpolate(
        animatedPosition.value, 
        [MAX_HEIGHT, MIN_HEIGHT], 
        [0, -200],
        'clamp'
      ),
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
      { scale: Math.min(cardAnimatedScale.value, 1) },
    ],
  }));
  
  const cardAndroidAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: cardAndroidAnimatedTranslateY.value },
      { scale: cardAndroidAnimatedScale.value },
    ],
  }));

  const RenderFavoriteToggle = () => (
    <ThemedView style={cardDetailStyles.favoriteContainer}>
      <TouchableOpacity onPress={handleFavorite} 
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
        {
          isFavorite ? 
            <MaterialIcons name="star" 
                          style={[cardDetailStyles.favoriteIcon, {color: 'darkorange'}]}>
            </MaterialIcons> :
            <MaterialIcons name="star-outline" style={cardDetailStyles.favoriteIcon}></MaterialIcons>
        }
      </TouchableOpacity>
    </ThemedView>
  );

  const handleSheetChanges = useCallback((index: number) => {
    setScrollIndex(index);
  }, []);

  return (
    <Animated.View style={styles.container}>
      { showContent && <RenderFavoriteToggle></RenderFavoriteToggle>}
      { isSwiping && <ThemedView style={cardDetailStyles.overlay}>
                      <Pressable style={{flex: 1, width: '100%'}} 
                                 onPress={stopSwipe}>
                      </Pressable>
                    </ThemedView>
      }
      <Animated.View style={Platform.OS !== 'web' && topAnimatedStyle}>
        {
          Platform.OS === 'web' ? (
            <Animated.View style={[cardAnimatedStyle]}>
              <Image style={[styles.image, cardDetailStyles.card]}
                     source={getImageLanguage(lang, Number(id))}
                     placeholder={BACKWARD_CARD}/>
            </Animated.View>
          ) : (<>
            <GestureDetector gesture={gesture}>
              <Animated.View style={[
                rotationStyle,
                cardDetailStyles.card,
                cardAndroidAnimatedStyle,
                
              ]}>
                <Image style={[styles.image]}
                       source={getImageLanguage(lang, Number(id))}
                       placeholder={BACKWARD_CARD}
                       contentFit={'fill'} />
              </Animated.View>
            </GestureDetector>
          </>)
        }
      </Animated.View>
      { showContent &&       
        <ThemedView style={styles.bottomContainer}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={goBack} 
                            accessibilityLabel={'BACK_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </ThemedView>
      }
      {
        card &&
        <BottomSheet
          ref={sheetRef}
          index={scrollIndex}
          snapPoints={[210, 500]}
          enableDynamicSizing={false}
          overDragResistanceFactor={1}
          onChange={handleSheetChanges}
          animatedPosition={animatedPosition}
          handleStyle={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20, 
            height: 32,
            width: '100%',
          }}
          handleIndicatorStyle={{width: 80}}>
          
          <DetailCardScroll card={card} 
                            state={state} 
                            index={scrollIndex}/>
        </BottomSheet>
      }
    </Animated.View>  
  );
};