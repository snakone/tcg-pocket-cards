import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { debounceTime, Subscription } from 'rxjs';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';

import { AppContext } from '../_layout';
import ImageGridWithSearch from '@/components/ui/CardGrid';
import CardsService from '@/core/services/cards.service';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { useError } from '@/core/providers/ErrorProvider';

export default function CardsScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const cardsService = useMemo(() => new CardsService(), []);
  const [loading, setLoading] = useState(true);
  const opened = useRef<Audio.Sound>();
  const { show: showError } = useError();

  async function handleActionMenu(action: string): Promise<void> {
    await playSound();
    dispatch({type: action, value: true});
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
      .pipe(debounceTime(300))
      .subscribe({
        next: (res) => {
          setTimeout(() => {
            dispatch({ type: 'SET_CARDS', cards: res });
            setLoading(false);
          }, 3000);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          setLoading(false);
        }
      });

      return sub;
  }, [dispatch]);
  
  useEffect(() => {
    let sub: Subscription;
    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [state.cardState.loaded]);

  return (
    <>
      { loading ? <LoadingOverlay></LoadingOverlay> : null }
      <ImageGridWithSearch state={state} 
                           key={loading ? 'loading' : 'loaded'}/>
      { loading ? null : (
        <>
          <TouchableOpacity onPress={() => handleActionMenu('OPEN_SORT')} style={styles.container}>
            <ThemedView>
              <IconSymbol name="suit.heart" color={'skyblue'} style={{fontSize: 32}}></IconSymbol>
              <MaterialIcons name="arrow-upward" style={styles.sortIcon}></MaterialIcons>
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (handleActionMenu('OPEN_FILTER'))} style={[styles.container, {bottom: 88}]}>
            <ThemedView>
              <IconSymbol name="cat.circle" color={'mediumaquamarine'} style={{fontSize: 32}}></IconSymbol>
            </ThemedView>
          </TouchableOpacity>       
        </>
      )}
    </>
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
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    opacity: 0.8
  },
  sortIcon: {
    position: 'absolute',
    fontSize: 16,
    backgroundColor: 'rgba(170, 170, 170, .8)',
    borderRadius: 20,
    color: 'white',
    right: -16,
    top: 8.5
  }
});


