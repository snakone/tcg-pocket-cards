import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import React from "react";
import { Image } from "expo-image";
import { Subscription } from "rxjs";

import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, CardGridStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import Storage from "@/core/storage/storage.service";
import { AppContext } from "@/app/_layout";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CARD_IMAGE_MAP_69x96 } from "@/shared/definitions/utils/card.images";
import { Colors } from "@/shared/definitions/utils/colors";
import CardsService from "@/core/services/cards.service";
import { useError } from "@/core/providers/ErrorProvider";
import LoadingOverlay from "@/components/ui/LoadingOverlay";

export default function PickBestMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(true);
  const cardsService = useMemo(() => new CardsService(), []);
  const { show: showError } = useError();

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', cards: res });
          Storage.set('cards', res);
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          Storage.set('cards', []);
          setLoading(false);
        }
      });

      return sub;
  }, [dispatch]);
  
  useEffect(() => {
    const cards: Card[] = state.settingsState.cards;

    if (cards && cards.length !== 0 && !state.cardState.loaded) {
      dispatch({ type: 'SET_CARDS', cards });
      setLoading(false);
      return;
    }

    let sub: Subscription;

    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, []);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE');
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

  useEffect(() => {
    const getBest = async () => {
      const best = await Storage.get('best');
      setSelected(best);
    };

    getBest();
  }, []);

  function handleClick(value: number): void {
    SoundService.play('POP_PICK');
    if (selected === value) { return; }
    setSelected(value);
    Storage.set('best', value);
    const settings = {...state.settingsState, best: value};
    dispatch({type: 'SET_SETTINGS', value: settings});
    closeMenu();
  }

  useEffect(() => {
    setCards(state.cardState.cards);
  }, [state.cardState.cards]);

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => handleClick(item.id)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          <Image accessibilityLabel={item.name}
                  source={CARD_IMAGE_MAP_69x96[String(item.id)]}
                  style={[
                  CardGridStyles.image, 
                  {width: Platform.OS === 'web' ? 57.6 : 58}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  ), []);

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container, {height: 605}]}>
        { loading && <LoadingOverlay/> }
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('select_a_card')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1, padding: 0}]}>
          <ThemedView style={{flex: 1, alignItems: 'center', marginTop: 12}}>
            <FlatList data={cards}
                      renderItem={renderCard}
                      numColumns={6}
                      showsVerticalScrollIndicator={false}
                      maxToRenderPerBatch={24}
                      initialNumToRender={6}
                      windowSize={12}
                      keyExtractor={(item, index) => index + ''}
                      ListFooterComponent={<ThemedView style={{height: 12}}/>}
                    />
          </ThemedView>
        </ThemedView>
        <View style={styles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}