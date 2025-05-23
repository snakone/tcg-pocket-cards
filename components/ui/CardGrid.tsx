import React, { useState, useCallback, useEffect, useRef, useContext, useMemo } from 'react';

import { 
  FlatList, 
  TextInput, 
  SafeAreaView, 
  Pressable, 
  View, 
  Platform, 
  KeyboardAvoidingView,
  GestureResponderEvent
} from 'react-native';

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Slider } from '@miblanchard/react-native-slider';
import { combineLatest } from 'rxjs';

import { 
  CardGridStyles,
  gridColumMap,
  gridHeightMap,
  gridWidthMap,
  ParallaxStyles
} from '@/shared/styles/component.styles';

import { DataRxjs } from '@/core/rxjs/DataRxjs';
import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import { FilterRxjs } from '@/core/rxjs/FilterRxjs';
import { SortRxjs } from '@/core/rxjs/SortRxjs';

import { AppContext } from '@/app/_layout';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import { filterOrSortCards, getImageLanguage116x162, getImageLanguage69x96 } from '@/shared/definitions/utils/functions';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { ThemedView } from '../ThemedView';
import { settingsStyles } from '@/app/screens/settings';
import { BACKWARD_CARD } from '@/shared/definitions/sentences/path.sentences';
import HeaderWithCustomModal from '../shared/HeaderModal';

import { ThemedText } from '../ThemedText';
import { FooterList } from './FooterList';
import { ResetFilterButton } from './ResetFilterButton';
import { TrackItem } from './TrackItem';

interface GridCardProps {
  title: string,
  modal: JSX.Element,
  modalTitle: string
}

export default function ImageGridWithSearch({ 
  title, 
  modal, 
  modalTitle, 
}: GridCardProps) {
  console.log('Card Grid!')
  const searchQuery = useRef('');
  const [filtered, setFiltered] = useState<Card[]>([]);
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const router = useRouter();
  const {i18n} = useI18n();
  const [numColumns, setNumColumns] = useState(3);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const gridNumber = useRef<0 | 1 | 2>(0);
  const [favorites, setFavorites] = useState<Card[]>([]);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    setFiltered(state.cardState.cards);
  }, [state.cardState.cards]);

  const favIds = useMemo(() => favorites.map(fav => fav.id), [favorites]);

  useEffect(() => {
    const sub = combineLatest([
      FilterRxjs.getFilter<FilterSearch>('cards'),
      SortRxjs.getSortActive('cards')
    ])
    .subscribe(([filters, sort]) => {
      const filterCards = filterOrSortCards('filter', state.cardState.cards, favIds, filters);
      const sorted = filterOrSortCards('sort', filterCards, favIds, null, sort);
      setFiltered(sorted);
      setTimeout(() => goUp(null, false), 100);
    });

    return () => sub.unsubscribe();
  }, [state.cardState.cards, favorites]);

  useEffect(() => {
    const sub = DataRxjs.getData<number[]>('favorites')
     .subscribe(res => {
      const favorites = state.cardState.cards.filter(
        card => res?.includes(card.id)
      );

      setFavorites(favorites);
    });

    return () => sub.unsubscribe();
  }, []);

  const handleSearch = useCallback((text: string) => {
    searchQuery.current = text;
    setFiltered((state.cardState.cards).filter(card =>
      card.name[lang].toLowerCase()?.includes(text.toLowerCase())));
  }, [favorites, state.cardState.cards, lang]);

  const renderItem = useCallback(({ item }: { item: Card }) => (
    <View key={item.id} style={[
        CardGridStyles.imageContainer, 
        {marginHorizontal: 1, marginVertical: 1}
      ]}>
        <Pressable onPress={() => goToDetailScreen(item.id)} 
                   style={{ zIndex: 1, position: 'relative' }}>
          { favIds?.includes(item.id) && 
            <ThemedView style={CardGridStyles.triangle}></ThemedView>
          }
          <Image accessibilityLabel={item.name[lang]} 
                 style={[
            CardGridStyles.image, 
            {width: gridWidthMap[gridNumber.current]}
          ]} 
          source={{uri: gridNumber.current === 1 || gridNumber.current === 2 ? 
                    getImageLanguage69x96(lang, item.id) : 
                    getImageLanguage116x162(lang, item.id)}}
          placeholder={BACKWARD_CARD}/>
      </Pressable>
    </View>
  ), [gridNumber, favorites, lang]);

  const playSound = useCallback(async (isSwitch: boolean = false) => {
    if (isSwitch) { 
      await SoundService.play('CHANGE_VIEW');
      return;
    }
    SoundService.play('PICK_CARD_SOUND');
  }, []);

  const goToDetailScreen = useCallback(async (id: number) => {
    await playSound();
    router.push(`/screens/card_detail?id=${encodeURIComponent(id)}`);
  }, []);

  const goUp = useCallback(async (_: GestureResponderEvent | null, sound = true): Promise<void> => {
    if (sound) await playSound();
    flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
  }, []);

  const handleColumnChange = useCallback((ev: number[]): void => {
    if (ev[0] === numColumns) { return; }
    playSound(true);
    const value = ev[0] as 0 | 1 | 2;
    gridNumber.current = value;
    setNumColumns(gridColumMap[value]);
  }, []);

  const sliderComponent = useMemo(() => (
    <Slider
      maximumValue={1}
      minimumValue={0}
      step={1}
      containerStyle={{ width: '75%', left: Platform.OS === 'web' ? -36 : -38, top: 1 }}
      maximumTrackTintColor={Colors.light.skeleton}
      minimumTrackTintColor="mediumaquamarine"
      animateTransitions={true}
      animationType={'timing'}
      thumbStyle={settingsStyles.thumb}
      trackStyle={settingsStyles.trackCard}
      trackClickable={true}
      value={gridNumber.current}
      onSlidingComplete={handleColumnChange}
      trackMarks={[0, 1]}
      renderTrackMarkComponent={(i) => <TrackItem index={i} />}
    />
  ), [gridNumber.current]);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: gridHeightMap[gridNumber.current],
    offset: gridHeightMap[gridNumber.current] * index,
    index, 
  }), [gridNumber.current]);

  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={[ParallaxStyles.header, {marginBottom: 18}]}>
          <HeaderWithCustomModal title={title} 
                                 modalContent={modal} 
                                 modalTitle={modalTitle} 
                                 modalHeight={LARGE_MODAL_HEIGHT as number}/>
        </View>
        <View style={[ParallaxStyles.content]}>
          <SafeAreaView style={CardGridStyles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                                  behavior={'height'}
                                  keyboardVerticalOffset={-550}>
              <View style={CardGridStyles.inputContainer}>
                <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '60%', borderRadius: 8,}}>
                  <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                              placeholder={i18n.t('search_card_placeholder')}
                              value={searchQuery.current}
                              onChangeText={handleSearch}
                              placeholderTextColor={Colors.light.text}
                              accessibilityLabel={'SEARCH_LABEL'}
                              editable={state.cardState.loaded}
                              inputMode='text'
                            />
                        {searchQuery.current.length > 0 && 
                          <ResetFilterButton left={183} onPress={() => handleSearch('')}/>
                        }
                </ThemedView>

                <ThemedView style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && {marginRight: 2}, {width: '20%'}]}>
                  {sliderComponent}
                  <ThemedText style={[
                    CardGridStyles.totalCards, 
                    {left: -27, top: 0}]}>{filtered.length}
                  </ThemedText>                    
                </ThemedView>
              </View>
              <FlatList
                data={filtered}
                ref={flatListRef}
                removeClippedSubviews={true}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                key={numColumns}
                bounces={false}
                overScrollMode='never'
                numColumns={numColumns}
                onStartReachedThreshold={1}
                onEndReachedThreshold={0.6}
                scrollEnabled={state.cardState.loaded}
                initialNumToRender={25}
                maxToRenderPerBatch={35}
                windowSize={13}
                getItemLayout={getItemLayout}
                keyboardDismissMode={'on-drag'}
                contentContainerStyle={[CardGridStyles.gridContainer]}
                keyboardShouldPersistTaps={'never'}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ThemedText style={{ paddingInline: 6 }}>{i18n.t('no_cards_found')}</ThemedText>}
                ListFooterComponent={
                  <FooterList filteredLength={filtered.length} 
                              onPress={() => goUp(null)}
                              height={20}>
                  </FooterList>
                }
              />               
            </KeyboardAvoidingView>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
