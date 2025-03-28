import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';
import { FlatList, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { Colors } from '@/shared/definitions/utils/colors';
import { CardGridStyles, homeScreenStyles } from '@/shared/styles/component.styles';
import { LARGE_MODAL_HEIGHT, MAX_CONTENT } from '@/shared/definitions/utils/constants';
import SoundService from '@/core/services/sounds.service';
import { AppContext } from '../_layout';
import { StorageDeck } from '@/shared/definitions/interfaces/global.interfaces';
import { renderDeckItem } from '@/components/dedicated/cards/DeckItem';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [decks, setDecks] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const flatListRef = useRef<FlatList<StorageDeck> | null>(null);

  const createNewDeck = () => {
    SoundService.play('AUDIO_MENU_OPEN');
    dispatch({type: 'SET_NAVIGATING', value: true});
    router.push(`/screens/create_deck`);
  }

  useFocusEffect(useCallback(() => {
    goUp();
  }, []));

  async function goUp(): Promise<void> {
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

  const openDeck = (deck: StorageDeck) => {
    SoundService.play('AUDIO_MENU_OPEN');
    dispatch({type: 'SET_NAVIGATING', value: true});
    router.push(`/screens/create_deck?deck_id=${encodeURIComponent(deck.id)}`);
  }

  useFocusEffect(useCallback(() => {
    return (() => {
      handleSearch('');
    })
  }, [decks]));

  const ResetFilterButton = useCallback(() => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 250}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  ), []);

  const renderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded && 
        <ThemedText style={{ paddingVertical: 12, paddingHorizontal: Platform.OS !== 'web' ? 6 : 22}}>
          {i18n.t('no_decks_found')}
        </ThemedText>
    }, [state.cardState.loaded]);
  
    return renderCardState();
  };

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(prev => {
      if(decks.length === 0) { return prev; }
      return decks.filter(deck =>
        deck.name.toLowerCase()?.includes(text.toLowerCase()));
    })
  }, [decks]);

  const renderFooter = useCallback(() => {
    return (
      <ThemedView style={{paddingHorizontal: Platform.OS !== 'web' ? 0 : 16, paddingTop: 16}}>
        <TouchableOpacity style={[
          homeScreenStyles.ctaButton,
          {marginBottom: 10, marginTop: 6, backgroundColor: 'skyblue'},
          Platform.OS !== 'web' && {marginBottom: 16},
          decks.length >= MAX_CONTENT && {opacity: 0.5}
        ]} 
            onPress={() => createNewDeck()}
            disabled={decks.length >= MAX_CONTENT || state.cardState.navigating}>
          <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
            {i18n.t('add_new_deck')}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
      )
  }, [decks, state.cardState.navigating]);

  useEffect(() => {
    setDecks(state.settingsState.decks);
    setFiltered(state.settingsState.decks);
  }, [state.settingsState.decks]);

  return (
    <>
      <ParallaxScrollView title={"deck_creation"} 
                          modalTitle='create_deck'
                          modalContent={CreateScreenModal()}
                          modalHeight={LARGE_MODAL_HEIGHT}
                          styles={{paddingHorizontal: 0, gap: 0}}>
        <FlatList data={filtered.sort((a, b) => a?.id > b?.id ? -1 : 1)}
                  numColumns={1}
                  renderItem={({item, index}) => 
                  (<ThemedView style={[{paddingHorizontal: Platform.OS !== 'web' ? 0 : 16}, index === 0 && {paddingTop: 12}]}>
                    {renderDeckItem({item, state, onPress: () => openDeck(item)})}
                  </ThemedView>)}
                  keyExtractor={(item, index) => index + 1 + ''}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={renderEmpty}
                  initialNumToRender={6}
                  ref={flatListRef}
                  stickyHeaderIndices={[0]}
                  ListHeaderComponent={
                    <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
                      <Animated.View style={[
                          CardGridStyles.inputContainer, 
                          {paddingHorizontal: Platform.OS !== 'web' ? 0 : 16, paddingBottom: 9}
                        ]}>
                        <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '78%', borderRadius: 8}}>
                          <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                                    placeholder={i18n.t('search_decks_placeholder')}
                                    value={searchQuery}
                                    onChangeText={handleSearch}
                                    placeholderTextColor={Colors.light.text}
                                    accessibilityLabel={SEARCH_LABEL}
                                    inputMode='text'
                                    />
                            {searchQuery.length > 0 && <ResetFilterButton/>}
                        </ThemedView>
                        <Animated.View style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && 
                                        {marginRight: 2}, {justifyContent: 'flex-end', top: 1}
                                          ]}>
                          <MaterialIcons name="photo-library" 
                                        style={{fontSize: 20, marginLeft: 16, top: 1}} 
                                        color={Colors.light.skeleton}>
                          </MaterialIcons>
                          <ThemedText style={[CardGridStyles.totalCards]}>{decks?.length}/30</ThemedText>                    
                        </Animated.View>
                      </Animated.View>
                    </KeyboardAvoidingView>
        }/>
        {renderFooter()}              
      </ParallaxScrollView>
    </>
  );
}


