import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FlatList, TextInput, SafeAreaView, Pressable, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import { KeyboardAvoidingView } from 'react-native';

import Animated, { 
  runOnJS,
  useAnimatedScrollHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withSequence, 
  withTiming
} from 'react-native-reanimated';

import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { ButtonStyles, CardGridStyles, ModalStyles, ParallaxStyles } from '@/shared/styles/component.styles';
import { PICK_CARD_SOUND } from '@/shared/definitions/sentences/path.sentences';
import { CARD_IMAGE_MAP } from '@/shared/definitions/utils/contants';
import { useI18n } from '../shared/LanguageProvider';

import {  
  GO_UP,
  NO_MATCH_SENTENCE, 
  SEARCH_CARD_PLACEHOLDER, 
  SEARCH_LABEL 
} from '@/shared/definitions/sentences/global.sentences';

import SkeletonCardGrid from '../skeletons/SkeletonCardGrid';
import { ThemedView } from '../ThemedView';
import HeaderWithCustomModal from '../shared/HeaderModal';
import { CardsScreenModal } from '../modals/CardsScreenModal';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from './IconSymbol';
import { Colors } from '@/shared/definitions/utils/colors';
import useHeaderAnimation from './HeaderAnimation';
import { CardsState } from '@/hooks/cards.reducer';

let numColumns = 3;

export default function ImageGridWithSearch({ state }: { state: CardsState }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState<Card[]>(state.cards);
  const audio = useRef<Audio.Sound | null>(null);
  const [selected, setSelected] = useState<string>('');
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const router = useRouter();
  const {i18n} = useI18n();
  
  const scrollY = useSharedValue(0);

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

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(PICK_CARD_SOUND);
      audio.current = sound;
      await sound.setVolumeAsync(0.5);
    }

    loadSounds();
    return () => {
      if (audio.current) audio.current.unloadAsync();
    };
  }, []);

  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

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

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(state.cards.filter(card =>
      card.name.toLowerCase().includes(text.toLowerCase())
  ))}, [state.cards]);

  const renderItem = useCallback(({ item }: { item: Card }) => (
    <Animated.View style={[CardGridStyles.imageContainer, item.name === selected ? animatedStyle : null]}>
      <Pressable onPress={() => goToDetailScreen(item.name)} style={{ zIndex: 1 }}>
        <Image style={CardGridStyles.image} source={CARD_IMAGE_MAP[item.name]} contentFit="fill" />
      </Pressable>
    </Animated.View>
  ), [selected]);

  const playSound = async () => {
    if (audio.current) await audio.current.replayAsync();
  };

  const goToDetailScreen = async (name: string) => {
    setSelected(name);
    animateCard();
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

  async function goUp(): Promise<void> {
    await playSound();
    flatListRef.current?.scrollToOffset({offset: 0, animated: false})
  }

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={{position: 'absolute', right: 12, top: 8}}
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
              numColumns={numColumns}
              keyboardDismissMode={'on-drag'}
              contentContainerStyle={CardGridStyles.gridContainer}
              keyboardShouldPersistTaps={'never'}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                state.loaded ? <ThemedText style={{padding: 6}}>{NO_MATCH_SENTENCE}</ThemedText> 
                      : <SkeletonCardGrid columns={numColumns}></SkeletonCardGrid>
              }
              stickyHeaderIndices={[0]}
              scrollEventThrottle={16}
              ListHeaderComponent={<>
                <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
                  <TextInput style={CardGridStyles.searchInput}
                              placeholder={SEARCH_CARD_PLACEHOLDER}
                              value={searchQuery}
                              onChangeText={handleSearch}
                              placeholderTextColor={Colors.light.text}
                              accessibilityLabel={SEARCH_LABEL}/>
                        {searchQuery.length > 0 && <ResetFilterButton/>}                         
                </KeyboardAvoidingView>
              </>}
              ListFooterComponent={
                <View style={[ModalStyles.modalFooter, {marginBlock: 34, boxShadow: 'none'}]}>
                  <TouchableOpacity style={ButtonStyles.button} 
                                    onPress={goUp} 
                                    accessibilityLabel={GO_UP}
                                    accessibilityRole="button"
                                    accessible={true}>
                    <View style={ButtonStyles.insetBorder}>
                      <ThemedText>Volver arriba</ThemedText>
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
