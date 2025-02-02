import { FlatList, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { useRouter } from "expo-router";
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
import { CARD_IMAGE_MAP_116x162 } from "@/shared/definitions/utils/card.images";
import { createDeckStyles } from "./create_deck";
import PickDesiredMenu from "@/components/dedicated/trade/PickDesiredMenu";
import PickOffersMenu from "@/components/dedicated/trade/PickOffersMenu";

export default function CreateTradeScreen() {
  const {i18n} = useI18n();
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [name, setName] = useState<string>('');
  const [discord, setDiscord] = useState<string>('');
  const [tcg, setTcg] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);
  const [desired, setDesired] = useState<any>(null);
  const [offers, setOffers] = useState<number[] | null[]>([null, null, null, null, null]);
  const [isDesiredVisible, setIsDesiredVisible] = useState<boolean>(false);
  const [isOffersVisible, setIsOffersVisible] = useState<boolean>(false);

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

  const memoizedPickDesired = useMemo(() => {
    return <PickDesiredMenu isVisible={isDesiredVisible} 
                            animatedStyle={{}} 
                            onClose={onDesiredClose}/>
  }, [isDesiredVisible]);

  const memoizedPickOffers = useMemo(() => {
    return <PickOffersMenu isVisible={isOffersVisible} 
                            animatedStyle={{}} 
                            onClose={onOffersClose}
                            offers={offers}/>
  }, [isOffersVisible, offers]);

  function handleTCG(value: string, index: number): void {
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
    if (event.nativeEvent.key === "Backspace" && tcg[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  function onDesiredClose(id: number): void {
    if (id !== null) {
      setDesired(id);
    }
    setIsDesiredVisible(false);
  }

  function onOffersClose(offers: number[]): void {
    if (offers !== null) {
      setOffers(offers);
    }
    setIsOffersVisible(false);
  }

  function createTrade(): void {
   console.log({name, discord, tcg, desired, offers})
  }

  function handleDesired(): void {
    SoundService.play('POP_PICK');
    setIsDesiredVisible(prev => !prev);
  }

  function handleOffer(index: number): void {
    SoundService.play('POP_PICK');
    setIsOffersVisible(prev => !prev);
  }

  const renderItem = useCallback(({item, index}: {item: any, index: number}) => (
    <View style={[CardGridStyles.imageContainer]}>
      <View style={{flex: 1, backgroundColor: 'white', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)'}}>
        <TouchableOpacity onPress={() => handleOffer(index)}
                          style={[CardGridStyles.image, styles.image]}>
          <View>
            { offers[index] ? 
            <>
              <Image accessibilityLabel={item} 
                    style={[
                  CardGridStyles.image, 
                  {width: 67.5}
                ]} 
              source={CARD_IMAGE_MAP_116x162[String(item)]}/>
            </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ), [offers]);

  return (
    <Provider>
      <SharedScreen title={'create_trade'} styles={{paddingHorizontal: 16}}>
        <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]}
                   placeholder={i18n.t('trade_name')}
                   value={name}
                   onChangeText={setName}
                   placeholderTextColor={Colors.light.text}
                   accessibilityLabel={SEARCH_LABEL}
                   inputMode='text'
                />
        <TextInput style={[CardGridStyles.searchInput, {width: '100%'}, styles.item]}
                   placeholder={i18n.t('trade_discord_name')}
                   value={discord}
                   onChangeText={setDiscord}
                   placeholderTextColor={Colors.light.text}
                   accessibilityLabel={SEARCH_LABEL}
                   inputMode='text'
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
          <ThemedText type="defaultSemiBold">{i18n.t('trade_select_desired')}</ThemedText>
          <TouchableOpacity onPress={handleDesired}
                style={[CardGridStyles.image, styles.desiredImage]}>
            <View>
              { desired ? 
              <>
                <Image accessibilityLabel={desired} 
                      style={[
                    CardGridStyles.image, 
                    {width: 100}
                  ]} 
                source={CARD_IMAGE_MAP_116x162[String(desired)]}/>        
              </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
              }
            </View>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.item}>
          <ThemedText type="defaultSemiBold">{i18n.t('trade_select_offer')}</ThemedText>
          <ThemedText type="default" style={{fontSize: 12}}>{i18n.t('trade_up_to')}</ThemedText>
          <FlatList data={offers}
                    renderItem={renderItem}
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

