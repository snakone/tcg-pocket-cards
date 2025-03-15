import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, TextStyle, Pressable, View, Platform, TextInput, FlatList, ScrollView, SectionList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useRouter } from 'expo-router';
import { Portal, Provider } from 'react-native-paper';
import { Slider } from '@miblanchard/react-native-slider';
import { Image } from 'expo-image';

import { AppContext } from '../_layout';
import { CLOSE_SENTENCE, GO_UP, NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import SoundService from '@/core/services/sounds.service';
import FilterCardMenu from '@/components/shared/cards/FilterCardMenu';
import SortCardMenu from '@/components/shared/cards/SortCardMenu';
import { GraphicsScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { BACKUP_HEIGHT } from '@/shared/definitions/utils/constants';
import { ScreenStyles, ButtonStyles, CardGridStyles, gridColumMap, gridWidthMap, ModalStyles } from '@/shared/styles/component.styles';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { settingsStyles } from './settings';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { getImageLanguage69x96, getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { GENETIC_APEX, MYTHICAL_ISLAND_MEW_ICON, PROMO_A_ICON, SMACK_DOWN, TRIUMPH_LIGHT_ARCEUS_ICON } from '@/shared/definitions/sentences/path.sentences';
import SkeletonCardGrid from '@/components/skeletons/SkeletonCardGrid';
import { CardExpansionENUM } from '@/shared/definitions/enums/card.enums';
import { shareScreenStyles } from '../(tabs)/share';

export default function CardsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [sort, setSort] = useState<SortItem>();
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const router = useRouter();
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const gridNumber = useRef<1 | 2>(1);
  const [numColumns, setNumColumns] = useState(5);
  const [filtered, setFiltered] = useState<Card[]>([]);
  const sectionListRef = useRef<SectionList>(null);
  const [selected, setSelected] = useState<any[]>([]);

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={isSortVisible} 
                          onClose={onClose}
                          animatedStyle={{}}/>
  }, [isSortVisible, sort]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={isFilterVisible} 
                            animatedStyle={{}} 
                            onClose={onClose}/>
  }, [isFilterVisible]);
  
  function onClose(): void {
    setIsSortVisible(false);
    setIsFilterVisible(false);
  }

  useEffect(() => {
    setFiltered(state.cardState.cards);
  }, [state.cardState.cards]);

  const filterAndSort = (filterFn: (card: Card) => boolean) => {
    const filtered = state.cardState.cards.filter(filterFn).sort((a, b) => a.order - b.order);
    return { data: filtered, length: filtered.length };
  };

  const getCardsExpansion = useCallback((expansion: CardExpansionENUM) => 
    filterAndSort(card => card.expansion === expansion)
  , [state.cardState.cards]);

  const { data: geneticPackCards, length: geneticPackCardsLength } = getCardsExpansion(CardExpansionENUM.GENETIC_APEX);
  const { data: islandPackCards, length: islandPackCardsLength } = getCardsExpansion(CardExpansionENUM.MYTHICAL_ISLAND);
  const { data: spacePackCards, length: spacePackCardsLength } = getCardsExpansion(CardExpansionENUM.SPACE_TIME_SMACKDOWN);
  const { data: triumphPackCards, length: triumphPackCardsLength } = getCardsExpansion(CardExpansionENUM.TRIUMPH_LIGHT);
  const { data: promoAPackCards, length: promoAPackCardsLength } = getCardsExpansion(CardExpansionENUM.PROMO_A);

  useEffect(() => {
    if (state.filterState.sort.length > 0) {
      const active = state.filterState.sort.find(s => s.active);
      setSort(active);
    }
  }, [state.filterState.sort]);

  const fixFilterIcon = useCallback(() => {
    return [
      { fontSize: 32, position: 'relative' }, 
      sort?.label === 'order_by_hp' || sort?.label === 'order_by_rarity' ? {top: 1} : null,
      sort?.label === 'order_by_retreat' ? {top: -2} : null
    ]
  }, [sort]);

  const getOrderIcon = useCallback(() => {
    return !sort?.order ? 'arrow-upward' : 
            sort.order === 'asc' ? 'arrow-upward' : 'arrow-downward'
  }, [sort]);

  const getFilterOrderIcon = useCallback(() => {
    return state.filterState.filter.areAllPropertiesNull() ? 'cancel' : 'check-circle';
  }, [state.filterState.filter]);

  const goBack = useCallback(async (): Promise<void> => {
    SoundService.play('AUDIO_MENU_CLOSE');
    router.canGoBack() ? router.back() : router.replace('/');
  }, []);

  useEffect(() => {
    console.log(state.filterState.sort)
  }, [state.filterState.sort]);

  useEffect(() => {
    console.log(state.filterState.filter)
  }, [state.filterState.filter]);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    console.log(text)
  }, []);

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 240}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const TrackItem = useCallback((index: any) => {
    if (index === 0 || index === 10) return null;
    return (
      <ThemedView style={{
        width: 2,
        height: 4,
        right: -10,
        backgroundColor: '#777',
        position: 'relative',
        zIndex: 1000,
        opacity: 1
      }}>  
      </ThemedView>
    )
  }, []);

  const sliderComponent = useMemo(() => (
    <Slider
      maximumValue={2}
      minimumValue={1}
      step={1}
      containerStyle={{ width: '100%', left: Platform.OS === 'web' ? -4 : -8 }}
      maximumTrackTintColor={Colors.light.skeleton}
      minimumTrackTintColor="mediumaquamarine"
      animateTransitions={true}
      animationType={'timing'}
      thumbStyle={settingsStyles.thumb}
      trackStyle={settingsStyles.trackCard}
      trackClickable={true}
      value={gridNumber.current}
      onSlidingComplete={handleMusicVolumeChange}
      trackMarks={[1, 2]}
      renderTrackMarkComponent={(index) => <TrackItem index={index} />}
    />
  ), [gridNumber.current]);

  function handleMusicVolumeChange(ev: number[]): void {
    SoundService.play('CHANGE_VIEW');
    const value = ev[0] as 1 | 2;
    gridNumber.current = value;
    setNumColumns(gridColumMap[value]);
  }

  const addToSelection = useCallback((item: Card) => {
    if (selected.find(sel => sel === item.id)) {
      setSelected(prev => {
        SoundService.play('DELETE_SOUND');
        const arr = prev.filter(p => p !== item.id);
        return arr;
      });
      return;
    }

    SoundService.play('PICK_CARD_SOUND');
    setSelected(prev => {
      return [...prev, item.id];
    })
  }, [selected]);

  const renderItem = useCallback(({ item }: { item: Card }) => (
    <View key={item.id} style={[
        CardGridStyles.imageContainer, 
        {marginHorizontal: 1, marginVertical: 1}
      ]}>
      <TouchableOpacity onPress={() => addToSelection(item)} 
                 style={[{ zIndex: 1, position: 'relative' }, !selected.includes(item.id) && {opacity: 0.4} ]}>
          { state.settingsState.favorites?.includes(item.id) && 
            <ThemedView style={CardGridStyles.triangle}></ThemedView>
          }
          <Image accessibilityLabel={item.name[lang]} 
                  style={[
            CardGridStyles.image, 
            {width: gridWidthMap[gridNumber.current]}
          ]} 
          source={gridNumber.current === 1 || gridNumber.current === 2 ? 
                    getImageLanguage69x96(lang, item.id) : 
                    getImageLanguage116x162(lang, item.id)}/>
      </TouchableOpacity>
    </View>
  ), [gridNumber, selected, state.settingsState.favorites, lang]);

  const keyExtractor = useCallback((item: Card) => String(item.id), []);

  const renderFooter = useCallback(() => {
    if (filtered.length < 34) {
      return <ThemedView style={{ height: 20 }}></ThemedView>;
    }

    return (
      <View
        style={[
          ModalStyles.modalFooter,
          { marginTop: 50, marginBottom: 34, boxShadow: 'none', paddingTop: 20, top: -50 },
        ]}
      >
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={goUp}
          accessibilityLabel={GO_UP}
          accessibilityRole="button"
          accessible={true}
        >
          <View style={ButtonStyles.insetBorder}>
            <ThemedText>{i18n.t('go_up')}</ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    )
  }, [searchQuery, filtered.length]);

  async function goUp(): Promise<void> {
    SoundService.play('PICK_CARD_SOUND');
    sectionListRef.current?.scrollToLocation({sectionIndex: 0, itemIndex: 0, animated: false});
  }

  const RenderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded ? (
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>
      ) : (
        <SkeletonCardGrid columns={numColumns} />
      );
    }, [state.cardState.loaded, numColumns]);
  
    return renderCardState();
  };

  const renderList = useCallback(({ section, index }: any) => {
    if (index !== 0) return null;

    return (
      <FlatList
        data={section.data}
        removeClippedSubviews={true}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        key={numColumns}
        numColumns={numColumns}
        scrollEnabled={false}
        initialNumToRender={20}
        maxToRenderPerBatch={35}
        windowSize={10}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={RenderEmpty}
        extraData={selected}
        
      /> 
    )
  }, [numColumns, selected]);

  const SECTIONS = [
    { title: i18n.t('genetic'), 
      data: geneticPackCards, 
      key: 'genetic',
      image: GENETIC_APEX
    },
    {
      title: i18n.t('island'),
      data: islandPackCards,
      key: 'island',
      image: MYTHICAL_ISLAND_MEW_ICON
    },
    {
      title: i18n.t('smackdown'),
      data: spacePackCards,
      key: 'smackdown',
      image: SMACK_DOWN
    },
    {
      title: i18n.t('triumph'),
      data: triumphPackCards,
      key: 'triumph',
      image: TRIUMPH_LIGHT_ARCEUS_ICON
    },
    {
      title: i18n.t('promoA'),
      data: promoAPackCards,
      key: 'promoA',
      image: PROMO_A_ICON
    },
  ];

  return (
    <Provider>
      <ParallaxScrollView title={"my_collection"} 
                          modalTitle='infographics'
                          modalContent={GraphicsScreenModal()}
                          modalHeight={BACKUP_HEIGHT}
                          styles={{gap: 0}}>

        <View style={[CardGridStyles.inputContainer, {paddingBottom: 4}]}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '76%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                        placeholder={i18n.t('search_card_placeholder')}
                        value={searchQuery}
                        onChangeText={handleSearch}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={SEARCH_LABEL}
                        inputMode='text'
                      />
                  {searchQuery.length > 0 && <ResetFilterButton/>}
          </ThemedView>

          <ThemedView style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && {marginRight: 2}, {width: '14%'}]}>
            {sliderComponent}                    
          </ThemedView>
        </View>

        <SectionList
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          key={numColumns}
          ref={sectionListRef}
          sections={SECTIONS}
          renderItem={renderList}
          initialNumToRender={Infinity}
          maxToRenderPerBatch={Infinity}
          SectionSeparatorComponent={(data) => 
            <ThemedView style={{height: data.section.key !== 'genetic' ? 16 : 4}}></ThemedView>
          }
          renderSectionHeader={({section}) => (
            <ThemedView style={{width: '100%', backgroundColor: Colors.light.background, padding: 4, paddingTop: 12, paddingBottom: 14}}>
              <Image source={section.image} style={[
                cardStyles.expansionImage, 
                section.key === 'triumph' && {height: 45, top: 2},
                section.key === 'promoA' && {height: 56},
                {marginInline: 'auto'}
                ]}/>
            </ThemedView>
          )}
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={{width: '100%'}}
          renderSectionFooter={({section}) => (section.key === 'promoA' ? renderFooter() : null)}
        />
                
        <View style={ScreenStyles.bottomContent}>
          <Pressable style={ButtonStyles.button} 
                            onPress={goBack} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
        { state.cardState.cards?.length > 0 ? (
          <>
            <TouchableOpacity onPress={() => (setIsSortVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} style={[cardStyles.container]}>
              <ThemedView>
                <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                              color={'skyblue'} 
                              style={fixFilterIcon() as StyleProp<TextStyle>}> 
                </MaterialIcons>
                <MaterialIcons name={getOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
              </ThemedView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (setIsFilterVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
                              style={[cardStyles.container, {bottom: 88}]}>
              <ThemedView>
                <IconSymbol name="cat.circle" 
                            color={'mediumaquamarine'} 
                            style={{fontSize: 32}}>
                </IconSymbol>
                <MaterialIcons name={getFilterOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
              </ThemedView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (setIsFilterVisible(true), SoundService.play('AUDIO_MENU_OPEN'))} 
                              style={[cardStyles.container, {bottom: 152}]}>
              <ThemedView>
                <IconSymbol name="cat.circle" 
                            color={'mediumaquamarine'} 
                            style={{fontSize: 32}}>
                </IconSymbol>
                <MaterialIcons name={getFilterOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
              </ThemedView>
            </TouchableOpacity>       
          </>
        ) : null}
      </ParallaxScrollView>

      <Portal>{isSortVisible && memoizedSort}</Portal>
      <Portal>{isFilterVisible && memoizedFilter}</Portal>
    </Provider>
  );
}

export const cardStyles = StyleSheet.create({
  container: {
    position: 'absolute', 
    right: 24, 
    bottom: 24,
    width: 50,
    height: 50,
    borderRadius: 48,
    backgroundColor: 'white',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    opacity: 0.8
  },
  sortIcon: {
    position: 'absolute',
    fontSize: 16,
    backgroundColor: 'rgba(120, 120, 120, .8)',
    borderRadius: 20,
    color: 'white',
    right: -16,
    top: 8.5
  },
  sortIconList: {
    position: 'absolute',
    fontSize: 20,
    borderRadius: 20,
    right: -30,
    top: 9,
    color: Colors.light.text,
  },
  expansionContainer: {
    height: 444,
    marginBottom: 40
  },
  expansionImage: { 
    width: 106, 
    height: 50,
    top: 0,
    left: 0,
  }
});


