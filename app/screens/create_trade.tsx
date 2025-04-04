import { FlatList, TextInput, TouchableOpacity, View, StyleSheet, Platform } from "react-native";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { Portal, Provider } from "react-native-paper";

import { DataRxjs } from "@/core/rxjs/DataRxjs";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";

import { AppContext } from "../_layout";
import { createDeckStyles } from "./create_deck";
import { CardGridStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { TradeItem } from "@/shared/definitions/interfaces/global.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { BACKWARD_CARD, SALE_CARD } from "@/shared/definitions/sentences/path.sentences";
import { getImageLanguage116x162, getNewID } from "@/shared/definitions/utils/functions";
import { DEFAUL_TRADE_ITEM, MAX_CONTENT } from "@/shared/definitions/utils/constants";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import PickDesiredMenu from "@/components/dedicated/trade/PickDesiredMenu";
import PickOffersMenu from "@/components/dedicated/trade/PickOffersMenu";
import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { tradeCollageStyles } from "@/components/dedicated/share/TradeCollage";

export default function CreateTradeScreen() {
  console.log('Create Trade Screen')
  const {i18n} = useI18n();
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const inputRefs = useRef<TextInput[]>([]);
  const [isDesiredVisible, setIsDesiredVisible] = useState<boolean>(false);
  const [isOffersVisible, setIsOffersVisible] = useState<boolean>(false);
  const { confirm } = useConfirmation();
  const [loading, setLoading] = useState(false);
  const [notSaved, setNotSaved] = useState(false);
  const { trade_id } = useLocalSearchParams<{ trade_id: string }>();
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const [disabled, setDisabled] = useState(false);
  const [trades, setTrades] = useState<TradeItem[]>([]);

  const [data, setData] = useState<TradeItem>(DEFAUL_TRADE_ITEM);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const trades = DataRxjs.getDataSync<TradeItem[]>('trades');
    setTrades(trades);
    
    if (trade_id !== undefined) {
      const selected = trades.find(trade => trade.id === Number(trade_id));

      if (selected) {
        setData(selected);
      }
    }
  }, []);

  const memoizedPickDesired = useMemo(() => {
    return <PickDesiredMenu isVisible={isDesiredVisible} 
                            animatedStyle={{}} 
                            onClose={onDesiredClose}
                            desired={data.desired}/>
  }, [isDesiredVisible]);

  const memoizedPickOffers = useMemo(() => {
    return <PickOffersMenu isVisible={isOffersVisible} 
                           animatedStyle={{}} 
                           onClose={onOffersClose}
                           desired={data.desired}
                           offers={data.offers}/>
  }, [isOffersVisible, data.offers]);

  function handleTCG(value: string, index: number): void {
    setNotSaved(true);
    if (/^\d*$/.test(value)) {
      const newTcg = [...data.tcg];
      newTcg[index] = value;
      setData(prev => ({...prev, tcg: newTcg}));

      if (value.length === 4 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  const handleKeyPress = (event: any, index: number) => {
    setNotSaved(true);
    if (event.nativeEvent.key === "Backspace" && data.tcg[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  function onDesiredClose(value: number[]): void {
    if (JSON.stringify(value) !== JSON.stringify(data.desired)) { setNotSaved(true); }

    if (value !== null) {
      setData(prev => ({...prev, desired: value}));

      if (value.every(k => k === null)) {
        setData(prev => ({...prev, desired: [null, null, null, null, null]}));
      }
    }
    setIsDesiredVisible(false);
    setDisabled(false);
  }

  function onOffersClose(value: number[]): void {
    if (JSON.stringify(value) !== JSON.stringify(data.offers)) { setNotSaved(true); }
    
    if (value !== null) {
      setData(prev => ({...prev, offers: value}));
    }
    setIsOffersVisible(false);
    setDisabled(false);
  }

  async function createTrade(): Promise<void> {
    SoundService.play('POP_PICK');
    const item = convertTrade();
    Object.assign(item, isTradeValid());

    if (!item.valid) {
      const userConfirmed = await confirm("save_a_trade", "save_invalid_trade");
      if (userConfirmed) {
        saveTrade(item);
      }
    } else { saveTrade(item); }
  }

  function saveTrade(item: TradeItem): void {
    setLoading(true);
    DataRxjs.addTrade(item);

    setTimeout(() => {
      setNotSaved(false);
      setLoading(false);
      router.canGoBack() ? router.back() : router.replace('/');
    }, 1000);
  }

  function convertTrade(): TradeItem {
    return {
      id: getNewID(trade_id, trades),
      created: new Date().getTime(),
      desired: data.desired,
      title: data.title || i18n.t('trade'),
      discord: data.discord,
      offers: data.offers,
      tcg: data.tcg,
      valid: false,
    }
  }

  const isTradeValid = useCallback(() => {
    const desiredRarity = data.desired.filter(Boolean)
                                      .map(id => state.cardState.cards
                                      .find(card => card.id === id))[0]?.rarity;

    const offeredCards = data.offers.filter(Boolean)
                               .map(id => state.cardState.cards
                               .find(card => card.id === id));
    if (
      (!data.desired || !data.title) ||
      !data.tcg.every(num => num && num.length === 4) ||
      data.offers.filter(Boolean).length === 0 ||
      !offeredCards.every(card => card?.rarity === desiredRarity)
    ) { return {valid: false, rarity: desiredRarity}; }
    return { valid: true, rarity: desiredRarity };
  }, [data]);

  function handleDesired(): void {
    setDisabled(true);
    SoundService.play('POP_PICK');
    setIsDesiredVisible(prev => !prev);
  }

  function handleOffer(): void {
    setDisabled(true);
    SoundService.play('POP_PICK');
    setIsOffersVisible(prev => !prev);
  }

  async function handleDelete(): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    const userConfirmed = await confirm("delete_trade", "delete_trade_question", 'delete');
    if (userConfirmed) {
      setLoading(true);
      DataRxjs.removeTrade(Number(trade_id));

      setTimeout(() => {
        setNotSaved(false);
        setLoading(false);
        router.canGoBack() ? router.back() : router.replace('/');
      }, 1000);
    }
  }

  const renderOffered = useCallback(({item, index}: {item: any, index: number}) => (
    <View style={[CardGridStyles.imageContainer, {boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)'}]}>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handleOffer()}
                          style={[
                            CardGridStyles.image, 
                            styles.image, data.desired.filter(Boolean).length === 0 && {opacity: 0.3}
                          ]}
                          disabled={data.desired.filter(Boolean).length === 0 || disabled}>
          <View>
            { data.offers[index] ? 
            <>
              <Image style={[
                  CardGridStyles.image, 
                  {width: 67.6}
                ]} 
              source={getImageLanguage116x162(lang, item)}
              placeholder={BACKWARD_CARD}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [data.offers, data.desired, disabled]);

  const renderDesired = useCallback(({item, index}: {item: any, index: number}) => (
    <View style={[CardGridStyles.imageContainer, {boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.1)'}]}>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => handleDesired()}
                          style={[CardGridStyles.image, styles.image, !data.desired && {opacity: 0.3}]}
                          disabled={!data.desired || disabled}>
          <View>
            { data.desired[index] ? 
            <>
              <Image style={[
                  CardGridStyles.image, 
                  {width: 67.6}
                ]} 
              source={getImageLanguage116x162(lang, item)}
              placeholder={BACKWARD_CARD}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [data.desired, disabled]);

  const goBack = useCallback(async (): Promise<void> => {
    SoundService.play('AUDIO_MENU_CLOSE');
    if (notSaved) {
      const userConfirmed = await confirm("exit_no_save", "exit_without_save_trade");
      if (userConfirmed) {
        router.canGoBack() ? router.back() : router.replace('/');
      }
    } else {
      router.canGoBack() ? router.back() : router.replace('/');
    }
  }, [notSaved]);

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={trade_id ? 'edit_trade' : 'create_trade'} 
                    styles={{paddingInline: 0, marginTop: 0}} customClose={goBack}>
        <FlatList
          data={[0]}
          keyExtractor={(item) => item.toString()}
          nestedScrollEnabled={true}
          style={{paddingInline: 16}}
          renderItem={({ item }) => (
            <>
              <ThemedView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 12}}>
                <ThemedView style={{
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                  width: trade_id ? '87%' : '100%', borderRadius: 8}}>
                  <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                            placeholder={i18n.t('trade_name')}
                            value={data.title}
                            onChangeText={(text) => (setData(prev => ({...prev, title: text})), setNotSaved(true))}
                            placeholderTextColor={Colors.light.text}
                            accessibilityLabel={'SEARCH_LABEL'}
                            inputMode='text'
                            maxLength={40}
                          />
                </ThemedView>

                { Boolean(trade_id) && 
                  <TouchableOpacity onPress={handleDelete}>
                    <MaterialIcons name="delete-outline" 
                                    style={{fontSize: 28, left: -2, top: 3.1, opacity: 0.7}} 
                                    color={'crimson'}>
                    </MaterialIcons>
                  </TouchableOpacity>
                }
              </ThemedView>

              <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '100%', borderRadius: 8}}>
                <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                          placeholder={i18n.t('trade_discord_name')}
                          value={data.discord}
                          onChangeText={(text) => (setData(prev => ({...prev, discord: text})), setNotSaved(true))}
                          placeholderTextColor={Colors.light.text}
                          accessibilityLabel={'SEARCH_LABEL'}
                          inputMode='text'
                          maxLength={25}
                        />
              </ThemedView>

              <ThemedView style={[styles.item, {marginTop: 18 }]}>
                <ThemedText type="defaultSemiBold">{i18n.t('trade_friend_ID')}</ThemedText>
                <ThemedView style={{flexDirection: 'row', gap: 8, marginTop: 8}}>
                  {
                    [1, 2, 3, 4].map((item, index) => (
                      <ThemedView style={{
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
                          width: '23.27%', 
                          borderRadius: 8
                        }} key={index.toString()}>
                        <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                                  placeholder={'0000'}
                                  value={data.tcg[index]}
                                  onChangeText={(text) => handleTCG(text, index)}
                                  placeholderTextColor={Colors.light.text}
                                  accessibilityLabel={'SEARCH_LABEL'}
                                  inputMode='numeric'
                                  
                                  maxLength={4}
                                  keyboardType="numeric"
                                  ref={(el) => el && (inputRefs.current[index] = el)}
                                  onKeyPress={(event) => handleKeyPress(event, index)}
                        />
                      </ThemedView>
                    ))
                  }
                </ThemedView>
              </ThemedView>

              <ThemedView style={[styles.item, Platform.OS !== 'web' && {height: 152, marginBottom: 10}, {marginTop: 4}]}>
                <ThemedView style={{flexDirection: 'row', gap: 16, marginBottom: 12}}>
                  <ThemedView style={[tradeCollageStyles.like, {position: 'relative', width: 30, height: 30, top: 3, right: 0, marginRight: 2}]}>
                    <MaterialIcons name={"favorite-outline"} 
                                  style={[
                                      {color: 'white', fontSize: 24, top: 1},
                                      Platform.OS !== 'web' && {fontSize: 19, top: 0, left: 0}
                                    ]}></MaterialIcons>
                  </ThemedView>
                  <ThemedView>
                    <ThemedText type="defaultSemiBold">{i18n.t('trade_select_desired')}</ThemedText>
                    <ThemedText type="default" style={{fontSize: 12}}>{i18n.t('trade_search_to')}</ThemedText>
                  </ThemedView>
                </ThemedView>

                <FlatList data={data.desired}
                          renderItem={renderDesired}
                          numColumns={5}
                          contentContainerStyle={{width: '100%', marginTop: 12}}
                          style={{width: '100%', borderRadius: 8}}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => index + ''}/>
              </ThemedView>

              <ThemedView style={[styles.item, Platform.OS !== 'web' && {height: 160}]}>
                <ThemedView style={{flexDirection: 'row', gap: 16, marginTop: 4, marginBottom: 4}}>
                  <ThemedView style={{position: 'relative', top: -3, right: 4 }}>
                    <Image source={SALE_CARD} style={{width: 42, height: 42}}/>
                  </ThemedView>
                  <ThemedView style={{left: -7}}>
                    <ThemedText type="defaultSemiBold">{i18n.t('trade_select_offer')}</ThemedText>
                    <ThemedText type="default" style={{fontSize: 12}}>{i18n.t('trade_up_to')}</ThemedText>
                  </ThemedView>
                </ThemedView>
                <FlatList data={data.offers}
                          renderItem={renderOffered}
                          numColumns={5}
                          contentContainerStyle={{width: '100%', marginTop: 12}}
                          style={{width: '100%', borderRadius: 8}}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => index + ''}/>
              </ThemedView>

              <ThemedView style={{width: '100%', marginTop: 16, marginBottom: 60}}>
                <TouchableOpacity style={[
                  homeScreenStyles.ctaButton,
                  {marginBottom: 10, marginTop: 6, backgroundColor: 'mediumaquamarine'},
                  trades.length >= MAX_CONTENT && {opacity: 0.5}
                ]} 
                    onPress={() => createTrade()}
                    disabled={trades.length >= MAX_CONTENT}>
                  <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
                    {i18n.t('save_a_trade')}
                  </ThemedText>
                </TouchableOpacity>
              </ThemedView>
            </>
          )}
        />
      </SharedScreen>
      <Portal>{isDesiredVisible && memoizedPickDesired}</Portal>
      <Portal>{isOffersVisible && memoizedPickOffers}</Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 67.8
  },
  desiredImage: {
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderRadius: 8, 
    marginTop: 12,
    width: 100
  },
  item: {
    marginBottom: 18
  }
});

