import { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { AppContext } from '../_layout';
import ImageGridWithSearch from '@/components/ui/CardGrid';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SortItem } from '@/shared/definitions/interfaces/layout.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import SoundService from '@/core/services/sounds.service';
import { CardsScreenModal } from '@/components/modals/CardsScreenModal';

export default function CardsScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [sort, setSort] = useState<SortItem>();
  const focused = useIsFocused();

  async function handleActionMenu(action: string): Promise<void> {
    await playSound();
    dispatch({type: action, value: true});
  }

  useEffect(() => {
    if (state.filterState.sort.length > 0) {
      const active = state.filterState.sort.find(s => s.active);
      setSort(active);
    } else {
      setSort({active: true, id: 1, icon: 'content-paste-search', label: 'order_by_id', order: 'asc'});
    }
  }, [state.filterState.sort]);

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_OPEN');
  }, []);

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
  }, [sort]);

  const getFilterOrderIcon = useCallback(() => {
    return state.filterState.filter.areAllPropertiesNull() ? 'cancel' : 'check-circle';
  }, [state.filterState.filter]);

  return (
    <>
      <ImageGridWithSearch state={state} 
                           modal={CardsScreenModal()}
                           modalTitle='cards'
                           title='card_collection'
                           focused={focused}/>
      { state.cardState.cards?.length > 0 ? (
        <>
          <TouchableOpacity onPress={() => handleActionMenu('OPEN_SORT')} style={cardStyles.container}>
            <ThemedView>
              <MaterialIcons name={(sort?.icon as any) || 'content-paste-search'} 
                             color={'skyblue'} 
                             style={fixFilterIcon() as StyleProp<TextStyle>}> 
              </MaterialIcons>
              <MaterialIcons name={getOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
            </ThemedView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (handleActionMenu('OPEN_FILTER'))} 
                            style={[cardStyles.container, {bottom: 88}]}>
            <ThemedView>
              <IconSymbol name="cat.circle" 
                          color={'mediumaquamarine'} 
                          style={{fontSize: 32}}>
              </IconSymbol>
              <MaterialIcons name={getFilterOrderIcon()} style={cardStyles.sortIcon}></MaterialIcons>
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


