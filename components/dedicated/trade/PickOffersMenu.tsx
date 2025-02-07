import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";

import { TabMenu, TabOffersMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, CARD_IMAGE_WIDTH_3, CardGridStyles, filterStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT, SEARCH_LABEL } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { AppContext } from "@/app/_layout";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CARD_IMAGE_MAP_116x162, CARD_IMAGE_MAP_69x96 } from "@/shared/definitions/utils/card.images";
import { Colors } from "@/shared/definitions/utils/colors";
import { getFilterSearch, ICON_WIDTH, RARITY_CAN_TRADE, RARITY_MAP } from "@/shared/definitions/utils/constants";
import SkeletonCardGrid from "@/components/skeletons/SkeletonCardGrid";
import StateButton from "@/components/ui/StateButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterCards } from "@/shared/definitions/utils/functions";
import { createDeckStyles } from "@/app/screens/create_deck";
import { CardExpansionTypeENUM, CardRarityENUM } from "@/shared/definitions/enums/card.enums";

export default function PickOffersMenu({
  isVisible,
  onClose,
  animatedStyle,
  desired,
  offers
}: TabOffersMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [cards, setCards] = useState<Card[]>([]);
  const [filtered, setFiltered] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filterObj = useRef<FilterSearch>(getFilterSearch());
  const [current, setCurrent] = useState<(number | null)[]>(offers);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(cards.filter(card =>
      card.name.toLowerCase()?.includes(text.toLowerCase())
  ))}, [cards]);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(sound = true): Promise<void> {
    if (sound) { await playSound(); }
    onClose(current);
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

  const handleClick = useCallback((value: number, type: 'add' | 'remove') => {
    if (type === 'add' && current.filter(Boolean).length === 5 && !current.includes(value)) { return; }
    if (type === 'remove' && !value) { return; }
    SoundService.play('POP_PICK');
    setCurrent((prev) => {
      if (prev.includes(value)) {
        return prev.map(off => off === value ? null : off).sort((a, b) => b === null ? -1 : 1)
      }

      const newOffers = [...prev];
      const emptyIndex = newOffers.indexOf(null);
      if (emptyIndex !== -1) {
        newOffers[emptyIndex] = value;
      }
      
      return newOffers;
    });
  }, [current])

  useEffect(() => {
    const desiredCard = state.cardState.cards.find(card => desired.includes(card.id));

    if (desiredCard) {
      const filter = state.cardState.cards
                      .filter(card => card?.rarity === desiredCard.rarity && 
                                      card.series !== CardExpansionTypeENUM.A2 &&
                                      !desired.includes(card.id));
      setCards(filter);
      setFiltered(filter);

      setCurrent(prev => 
        prev.map(p => (state.cardState.cards
            .find(card => card.id === p)?.rarity === desiredCard.rarity) ? p : null
        )
      );

      (filterObj.current.rarity as any)[desiredCard.rarity] = true;
    }
  }, [state.cardState.cards, desired]);

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => handleClick(item.id, 'add')}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          { current.includes(item.id) && 
             <ThemedView style={[
              CardGridStyles.image, 
              offersStyles.included,
            ]}>
               <MaterialIcons name="remove-circle-outline" 
                              size={24} 
                              style={{width: 24, height: 24, color: 'red'}}>
                </MaterialIcons>
             </ThemedView>
          }
          <Image accessibilityLabel={item.name}
                  source={CARD_IMAGE_MAP_69x96[String(item.id)]}
                  style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  ), [current]);

  const renderOffered = useCallback(({item, index}: {item: any, index: number}) => (
    <View style={[CardGridStyles.imageContainer, {boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)'}]}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handleClick(item, 'remove')}
          style={[CardGridStyles.image, {
            justifyContent: 'center',
            alignItems: 'center',
            width: 67.5}]
          }>
          <View>
            { current[index] ? 
            <>
              <Image accessibilityLabel={item?.name} 
                     style={[
                  CardGridStyles.image, 
                  {width: 67.5}
                ]} 
              source={CARD_IMAGE_MAP_116x162[String(current[index])]}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [current]);

  const manageFilter = useCallback((index: number) => {
    const filter = filterObj.current;
    (filter.rarity as any)[index] = !(filter.rarity as any)[index];
    const tradeable = cards.filter(card => RARITY_CAN_TRADE.includes(card?.rarity));
    const filtered = filterCards(filter, tradeable, []);
    setFiltered(filtered)
  }, [filterObj.current]);

  const shouldFilterDisabled = (key: CardRarityENUM) =>  (
    Object.values(filterObj.current.rarity).some(Boolean) && 
    !(filterObj.current.rarity as any)[key]
  );

  const renderRarityGrid = useCallback(() => {
    return (
      <ThemedView style={[
        filterStyles.flexContainer, 
        { flexWrap: 'wrap', marginBottom: 20, justifyContent: 'center'}
      ]}>
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
            disabled={true}
            style={[
              { overflow: 'hidden' },
              filterStyles.button,
              filterStyles.imageContainer,
              { width: ICON_WIDTH + (amount - 1) * 20 },
              shouldFilterDisabled(key) && {opacity: 0.5}
            ]}>
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
  }, []);

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 765}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_offers')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0, maxHeight: '81%'}]}>
          <ThemedView style={{flex: 1, alignItems: 'center'}}>
            <FlatList data={filtered}
                      renderItem={renderCard}
                      numColumns={6}
                      showsVerticalScrollIndicator={false}
                      maxToRenderPerBatch={24}
                      initialNumToRender={6}
                      windowSize={12}
                      contentContainerStyle={{width: '100%', padding: 16, paddingTop: 0}}
                      keyExtractor={(item, index) => index + ''}
                      ListHeaderComponent={
                        <ThemedView style={{height: 236, backgroundColor: 'white'}}>
                          <TextInput placeholder={i18n.t('search')}
                                     value={searchQuery}
                                     onChangeText={handleSearch}
                                     placeholderTextColor={Colors.light.text}
                                     accessibilityLabel={SEARCH_LABEL}
                                     editable={state.cardState.loaded}
                                     inputMode='text'
                                     style={[
                                      CardGridStyles.searchInput, 
                                      offersStyles.input
                                    ]}
                                  />
                                  {renderRarityGrid()}
                                  <FlatList data={current}
                                            renderItem={renderOffered}
                                            numColumns={5}
                                            contentContainerStyle={{width: '100%', marginTop: 12}}
                                            style={{width: '100%', borderRadius: 8}}
                                            showsVerticalScrollIndicator={false}
                                            keyExtractor={(item, index) => index + ''}/>
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
                            onPress={() => closeMenu()} 
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

export const offersStyles = StyleSheet.create({
  input: {
    boxShadow: '5px 4px 12px rgba(0, 0, 0, 0.2)', 
    width: '100%', 
    marginTop: 16, 
    marginBottom: 6
  },
  included: {
    width: Platform.OS === 'web' ? 57.6 : 58, 
    position: 'absolute', 
    zIndex: 10, 
    opacity: 0.7, 
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});