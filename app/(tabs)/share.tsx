import { router } from 'expo-router';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Animated from 'react-native-reanimated';
import { Platform, StyleSheet } from 'react-native';
import { KeyboardAvoidingView, SectionList, TextInput, TouchableOpacity } from 'react-native';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import { DataRxjs } from '@/core/rxjs/DataRxjs';
import { map } from 'rxjs/operators';

import { AppContext } from '../_layout';
import { CardGridStyles, CreateScreenStyles } from '@/shared/styles/component.styles';
import { Colors } from '@/shared/definitions/utils/colors';
import { StorageDeck, TradeItem } from '@/shared/definitions/interfaces/global.interfaces';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ShareScreenModal } from '@/components/modals';
import { RenderDeckItem } from '@/components/dedicated/cards/DeckItem';
import TradeUserItem from '@/components/dedicated/trade/TradeUserItem';
import { ResetFilterButton } from '@/components/ui/ResetFilterButton';
import { LanguageType } from '@/shared/definitions/types/global.types';

export default function ShareScreen() {
  console.log('Share Screen')
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [decks, setDecks] = useState<any[]>([]);
  const [trades, setTrades] = useState<any[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    const sub = DataRxjs.getData<StorageDeck[]>('decks')
     .pipe(map(res => res.filter(d => d.valid)))
      .subscribe(res => setDecks(res));

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const sub = DataRxjs.getData<TradeItem[]>('trades')
     .pipe(map(res => res.filter(d => d.valid)))
      .subscribe(res => setTrades(res));

    return () => sub.unsubscribe();
  }, []);

  const filteredData = useMemo(() => {
    return {
      decks: decks.filter(deck =>
              deck.name.toLowerCase()?.includes(searchQuery.toLowerCase()))
              .sort((a, b) => b?.id - a?.id),
      trades: trades.filter(trade =>
                trade.title.toLowerCase()?.includes(searchQuery.toLowerCase()))
    }
  }, [decks, trades, searchQuery]);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const RenderTrade = useCallback(({item}: {item: TradeItem}) => {
    return (
      <TouchableOpacity style={{paddingHorizontal: Platform.OS !== 'web' ? 0 : 16}} 
                        onPress={() => openTrade(item)}>
        <TradeUserItem  item={item} language={lang}/>
      </TouchableOpacity>
    )
  }, []);

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
                        modalContent={<ShareScreenModal></ShareScreenModal>}
                        modalHeight={LARGE_MODAL_HEIGHT}
                        styles={{gap: 0, paddingHorizontal: 0}}>
      <ThemedView style={{ 
          paddingVertical: 20,
          paddingHorizontal: Platform.OS !== 'web' ? 0 : 16,
          marginTop: -20,
          width: '100%',
        }}>
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
            <Animated.View style={[CardGridStyles.inputContainer, {paddingBottom: 0}]}>
              <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '100%', borderRadius: 8}}>
                <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                            placeholder={i18n.t('search')}
                            value={searchQuery}
                            onChangeText={handleSearch}
                            placeholderTextColor={Colors.light.text}
                            accessibilityLabel={'SEARCH_LABEL'}
                            inputMode='text'
                          />
                  {searchQuery.length > 0 && <ResetFilterButton left={326} onPress={() => handleSearch('')}/>}
              </ThemedView>
            </Animated.View>
        </KeyboardAvoidingView>
      </ThemedView>

      <ThemedView style={[CreateScreenStyles.decksContainer, { padding: 0}]}>
        <ThemedView style={{flex: 1}}>
          <SectionList stickySectionHeadersEnabled
              showsVerticalScrollIndicator={false}
              keyboardDismissMode={'on-drag'}
              SectionSeparatorComponent={(section) => <ThemedView style={{height: 16}}></ThemedView>}
              sections={[
              { title: i18n.t('decks'), 
                data: filteredData.decks, 
                key: 'decks',
              },
              {
                title: i18n.t('trades'),
                data: filteredData.trades,
                key: 'trades'
                },
              ]}
              renderItem={({item, section, index}) => 
                section.key === 'decks' ? (
                  <ThemedView style={{paddingHorizontal: Platform.OS !== 'web' ? 0 : 16}}>
                    <RenderDeckItem item={item} 
                                    language={lang} 
                                    onPress={() => openDeck(item)}/>
                  </ThemedView>
                ) : 
                section.key === 'trades' ? <RenderTrade item={item}/> : null 
              }
              renderSectionHeader={({section}) => (
              <ThemedView style={[shareScreenStyles.sectionHeader, Platform.OS !== 'web' && {marginInline: 0}]}>
                <ThemedText style={{fontSize: 16, fontWeight: 'bold'}}>{section.title}</ThemedText>
                <ThemedText style={{marginBottom: 0, fontWeight: 'bold', color: 'black'}}>
                  {
                    section.key === 'decks' ? `${filteredData.decks.length}/${decks.length}` :
                    section.key === 'trades' ? `${filteredData.trades.length}/${trades.length}` : null
                  }
                </ThemedText>
              </ThemedView>
              )}
              keyExtractor={(item, index) => `${index}`}
              ListEmptyComponent={renderEmpty}
              contentContainerStyle={[{width: '100%', paddingBottom: Platform.OS !== 'web' ? 60 : 0}]}
              renderSectionFooter={({section}) => (
                <>
                  {
                    section.title === i18n.t('decks') && filteredData.decks.length === 0 && 
                      <ThemedText style={shareScreenStyles.noFound}>{i18n.t('no_decks_found')}</ThemedText>
                  }
                  {
                    section.title === i18n.t('trades') && filteredData.trades.length === 0 && 
                      <ThemedText style={shareScreenStyles.noFound}>{i18n.t('no_trades_found')}</ThemedText>
                  }
                </>
              )}
            />
            <ThemedView style={{height: 32}}></ThemedView>
        </ThemedView>
      </ThemedView>             
    </ParallaxScrollView>
  );
}

export const shareScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 6,
    paddingBottom: 8,
    paddingHorizontal: 12,
    paddingLeft: 14,
    borderRadius: 6,
    backgroundColor: 'rgb(250, 250, 241)',
    marginInline: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 0,
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
  },
  noFound: {
    paddingHorizontal: 22,
    paddingTop: 4,
    paddingBottom: 20,
    marginTop: 12
  }
});