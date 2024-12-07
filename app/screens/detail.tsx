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

import { ButtonStyles, DetailStyles, filterStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "@/components/ThemedView";
import { BACK_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { AppContext } from "../_layout";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import SoundService from "@/core/services/sounds.service";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/shared/definitions/utils/colors";
import { ThemedText } from "@/components/ThemedText";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { RARITY_MAP, SERIES_MAP, STAGE_MAP, TYPE_MAP } from "@/shared/definitions/utils/contants";
import { useI18n } from "@/core/providers/LanguageProvider";

const INITIAL_INFO_HEIGHT = 100;
const MAX_HEIGHT = 450;
const ANDROID_INFO_HEIGHT = 220;
const movingHeight = 110;

export default function DetailScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
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
  const [card, setCard] = useState<Card>();
  const {i18n} = useI18n();
  
  useEffect(() => {
    if (Platform.OS === 'web') return;
    top.value = withTiming(isSwiping ? 0 : (movingHeight * -1), { duration: 300 });
  }, [isSwiping]);

  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: top.value }]
    };
  });

  useEffect(() => {
    setCard(state.cardState.cards.find(card => card.id === Number(id)));
  }, [])

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
      interpolate(heightAndroid.value, [ANDROID_INFO_HEIGHT, MAX_HEIGHT], [1, 0.5], 'clamp'),
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
      interpolate(heightAndroid.value, [ANDROID_INFO_HEIGHT, MAX_HEIGHT], [0, -225 + movingHeight], 'clamp'),
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
        heightAndroid.value = Math.min(Math.max(heightAndroid.value + deltaY, ANDROID_INFO_HEIGHT), MAX_HEIGHT);
        if (heightAndroid.value >= MAX_HEIGHT) {
          isAtMaxHeight.value = true;
          heightAndroid.value = MAX_HEIGHT;
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
            <Pressable style={{flex: 1, width: '100%'}} onPress={stopSwipe}></Pressable>
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
                  <Image style={[styles.image]}
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
        Platform.OS !== 'web' && showContent && card ?
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
            <ThemedView style={{padding: 20, marginBottom: 65}}>
              <ThemedText style={{fontSize: 30, textAlign: 'center', marginTop: 4, color: Colors.light.bold}}>{card.name}</ThemedText>
              <ThemedView style={{flexDirection: 'row', gap: 6, justifyContent: 'center', alignItems: 'center', marginTop: 12, marginBottom: 30}}>
                
                {Array.from({ length: RARITY_MAP[card.rarity]?.amount }).map((_, i) => (
                <Image
                  key={i}
                  source={RARITY_MAP[card.rarity]?.image}
                  style={[
                    { width: 25, height: 25},
                    card.rarity === 7 && {width: 38}
                  ]}
                />
              ))}
              </ThemedView>

              <ThemedView style={cardStyles.itemInfo}>
                <ThemedText style={{textAlign: 'center', fontSize: 13}}>{card.flavor}</ThemedText>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12}]}>
                <ThemedView style={{width: '35%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('illustration')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '65%', paddingVertical: 10, paddingHorizontal: 20}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{card.artist}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
                <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13, backgroundColor: 'white', paddingVertical: 4}}>{i18n.t('attacks')}</ThemedText>
                </ThemedView>

                <ThemedView style={{padding: 16}}>
                  {
                    card.attacks?.map((att, i) => (
                      <ThemedView key={i} style={[{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}, 
                        i !== (card.attacks!.length - 1) && {marginBottom: 20}]}>
                        <ThemedView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                          <ThemedView style={{flexDirection: 'row', alignItems: 'center', minWidth: 100}}>
                            {
                              att.energy.map((energy, j) => (
                                <Image key={j} source={TYPE_MAP[energy].image} style={{width: 18, height: 18, top: 1, marginRight: 5}}></Image>
                              ))
                            }
                          </ThemedView>
                          <ThemedText style={{fontSize: 16, marginLeft: 16, color: Colors.light.bold}}>{att.name}</ThemedText>
                        </ThemedView>

                        <ThemedText style={{fontSize: 16, color: Colors.light.bold}}>{att.damage}</ThemedText>

                        {att.description && <ThemedView style={{width: '100%'}}>
                          <ThemedText style={{marginTop: 12}}>{att.description}</ThemedText>
                        </ThemedView>}
                      </ThemedView>
                    ))
                  }
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12, marginBottom: 10}]}>
                <ThemedView style={{width: '40%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('pokemon')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '60%', paddingVertical: 10, paddingHorizontal: 20}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t(STAGE_MAP[card.stage].label)}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12, marginBottom: 10}]}>
                <ThemedView style={{width: '40%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('type')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '60%', paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={TYPE_MAP[card.element].image} style={{width: 18, height: 18, top: 1, left: 2}}></Image>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12, marginBottom: 10}]}>
                <ThemedView style={{width: '40%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('PS')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '60%', paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{card.health}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12, marginBottom: 10}]}>
                <ThemedView style={{width: '40%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('weak')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '60%', paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <ThemedView style={{flexDirection: 'row', gap: 2, position: 'relative'}}>
                    <Image source={card.weak && TYPE_MAP[card.weak].image} style={{width: 18, height: 18, top: 1}}></Image>
                    <ThemedText style={{textAlign: 'center', fontSize: 13, top: 1, position: 'absolute', left: 25}}>+20</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              
              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12, marginBottom: 10}]}>
                <ThemedView style={{width: '40%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('cost_of_retire')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '60%', paddingVertical: 10, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 6}}>
                  {Array.from({ length: card.retreat }).map((_, i) => (
                    <Image key={i} source={TYPE_MAP[9].image} style={{width: 18, height: 18, top: 1}}></Image>
                  ))}
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {overflow: 'hidden', padding: 0, flexDirection: 'row', borderRadius: 12, marginBottom: 30}]}>
                <ThemedView style={{width: '40%', paddingVertical: 10, paddingHorizontal: 20, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', zIndex: 100}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{i18n.t('serie')}</ThemedText>
                </ThemedView>
                <ThemedView style={{backgroundColor: 'white', width: '60%', paddingVertical: 10, paddingHorizontal: 20}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13}}>{card.series !== undefined && SERIES_MAP[card.series].label}</ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[cardStyles.itemInfo, {padding: 0, overflow: 'hidden'}]}>
                <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
                  <ThemedText style={{textAlign: 'center', fontSize: 13, backgroundColor: 'white', paddingVertical: 4}}>{i18n.t('related_cards')}</ThemedText>
                </ThemedView>

                <ThemedView style={{padding: 16}}>
                 <ThemedText>CARDS</ThemedText>
                </ThemedView>
              </ThemedView>

            </ThemedView>
          </Animated.ScrollView>
        </ThemedView>


: Platform.OS === 'web' && showContent && 
<ThemedView style={[cardStyles.scrollContainer]}>
<ThemedView style={cardStyles.panContainer}>
              <ThemedView style={cardStyles.panIndicator}></ThemedView>
            </ThemedView>
  <Animated.ScrollView 
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={69}
      onScroll={scrollHandler}
      scrollEnabled={false}
      ref={scrollRef}
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
      style={scrollAnimatedStyle}>
      <ThemedView>
      {
        new Array(40).fill(null).map((e, i) => <ThemedText key={i}>{i}</ThemedText>)
      }
      </ThemedView>
    </Animated.ScrollView>
</ThemedView>


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
    width: 60,
    height: 6,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    backgroundColor: Colors.light.skeleton,
    marginInline: 'auto'
  },
  itemInfo: {
    padding: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    width: '100%',
    marginBottom: 30,
  }
})