import 
  Animated, { 
  Extrapolation, 
  interpolate, 
  runOnJS, 
  useAnimatedScrollHandler, 
  useAnimatedStyle, 
  useDerivedValue, 
  useSharedValue, 
  withSpring, 
  withTiming 
} from "react-native-reanimated";

import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import { Image } from 'expo-image';
import { Platform, Pressable, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Subscription } from "rxjs";
import React from "react";

import { 
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload, 
} from "react-native-gesture-handler";

import { ButtonStyles, cardDetailStyles, DetailStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "@/components/ThemedView";
import { BACK_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { AppContext } from "../_layout";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import SoundService from "@/core/services/sounds.service";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import DetailCardScroll from "@/components/dedicated/detail/detail.scroll";
import Storage from "@/core/storage/storage.service";
import CardsService from "@/core/services/cards.service";
import { useError } from "@/core/providers/ErrorProvider";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import ScrollService from "@/core/services/scroll.service";
import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardStageENUM } from "@/shared/definitions/enums/card.enums";
import { EXPANSION } from "@/shared/definitions/enums/packs.enums";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";

const INITIAL_INFO_HEIGHT = 100;
const MAX_HEIGHT = 450;
const ANDROID_INFO_HEIGHT = 220;
const MOVING_HEIGHT = 110;

export default function DetailScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const cardsService = useMemo(() => new CardsService(), []);
  const scrollService = useMemo(() => new ScrollService(), []);
  const styles = DetailStyles;
  const router = useRouter();
  const navigation = useNavigation();
  const opacity = useSharedValue(0.5);
  const opacityDuration = Platform.OS === 'web' ? 500 : 1000;
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState<boolean>(!!state.settingsState.favorites?.includes(Number(id)));
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(true);
  const top = useSharedValue<number>(0);
  const height = useSharedValue(INITIAL_INFO_HEIGHT);
  const heightAndroid = useSharedValue(ANDROID_INFO_HEIGHT);
  const scrollY = useSharedValue(0);
  const isAtMaxHeight = useSharedValue(false);
  const scrollRef = useRef<Animated.ScrollView>(null);
  const scrollYAndroid = useSharedValue(0);
  const [card, setCard] = useState<Card>();
  const [loading, setLoading] = useState(true);
  const { show: showError } = useError();

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', value: res });
          Storage.set('cards', res);
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          Storage.set('cards', []);
          setLoading(false);
        }
      });

      return sub;
  }, [dispatch]);
  
  useEffect(() => {
    const cards: Card[] = state.settingsState.cards;

    if (cards && cards.length !== 0 && !state.cardState.loaded) {
      dispatch({ type: 'SET_CARDS', value: cards });
      setLoading(false);
      return;
    }
    
    let sub: Subscription;
    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    if (Platform.OS !== 'web' || !state.cardState.loaded) return;
    let sub: Subscription;
    sub = scrollService.isReLatedCardScrollAtBegin$
      .subscribe(res => {
        if (!res) {
          window.removeEventListener('wheel', handleWheel);
        } else {
          window.addEventListener('wheel', handleWheel);
        }
    });
    
    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [state.cardState.loaded]);
  
  useEffect(() => {
    if (Platform.OS === 'web') return;
    top.value = withTiming(isSwiping ? 0 : (MOVING_HEIGHT * -1), { duration: 300 });
  }, [isSwiping]);

  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: top.value }]
    };
  });

  useEffect(() => {
    setCard(state.cardState.cards.find(card => card.id === Number(id)));
  }, [state.cardState.loaded])

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
    heightAndroid.value = withTiming(ANDROID_INFO_HEIGHT, { duration: 250 }, () => {
      runOnJS(setIsSwiping)(true);
    });

    setTimeout(() => {
      setShowContent(false);
    }, 20);
  }

  function stopSwipe(): void {
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
    const value = Number(id);
    setIsFavorite(prev => {
      if (!prev) {
        SoundService.play('POP_PICK');
        dispatch({type: 'SET_FAVORITE', value});
        Storage.setFavorite(value);
      } else {
        dispatch({type: 'REMOVE_FAVORITE', value});
        Storage.removeFavorite(value);
      }
      return !prev;
    });
  }

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const handleWheel = (event: WheelEvent) => {
    const deltaY = event.deltaY * 0.5;

    if (isAtMaxHeight.value) {
      if (scrollY.value === 0 && deltaY < 0) {
        isAtMaxHeight.value = false;
        height.value = Math.max(height.value + deltaY, INITIAL_INFO_HEIGHT);
      } else {
        if (scrollRef.current) {
          scrollY.value = Math.min(scrollY.value + deltaY, 840); 
          // Change depending on the Scroll content height
          scrollRef.current.scrollTo({ y: scrollY.value, animated: false });
        }
      }
    } else {
      height.value = Math.min(
        Math.max(height.value + deltaY, INITIAL_INFO_HEIGHT), 
        MAX_HEIGHT
      );
      if (height.value >= MAX_HEIGHT) {
        isAtMaxHeight.value = true;
      }
    }
  };

  const cardAnimatedScale = useDerivedValue(() =>
    withSpring(
      interpolate(
        height.value, 
        [INITIAL_INFO_HEIGHT, MAX_HEIGHT], 
        [1, 0.5], 
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
  
  const cardAnimatedTranslateY = useDerivedValue(() =>
    withSpring(
      interpolate(
        height.value, 
        [INITIAL_INFO_HEIGHT, MAX_HEIGHT], 
        [0, -225], 
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
        heightAndroid.value, 
        [ANDROID_INFO_HEIGHT, MAX_HEIGHT], 
        [1, 0.5],
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
        heightAndroid.value, 
        [ANDROID_INFO_HEIGHT, MAX_HEIGHT], 
        [0, -225 + MOVING_HEIGHT], 
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
          heightAndroid.value = Math.max(
            heightAndroid.value + deltaY, 
            ANDROID_INFO_HEIGHT
          );
        }
      } else {
        heightAndroid.value = Math.min(
          Math.max(heightAndroid.value + deltaY, ANDROID_INFO_HEIGHT), 
          MAX_HEIGHT
        );
        if (heightAndroid.value >= MAX_HEIGHT) {
          isAtMaxHeight.value = true;
          heightAndroid.value = MAX_HEIGHT;
        }
      }
    }
  );

  return (
    <Animated.View style={styles.container}>
       { loading && <LoadingOverlay/> }
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
            <Animated.View style={[opacityStyle, cardAnimatedStyle]}>
              <Image style={[styles.image, cardDetailStyles.card]}
                     source={CARD_IMAGE_MAP[id]}
                      />
            </Animated.View>
          ) : (<>
            <GestureDetector gesture={gesture}>
              <Animated.View style={[
                opacityStyle,
                rotationStyle,
                cardDetailStyles.card,
                cardAndroidAnimatedStyle
              ]}>
                <Image style={[styles.image]}
                      source={CARD_IMAGE_MAP[id]}
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
                            accessibilityLabel={BACK_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </ThemedView>
      }
      { Platform.OS !== 'web' && showContent && card ?
          <ThemedView style={cardDetailStyles.scrollContainer}>
            <GestureDetector gesture={panGesture} touchAction="pan-y">
              <ThemedView style={cardDetailStyles.panContainer}>
                <ThemedView style={cardDetailStyles.panIndicator}></ThemedView>
              </ThemedView>
            </GestureDetector>
            <Animated.ScrollView 
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={69}
              bounces={false}
              contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
              style={[]}>
              <DetailCardScroll card={card} state={state}></DetailCardScroll>
            </Animated.ScrollView>
          </ThemedView> : 
        Platform.OS === 'web' && showContent && card &&
          <ThemedView style={[cardDetailStyles.scrollContainer]}>
            <ThemedView style={cardDetailStyles.panContainer}>
              <ThemedView style={cardDetailStyles.panIndicator}></ThemedView>
            </ThemedView>
            <Animated.ScrollView 
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={69}
                onScroll={scrollHandler}
                scrollEnabled={false}
                ref={scrollRef}
                contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
                style={scrollAnimatedStyle}>
              <DetailCardScroll card={card} state={state} scrollService={scrollService}></DetailCardScroll>
            </Animated.ScrollView>
          </ThemedView>
      }
    </Animated.View>  
  );
};