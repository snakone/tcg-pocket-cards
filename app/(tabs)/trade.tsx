import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Animated from 'react-native-reanimated';
import { FlatList, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';

import { TradeScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import { NO_CONTEXT, SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { CardGridStyles, homeScreenStyles } from '@/shared/styles/component.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Colors } from '@/shared/definitions/utils/colors';
import { ThemedText } from '@/components/ThemedText';
import { SoundService } from '@/core/services/sounds.service';
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
  const flatListRef = useRef<FlatList<TradeItem> | null>(null);

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 246}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  useFocusEffect(useCallback(() => {
    goUp();
  }, []));

  async function goUp(): Promise<void> {
    flatListRef.current?.scrollToOffset({offset: 0, animated: false});
  }

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
      <TouchableOpacity onPress={() => handleClick(item)} 
                        style={[
                            {paddingHorizontal: Platform.OS !== 'web' ? 0 : 16},
                            index === 0 && {paddingTop: 12}
                          ]}>
        <TradeUserItem item={item} rarity={rarity} state={state}/>
      </TouchableOpacity>
    )
  }, [state.cardState.cards, state.settingsState.language]);

  const renderEmpty = useCallback(() => {
    return <ThemedText style={{ paddingVertical: 12, paddingHorizontal: Platform.OS !== 'web' ? 6 : 22}}>
        {i18n.t('no_trades_found')}
      </ThemedText>
  }, []);

  function handleTrade(): void {
    SoundService.play('POP_PICK');
    router.push(`/screens/create_trade`);
  }

  const renderFooter = useCallback(() => {
    return (
      <ThemedView style={{paddingHorizontal: Platform.OS !== 'web' ? 0 : 16, paddingTop: 8}}>
        <TouchableOpacity style={[
          homeScreenStyles.ctaButton,
          {marginBottom: 10, marginTop: 6, backgroundColor: 'mediumaquamarine'},
          Platform.OS !== 'web' && {marginBottom: 16}
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
          data={filtered.sort((b, a) => a?.id - b?.id)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          stickyHeaderIndices={[0]}
          windowSize={12}
          ref={flatListRef}
          ListEmptyComponent={renderEmpty}
          ListHeaderComponent={
            <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={-550}>
              <Animated.View style={[
                  CardGridStyles.inputContainer, 
                  {paddingHorizontal: Platform.OS !== 'web' ? 0 : 16, paddingBottom: 9}
                ]}>
                  <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '78%', borderRadius: 8}}>
                    <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                              placeholder={i18n.t('search_trade')}
                              value={searchQuery}
                              onChangeText={handleSearch}
                              placeholderTextColor={Colors.light.text}
                              accessibilityLabel={SEARCH_LABEL}
                              inputMode='text'
                            />
                    {searchQuery.length > 0 && <ResetFilterButton/>}
                  </ThemedView>

                <Animated.View style={[CardGridStyles.actionsContainer, Platform.OS !== 'web' && 
                                    {marginRight: 2}, {justifyContent: 'flex-end'}
                                  ]}>
                  <MaterialIcons name="sync" 
                                 style={{fontSize: 21, marginLeft: 16, top: 1}} 
                                 color={Colors.light.skeleton}>
                  </MaterialIcons>
                  <ThemedText style={[CardGridStyles.totalCards]}>{trades?.length}/30</ThemedText>                    
                </Animated.View>
              </Animated.View>
            </KeyboardAvoidingView>
          }
        />
        {renderFooter()}
      </ParallaxScrollView>
    </>
  );
}