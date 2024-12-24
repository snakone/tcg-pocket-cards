import { Animated, FlatList, Platform, Pressable } from "react-native";
import { router } from "expo-router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Image } from 'expo-image';

import { AppContext } from "@/app/_layout";
import { ThemedView } from "@/components/ThemedView";
import SoundService from "@/core/services/sounds.service";
import { AppState } from "@/hooks/root.reducer";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { CARD_IMAGE_MAP } from "@/shared/definitions/utils/card.images";
import { CardGridStyles, CARD_IMAGE_WIDTH_3 } from "@/shared/styles/component.styles";
import ScrollService from "@/core/services/scroll.service";
import React from "react";

interface DetailRelatedProps {
  card: Card,
  state: AppState,
  scrollService?: ScrollService
}

export default function DetailRelatedCards({card, state, scrollService}: DetailRelatedProps) {

  const [relatedCards, setRelatedCards] = useState<Card[]>([]);
  const flatListRef = useRef(null);

  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { dispatch } = context;

  useEffect(() => {
    setRelatedCards(state.cardState.cards.filter(c => card.related?.includes(c.id)))
  }, []);

  const playSound = async () => {
    SoundService.play('PICK_CARD_SOUND');
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (flatListRef.current !== null) {
      const scrollableNode: {scrollLeft: number} = (flatListRef.current as any).getScrollableNode();
      if (scrollableNode) {
        scrollService?.onRelatedCardsScroll(scrollableNode.scrollLeft === 0);
        scrollableNode.scrollLeft += event.deltaY;
      }
    }
  };

  const goToDetailScreen = async (id: number) => {
    await playSound();
    dispatch({type: 'SET_NAVIGATING', value: true});
    router.replace(`/screens/detail?id=${encodeURIComponent(id)}`);
  };

  const renderItem = useCallback(({ item }: { item: Card}) => (
    <Animated.View key={item.id} style={[
        CardGridStyles.imageContainer, 
        {marginHorizontal: 1, marginVertical: 1}
      ]}>
      <Pressable onPress={() => goToDetailScreen(item.id)} style={{ zIndex: 1, position: 'relative' }}>
          { state.settingsState.favorites?.includes(item.id) && 
            <ThemedView style={CardGridStyles.triangle}></ThemedView>
          }
          <Image accessibilityLabel={item.name} 
                 style={[CardGridStyles.image, {width: CARD_IMAGE_WIDTH_3}]} 
                 source={CARD_IMAGE_MAP[String(item.id)]}/>
      </Pressable>
    </Animated.View>
  ), []);
  
  return (
    <>
      {
        Platform.OS === 'web' ?
        <>
          <div onWheel={handleWheel}>
            <FlatList horizontal={true} 
                      showsHorizontalScrollIndicator={false}
                      data={relatedCards}
                      ref={flatListRef}
                      renderItem={renderItem}
                      keyExtractor={(card) => card.id + ''}/>
          </div>
        </> :
        <FlatList horizontal={true} 
                  showsHorizontalScrollIndicator={false}
                  data={relatedCards}
                  ref={flatListRef}
                  renderItem={renderItem}
                  keyExtractor={(card) => card.id + ''}/>
      }
    </>
  )
}