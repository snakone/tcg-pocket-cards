import React, { useCallback, useContext, useEffect, useState } from 'react';
import Animated from 'react-native-reanimated';
import { FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import { TradeScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { CardGridStyles, homeScreenStyles } from '@/shared/styles/component.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Colors } from '@/shared/definitions/utils/colors';
import { ThemedText } from '@/components/ThemedText';
import { SoundService } from '@/core/services/sounds.service';
import { useRouter } from 'expo-router';
import TradeUserItem from '@/components/dedicated/trade/TradeUserItem';
import { ThemedView } from '@/components/ThemedView';
import { AppContext } from '../_layout';
import { TradeItem } from '@/shared/definitions/interfaces/global.interfaces';

export default function TradeScreen() {
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [trades, setTrades] = useState<TradeItem[]>([]);
  const [filtered, setFiltered] = useState<TradeItem[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 340}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    setFiltered(prev => {
      if(trades.length === 0) { return prev; }
      return trades.filter(trade =>
        trade.title.toLowerCase()?.includes(text.toLowerCase()));
    })
  }, [trades]);

  useEffect(() => {
    setTrades(state.settingsState.trades);
    setFiltered(state.settingsState.trades);
  }, [state.settingsState.trades])

  function handleClick(item: TradeItem): void {
    SoundService.play('CHANGE_VIEW');
    router.push(`/screens/create_trade?trade_id=${encodeURIComponent(item.id)}`);
  }

  const renderItem = useCallback(({item}: {item: TradeItem}) => {
    const rarity = state.cardState.cards.find(card => item.desired.includes(card.id))?.rarity;
    return (
      <TouchableOpacity onPress={() => handleClick(item)} style={{paddingHorizontal: 16}}>
        <TradeUserItem item={item} rarity={rarity} state={state}/>
      </TouchableOpacity>
    )
  }, [state.cardState.cards, state.settingsState.language]);

  const renderEmpty = useCallback(() => {
    return <ThemedText style={{ paddingVertical: 6, paddingHorizontal: 22}}>
        {i18n.t('no_trades_found')}
      </ThemedText>
  }, []);

  function handleTrade(): void {
    SoundService.play('POP_PICK');
    router.push(`/screens/create_trade`);
  }

  const renderFooter = useCallback(() => {
    return (
      <ThemedView style={{paddingHorizontal: 16, paddingTop: 16}}>
        <TouchableOpacity style={[
          homeScreenStyles.ctaButton,
          {marginBottom: 10, marginTop: 6, flex: 1, backgroundColor: 'mediumaquamarine'}
        ]} 
                          onPress={() => handleTrade()}>
          <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
            {i18n.t('make_a_trade')}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
      )
  }, []);

  return (
    <>
      <ParallaxScrollView title={"trades"} 
                          modalTitle='trades'
                          modalContent={TradeScreenModal()}
                          modalHeight={LARGE_MODAL_HEIGHT}
                          styles={{paddingHorizontal: 0, gap: 0}}>
        <FlatList
          data={filtered.sort((b, a) => b.id > a.id ? -1 : 1)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          stickyHeaderIndices={[0]}
          windowSize={12}
          ListEmptyComponent={renderEmpty}
          ListHeaderComponent={
            <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
              <Animated.View style={[CardGridStyles.inputContainer, {paddingHorizontal: 16}]}>
                <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                            placeholder={i18n.t('search_trade')}
                            value={searchQuery}
                            onChangeText={handleSearch}
                            placeholderTextColor={Colors.light.text}
                            accessibilityLabel={SEARCH_LABEL}
                            inputMode='text'
                          />
                  {searchQuery.length > 0 && <ResetFilterButton/>}
              </Animated.View>
            </KeyboardAvoidingView>
          }
        />
        { renderFooter()}
      </ParallaxScrollView>
    </>
  );
}