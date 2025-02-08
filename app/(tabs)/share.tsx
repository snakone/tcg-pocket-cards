import { router } from 'expo-router';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { ShareScreenModal } from '@/components/modals';
import { KeyboardAvoidingView, SectionList, TextInput, TouchableOpacity } from 'react-native';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { CardGridStyles, CreateScreenStyles } from '@/shared/styles/component.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/shared/definitions/utils/colors';
import { AppContext } from '../_layout';
import { renderDeckItem } from '@/components/dedicated/cards/DeckItem';
import SoundService from '@/core/services/sounds.service';
import { StorageDeck, TradeItem } from '@/shared/definitions/interfaces/global.interfaces';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import TradeUserItem from '@/components/dedicated/trade/TradeUserItem';

export default function ShareScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [decks, setDecks] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [trades, setTrades] = useState<any[]>([]);
  const [filteredTrades, setFilteredTrades] = useState<any[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;

  useEffect(() => {
    const valid = state.settingsState.decks.filter(d => d.valid);
    setDecks(valid);
    setFiltered(valid);
  }, [state.settingsState.decks]);

  useEffect(() => {
    const valid = state.settingsState.trades.filter(t => t?.valid);
    setTrades(valid);
    setFilteredTrades(valid);
  }, [state.settingsState.trades]);

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 324}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(prev => {
      if(decks.length === 0) { return prev; }
      return decks.filter(card =>
        card.name.toLowerCase()?.includes(text.toLowerCase()));
    });

    setFilteredTrades(prev => {
      if(trades.length === 0) { return prev; }
      return trades.filter(trade =>
        trade.title.toLowerCase()?.includes(text.toLowerCase()));
    });
  }, [decks]);

  const renderTrade = useCallback(({item}: {item: TradeItem}) => {
    const rarity = state.cardState.cards.find(card => item?.desired.includes(card.id))?.rarity;
    return (
      <TouchableOpacity style={{paddingHorizontal: 16}} onPress={() => openTrade(item)}>
        <TradeUserItem item={item} rarity={rarity}/>
      </TouchableOpacity>
    )
  }, [state.settingsState.trades]);

  const renderEmpty = useCallback(() => {
    if (searchQuery.length > 0) {
      return (
        <ThemedView style={{marginTop: 6}}>
          <ThemedText style={{ paddingHorizontal: 6 }}>{i18n.t('no_share_found')}</ThemedText>
        </ThemedView>
      )
    }
    return (
      <ThemedView style={{marginTop: 6}}>
        <ThemedText style={{ paddingHorizontal: 6 }}>{i18n.t('no_valid_share_found')}</ThemedText>
        <ThemedText style={{ paddingHorizontal: 6}}>{i18n.t('no_valid_remember')}</ThemedText>
        <ThemedText style={{ paddingHorizontal: 6}}>{i18n.t('no_valid_empty')}</ThemedText>
      </ThemedView>
    )
  }, [searchQuery]);
  
  const openDeck = (deck: StorageDeck) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/share_deck?deck_id=${encodeURIComponent(deck.id)}`);
  }

  const openTrade = (trade: TradeItem) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.push(`/screens/share_trade?trade_id=${encodeURIComponent(trade.id)}`);
  }
  
  return (
    <ParallaxScrollView title={"share"} 
                        modalTitle='share'
                        modalContent={ShareScreenModal()}
                        modalHeight={LARGE_MODAL_HEIGHT}
                        styles={{gap: 0, paddingHorizontal: 0}}>
      <ThemedView style={{ 
          paddingVertical: 20,
          paddingHorizontal: 16,
          marginTop: -20,
          width: '100%',
        }}>
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
            <Animated.View style={[CardGridStyles.inputContainer, {paddingBottom: 0}]}>
              <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                          placeholder={i18n.t('search')}
                          value={searchQuery}
                          onChangeText={handleSearch}
                          placeholderTextColor={Colors.light.text}
                          accessibilityLabel={SEARCH_LABEL}
                          inputMode='text'
                        />
                {searchQuery.length > 0 && <ResetFilterButton/>}
            </Animated.View>
        </KeyboardAvoidingView>
      </ThemedView>

      <ThemedView style={[CreateScreenStyles.decksContainer, {flex: 1, padding: 0}]}>
        <ThemedView style={{flex: 1}}>
          <SectionList stickySectionHeadersEnabled
                       showsVerticalScrollIndicator={false}
                       SectionSeparatorComponent={(section) => <ThemedView style={{height: 16}}></ThemedView>}
                       sections={[
                        { title: i18n.t('decks'), 
                          data: filtered.sort((a, b) => a?.id > b?.id ? -1 : 1), 
                          key: 'decks'
                        },
                        {
                          title: i18n.t('trades'),
                          data: filteredTrades.sort((b, a) => b.id > a.id ? -1 : 1),
                          key: 'trades'
                         },
                       ]}
                       renderItem={({item, section, index}) => 
                          section.key === 'decks' ? (
                            <ThemedView style={{paddingHorizontal: 16}}>
                              {renderDeckItem({item, index, onPress: () => openDeck(item)})}
                            </ThemedView>
                          ) : 
                          section.key === 'trades' ? renderTrade({item}) : null 
                       }
                       renderSectionHeader={({section}) => (
                        <ThemedView style={[styles.sectionHeader]}>
                          <ThemedText type='subtitle' style={styles.title}>{section.title}</ThemedText>
                          <ThemedText style={{marginBottom: 0, fontWeight: 'bold', color: 'black'}}>
                            {
                              section.key === 'decks' ? `${filtered.length}/${decks.length}` :
                              section.key === 'trades' ? `${filteredTrades.length}/${trades.length}` : null
                            }
                          </ThemedText>
                        </ThemedView>
                       )}
                       keyExtractor={(item, index) => `${index}`}
                       ListEmptyComponent={renderEmpty}
                       contentContainerStyle={[{width: '100%', paddingBottom: 0}]}
            />
        </ThemedView>
      </ThemedView>             
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    marginInline: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headerIcon: {
    width: 22, 
    height: 22, 
    fontSize: 22, 
    top: 1.5, 
    marginRight: 14
  },
  title: {
    marginBottom: 0,
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: 'normal'
  }
});