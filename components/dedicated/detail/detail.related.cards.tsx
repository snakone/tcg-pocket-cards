import { Animated, FlatList, Platform, Pressable } from "react-native";
import { router } from "expo-router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Image } from 'expo-image';
import React from "react";

import { AppContext } from "@/app/_layout";
import { ThemedView } from "@/components/ThemedView";
import SoundService from "@/core/services/sounds.service";
import { AppState } from "@/hooks/root.reducer";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CardGridStyles, CARD_IMAGE_WIDTH_3 } from "@/shared/styles/component.styles";
import ScrollService from "@/core/services/scroll.service";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { getImageLanguage116x162 } from "@/shared/definitions/utils/functions";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

interface DetailRelatedProps {
  card: Card,
  state: AppState,
  scrollService?: ScrollService
}

export default function DetailRelatedCards({card, state, scrollService}: DetailRelatedProps) {

  const [relatedCards, setRelatedCards] = useState<Card[]>([]);
  const flatListRef = useRef(null);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { dispatch } = context;

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
          <Image accessibilityLabel={item.name[lang]} 
                 style={[CardGridStyles.image, {width: CARD_IMAGE_WIDTH_3}]} 
                 source={getImageLanguage116x162(lang, item.id)}
                 placeholder={BACKWARD_CARD}/>
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