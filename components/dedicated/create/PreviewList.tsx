import { FlatList, Animated, TextInput, Platform, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Image } from 'expo-image';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { SEARCH_LABEL } from "@/shared/definitions/sentences/global.sentences";
import { CardGridStyles } from "@/shared/styles/component.styles";
import { SoundService } from "@/core/services/sounds.service";
import { AppState } from "@/hooks/root.reducer";
import { Colors } from "@/shared/definitions/utils/colors";
import CreateService from "@/core/services/create.service";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { getImageLanguage69x96 } from "@/shared/definitions/utils/functions";

interface PreviewListProps {
  handleSearch: (value: string) => void,
  state: AppState,
  setNotSaved: React.Dispatch<React.SetStateAction<boolean>>,
  styles: any,
  service: CreateService,
  previousDeck: any[]
}

export default function PreviewList({
  handleSearch, 
  state, 
  setNotSaved, 
  styles,
  service,
  previousDeck
}: PreviewListProps) {
  const {i18n} = useI18n();
  const [deck, setDeck] = useState<any[]>(previousDeck);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const sub = service.addNumber$.subscribe(res => manageAddDeck(res));

    return () => {
      sub.unsubscribe();
    }
  }, [deck]);

  async function manageAddDeck(card: Card): Promise<void> {
    if (canAddToDeck(card)) {
      await SoundService.play('PICK_CARD_SOUND');
      setNotSaved(true);
      addNumberToList(card);
    }
  }

  function canAddToDeck(card: Card): boolean {
    const maxRepeats: number = 2;

    const sameNameCards = deck.filter(
      (c) => Boolean(c) && c.name.es === card.name.es
    ) as Card[];

    if (sameNameCards.length < maxRepeats) {
      const emptyIndex = deck.indexOf(null);
  
      if (emptyIndex !== -1) {
        return true;
      }
    }

    return false;
  }

  async function addNumberToList(card: Card): Promise<void> {
    if (deck.filter(card => Boolean(card)).length === 20) { return; }
    const emptyIndex = deck.indexOf(null);
    const newDeck = [...deck];
    newDeck[emptyIndex] = card;
    setDeck(newDeck);
    service.setCurrentDeck(newDeck);
  }

  function previewPress(card: Card): void {
    if (!card) { return; }
    setDeck(prev => {
      const newDeck = [...prev];
      const index = prev.findIndex(c => c.name.es === card.name.es);
      if (index !== -1) {
        newDeck[index] = null;
        setNotSaved(true);
      }
      SoundService.play('DELETE_SOUND');
      const nonNullItems = newDeck.filter(item => item !== null);
      const nullItems = newDeck.filter(item => item === null);
      const deck = [...nonNullItems, ...nullItems];
      service.setCurrentDeck(deck);
      return deck;  
    });
  }

  const renderPreviewItem = useCallback(({item}: {item: Card}) => (
    <View style={[styles.previewItem, !item && {opacity: 0.8}]}>
      <TouchableOpacity
            onPress={() => previewPress(item)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          { item ? 
          <ThemedView style={{backgroundColor: Colors.light.background}}>
            <Image accessibilityLabel={item?.name[lang]} 
                    style={[
              CardGridStyles.image, 
              {width: Platform.OS === 'web' ? 31.8 : 49.4, height: 46, borderRadius: 4}
            ]} 
            source={getImageLanguage69x96(lang, item?.id)}/>
            { state.settingsState.favorites?.includes(item.id) && 
              <ThemedView style={[CardGridStyles.triangle, {
                borderRightWidth: 8,
                borderBottomWidth: 8
              }]}></ThemedView>
            }
          </ThemedView> : <MaterialIcons name="add" style={{fontSize: 16, color: Colors.light.icon}}></MaterialIcons>
          }
        </View>
      </TouchableOpacity>
    </View>
  ), []);
  
  return (
    <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
      <FlatList data={deck}
                numColumns={10}
                contentContainerStyle={{width: '100%', padding: 16, paddingTop: 20, paddingBottom: 14}}
                renderItem={renderPreviewItem}
                keyExtractor={(item, index) => index + 1 + ''}
      />
      <ThemedView style={{padding: 16, paddingTop: 0, paddingBottom: 18}}>
        <Animated.View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '78%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]} 
                        placeholder={i18n.t('search_card_placeholder')}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={SEARCH_LABEL}
                        inputMode='text'
                        onChangeText={handleSearch}/>
          </ThemedView>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: -2}}>
            <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.skeleton}}></MaterialIcons>
            <ThemedText style={{fontSize: 13, width: 40, right: -6}}>{deck.filter(d => Boolean(d)).length}/20</ThemedText>
          </ThemedView>
        </Animated.View>
      </ThemedView>
    </ThemedView>
  )
}