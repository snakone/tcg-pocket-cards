import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, TextInput, FlatList, SafeAreaView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';

import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { PICK_CARD_SOUND } from '@/shared/definitions/sentences/path.sentences';
import { ThemedText } from '../ThemedText';
import { CARD_IMAGE_MAP } from '@/shared/definitions/utils/contants';
import { useI18n } from '../shared/LanguageProvider';

import { 
  NO_MATCH_SENTENCE, 
  SEARCH_CARD_PLACEHOLDER, 
  SEARCH_LABEL 
} from '@/shared/definitions/sentences/global.sentences';
import SkeletonCardGrid from '../skeletons/SkeletonCardGrid';

let numColumns = 3;

export default function ImageGridWithSearch({ cards }: { cards: Card[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState<Card[]>(cards);
  const audio = useRef<Audio.Sound | null>(null);
  const flatListRef = useRef<FlatList<Card> | null>(null);
  const router = useRouter();
  const {i18n} = useI18n();

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(PICK_CARD_SOUND);
      audio.current = sound;
      await sound.setVolumeAsync(0.5);
    }

    loadSounds();
    return () => {
      if (audio.current) {
        audio.current.unloadAsync();
      }
    };
  }, []);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(cards.filter(card =>
      card.name.toLowerCase().includes(text.toLowerCase())
    ));
  }, [cards]);

  const renderItem = useCallback(({ item }: { item: Card }) => (
    <View style={CardGridStyles.imageContainer}>
      <Pressable onPress={() => goToDetailScreen(item.name)} style={{ zIndex: 1 }}>
        <Image style={CardGridStyles.image} source={CARD_IMAGE_MAP[item.name]} contentFit="fill" />
      </Pressable>
      <ThemedText style={CardGridStyles.imageTitle} numberOfLines={1}>{i18n.t(item.name.toLowerCase())}</ThemedText>
    </View>
  ), []);

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  const goToDetailScreen = async (name: string) => {
    router.push(`/screens/detail?name=${encodeURIComponent(name)}`);
    playSound();
  };

  const keyExtractor = useCallback((item: Card) => String(item.number), []);

  return (
    <SafeAreaView style={CardGridStyles.container}>
      <TextInput
        style={CardGridStyles.searchInput}
        placeholder={SEARCH_CARD_PLACEHOLDER}
        value={searchQuery}
        onChangeText={handleSearch}
        accessibilityLabel={SEARCH_LABEL}
      />
      <FlatList
        data={filtered}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        contentContainerStyle={CardGridStyles.gridContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <SkeletonCardGrid columns={numColumns}></SkeletonCardGrid>
        }
      />
    </SafeAreaView>
  );
}