import { router } from 'expo-router';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Animated from 'react-native-reanimated';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { ShareScreenModal } from '@/components/modals';
import { FlatList, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { CardGridStyles, CreateScreenStyles } from '@/shared/styles/component.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/shared/definitions/utils/colors';
import { AppContext } from '../_layout';
import { renderDeckItem } from '@/components/dedicated/cards/DeckItem';
import SoundService from '@/core/services/sounds.service';
import { StorageDeck } from '@/shared/definitions/interfaces/global.interfaces';

export default function ShareScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [decks, setDecks] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;

  useEffect(() => {
    const valid = state.settingsState.decks.filter(d => d.valid);
    setDecks(valid);
    setFiltered(valid);
  }, [state.settingsState.decks]);

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 324}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(prev => {
      if(decks.length === 0) { return prev; }
      return decks.filter(card =>
        card.name.toLowerCase()?.includes(text.toLowerCase()));
    })
  }, [decks]);

  
  const RenderEmpty = useCallback(() => {
    if (searchQuery.length > 0) {
      return (
        <ThemedView style={{marginTop: 6}}>
          <ThemedText style={{ paddingHorizontal: 6 }}>{i18n.t('no_decks_found')}</ThemedText>
        </ThemedView>
      )
    }
    return (
      <ThemedView style={{marginTop: 6}}>
        <ThemedText style={{ paddingHorizontal: 6 }}>{i18n.t('no_valid_decks_found')}</ThemedText>
        <ThemedText style={{ paddingHorizontal: 6}}>{i18n.t('no_valid_remember')}</ThemedText>
        <ThemedText style={{ paddingHorizontal: 6}}>{i18n.t('no_valid_empty')}</ThemedText>
      </ThemedView>
    )
  }, [searchQuery]);
  
  const openDeck = (deck: StorageDeck) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/share_deck?deck_id=${encodeURIComponent(deck.id)}`);
  }
  
  return (
    <ParallaxScrollView title={"share"} 
                        modalTitle='share'
                        modalContent={ShareScreenModal()}
                        styles={{gap: 0}}>
      <ThemedView style={{ 
          paddingVertical: 20,
          marginTop: -20,
          width: '100%',
        }}>
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
            <Animated.View style={[CardGridStyles.inputContainer, {paddingBottom: 0}]}>
              <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                          placeholder={i18n.t('search')}
                          value={searchQuery}
                          onChangeText={handleSearch}
                          placeholderTextColor={Colors.light.text}
                          accessibilityLabel={SEARCH_LABEL}
                          inputMode='text'
                        />
                {searchQuery.length > 0 && <ResetFilterButton/>}
            </Animated.View>
        </KeyboardAvoidingView>
      </ThemedView>
      <ThemedView style={[CreateScreenStyles.decksContainer, {height: 575, padding: 0}]}>
        <ThemedView style={{flex: 1}}>
          <FlatList data={filtered.sort((a, b) => a?.id > b?.id ? -1 : 1)}
                    numColumns={1}
                    contentContainerStyle={[{width: '100%', paddingBottom: 0}]}
                    renderItem={({item, index}) => renderDeckItem({item, index, onPress: () => openDeck(item)})}
                    keyExtractor={(item, index) => index + 1 + ''}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={RenderEmpty}/>
        </ThemedView>
      </ThemedView>               
    </ParallaxScrollView>
  );
}