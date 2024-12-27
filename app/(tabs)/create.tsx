import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { Colors } from '@/shared/definitions/utils/colors';
import { CardGridStyles, HEADER_HEIGHT, HEADER_MIN_HEIGHT, ParallaxStyles } from '@/shared/styles/component.styles';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FlatList, GestureResponderEvent, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import HeaderWithCustomModal from '@/components/shared/HeaderModal';
import { LARGE_MODAL_HEIGHT, TYPE_MAP } from '@/shared/definitions/utils/contants';
import useHeaderAnimation from '@/components/ui/HeaderAnimation';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import SoundService from '@/core/services/sounds.service';
import { useFocusEffect } from '@react-navigation/native';
import { AppContext } from '../_layout';
import { StorageDeck } from '@/shared/definitions/interfaces/global.interfaces';
import { CARD_IMAGE_MAP } from '@/shared/definitions/utils/card.images';

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const scrollY = useSharedValue(0);
  const router = useRouter();
  const scrollRef = useRef<Animated.FlatList<StorageDeck[]> | null>(null);
  const [decks, setDecks] = useState<any[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;

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

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useFocusEffect(
    useCallback(() => { goUp(null); }, [])
  );

  useEffect(() => {
    setDecks(state.settingsState.decks);
  }, [state.settingsState.decks]);

  async function goUp(_: GestureResponderEvent | null): Promise<void> {
    scrollRef.current?.scrollToOffset({animated: false, offset: 0});
  }

  const renderDeck = useCallback(({item, index}: {item: StorageDeck, index: number}) => {
    return (
      <ThemedView style={styles.deckItem}>
        <TouchableOpacity style={{flex: 1}} onPress={() => openDeck(item)}>
          <ThemedView style={{flexDirection: 'row'}}>
            <ThemedView style={{flexDirection: 'row', minHeight: 30, minWidth: 150, position: 'relative', left: 4}}>
              {
                [0, 1].map((i) => (
                  <Image style={[
                    CardGridStyles.image, {
                      width: 70, 
                      borderRadius: 4, 
                      position: 'absolute', 
                      transform: [{rotate: `${10 + (i * 8)}deg`}],
                      left: i * 35, 
                      zIndex: (1 / (i + 1) * 100),
                      backgroundColor: Colors.light.skeleton,
                      shadowColor: 'black',
                      shadowRadius: 4,
                      shadowOffset: {height: 2, width: 2},
                      shadowOpacity: 0.2,
                      opacity: 0.8,
                      top: 4,
                    }, CARD_IMAGE_MAP[String(item.popular[i])] && {opacity: 1}
                  ]} 
                  source={CARD_IMAGE_MAP[String(item.popular[i])]}
                  key={i}/>
                ))
              }
            </ThemedView>
            <ThemedView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ThemedText style={{fontSize: 12}}>{item.name}</ThemedText>
              {
                item && item.energies?.length > 0 && 
                  <ThemedView style={
                    {
                      flexDirection: 'row',
                      gap: 4, 
                      justifyContent: 'center', 
                      marginTop: 2, 
                      backgroundColor: Colors.light.background, 
                      padding: 4, 
                      borderRadius: 40,
                      top: 2
                    }}>
                  {
                    item.energies.map((energy, i) => {                   
                      const image = (TYPE_MAP as any)[energy]?.image;
                      return (
                        <Image
                          key={i}
                          source={image}
                          style={{
                            width: 22,
                            height: 22,
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
        </TouchableOpacity>
      </ThemedView>
    )
  }, [decks]);

  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Animated.View style={[ParallaxStyles.header]}>
          <HeaderWithCustomModal title={'deck_creation'} 
                                 modalContent={CreateScreenModal()} 
                                 modalTitle={'create_deck'}
                                 modalHeight={LARGE_MODAL_HEIGHT}/>
        </Animated.View>
        
          <Animated.View style={{
              paddingHorizontal: 16, 
              paddingBottom: 20, 
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
              <TouchableOpacity onPress={createNewDeck} style={{backgroundColor: Colors.light.background, width: '75%'}}>
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
          </Animated.View>
          <ThemedView style={[styles.decksContainer, {height: 575}]}>
            <ThemedView style={{flex: 1}}>
              <FlatList data={decks}
                        numColumns={1}
                        contentContainerStyle={[{width: '100%', marginTop: 12, paddingBottom: 0}]}
                        renderItem={renderDeck}
                        keyExtractor={(item, index) => index + 1 + ''}
                        showsVerticalScrollIndicator={false}
              />
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
    padding: 12,
    marginBottom: 16,
    overflow: 'hidden',
  }
});


