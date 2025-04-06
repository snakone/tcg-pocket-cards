import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, Platform, TextInput, TouchableOpacity, View } from 'react-native';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import { DataRxjs } from '@/core/rxjs/DataRxjs';

import { AppContext } from '../_layout';
import { CardGridStyles, homeScreenStyles } from '@/shared/styles/component.styles';
import { LARGE_MODAL_HEIGHT, MAX_CONTENT } from '@/shared/definitions/utils/constants';
import { StorageDeck } from '@/shared/definitions/interfaces/global.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CreateScreenModal } from '@/components/modals/screens/CreateScreenModal';
import { RenderDeckItem } from '@/components/dedicated/cards/DeckItem';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ResetFilterButton } from '@/components/ui/ResetFilterButton';

export default function CreateDeckScreen() {
  console.log('Create Screen')
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [decks, setDecks] = useState<StorageDeck[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [lang, setLang] = useState(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const sub = DataRxjs.getData<StorageDeck[]>('decks')
     .subscribe(res => setDecks(res));

    return () => sub.unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    if(decks.length === 0) { return decks; }
    return decks
      .filter(deck => deck.name.toLowerCase()?.includes(searchQuery.toLowerCase()))
      .sort((a, b) => a?.id > b?.id ? -1 : 1);
  }, [decks, searchQuery])

  const createNewDeck = () => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/create_deck`);
  }

  const openDeck = (deck: StorageDeck) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/create_deck?deck_id=${encodeURIComponent(deck.id)}`);
  }

  const RenderFooter = useCallback(() => {
    return (
      <ThemedView style={{paddingTop: 16}}>
        <TouchableOpacity style={[
          homeScreenStyles.ctaButton,
          {marginBottom: 10, marginTop: 6, backgroundColor: 'skyblue'},
          Platform.OS !== 'web' && {marginBottom: 16},
          decks.length >= MAX_CONTENT && {opacity: 0.5}
        ]} 
            onPress={createNewDeck}
            disabled={decks.length >= MAX_CONTENT}>
          <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
            {i18n.t('add_new_deck')}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
      )
  }, [decks]);

  const ListHeader = useMemo(() => (
    <View style={CardGridStyles.inputContainer}>
      <ThemedView
        style={{
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
          width: '78%',
          borderRadius: 8,
        }}>
        <TextInput
          style={[CardGridStyles.searchInput, { width: 280 }]}
          placeholder={i18n.t('search_decks_placeholder')}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={Colors.light.text}
          accessibilityLabel={'SEARCH_LABEL'}
          inputMode="text"
        />
        {searchQuery.length > 0 && 
          <ResetFilterButton left={248} onPress={() => setSearchQuery('')}/>}
      </ThemedView>
      <View
        style={[
          CardGridStyles.actionsContainer,
          Platform.OS !== 'web' && { marginRight: 2 },
          { justifyContent: 'flex-end', top: 1 },
        ]}>
        <MaterialIcons
          name="photo-library"
          style={{ fontSize: 20, marginLeft: 16, top: 1 }}
          color={Colors.light.skeleton}
        />
        <ThemedText style={[CardGridStyles.totalCards]}>{decks?.length}/30</ThemedText>
      </View>
    </View>
  ), [decks.length, searchQuery]);

  return (
    <>
      <ParallaxScrollView title={"deck_creation"} 
                          modalTitle='create_deck'
                          modalContent={<CreateScreenModal></CreateScreenModal>}
                          modalHeight={LARGE_MODAL_HEIGHT}
                          styles={{gap: 0}}>
        <FlatList data={filtered}
                  numColumns={1}
                  renderItem={({item, index}) => 
                    <RenderDeckItem item={item} 
                                    language={lang} 
                                    onPress={() => openDeck(item)} />}
                  keyExtractor={(_, index) => index + 1 + ''}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={<ThemedText style={{ paddingInline: 6 }}>{i18n.t('no_decks_found')}</ThemedText>}
                  initialNumToRender={6}
                  bounces={false}
                  overScrollMode='never'
                  stickyHeaderIndices={[0]}
                  keyboardDismissMode={'on-drag'}
                  ListHeaderComponent={ListHeader}/>
        <RenderFooter></RenderFooter>           
      </ParallaxScrollView>
    </>
  );
}


