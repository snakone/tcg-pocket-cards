import { useLocalSearchParams } from "expo-router";
import { Platform, Pressable, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from 'expo-image';
import { Portal, Provider } from "react-native-paper";
import ViewShot from "react-native-view-shot";
import { Slider } from "@miblanchard/react-native-slider";

import { useI18n } from "@/core/providers/LanguageProvider";
import Storage from '@/core/storage/storage.service';
import ShareService from "@/core/services/share.service";
import SoundService from "@/core/services/sounds.service";
import { DataRxjs } from "@/core/rxjs/DataRxjs";

import { AppContext } from "../_layout";
import { settingsStyles } from "./settings";
import { CardRarityENUM } from "@/shared/definitions/enums/card.enums";
import { AvatarIcon, ShareContentProps, TradeItem, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { filterStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { DEFAULT_PROFILE } from "@/shared/definitions/utils/constants";
import { LanguageType } from "@/shared/definitions/types/global.types";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import PickBackgroundMenu from "@/components/dedicated/share/PickCBackgroundMenu";
import TradeUserItem from "@/components/dedicated/trade/TradeUserItem";
import TradeCollage from "@/components/dedicated/share/TradeCollage";

interface ShareTradeData {
  trade: TradeItem | undefined,
  background: AvatarIcon | null,
  quality: number,
  profile: UserProfile
}

export default function ShareTradeScreen() {
  console.log('Share Trade Screen');
  const {i18n} = useI18n();
  const { trade_id } = useLocalSearchParams<{ trade_id: string }>();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [loading, setLoading] = useState(false);
  const shareService = useMemo(() => new ShareService(), []);
  const ref = useRef<any>(null);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [lang] = useState<LanguageType>(state.settingsState.language);

  const [data, setData] = useState<ShareTradeData>({
    trade: undefined,
    background: null,
    quality: 0.8,
    profile: {...DEFAULT_PROFILE}
  });

  useEffect(() => {
    const getData = async () => {
      const profile: UserProfile = await Storage.getProfile();
      const trades = DataRxjs.getDataSync<TradeItem[]>('trades');
      let selected: TradeItem | undefined;

      if (trade_id !== undefined) {
        selected = trades.find(trade => trade.id === Number(trade_id));
      }
      setData(prev => ({...prev, profile, trade: selected}));
    };
    getData();
  }, []);

  const handleShare = useCallback(() => {
    SoundService.play('POP_PICK');
    setLoading(true);
  
    const payload: ShareContentProps = {
      ref, 
      name: data.trade?.title || 'Trade', 
      quality: data.quality, 
      length: 10, 
      type: 'deck'
    };
  
    shareService.makeScreenShot(payload).then(() => setLoading(false));
  }, [ref, data.trade?.title, data.quality]);

  function onClose(value: AvatarIcon): void {
    setData(prev => ({...prev, background: value}));
    setIsBackgroundVisible(false);
  }

  function handleBackground(): void {
    SoundService.play('AUDIO_MENU_OPEN');
    setIsBackgroundVisible(true);
  }

  const memoizedPickBackground = useMemo(() => {
    return <PickBackgroundMenu isVisible={isBackgroundVisible} 
                               animatedStyle={{}} 
                               onClose={onClose}/>
  }, [isBackgroundVisible]);

  const TrackItem = useCallback((index: any) => {
    if (index === 0 || index === 10) return null;
    return (
      <ThemedView style={{
        width: 2,
        height: 4,
        right: -10,
        backgroundColor: '#777',
        position: 'relative',
        zIndex: 1000,
        opacity: 1
      }}>  
      </ThemedView>
    )
  }, []);

  function handleQualityChange(ev: number[]): void {
    SoundService.play('SCALE');
    const value = ev[0] / 10;
    setData(prev => ({...prev, quality: value}));
  }

  return (
    <>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={'share_trade'} styles={{marginTop: 0, alignItems: 'inherit'}}>
        <ThemedView style={{position: 'absolute', left: -9999}} >
          {
            Platform.OS === 'web' ?
            <View ref={ref} style={{width: 'auto'}}>
              <TradeCollage trade={data.trade} 
                            background={data.background as AvatarIcon} 
                            profile={data.profile}
                            rarity={data.trade?.rarity as CardRarityENUM}
                            state={state}>
              </TradeCollage>
            </View> :
            <ViewShot ref={ref} style={{width: 'auto'}}>
              <TradeCollage trade={data.trade} 
                            background={data.background as AvatarIcon} 
                            profile={data.profile}
                            rarity={data.trade?.rarity as CardRarityENUM}
                            state={state}>
              </TradeCollage>
            </ViewShot>
          }
        </ThemedView>
        {
          data.trade && <TradeUserItem item={data.trade} 
                                       styles={shareTradeStyles.tradeItem} 
                                       language={lang}
                                       share={true}/>
        }
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 14, marginLeft: -14, marginRight: -14}}>
          <ThemedView style={shareTradeStyles.options}>
            <ThemedText style={[filterStyles.header, {marginBottom: 16}]}>{i18n.t('export')}</ThemedText>
            <ThemedView style={[settingsStyles.container, {height: 52}]}>
              <Pressable onPress={handleBackground} style={{flex: 1}} >
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('background_image')}</ThemedText>
                  {
                    Boolean(data.background as AvatarIcon) && 
                      <Image source={(data.background as AvatarIcon)?.icon} style={shareTradeStyles.coin}/>
                  }
                  <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                    <MaterialIcons name={'chevron-right'} 
                                  style={[
                                    {fontSize: 28, left: 8, color: Colors.light.icon, position: 'absolute'}, 
                                    Platform.OS !== 'web' && {top: -14}
                                  ]}/>
                  </ThemedView>
                </ThemedView>
              </Pressable>
            </ThemedView>

            <ThemedView style={settingsStyles.container}>
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('quality')}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 25}]}>
                  <IconSymbol name={'q.circle'} 
                              style={[settingsStyles.icon]} 
                              color={Colors.light.text}>
                  </IconSymbol>
                </ThemedView>
              </ThemedView>
              <Slider maximumValue={10} 
                      minimumValue={0} 
                      step={1} 
                      containerStyle={settingsStyles.slider}
                      maximumTrackTintColor={Colors.light.skeleton}
                      minimumTrackTintColor="mediumaquamarine" 
                      animateTransitions={true} 
                      animationType={'timing'}
                      thumbStyle={settingsStyles.thumb}
                      trackStyle={settingsStyles.track}
                      trackClickable={true}
                      value={data.quality * 10}
                      onSlidingComplete={handleQualityChange}
                      trackMarks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      renderTrackMarkComponent={(index) => <TrackItem index={index}></TrackItem>}/>
            </ThemedView>

            <ThemedView style={{width: '100%'}}>
              <TouchableOpacity style={[
                                  homeScreenStyles.ctaButton, {marginTop: 16},
                                  !data.trade?.valid && {opacity: 0.6}
                                ]} 
                                onPress={handleShare}
                                disabled={!data.trade?.valid}>
                <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center', height: 22}]}>
                  {i18n.t('download')}
                </ThemedText>
              </TouchableOpacity>
              {
                !data.trade?.valid && 
                  <ThemedText style={{color: 'crimson', fontSize: 12, paddingLeft: 4, top: -36}}>
                    {i18n.t('invalid_cant_share')}
                  </ThemedText>
              }
            </ThemedView>
          </ThemedView>
        </ScrollView>

      </SharedScreen>
      <Portal>{isBackgroundVisible && memoizedPickBackground}</Portal>
    </>
  )
}

export const shareTradeStyles = StyleSheet.create({
  options: {
    width: '100%',
    gap: 8,
    marginTop: 2
  },
  coin: {
    width: 34, 
    height: 34, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 10,
    position: 'absolute',
    right: 37
  },
  tradeItem: {
    marginBottom: 28,
    width: '105%',
    marginLeft: -8, 
    boxShadow: 'none',
    backgroundColor: 'transparent'
  }
});
