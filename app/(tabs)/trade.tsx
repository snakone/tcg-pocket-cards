import React, { useCallback, useState } from 'react';
import Animated from 'react-native-reanimated';
import { FlatList, KeyboardAvoidingView, Platform, RefreshControl, TextInput, TouchableOpacity } from 'react-native';

import { TradeScreenModal } from '@/components/modals';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import { SEARCH_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { CardGridStyles, homeScreenStyles } from '@/shared/styles/component.styles';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Colors } from '@/shared/definitions/utils/colors';
import { ThemedText } from '@/components/ThemedText';
import { SoundService } from '@/core/services/sounds.service';
import { useRouter } from 'expo-router';
import TradeUserItem from '@/components/dedicated/trade/TradeUserItem';
import { ThemedView } from '@/components/ThemedView';

export default function TradeScreen() {
  const {i18n} = useI18n();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const ResetFilterButton = () => (
    <TouchableOpacity onPress={() => handleSearch('')} 
                      style={[CardGridStyles.clearInput, {left: 324}]}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <IconSymbol name="clear" size={20} color="gray" />
    </TouchableOpacity>
  );

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    console.log(text)
  }, []);

  function handleClick(id: number): void {
    SoundService.play('CHANGE_VIEW');
    // router.push(`/screens/news_detail?id=${encodeURIComponent(id)}`);
  }

  const renderItem = useCallback(({item}: {item: number}) => {
    return (
      <TouchableOpacity onPress={() => handleClick(item)} style={{paddingHorizontal: 16}}>
        <TradeUserItem/>
      </TouchableOpacity>
    )
  }, []);

  const renderEmpty = useCallback(() => {
    return <ThemedText style={{ paddingVertical: 6, paddingHorizontal: 22 }}>
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
      { loading && <LoadingOverlay/> }
      <ParallaxScrollView title={"trades"} 
                          modalTitle='trades'
                          modalContent={TradeScreenModal()}
                          modalHeight={LARGE_MODAL_HEIGHT}
                          styles={{paddingHorizontal: 0, gap: 0}}>
        <FlatList
          data={[1, 2, 3]}
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