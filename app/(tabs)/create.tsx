import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { Colors } from '@/shared/definitions/utils/colors';
import { CardGridStyles, CreateScreenStyles, ParallaxStyles } from '@/shared/styles/component.styles';
import HeaderWithCustomModal from '@/components/shared/HeaderModal';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import SoundService from '@/core/services/sounds.service';
import { AppContext } from '../_layout';
import { StorageDeck } from '@/shared/definitions/interfaces/global.interfaces';
import { renderDeckItem } from '@/components/dedicated/cards/DeckItem';

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [decks, setDecks] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;

  const createNewDeck = () => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/create_deck`);
  }

  const openDeck = (deck: StorageDeck) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/create_deck?deck_id=${encodeURIComponent(deck.id)}`);
  }

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 326}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const renderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded && 
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_decks_found')}</ThemedText>
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

  useEffect(() => {
    setDecks(state.settingsState.decks);
    setFiltered(state.settingsState.decks);
  }, [state.settingsState.decks]);

  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={[ParallaxStyles.header]}>
          <HeaderWithCustomModal title={'deck_creation'} 
                                 modalContent={CreateScreenModal()} 
                                 modalTitle={'create_deck'}
                                 modalHeight={LARGE_MODAL_HEIGHT}/>
        </View>
        <View style={{
            paddingHorizontal: 16, 
            paddingVertical: 20,
            marginTop: -20,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
            backgroundColor: Colors.light.background
          }}>
          <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
              <Animated.View style={[CardGridStyles.inputContainer]}>
                <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '100%', borderRadius: 8}}>
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

              </Animated.View>
          </KeyboardAvoidingView>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={createNewDeck} 
                              style={{backgroundColor: Colors.light.background, width: '78%'}}
                              disabled={decks.length >= 30}>
              <ThemedView style={[
                  CreateScreenStyles.addContainer, 
                  {boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', borderWidth: 1, borderColor: 'mediumaquamarine'}
                ]}>
                <ThemedText style={CreateScreenStyles.textContainer}>{i18n.t('add_new_deck')}</ThemedText>
                <MaterialIcons name='add' style={CreateScreenStyles.addIcon}></MaterialIcons>
              </ThemedView>          
            </TouchableOpacity>
            <Animated.View style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && 
                                {marginRight: 2}, {justifyContent: 'flex-end', top: 1}
                              ]}>
              <MaterialIcons name="photo-library" 
                            style={{fontSize: 20, marginLeft: 16, top: 1}} 
                            color={Colors.light.skeleton}>
              </MaterialIcons>
              <ThemedText style={[CardGridStyles.totalCards]}>{decks?.length}/30</ThemedText>                    
            </Animated.View>
          </ThemedView>
        </View>
        <ThemedView style={[CreateScreenStyles.decksContainer, {height: 560}]}>
          <ThemedView style={{flex: 1}}>
            <FlatList data={filtered.sort((a, b) => a?.id > b?.id ? -1 : 1)}
                      numColumns={1}
                      contentContainerStyle={[{width: '100%', marginTop: 4, paddingBottom: 0}]}
                      renderItem={({item}) => renderDeckItem({item, state, onPress: () => openDeck(item)})}
                      keyExtractor={(item, index) => index + 1 + ''}
                      showsVerticalScrollIndicator={false}
                      ListEmptyComponent={renderEmpty}/>
          </ThemedView>
        </ThemedView> 
      </SafeAreaView>
    </ThemedView>
  );
}


