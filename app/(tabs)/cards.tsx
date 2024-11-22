import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Subscription } from 'rxjs';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { AppContext } from '../_layout';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import ImageGridWithSearch from '@/components/ui/CardGrid';
import { CardsScreenModal } from '@/components/modals/CardsScreenModal';
import CardsService from '@/core/services/cards.service';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { Audio } from 'expo-av';

export default function CardsScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const cardsService = useMemo(() => new CardsService(), []);
  const [loading, setLoading] = useState(true);
  const opened = useRef<Audio.Sound>();

  async function handleFilterMenu(): Promise<void> {
    await playSound();
    dispatch({type: 'OPEN', value: true});
  }

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_OPEN);
      opened.current = sound;
      opened.current.setVolumeAsync(.5);
    }

    loadSounds();

    return () => {
      if (opened.current) opened.current.unloadAsync();
    };
  }, []);

  const playSound = useCallback(async () => {
    if (opened.current) await opened.current.replayAsync();
  }, []);

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          setTimeout(() => {
            dispatch({ type: 'SET_CARDS', cards: res });
            setLoading(false);
          }, 5000);
        },
        error: () => setLoading(false)
      });

      return sub;
  }, [cardsService, dispatch]);
  
  useEffect(() => {
    let sub: Subscription;
    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [loading]);

  return (
    <ParallaxScrollView title={"card_collection"} 
                        modalTitle='cards'
                        modalContent={CardsScreenModal()}>
      { loading ? <LoadingOverlay></LoadingOverlay> : null }
      <ImageGridWithSearch cards={state.cardState.cards} key={loading ? 'loading' : 'loaded'}/>
      { loading ? null : (
        <TouchableOpacity onPress={() => handleFilterMenu()} style={styles.container}>
          <ThemedView >
            <IconSymbol name="suit.heart" color={'skyblue'} style={{fontSize: 30}}></IconSymbol>
          </ThemedView>
        </TouchableOpacity>
      )}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    right: 24, 
    bottom: 24,
    width: 50,
    height: 50,
    borderRadius: 48,
    backgroundColor: 'white',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'
  }
});


