import { useLocalSearchParams } from "expo-router";
import { Platform, Pressable, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from 'expo-image';
import { Portal, Provider } from "react-native-paper";
import ViewShot from "react-native-view-shot";
import { Slider } from "@miblanchard/react-native-slider";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import Storage from '@/core/storage/storage.service';
import ShareService from "@/core/services/share.service";
import { AvatarIcon, TradeItem, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { filterStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { settingsStyles } from "./settings";
import { IconSymbol } from "@/components/ui/IconSymbol";
import SoundService from "@/core/services/sounds.service";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import PickBackgroundMenu from "@/components/dedicated/share/PickCBackgroundMenu";
import TradeUserItem from "@/components/dedicated/trade/TradeUserItem";
import TradeCollage from "@/components/dedicated/share/TradeCollage";
import { CardRarityENUM } from "@/shared/definitions/enums/card.enums";

export default function ShareTradeScreen() {
  const {i18n} = useI18n();
  const { trade_id } = useLocalSearchParams<{ trade_id: string }>();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;
  const [trade, setTrade] = useState<TradeItem>();
  const [loading, setLoading] = useState(false);
  const shareService = useMemo(() => new ShareService(), []);
  const ref = useRef<any>(null);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [background, setBackground] = useState<AvatarIcon>();
  const [quality, setQuality] = useState<number>(0.8);
  const [rarity, setRarity] = useState<CardRarityENUM>();

  const [profile, setProfile] = useState<UserProfile>(
    {name: '', avatar: 'eevee', coin: 'eevee', best: null}
  );

  useEffect(() => {
    const checkTrade = async () => {
      if (trade_id !== undefined) {
        const selected = state.settingsState.trades.find(trade => trade.id === Number(trade_id));
        if (selected) {
          setTrade(selected);
        }
      }
    };

    checkTrade();
  }, [state.settingsState.trades]);

  useEffect(() => {
    const cards = state.cardState.cards.filter(card => trade?.desired.includes(card.id));
    setRarity(cards[0] && cards[0].rarity);
  }, [state.cardState.cards, trade]);

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile(profile);
    };

    getProfile();
  }, []);

  const handleShare = () => {
    SoundService.play('POP_PICK');
    setLoading(true);
    shareService.makeScreenShot(ref, (trade?.title || 'Trade'), quality, 10, 'trade').then(_ => setLoading(false));
  }

  function onClose(value: AvatarIcon): void {
    setBackground(value);
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
    setQuality(value);
  }

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={'share_trade'} styles={{marginTop: 0}}>
        <ThemedView style={{position: 'absolute', left: -9999}}  >
          {
            Platform.OS === 'web' ?
            <View ref={ref} style={{width: 'auto'}}>
              <TradeCollage trade={trade} 
                            background={background} 
                            profile={profile}
                            rarity={rarity}
                            state={state}>
              </TradeCollage>
            </View> :
            <ViewShot ref={ref} style={{width: 'auto'}}>
              <TradeCollage trade={trade} 
                            background={background} 
                            profile={profile}
                            rarity={rarity}
                            state={state}>
              </TradeCollage>
            </ViewShot>
          }
        </ThemedView>
        {
          trade && <TradeUserItem item={trade} rarity={rarity} styles={styles.tradeItem} state={state}/>
        }
        <ThemedView style={styles.options}>
          <ThemedText style={filterStyles.header}>{i18n.t('export')}</ThemedText>
          <ThemedView style={[settingsStyles.container, {height: 52}]}>
            <Pressable onPress={handleBackground} style={{flex: 1}} >
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('background_image')}</ThemedText>
                {
                  Boolean(background) && 
                    <Image source={background?.icon} style={styles.coin}/>
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
                    value={quality * 10}
                    onSlidingComplete={handleQualityChange}
                    trackMarks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderTrackMarkComponent={(index) => <TrackItem index={index}></TrackItem>}/>
          </ThemedView>

          <ThemedView style={{width: '100%'}}>
            <TouchableOpacity style={[
                                homeScreenStyles.ctaButton, {marginBlock: 45},
                                !trade?.valid && {opacity: 0.6}
                              ]} 
                              onPress={handleShare}
                              disabled={!trade?.valid}>
              <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center', height: 22}]}>
                {i18n.t('download')}
              </ThemedText>
            </TouchableOpacity>
            {
              !trade?.valid && 
                <ThemedText style={{color: 'crimson', fontSize: 12, paddingLeft: 4, top: -36}}>
                  {i18n.t('invalid_cant_share')}
                </ThemedText>
            }
          </ThemedView>
        </ThemedView>
      </SharedScreen>
      <Portal>{isBackgroundVisible && memoizedPickBackground}</Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
  options: {
    width: '100%',
    gap: 8,
    marginTop: 16
  },
  coin: {
    width: 34, 
    height: 34, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 10,
    position: 'absolute',
    right: 41
  },
  tradeItem: {
    marginBottom: 28,
    width: '105%',
    marginLeft: -8, 
    boxShadow: 'none',
  }
});
