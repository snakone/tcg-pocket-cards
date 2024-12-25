import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { Colors } from '@/shared/definitions/utils/colors';
import { CardGridStyles, HEADER_MIN_HEIGHT, ParallaxStyles } from '@/shared/styles/component.styles';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useRef, useState } from 'react';
import { GestureResponderEvent, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import HeaderWithCustomModal from '@/components/shared/HeaderModal';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/contants';
import useHeaderAnimation from '@/components/ui/HeaderAnimation';
import { useRouter } from 'expo-router';
import SoundService from '@/core/services/sounds.service';
import { useFocusEffect } from '@react-navigation/native';

export default function CreateDeckScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const scrollY = useSharedValue(0);
  const router = useRouter();
  const scrollRef = useRef<Animated.ScrollView | null>(null);
  
  const { 
    animatedHeaderStyle, 
    animatedIconStyle, 
    animatedTitleStyle 
  } = useHeaderAnimation(scrollY);

  const derivedOpacity = useDerivedValue(() => interpolate(
    scrollY.value,
    [0, HEADER_MIN_HEIGHT],
    [1, 0],
    Extrapolation.CLAMP
  ));

  const animatedOpacityStyle = useAnimatedStyle(() => ({
    opacity: derivedOpacity.value,
  }));

  const createNewDeck = () => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/create_deck`);
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

  async function goUp(_: GestureResponderEvent | null): Promise<void> {
    scrollRef.current?.scrollTo({y: 0, animated: false});
  }

  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Animated.View style={[ParallaxStyles.header, animatedHeaderStyle]}>
          <HeaderWithCustomModal title={'deck_creation'} 
                                 modalContent={CreateScreenModal()} 
                                 modalTitle={'create_deck'} 
                                 animatedStyle={animatedTitleStyle}
                                 animatedIconStyle={animatedIconStyle}
                                 modalHeight={LARGE_MODAL_HEIGHT}/>
        </Animated.View>
        <Animated.ScrollView stickyHeaderIndices={[0]} 
                             showsVerticalScrollIndicator={false}
                             scrollEventThrottle={16}
                             onScroll={scrollHandler}
                             keyboardShouldPersistTaps={'never'}
                             keyboardDismissMode={'on-drag'}
                             ref={scrollRef}>
          <Animated.View style={{paddingHorizontal: 16}}>
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
            <TouchableOpacity onPress={createNewDeck} style={{backgroundColor: Colors.light.background}}>
              <ThemedView style={styles.addContainer}>
                <ThemedText style={styles.textContainer}>{i18n.t('add_new_deck')}</ThemedText>
                <MaterialIcons name='add' style={styles.addIcon}></MaterialIcons>
              </ThemedView>          
            </TouchableOpacity>
            <Animated.View style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && 
                                {marginRight: 2}, {justifyContent: 'flex-end'}, animatedOpacityStyle
                               ]}>
              <MaterialIcons name="photo-library" 
                             style={{fontSize: 24, marginLeft: 16, left: -4}} 
                             color={Colors.light.skeleton}>
              </MaterialIcons>
              <ThemedText style={[CardGridStyles.totalCards, {top: -2}]}>1/30</ThemedText>                    
            </Animated.View>
          </Animated.View>

          <ThemedView style={styles.decksContainer}>
            <ThemedView style={{flex: 1}}>
              <ThemedText>Hola</ThemedText>
            </ThemedView>
          </ThemedView>

        </Animated.ScrollView>
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
    marginBottom: 16,
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
    padding: 24,
    height: 1000,
    zIndex: 0,
    overflow: 'hidden',
  }
});


