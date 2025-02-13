import { FlatList, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { Portal, Provider } from "react-native-paper";

import SharedScreen from "@/components/shared/SharedScreen";
import { NO_CONTEXT, SEARCH_LABEL } from "@/shared/definitions/sentences/global.sentences";
import { CARD_IMAGE_WIDTH_3, CardGridStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedView } from "@/components/ThemedView";
import { AppContext } from "../_layout";
import { Colors } from "@/shared/definitions/utils/colors";
import { ThemedText } from "@/components/ThemedText";
import { CARD_IMAGE_MAP_116x162_EN } from "@/shared/definitions/utils/card.images";
import { createDeckStyles } from "./create_deck";
import PickDesiredMenu from "@/components/dedicated/trade/PickDesiredMenu";
import PickOffersMenu from "@/components/dedicated/trade/PickOffersMenu";
import { TradeItem } from "@/shared/definitions/interfaces/global.interfaces";
import Storage from "@/core/storage/storage.service";
import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { tradeCollageStyles } from "@/components/dedicated/share/TradeCollage";
import { SALE_CARD } from "@/shared/definitions/sentences/path.sentences";

export default function CreateTradeScreen() {
  const {i18n} = useI18n();
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [title, setTitle] = useState<string>('');
  const [discord, setDiscord] = useState<string>('');
  const [tcg, setTcg] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);
  const [desired, setDesired] = useState<(number| null)[]>([null, null, null, null, null]);
  const [offers, setOffers] = useState<(number| null)[]>([null, null, null, null, null]);
  const [isDesiredVisible, setIsDesiredVisible] = useState<boolean>(false);
  const [isOffersVisible, setIsOffersVisible] = useState<boolean>(false);
  const { confirm } = useConfirmation();
  const [loading, setLoading] = useState(false);
  const [notSaved, setNotSaved] = useState(false);
  const { trade_id } = useLocalSearchParams<{ trade_id: string }>();

  useEffect(() => {
    const checkTrade = async () => {
      if (trade_id !== undefined) {
        const selected = state.settingsState.trades.find(trade => trade.id === Number(trade_id));
        if (selected) {
          setTitle(selected.title);
          setDiscord(selected.discord);
          setTcg(selected.tcg);
          setDesired(selected.desired);
          setOffers(selected.offers);
        }
      }
    };

    checkTrade();
  }, [state.settingsState.trades]);

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

  const memoizedPickDesired = useMemo(() => {
    return <PickDesiredMenu isVisible={isDesiredVisible} 
                            animatedStyle={{}} 
                            onClose={onDesiredClose}
                            desired={desired}/>
  }, [isDesiredVisible]);

  const memoizedPickOffers = useMemo(() => {
    return <PickOffersMenu isVisible={isOffersVisible} 
                           animatedStyle={{}} 
                           onClose={onOffersClose}
                           desired={desired}
                           offers={offers}/>
  }, [isOffersVisible, offers]);

  function handleTCG(value: string, index: number): void {
    setNotSaved(true);
    if (/^\d*$/.test(value)) {
      const newTcg = [...tcg];
      newTcg[index] = value;
      setTcg(newTcg);

      if (value.length === 4 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  const handleKeyPress = (event: any, index: number) => {
    setNotSaved(true);
    if (event.nativeEvent.key === "Backspace" && tcg[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  function onDesiredClose(data: number[]): void {
    if (JSON.stringify(data) !== JSON.stringify(offers)) { setNotSaved(true); }
    if (data !== null) {
      setDesired(data);
    }
    setIsDesiredVisible(false);
  }

  function onOffersClose(data: number[]): void {
    if (JSON.stringify(data) !== JSON.stringify(offers)) { setNotSaved(true); }
    if (data !== null) {
      setOffers(data);
    }
    setIsOffersVisible(false);
  }

  async function createTrade(): Promise<void> {
    SoundService.play('POP_PICK');
    const item = convertTrade();
    item.valid = isTradeValid(item);

    if (!item.valid) {
      const userConfirmed = await confirm("save_a_trade", "save_invalid_trade");
      if (userConfirmed) {
        saveTrade(item);
      }
    } else { saveTrade(item); }
  }

  function saveTrade(item: TradeItem): void {
    setLoading(true);
    dispatch({type: 'ADD_TRADE', value: item});
    Storage.addTrade(item);

    setTimeout(() => {
      setNotSaved(false);
      setLoading(false);
      router.canGoBack() ? router.back() : router.replace('/');
    }, 1000);
  }

  function convertTrade(): TradeItem {
    const trades = state.settingsState.trades;
    return {
        id: trade_id ? Number(trade_id) : trades.length + 1,
        created: new Date().getTime(),
        desired,
        title,
        discord,
        offers,
        tcg,
        valid: false
    }
  }

  function isTradeValid(item: TradeItem): boolean {
    const desiredRarity = desired.filter(Boolean).map(id => state.cardState.cards.find(card => card.id === id))[0]?.rarity;
    const offeredCards = offers.filter(Boolean).map(id => state.cardState.cards.find(card => card.id === id));
    if (
      (!desired || !title) ||
      !tcg.every(num => num && num.length === 4) ||
      offers.filter(Boolean).length === 0 ||
      !offeredCards.every(card => card?.rarity === desiredRarity)
    ) { return false; }
    return true;
  }

  function handleDesired(): void {
    SoundService.play('POP_PICK');
    setIsDesiredVisible(prev => !prev);
  }

  function handleOffer(): void {
    SoundService.play('POP_PICK');
    setIsOffersVisible(prev => !prev);
  }

  const renderOffered = useCallback(({item, index}: {item: any, index: number}) => (
    <View style={[CardGridStyles.imageContainer]}>
      <View style={{flex: 1, backgroundColor: 'white', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'}}>
        <TouchableOpacity onPress={() => handleOffer()}
                          style={[CardGridStyles.image, styles.image, desired.filter(Boolean).length === 0 && {opacity: 0.3}]}
                          disabled={desired.filter(Boolean).length === 0}>
          <View>
            { offers[index] ? 
            <>
              <Image accessibilityLabel={item} 
                    style={[
                  CardGridStyles.image, 
                  {width: 67.5}
                ]} 
              source={CARD_IMAGE_MAP_116x162_EN[String(item)]}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [offers, desired]);

  const renderDesired = useCallback(({item, index}: {item: any, index: number}) => (
    <View style={[CardGridStyles.imageContainer]}>
      <View style={{flex: 1, backgroundColor: 'white', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'}}>
        <TouchableOpacity onPress={() => handleDesired()}
                          style={[CardGridStyles.image, styles.image, !desired && {opacity: 0.3}]}
                          disabled={!desired}>
          <View>
            { desired[index] ? 
            <>
              <Image accessibilityLabel={item} 
                    style={[
                  CardGridStyles.image, 
                  {width: 67.5}
                ]} 
              source={CARD_IMAGE_MAP_116x162_EN[String(item)]}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [desired]);

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

  async function handleDelete(): Promise<void> {
    SoundService.play('AUDIO_MENU_OPEN');
    const userConfirmed = await confirm("delete_trade", "delete_trade_question", 'delete');
    if (userConfirmed) {
      setLoading(true);
      Storage.removeTrade(Number(trade_id));
      dispatch({type: 'REMOVE_TRADE', value: Number(trade_id)});

      setTimeout(() => {
        setNotSaved(false);
        setLoading(false);
        router.canGoBack() ? router.back() : router.replace('/');
      }, 1000);
    }
  }

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={trade_id ? 'edit_trade' : 'create_trade'} 
                    styles={{paddingHorizontal: 16, marginTop: 0}} customClose={goBack}>
        <ThemedView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput style={[CardGridStyles.searchInput, {width: trade_id ? '87%' : '100%'}]}
                    placeholder={i18n.t('trade_name')}
                    value={title}
                    onChangeText={(text) => (setTitle(text), setNotSaved(true))}
                    placeholderTextColor={Colors.light.text}
                    accessibilityLabel={SEARCH_LABEL}
                    inputMode='text'
                    maxLength={40}
                  />
          { Boolean(trade_id) && 
            <TouchableOpacity onPress={handleDelete}>
              <MaterialIcons name="delete-outline" 
                              style={{fontSize: 28, left: -2, top: 3.1, opacity: 0.7}} 
                              color={'crimson'}>
              </MaterialIcons>
            </TouchableOpacity>
          }
        </ThemedView>

        <TextInput style={[CardGridStyles.searchInput, {width: '100%'}, styles.item]}
                   placeholder={i18n.t('trade_discord_name')}
                   value={discord}
                   onChangeText={(text) => (setDiscord(text), setNotSaved(true))}
                   placeholderTextColor={Colors.light.text}
                   accessibilityLabel={SEARCH_LABEL}
                   inputMode='text'
                   maxLength={25}
                />
        <ThemedView style={styles.item}>
          <ThemedText type="defaultSemiBold">{i18n.t('trade_friend_ID')}</ThemedText>
          <ThemedView style={{flexDirection: 'row', gap: 8, marginTop: 8}}>
            {
              [1, 2, 3, 4].map((item, index) => (
                <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                          placeholder={'0000'}
                          value={tcg[index]}
                          onChangeText={(text) => handleTCG(text, index)}
                          placeholderTextColor={Colors.light.text}
                          accessibilityLabel={SEARCH_LABEL}
                          inputMode='numeric'
                          key={index.toString()}
                          maxLength={4}
                          keyboardType="numeric"
                          ref={(el) => el && (inputRefs.current[index] = el)}
                          onKeyPress={(event) => handleKeyPress(event, index)}
                />
              ))
            }
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.item}>
          <ThemedView style={{flexDirection: 'row', gap: 16}}>
            <ThemedView style={[tradeCollageStyles.like, {position: 'relative', width: 30, height: 30, top: 4, right: 0, marginRight: 2}]}>
              <MaterialIcons name={"favorite-outline"} style={{color: 'white', fontSize: 24, top: 1}}></MaterialIcons>
            </ThemedView>
            <ThemedView>
              <ThemedText type="defaultSemiBold">{i18n.t('trade_select_desired')}</ThemedText>
              <ThemedText type="default" style={{fontSize: 12}}>{i18n.t('trade_search_to')}</ThemedText>
            </ThemedView>
          </ThemedView>

          <FlatList data={desired}
                    renderItem={renderDesired}
                    numColumns={5}
                    contentContainerStyle={{width: '100%', marginTop: 12}}
                    style={{width: '100%', borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>
        </ThemedView>
        <ThemedView style={styles.item}>
          <ThemedView style={{flexDirection: 'row', gap: 16}}>
            <ThemedView style={{position: 'relative', top: -3, right: 4 }}>
              <Image source={SALE_CARD} style={{width: 42, height: 42}}/>
            </ThemedView>
            <ThemedView style={{left: -7}}>
              <ThemedText type="defaultSemiBold">{i18n.t('trade_select_offer')}</ThemedText>
              <ThemedText type="default" style={{fontSize: 12}}>{i18n.t('trade_up_to')}</ThemedText>
            </ThemedView>
          </ThemedView>
          <FlatList data={offers}
                    renderItem={renderOffered}
                    numColumns={5}
                    contentContainerStyle={{width: '100%', marginTop: 12}}
                    style={{width: '100%', borderRadius: 8}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}/>
        </ThemedView>


        <ThemedView style={{width: '100%', marginTop: 8}}>
          <TouchableOpacity style={[
            homeScreenStyles.ctaButton,
            {marginBottom: 10, marginTop: 6, flex: 1, backgroundColor: 'skyblue'}
          ]} 
                            onPress={() => createTrade()}>
            <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
              {i18n.t('save_a_trade')}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
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
    width: 67.5
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

