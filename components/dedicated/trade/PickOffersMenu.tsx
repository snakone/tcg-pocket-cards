import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";

import { TabOffersMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, CardGridStyles, filterStyles, gridHeightMap, LayoutStyles, ModalStyles, offersStyles, sortStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { AppContext } from "@/app/_layout";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { Colors } from "@/shared/definitions/utils/colors";
import { getFilterSearch, ICON_WIDTH, RARITY_CAN_TRADE, RARITY_MAP } from "@/shared/definitions/utils/constants";
import SkeletonCardGrid from "@/components/skeletons/SkeletonCardGrid";
import StateButton from "@/components/ui/StateButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterCards, getImageLanguage116x162, getImageLanguage69x96 } from "@/shared/definitions/utils/functions";
import { createDeckStyles } from "@/app/screens/create_deck";
import { CardExpansionTypeENUM, CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { collectionStyles } from "@/app/screens/collection";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

const numColumns = 6;

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
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const [cards, setCards] = useState<Card[]>([]);
  const [filtered, setFiltered] = useState<Card[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filterObj = useRef<FilterSearch>(getFilterSearch());
  const [current, setCurrent] = useState<(number | null)[]>(offers);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(cards.filter(card =>
      card.name[lang].toLowerCase()?.includes(text.toLowerCase())
  ))}, [cards, lang]);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(sound = true): Promise<void> {
    if (sound) { await playSound(); }
    onClose?.(current);
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
                                      card.series !== CardExpansionTypeENUM.A2B &&
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
            <>
              <ThemedView style={[
                  CardGridStyles.image, 
                  offersStyles.included,
                ]}>
              </ThemedView>
              <ThemedView style={[collectionStyles.remove, {width: 18, height: 18}]}>
                <ThemedText style={[
                                 {color: 'crimson', fontSize: 31, top: -4}, 
                                 Platform.OS !== 'web' && {fontSize: 24, top: -13, transform: [{scaleX: 1.5}, {scaleY: 1.5}]}]}>-</ThemedText>
              </ThemedView>
              <ThemedView style={collectionStyles.amount}>
                <ThemedText style={collectionStyles.amountText}>{'1/1'}</ThemedText>
              </ThemedView>
            </>
          }
          <Image accessibilityLabel={item.name[lang]}
                  source={getImageLanguage69x96(lang, item.id)}
                  placeholder={BACKWARD_CARD}
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
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handleClick(item, 'remove')}
          style={[CardGridStyles.image, {
            justifyContent: 'center',
            alignItems: 'center',
            width: 67.5}]
          }>
          <View>
            { current[index] ? 
            <>
              <ThemedView style={[collectionStyles.remove, {width: 18, height: 18}]}>
                <ThemedText style={[
                  {color: 'crimson', fontSize: 31, top: -4}, 
                  Platform.OS !== 'web' && {fontSize: 24, top: -10, transform: [{scaleX: 1.5}, {scaleY: 1.2}]}]}>-</ThemedText>
              </ThemedView>
              <Image accessibilityLabel={item?.name} 
                     style={[
                  CardGridStyles.image, 
                  {width: 67.5}
                ]} 
              source={getImageLanguage116x162(lang, current[index])}
              placeholder={BACKWARD_CARD}/>
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

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: gridHeightMap[numColumns],
    offset: gridHeightMap[numColumns] * index,
    index, 
  }), []);

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
       <Animated.View style={[animatedStyle, sortStyles.container, 
              {
                width: '100%', flex: 1, height: (Platform.OS === 'web' && window.innerWidth < 550) ? 600 : 765
              }]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_offers')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0, maxHeight: '100%'}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', paddingBottom: 16}}>
            <FlatList data={filtered}
                      renderItem={renderCard}
                      numColumns={6}
                      showsVerticalScrollIndicator={false}
                      maxToRenderPerBatch={20}
                      initialNumToRender={20}
                      windowSize={9}
                      getItemLayout={getItemLayout}
                      contentContainerStyle={{padding: 16, paddingTop: 0, paddingBottom: 54}}
                      keyExtractor={(item, index) => index + ''}
                      ListHeaderComponent={
                        <ThemedView style={{height: 236, backgroundColor: 'white'}}>
                          <ThemedView style={{
                              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                              width: '100%', 
                              borderRadius: 8, 
                              marginBottom: 10, 
                              marginTop: 16
                            }}>
                            <TextInput placeholder={i18n.t('search')}
                                      value={searchQuery}
                                      onChangeText={handleSearch}
                                      placeholderTextColor={Colors.light.text}
                                      accessibilityLabel={'SEARCH_LABEL'}
                                      editable={state.cardState.loaded}
                                      inputMode='text'
                                      style={[CardGridStyles.searchInput, {width: '100%'}]}
                                    />
                          </ThemedView>

                                  {renderRarityGrid()}
                                  <FlatList data={current}
                                            renderItem={renderOffered}
                                            numColumns={5}
                                            contentContainerStyle={{width: '100%', marginTop: 12}}
                                            style={{width: '100%', borderRadius: 8}}
                                            showsVerticalScrollIndicator={false}
                                            keyExtractor={(item, index) => index + ''}
                                            keyboardDismissMode={'on-drag'}/>
                        </ThemedView>
                        
                      }
                      stickyHeaderIndices={[0]}
                      ListFooterComponent={<ThemedView style={{height: 22}}/>}
                      ListEmptyComponent={renderEmpty}
                    />
          </ThemedView>
        </ThemedView>
        <View style={[styles.modalFooter, 
                  {
                    position: 'absolute', 
                    bottom: 0, 
                    marginInline: 'auto', 
                    backgroundColor: 'none', 
                    boxShadow: 'none',
                    width: '100%'
                  }]}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}