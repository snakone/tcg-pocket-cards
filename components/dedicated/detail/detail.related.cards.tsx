import { Animated, FlatList, Platform, Pressable } from "react-native";
import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Image } from 'expo-image';
import React from "react";
import { FlatList as AndroidFlatList } from "react-native-gesture-handler";
import { PanGestureHandler } from "react-native-gesture-handler";

import { AppState } from "@/hooks/root.reducer";
import SoundService from "@/core/services/sounds.service";

import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CardGridStyles, CARD_IMAGE_WIDTH_3 } from "@/shared/styles/component.styles";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { getImageLanguage116x162 } from "@/shared/definitions/utils/functions";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

interface DetailRelatedProps {
  card: Card,
  state: AppState,
}

export default function DetailRelatedCards({card, state}: DetailRelatedProps) {
  const [relatedCards, setRelatedCards] = useState<Card[]>([]);
  const flatListRef = useRef<AndroidFlatList>(null);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  let currentIndex = 0;

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const related = card.related?.map(id => state.cardState.cards.find(c => c.id === id)).filter(Boolean);
    if (related && related.length > 0) {
      setRelatedCards((related as Card[]));
    }
  }, []);
  
  const playSound = async () => {
    SoundService.play('PICK_CARD_SOUND');
  };

  const goToDetailScreen = async (id: number) => {
    await playSound();
    router.replace(`/screens/card_detail?id=${encodeURIComponent(id)}`);
  };

  const renderItem = useCallback(({ item }: { item: Card}) => (
    <Animated.View key={item.id} style={[
        CardGridStyles.imageContainer, 
        {marginHorizontal: 1, marginVertical: 1}
      ]}>
      <Pressable onLongPress={() => goToDetailScreen(item.id)} style={{ zIndex: 1, position: 'relative' }}>
        <Image accessibilityLabel={item.name[lang]} 
               style={[CardGridStyles.image, {width: CARD_IMAGE_WIDTH_3}]} 
               source={{uri: getImageLanguage116x162(lang, item.id)}}
               placeholder={BACKWARD_CARD}/>
      </Pressable>
    </Animated.View>
  ), []);

  const onGestureEvent = ({ nativeEvent }: any) => {
    if (nativeEvent.velocityX === 0 || nativeEvent.velocityY === 0) return;
      if (nativeEvent.translationX < 0 && currentIndex < relatedCards.length - 1) {
        currentIndex = Math.min(currentIndex + 2, relatedCards.length - 1);
      } else if (nativeEvent.translationX > 0 && currentIndex > 0) {
        currentIndex = Math.max(currentIndex - 2, 0);
      }
      
    if (flatListRef.current !== null) {
      const scrollableNode: {scrollLeft: number} = (flatListRef.current as any).getScrollableNode();
      if (scrollableNode) {
        scrollableNode.scrollLeft += ((nativeEvent.translationX * 3) * -1);
      }
    }
  };
  
  return (
    <>
      {
        Platform.OS === 'web' ?
        <>
          <PanGestureHandler onHandlerStateChange={onGestureEvent}>
            <div onDragStart={(e) => e.preventDefault()}>
              <FlatList horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        data={relatedCards}
                        ref={flatListRef}
                        renderItem={renderItem}
                        keyExtractor={(card) => card.id + ''}
                        />
                        
            </div>
          </PanGestureHandler>
        </> :
        <AndroidFlatList horizontal={true} 
                         showsHorizontalScrollIndicator={false}
                         data={relatedCards}
                         renderItem={renderItem}
                         keyExtractor={(card) => card.id + ''}/>
      }
    </>
  )
}