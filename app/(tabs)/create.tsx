import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { Colors } from '@/shared/definitions/utils/colors';
import { CardGridStyles, ParallaxStyles } from '@/shared/styles/component.styles';
import HeaderWithCustomModal from '@/components/shared/HeaderModal';
import { LARGE_MODAL_HEIGHT, TYPE_MAP } from '@/shared/definitions/utils/contants';
import SoundService from '@/core/services/sounds.service';
import { AppContext } from '../_layout';
import { StorageDeck } from '@/shared/definitions/interfaces/global.interfaces';
import { CARD_IMAGE_MAP, CARD_IMAGE_MAP_116x162 } from '@/shared/definitions/utils/card.images';

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
                      style={[CardGridStyles.clearInput, {left: 324}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const RenderEmpty = () => {
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
      return decks.filter(card =>
        card.name.toLowerCase().includes(text.toLowerCase()));
    })
  }, [decks]);

  useEffect(() => {
    setDecks(state.settingsState.decks);
    setFiltered(state.settingsState.decks);
  }, [state.settingsState.decks]);

  const renderDeck = useCallback(({item, index}: {item: StorageDeck, index: number}) => {
    return (
      <ThemedView style={[styles.deckItem, 
                          {
                            borderColor: !item.valid  ? 'goldenrod' : 'transparent', 
                            borderWidth: 1, 
                            borderLeftWidth: 0, 
                            borderTopWidth: 0, 
                            borderBottomWidth: 0
                          }]}>
        <TouchableOpacity style={{flex: 1}} onPress={() => openDeck(item)}>
          <ThemedView style={{flexDirection: 'row'}}>
            <ThemedView style={styles.popularCards}>
              {
                [0, 1].map((i) => (
                  Boolean(item.popular[i]) ? <Image style={[
                    CardGridStyles.image,
                    styles.popularImage, {
                      transform: [{rotate: `${10 + (i * 8)}deg`}],
                      left: i * 25, 
                      zIndex: (1 / (i + 1) * 100),
                    }, CARD_IMAGE_MAP[String(item.popular[i])] && {opacity: 1}
                  ]} 
                  source={CARD_IMAGE_MAP_116x162[String(item.popular[i])]}
                  key={i}/> :
                  <ThemedView style={[
                    CardGridStyles.image,
                    styles.popularImage, {
                      transform: [{rotate: `${10 + (i * 8)}deg`}],
                      left: i * 25, 
                      zIndex: (1 / (i + 1) * 100),
                      opacity: 0.8
                    }
                  ]}
                  key={i}/>
                ))
              }
            </ThemedView>
            <ThemedView style={styles.deckName}>
              <ThemedText style={{fontSize: 12, left: 0, top: 1}}>{item.name}</ThemedText>
              <ThemedView style={{position: 'absolute', right: 2, bottom: 0}}>
                {
                  item && item.energies?.length > 0 && 
                    <ThemedView style={styles.energies}>
                    {
                      item.energies.map((energy, i) => {                   
                        const image = (TYPE_MAP as any)[energy]?.image;
                        return (
                          <Image
                            key={i}
                            source={image}
                            style={{
                              width: 18,
                              height: 18,
                              position: 'relative',
                            }}
                          />
                        );
                      })
                    }
                  </ThemedView>
                }
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    )
  }, [decks, filtered]);

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
                <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                           placeholder={i18n.t('search_decks_placeholder')}
                           value={searchQuery}
                           onChangeText={handleSearch}
                           placeholderTextColor={Colors.light.text}
                           accessibilityLabel={SEARCH_LABEL}
                           inputMode='text'
                          />
                  {searchQuery.length > 0 && <ResetFilterButton/>}
              </Animated.View>
          </KeyboardAvoidingView>
          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity onPress={createNewDeck} 
                              style={{backgroundColor: Colors.light.background, width: '75%'}}
                              disabled={decks.length >= 30}>
              <ThemedView style={styles.addContainer}>
                <ThemedText style={styles.textContainer}>{i18n.t('add_new_deck')}</ThemedText>
                <MaterialIcons name='add' style={styles.addIcon}></MaterialIcons>
              </ThemedView>          
            </TouchableOpacity>
            <Animated.View style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && 
                                {marginRight: 2}, {justifyContent: 'flex-end', top: 1}
                              ]}>
              <MaterialIcons name="photo-library" 
                            style={{fontSize: 24, marginLeft: 16}} 
                            color={Colors.light.skeleton}>
              </MaterialIcons>
              <ThemedText style={[CardGridStyles.totalCards]}>{decks?.length}/30</ThemedText>                    
            </Animated.View>
          </ThemedView>
        </View>
        <ThemedView style={[styles.decksContainer, {height: 575}]}>
          <ThemedView style={{flex: 1}}>
            <FlatList data={filtered}
                      numColumns={1}
                      contentContainerStyle={[{width: '100%', marginTop: 4, paddingBottom: 0}]}
                      renderItem={renderDeck}
                      keyExtractor={(item, index) => index + 1 + ''}
                      showsVerticalScrollIndicator={false}
                      ListEmptyComponent={RenderEmpty}/>
          </ThemedView>
        </ThemedView> 
      </SafeAreaView>
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
  addContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 10
  },
  addIcon: {
    width: 20, 
    height: 20, 
    color: 'mediumaquamarine', 
    fontSize: 25,
    top: -2,
  },
  textContainer: {
    
  },
  decksContainer: {
    padding: 16,
    zIndex: 0,
    overflow: 'hidden',
    height: '100%'
  },
  deckItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginBottom: 10,
    overflow: 'hidden',
  },
  popularCards: {
    flexDirection: 'row', 
    minHeight: 30, 
    minWidth: 114, 
    position: 'relative'
  },
  deckName: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    flexDirection: 'row'
  },
  energies: {
    flexDirection: 'row',
    gap: 6, 
    justifyContent: 'center', 
    backgroundColor: Colors.light.background, 
    padding: 4, 
    borderRadius: 40,
  },
  popularImage: {
    width: 55, 
    borderRadius: 4, 
    position: 'absolute', 
    backgroundColor: Colors.light.skeleton,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.2,
    top: 4,
  }
});


