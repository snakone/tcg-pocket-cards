import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FlatList, Platform, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { useI18n } from '@/core/providers/LanguageProvider';
import { SoundService } from '@/core/services/sounds.service';

import { TradeItem } from '@/shared/definitions/interfaces/global.interfaces';
import { LARGE_MODAL_HEIGHT, MAX_CONTENT } from '@/shared/definitions/utils/constants';
import { CardGridStyles, homeScreenStyles } from '@/shared/styles/component.styles';
import { Colors } from '@/shared/definitions/utils/colors';

import { AppContext } from '../_layout';
import { TradeScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import TradeUserItem from '@/components/dedicated/trade/TradeUserItem';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TradeScreen() {
  console.log('Trade Screen')
  const {i18n} = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [trades, setTrades] = useState<TradeItem[]>([]);
  const [filtered, setFiltered] = useState<TradeItem[]>([]);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 248}]}
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

  const renderItem = useCallback(({item, index}: {item: TradeItem, index: number}) => {
    const rarity = state.cardState.cards.find(card => item.desired && item.desired.includes(card.id))?.rarity;
    return (
      <TouchableOpacity onPress={() => handleClick(item)}>
        <TradeUserItem item={item} rarity={rarity} state={state}/>
      </TouchableOpacity>
    )
  }, [state.cardState.cards, state.settingsState.language]);

  function handleTrade(): void {
    SoundService.play('POP_PICK');
    router.push(`/screens/create_trade`);
  }

  const RenderFooter = useMemo(() => (
    <ThemedView style={{paddingTop: 8}}>
      <TouchableOpacity style={[
        homeScreenStyles.ctaButton,
        {marginBottom: 10, marginTop: 6, backgroundColor: 'mediumaquamarine'},
        Platform.OS !== 'web' && {marginBottom: 16},
        trades.length >= MAX_CONTENT && {opacity: 0.5}
      ]} 
          onPress={() => handleTrade()}
          disabled={trades.length >= MAX_CONTENT}>
        <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
          {i18n.t('make_a_trade')}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
   ), [trades]);

   const RenderHeader = useMemo(() => (
    <View style={CardGridStyles.inputContainer}>
      <ThemedView
        style={{
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          width: "78%",
          borderRadius: 8,
        }}>
        <TextInput
          style={[CardGridStyles.searchInput, { width: "100%" }]}
          placeholder={i18n.t("search_trade")}
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor={Colors.light.text}
          accessibilityLabel={"SEARCH_LABEL"}
          inputMode="text"
        />
        {searchQuery.length > 0 && <ResetFilterButton />}
      </ThemedView>

      <View
        style={[
          CardGridStyles.actionsContainer,
          Platform.OS !== "web" && { marginRight: 2 },
          { justifyContent: "flex-end" },
        ]}>
        <MaterialIcons
          name="sync"
          style={{ fontSize: 21, marginLeft: 16, top: 1 }}
          color={Colors.light.skeleton}
        />
        <ThemedText style={[CardGridStyles.totalCards]}>
          {trades?.length}/30
        </ThemedText>
      </View>
    </View>
  ), [searchQuery, trades.length]);

  return (
    <>
      <ParallaxScrollView title={"trades"} 
                          modalTitle='trades'
                          modalContent={<TradeScreenModal></TradeScreenModal>}
                          modalHeight={LARGE_MODAL_HEIGHT}
                          styles={{gap: 0}}>
        <FlatList
          data={filtered.sort((b, a) => a?.id - b?.id)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          stickyHeaderIndices={[0]}
          windowSize={12}
          bounces={false}
          keyboardDismissMode={'on-drag'}
          overScrollMode='never'
          ListEmptyComponent={<ThemedText style={{ paddingInline: 6 }}>{i18n.t('no_trades_found')}</ThemedText>}
          ListHeaderComponent={RenderHeader}
        />
        {RenderFooter}
      </ParallaxScrollView>
    </>
  );
}