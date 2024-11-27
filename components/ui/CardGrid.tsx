import React, { useState, useCallback, useEffect, useRef } from 'react';

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
import { Audio } from 'expo-av';
import { Switch } from 'react-native-paper';

import Animated, { 
  useAnimatedScrollHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withSequence, 
  withTiming
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
import { GO_UP, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import SkeletonCardGrid from '../skeletons/SkeletonCardGrid';
import { ThemedView } from '../ThemedView';
import HeaderWithCustomModal from '../shared/HeaderModal';
import { CardsScreenModal } from '../modals/CardsScreenModal';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from './IconSymbol';
import { Colors } from '@/shared/definitions/utils/colors';
import useHeaderAnimation from './HeaderAnimation';
import { useIsFocused } from '@react-navigation/native';
import { AppState } from '@/hooks/root.reducer';
import { CHANGE_VIEW, PICK_CARD_SOUND } from '@/shared/definitions/sentences/path.sentences';
import { CARD_IMAGE_MAP, SORT_FIELD_MAP } from '@/shared/definitions/utils/contants';
import { useI18n } from '@/core/providers/LanguageProvider';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { sortData } from '@/shared/definitions/utils/functions';

export default function ImageGridWithSearch({ state }: { state: AppState }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState<Card[]>(state.cardState.cards);
  const audio = useRef<Audio.Sound | null>(null);
  const audioSwitch = useRef<Audio.Sound | null>(null);
  const [selected, setSelected] = useState<string>('');
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const router = useRouter();
  const {i18n} = useI18n();
  const isFocused = useIsFocused();
  const scrollY = useSharedValue(0);
  const [isLoading, setIsLoading] = useState(false);
  const [numColumns, setNumColumns] = useState(3);
  const [isGrid5, setIsGrid5] = useState(false);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

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

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 350 },
        { rotateX: `${rotate.value}deg` },
        { rotateY: `${rotate.value}deg` },
        { scale: scale.value }
      ],
    };
  });

  const toggleSwitch = () => {
    !isGrid5 ? setNumColumns(5) : setNumColumns(3);
    setIsGrid5(previousState => !previousState);
    playSound(true);
    setTimeout(() => scrollY.value = 0, 150);
  };

  const borderAnimatedStyle = useAnimatedStyle(() => {
    const isWeb = Platform.OS === 'web';

    return {
      elevation: scrollY.value > 16 ? 20 : 0,
      ...(isWeb && { boxShadow: scrollY.value > 16 ? '0px 4px 10px rgba(0, 0, 0, 0.25)' : 'none' }),
    };
  });

  useEffect(() => {
    if (isFocused) setIsLoading(false);
  }, [isFocused]);

  useEffect(() => {
    const sorted = filterOrSortCards('sort', filtered, state.filterState.sort.find(s => s.active));
    setFiltered(sorted);
    goUp(null, false);
  }, [state.filterState.sort])

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(state.cardState.cards.filter(card =>
      card.name.toLowerCase().includes(text.toLowerCase())
  ))}, [state.cardState.cards]);

  function filterOrSortCards(type: 'sort' | 'filter', data: Card[], sort: SortItem | undefined): Card[] {
    switch (type) {
      case 'sort': {
        if (!sort) { return data; }
        return manageSort(sort, data);
      }

      case 'filter': {
        return manageFilter({}, data);
      }
    }
  }

  function manageSort(sort: SortItem, data: Card[]): Card[] {
    const sortField = SORT_FIELD_MAP[sort.label];
  
    if (!sortField) {
      console.error(`Unsupported sorting option: ${sort.label}`);
      return data;
    }
  
    return sortData(sortField, data, sort);
  }

  function manageFilter(filter: any, data: Card[]): Card[] {
    console.log('filtering')
    return data;
  }

  const renderItem = useCallback(({ item }: { item: Card }) => (
    <Animated.View style={[
        CardGridStyles.imageContainer, 
        item.name === selected ? animatedStyle : null, 
        isGrid5 ? {marginHorizontal: 1, marginVertical: 1} : null
      ]}>
      <Pressable disabled={isLoading} 
                 onPress={() => goToDetailScreen(item.name)} style={{ zIndex: 1 }}>
        <Image style={[
          CardGridStyles.image, 
          isGrid5 ? {width: CARD_IMAGE_WIDTH_5} : {width: CARD_IMAGE_WIDTH_3}
        ]} 
        source={CARD_IMAGE_MAP[item.name]} contentFit="fill" />
      </Pressable>
    </Animated.View>
  ), [selected, isLoading, isGrid5]);

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(PICK_CARD_SOUND);
      const { sound: switchSound } = await Audio.Sound.createAsync(CHANGE_VIEW);
      audio.current = sound;
      audioSwitch.current = switchSound;
      await sound.setVolumeAsync(0.5);
    }

    loadSounds();
    return () => {
      if (audio.current) audio.current.unloadAsync();
    };
  }, []);

  const playSound = async (isSwitch: boolean = false) => {
    if (isSwitch && audioSwitch.current) { 
      await audioSwitch.current.replayAsync();
      return;
    }
    if (audio.current) {await audio.current.replayAsync();}
  };

  const goToDetailScreen = async (name: string) => {
    if(isLoading) { return; }
    setSelected(name);
    animateCard();
    setIsLoading(true);
    await playSound();
    router.push(`/screens/detail?name=${encodeURIComponent(name)}`);
  };

  function animateCard(): void {
    rotate.value = withSequence(
      withTiming(-12, { duration: 50 }),
      withTiming(12, { duration: 50 }), 
      withTiming(-8, { duration: 50 }), 
      withTiming(8, { duration: 50 }),
      withTiming(0, { duration: 25 })   
    );

    scale.value = withSequence(
      withTiming(1.1, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
  }

  const keyExtractor = useCallback((item: Card) => String(item.number), []);

  async function goUp(ev: GestureResponderEvent | null, sound = true): Promise<void> {
    if (sound) await playSound();
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={{position: 'absolute', right: 83, top: Platform.OS === 'web' ? 8 : 13}}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  )

  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Animated.View style={[ParallaxStyles.header, animatedHeaderStyle]}>
          <HeaderWithCustomModal title={"card_collection"} 
                                modalContent={CardsScreenModal()} 
                                modalTitle={"cards"} 
                                animatedStyle={animatedTitleStyle}
                                animatedIconStyle={animatedIconStyle}/>
        </Animated.View>
        <Animated.View style={[ParallaxStyles.content]}>
          <SafeAreaView style={CardGridStyles.container}>
          <KeyboardAvoidingView style={{ flex: 1 }}
                                behavior={'height'}
                                keyboardVerticalOffset={-550}>
            <Animated.FlatList
              data={filtered}
              ref={flatListRef}
              onScroll={scrollHandler}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              key={numColumns}
              numColumns={numColumns}
              keyboardDismissMode={'on-drag'}
              contentContainerStyle={CardGridStyles.gridContainer}
              keyboardShouldPersistTaps={'never'}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                state.cardState.loaded ? <ThemedText style={{padding: 6}}>{i18n.t('no_cards_found')}</ThemedText> 
                                       : <SkeletonCardGrid columns={numColumns}></SkeletonCardGrid>
              }
              stickyHeaderIndices={[0]}
              scrollEventThrottle={16}
              ListHeaderComponent={<>
                <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
                  <Animated.View style={[CardGridStyles.inputContainer, borderAnimatedStyle]}>
                    <TextInput style={CardGridStyles.searchInput}
                               placeholder={i18n.t('search_card_placeholder')}
                               value={searchQuery}
                               onChangeText={handleSearch}
                               placeholderTextColor={Colors.light.text}
                               accessibilityLabel={SEARCH_LABEL}/>
                          {searchQuery.length > 0 && <ResetFilterButton/>}
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'skyblue'}}
                            color={'white'}
                            onValueChange={toggleSwitch}
                            value={isGrid5}
                            style={CardGridStyles.switch} 
                    />
                  </Animated.View>
                </KeyboardAvoidingView>
              </>}
              ListFooterComponent={ !!searchQuery ? null : 
                <View style={[ModalStyles.modalFooter, {marginBlock: 34, boxShadow: 'none'}]}>
                  <TouchableOpacity style={ButtonStyles.button} 
                                    onPress={goUp} 
                                    accessibilityLabel={GO_UP}
                                    accessibilityRole="button"
                                    accessible={true}>
                    <View style={ButtonStyles.insetBorder}>
                      <ThemedText>{i18n.t('go_up')}</ThemedText>
                    </View>
                  </TouchableOpacity>
                </View>
              }
            />               
          </KeyboardAvoidingView>
          </SafeAreaView>
        </Animated.View>
      </SafeAreaView>
  </ThemedView>
  );
}
