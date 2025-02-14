import React, { useState, useCallback, useEffect, useRef, useContext } from 'react';

import { 
  FlatList, 
  TextInput, 
  SafeAreaView, 
  Pressable, 
  TouchableOpacity, 
  View, 
  Platform, 
  KeyboardAvoidingView,
  GestureResponderEvent
} from 'react-native';

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Switch } from 'react-native-paper';

import Animated, { 
  useAnimatedScrollHandler, 
  useSharedValue, 
} from 'react-native-reanimated';

import { 
  ButtonStyles,
  CARD_IMAGE_WIDTH_3,
  CARD_IMAGE_WIDTH_5,
  CardGridStyles,
  ModalStyles,
  ParallaxStyles
} from '@/shared/styles/component.styles';

import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { GO_UP, NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import SkeletonCardGrid from '../skeletons/SkeletonCardGrid';
import { ThemedView } from '../ThemedView';
import HeaderWithCustomModal from '../shared/HeaderModal';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from './IconSymbol';
import { Colors } from '@/shared/definitions/utils/colors';
import useHeaderAnimation from './HeaderAnimation';
import { AppState } from '@/hooks/root.reducer';
import { LARGE_MODAL_HEIGHT, SORT_FIELD_MAP } from '@/shared/definitions/utils/constants';
import { useI18n } from '@/core/providers/LanguageProvider';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { filterCards, getImageLanguage116x162, getImageLanguage69x96, sortCards } from '@/shared/definitions/utils/functions';
import { AppContext } from '@/app/_layout';
import SoundService from '@/core/services/sounds.service';
import { LanguageType } from '@/shared/definitions/types/global.types';

interface GridCardProps {
  state: AppState,
  title: string,
  modal: JSX.Element,
  modalTitle: string
  type?: 'default' | 'favorites'
}

export default function ImageGridWithSearch({ state, title, modal, modalTitle, type = 'default' }: GridCardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState<Card[]>([]);
  const [favorites, setFavorites] = useState<Card[]>(
    state.cardState.cards.filter(c => state.settingsState.favorites?.includes(c.id))
  );
  const [footerVisible, setFooterVisible] = useState<boolean>(false);
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const router = useRouter();
  const {i18n} = useI18n();
  const scrollY = useSharedValue(0);
  const [numColumns, setNumColumns] = useState(3);
  const [isGrid5, setIsGrid5] = useState(false);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { dispatch } = context;
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  const { 
    animatedHeaderStyle, 
    animatedIconStyle, 
    animatedTitleStyle 
  } = useHeaderAnimation(scrollY);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const toggleSwitch = () => {
    !isGrid5 ? setNumColumns(5) : setNumColumns(3);
    setIsGrid5(previousState => !previousState);
    playSound(true);
  };

  useEffect(() => {
    setFiltered(state.cardState.cards);
  }, [state.cardState.cards]);

  useEffect(() => {
    if (!filtered || filtered.length === 0) { return; }
    const sorted = filterOrSortCards('sort', filtered, state.filterState.sort.find(s => s.active));
    setFiltered(sorted);
    setTimeout(() => goUp(null, false), 100);
  }, [state.filterState.sort]);

  useEffect(() => {
    if (!filtered) { return; }
    if(state.modalState.filter_opened) { return; }
  
    const filterCards = filterOrSortCards('filter', state.cardState.cards);
    const sorted = filterOrSortCards('sort', filterCards, state.filterState.sort.find(s => s.active));

    setFiltered(sorted);
    setTimeout(() => goUp(null, false), 100);
  }, [state.modalState.filter_opened]);

  useEffect(() => {
    if (modalTitle !== 'favorites_modal_title') return;
    const favorites = state.cardState.cards.filter(
      card => state.settingsState.favorites?.includes(card.id)
    );

    setFiltered(favorites);
    setFavorites(favorites);
  }, [state.settingsState.favorites]);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered((type === 'favorites' ? favorites : state.cardState.cards).filter(card =>
      card.name[lang].toLowerCase()?.includes(text.toLowerCase())
  ))}, [(type === 'favorites' ? favorites : state.cardState.cards), lang]);

  function filterOrSortCards(
    type: 'sort' | 'filter', 
    data: Card[], 
    sort?: SortItem | undefined
  ): Card[] {
    switch (type) {
      case 'sort': {
        if (!sort) { return data; }
        return manageSort(sort, data);
      }

      case 'filter': {
        return manageFilter(data);
      }
    }
  }

  function manageSort(sort: SortItem, data: Card[]): Card[] {
    const sortField = SORT_FIELD_MAP[sort.label];
  
    if (!sortField) {
      console.error(`Unsupported sorting option: ${sort.label}`);
      return data;
    }
  
    return sortCards(sortField, data, sort, lang);
  }

  function manageFilter(data: Card[]): Card[] {
    const filter = state.filterState.filter;
    return filterCards(filter, data, state.settingsState.favorites);
  }

  const RenderFooter = () => {
    const renderFooter = useCallback(() => {
      if (!!searchQuery || !footerVisible || filtered.length < 46) {
        return <ThemedView style={{ height: 20 }}></ThemedView>;
      }
  
      return (
        <View
          style={[
            ModalStyles.modalFooter,
            { marginBlock: 34, boxShadow: 'none', paddingTop: 20 },
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
      );
    }, [searchQuery, footerVisible, filtered.length]);
  
    return renderFooter();
  };

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

  const renderItem = useCallback(({ item }: { item: Card }) => (
    <View key={item.id} style={[
        CardGridStyles.imageContainer, 
        {marginHorizontal: 1, marginVertical: 1}
      ]}>
      <Pressable disabled={state.cardState.navigating} 
                 onPress={() => goToDetailScreen(item.id)} 
                 style={{ zIndex: 1, position: 'relative' }}>
          { state.settingsState.favorites?.includes(item.id) && 
            <ThemedView style={CardGridStyles.triangle}></ThemedView>
          }
          <Image accessibilityLabel={item.name[lang]} 
                 style={[
            CardGridStyles.image, 
            {width: isGrid5 ? CARD_IMAGE_WIDTH_5 : CARD_IMAGE_WIDTH_3}
          ]} 
          source={isGrid5 ? getImageLanguage69x96(lang, item.id) : 
                            getImageLanguage116x162(lang, item.id)}/>
      </Pressable>
    </View>
  ), [isGrid5, state.cardState.navigating, state.settingsState.favorites, lang]);

  const playSound = async (isSwitch: boolean = false) => {
    if (isSwitch) { 
      await SoundService.play('CHANGE_VIEW');
      return;
    }
    SoundService.play('PICK_CARD_SOUND');
  };

  const goToDetailScreen = async (id: number) => {
    if(state.cardState.navigating) { return; }
    await playSound();
    dispatch({type: 'SET_NAVIGATING', value: true});
    router.push(`/screens/detail?id=${encodeURIComponent(id)}`);
  };

  const keyExtractor = useCallback((item: Card) => String(item.id), []);

  async function goUp(_: GestureResponderEvent | null, sound = true): Promise<void> {
    if (sound) await playSound();
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={CardGridStyles.clearInput}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Animated.View style={[ParallaxStyles.header, animatedHeaderStyle]}>
          <HeaderWithCustomModal title={title} 
                                 modalContent={modal} 
                                 modalTitle={modalTitle} 
                                 animatedStyle={animatedTitleStyle}
                                 animatedIconStyle={animatedIconStyle}
                                 modalHeight={LARGE_MODAL_HEIGHT}/>
        </Animated.View>
        <Animated.View style={[ParallaxStyles.content]}>
          <SafeAreaView style={CardGridStyles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                                  behavior={'height'}
                                  keyboardVerticalOffset={-550}>
              <Animated.FlatList
                data={filtered}
                ref={flatListRef}
                removeClippedSubviews={false}
                onScroll={scrollHandler}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                key={numColumns}
                numColumns={numColumns}
                onStartReached={() => setFooterVisible(false)}
                onStartReachedThreshold={1}
                onEndReached={() => setFooterVisible(true)}
                onEndReachedThreshold={0.6}
                scrollEnabled={state.cardState.loaded}
                initialNumToRender={25}
                maxToRenderPerBatch={35}
                windowSize={15}
                keyboardDismissMode={'on-drag'}
                contentContainerStyle={CardGridStyles.gridContainer}
                keyboardShouldPersistTaps={'never'}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                ListEmptyComponent={RenderEmpty}
                scrollEventThrottle={16}
                ListFooterComponent={RenderFooter}
                ListHeaderComponent={
                  <>
                    <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
                      <Animated.View style={[CardGridStyles.inputContainer]}>
                        <TextInput style={[CardGridStyles.searchInput, {boxShadow: '5px 4px 12px rgba(0, 0, 0, 0.2)', width: '71%'}]}
                                   placeholder={i18n.t('search_card_placeholder')}
                                   value={searchQuery}
                                   onChangeText={handleSearch}
                                   placeholderTextColor={Colors.light.text}
                                   accessibilityLabel={SEARCH_LABEL}
                                   editable={state.cardState.loaded}
                                   inputMode='text'
                                  />
                              {searchQuery.length > 0 && <ResetFilterButton/>}
                        <ThemedView style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && {marginRight: 2}]}>
                          <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                  color={'white'}
                                  onValueChange={toggleSwitch}
                                  value={isGrid5}
                                  style={CardGridStyles.switch}
                                  disabled={filtered.length <= 4}
                          />
                          <ThemedText style={[CardGridStyles.totalCards]}>{filtered.length}</ThemedText>                    
                        </ThemedView>

                      </Animated.View>
                    </KeyboardAvoidingView>
                  </>
                }
              />               
            </KeyboardAvoidingView>
          </SafeAreaView>
        </Animated.View>
      </SafeAreaView>
    </ThemedView>
  );
}
