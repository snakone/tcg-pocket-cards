import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { Image } from "expo-image";

import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, CardGridStyles, filterStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT, SEARCH_LABEL } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { AppContext } from "@/app/_layout";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CARD_IMAGE_MAP_69x96 } from "@/shared/definitions/utils/card.images";
import { Colors } from "@/shared/definitions/utils/colors";
import { getFilterSearch, ICON_WIDTH, RARITY_CAN_TRADE, RARITY_MAP } from "@/shared/definitions/utils/constants";
import SkeletonCardGrid from "@/components/skeletons/SkeletonCardGrid";
import StateButton from "@/components/ui/StateButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterCards } from "@/shared/definitions/utils/functions";
import { CardExpansionENUM, CardExpansionTypeENUM } from "@/shared/definitions/enums/card.enums";

export default function PickDesiredMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [cards, setCards] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filterObj = useRef<FilterSearch>(getFilterSearch());

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setCards(state.cardState.cards.filter(card =>
      card.name.toLowerCase()?.includes(text.toLowerCase())
  ))}, [state.cardState.cards]);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(value: number | null, sound = true): Promise<void> {
    if (sound) { await playSound(); }
    onClose(value);
  }

  const renderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded ? (
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>
      ) : (
        <SkeletonCardGrid columns={5} />
      );
    }, [state.cardState.loaded]);
  
    return renderCardState();
  };

  function handleClick(value: number): void {
    SoundService.play('POP_PICK');
    closeMenu(value, false);
  }

  useEffect(() => {
    setCards(state.cardState.cards.filter(card => RARITY_CAN_TRADE.includes(card?.rarity) && card.series !== CardExpansionTypeENUM.A2));
  }, [state.cardState.cards]);

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => handleClick(item.id)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          <Image accessibilityLabel={item.name}
                  source={CARD_IMAGE_MAP_69x96[String(item.id)]}
                  style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  ), []);

  const manageFilter = useCallback((index: number) => {
    const filter = filterObj.current;
    (filter.rarity as any)[index] = !(filter.rarity as any)[index];
    const tradeable = state.cardState.cards.filter(card => RARITY_CAN_TRADE.includes(card?.rarity));
    const filtered = filterCards(filter, tradeable, []);
    setCards(filtered)
  }, [filterObj.current])

  const renderRarityGrid = useCallback(() => {
    return (
      <ThemedView style={[filterStyles.flexContainer, { flexWrap: 'wrap', justifyContent: 'center' }]}>
      {RARITY_CAN_TRADE.map((key, index) => {
        const image = (RARITY_MAP as any)[key]?.image;
        const amount = (RARITY_MAP as any)[key]?.amount;

        return image && (
          <StateButton
            propFilter="rarity"
            keyFilter={key}
            onClick={() => manageFilter(key)}
            key={index}
            filterObj={filterObj}
            style={[
              { overflow: 'hidden' },
              filterStyles.button,
              filterStyles.imageContainer,
              { width: ICON_WIDTH + (amount - 1) * 20 },
            ]}
          >
            {Array.from({ length: amount }).map((_, i) => (
              <Image
                key={index + (i + 1)}
                source={image}
                style={filterStyles.image}
              />
            ))}
          </StateButton>
        )
      })}
    </ThemedView>
    )
  }, [state.cardState.cards]);

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu(null)}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 645}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_a_desired')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0}]}>
          <ThemedView style={{flex: 1, alignItems: 'center'}}>
            <FlatList data={cards}
                      renderItem={renderCard}
                      numColumns={6}
                      showsVerticalScrollIndicator={false}
                      maxToRenderPerBatch={24}
                      initialNumToRender={6}
                      windowSize={12}
                      contentContainerStyle={{width: '100%', padding: 16, paddingTop: 0}}
                      keyExtractor={(item, index) => index + ''}
                      ListHeaderComponent={
                        <ThemedView style={{height: 118, backgroundColor: 'white'}}>
                          <TextInput placeholder={i18n.t('search')}
                                     value={searchQuery}
                                     onChangeText={handleSearch}
                                     placeholderTextColor={Colors.light.text}
                                     accessibilityLabel={SEARCH_LABEL}
                                     editable={state.cardState.loaded}
                                     inputMode='text'
                                     style={[
                                      CardGridStyles.searchInput, 
                                      {boxShadow: '5px 4px 12px rgba(0, 0, 0, 0.2)', width: 357.56, marginTop: 16, marginBottom: 6}
                                    ]}
                                  />
                                  {renderRarityGrid()}
                        </ThemedView>
                        
                      }
                      stickyHeaderIndices={[0]}
                      ListFooterComponent={<ThemedView style={{height: 12}}/>}
                      ListEmptyComponent={renderEmpty}
                    />
          </ThemedView>
        </ThemedView>
        <View style={styles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu(null)} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}