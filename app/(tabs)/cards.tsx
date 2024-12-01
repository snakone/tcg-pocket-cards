import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { debounceTime, Subscription } from 'rxjs';
import { TouchableOpacity, StyleSheet, StyleProp, TextStyle } from 'react-native';
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
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import SoundService from '@/core/services/sounds.service';

export default function CardsScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const cardsService = useMemo(() => new CardsService(), []);
  const [loading, setLoading] = useState(true);
  const { show: showError } = useError();
  const [sort, setSort] = useState<SortItem>();

  async function handleActionMenu(action: string): Promise<void> {
    await playSound();
    dispatch({type: action, value: true});
  }

  useEffect(() => {
    if (state.filterState.sort.length > 0) {
      const active = state.filterState.sort.find(s => s.active);
      setSort(active);
    }
  }, [state.filterState.sort])

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_OPEN');
  }, []);

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .pipe(debounceTime(666))
      .subscribe({
        next: (res) => {
          setTimeout(() => {
            dispatch({ type: 'SET_CARDS', cards: res });
            setLoading(false);
          }, 2500);
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

  const fixFilterIcon = useCallback(() => {
    return [
      { fontSize: 32, position: 'relative' }, 
      sort?.label === 'order_by_hp' || sort?.label === 'order_by_rarity' ? {top: 1} : null,
      sort?.label === 'order_by_retreat' ? {top: -2} : null
    ]
  }, [sort]);

  const getOrderIcon = useCallback(() => {
    return !sort?.order ? 'arrow-upward' : 
            sort.order === 'asc' ? 'arrow-upward' : 'arrow-downward'
  }, [sort])

  const getFilterOrderIcon = useCallback(() => {
    return state.filterState.filter.areAllPropertiesNull() ? 'cancel' : 'check-circle';
  }, [state.filterState.filter])

  return (
    <>
      { loading && <LoadingOverlay/> }
        <ImageGridWithSearch state={state} key={loading ? 'loading' : 'loaded'}/>
      { loading ? null : state.cardState.cards?.length > 0 ? (
        <>
          <TouchableOpacity onPress={() => handleActionMenu('OPEN_SORT')} style={cardStyles.container}>
            <ThemedView>
              <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                             color={'skyblue'} 
                             style={fixFilterIcon() as StyleProp<TextStyle>}> 
              </MaterialIcons>
              <MaterialIcons name={getOrderIcon()} style={cardStyles.sortIcon}>
              </MaterialIcons>
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (handleActionMenu('OPEN_FILTER'))} 
                            style={[cardStyles.container, {bottom: 88}]}>
            <ThemedView>
              <IconSymbol name="cat.circle" 
                          color={'mediumaquamarine'} 
                          style={{fontSize: 32}}>
              </IconSymbol>
              <MaterialIcons name={getFilterOrderIcon()} style={cardStyles.sortIcon}>
              </MaterialIcons>
            </ThemedView>
          </TouchableOpacity>       
        </>
      ) : null}
    </>
  );
}

export const cardStyles = StyleSheet.create({
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
    backgroundColor: 'rgba(120, 120, 120, .8)',
    borderRadius: 20,
    color: 'white',
    right: -16,
    top: 8.5
  },
  sortIconList: {
    position: 'absolute',
    fontSize: 20,
    borderRadius: 20,
    right: -30,
    top: 9,
    color: Colors.light.text,
  }
});


