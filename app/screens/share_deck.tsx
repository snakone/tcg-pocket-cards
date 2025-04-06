import { useLocalSearchParams } from "expo-router";
import { FlatList, Platform, Pressable, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from 'expo-image';
import { Portal, Switch } from "react-native-paper";
import ViewShot from "react-native-view-shot";
import { Slider } from "@miblanchard/react-native-slider";

import { useI18n } from "@/core/providers/LanguageProvider";
import Storage from '@/core/storage/storage.service';
import SoundService from "@/core/services/sounds.service";
import ShareService from "@/core/services/share.service";
import { DataRxjs } from "@/core/rxjs/DataRxjs";

import { settingsStyles } from "./settings";
import { createDeckStyles } from "./create_deck";
import { AppContext } from "../_layout";
import { shareTradeStyles } from "./share_trade";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { AvatarIcon, ShareContentProps, StorageDeck, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { CardGridStyles, CreateScreenStyles, filterStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import { DEFAULT_ELEMENT, DEFAULT_PROFILE, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { Colors } from "@/shared/definitions/utils/colors";
import { filterUniqueItems, getImageLanguage69x96 } from "@/shared/definitions/utils/functions";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DeckCollage from "@/components/dedicated/share/DeckCollage";
import { IconSymbol } from "@/components/ui/IconSymbol";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import PickBackgroundMenu from "@/components/dedicated/share/PickCBackgroundMenu";

interface ShareDeckData {
  background: AvatarIcon | null,
  quality: number,
  duplicated: boolean,
  horizontal: boolean,
  profile: UserProfile,
  valid: boolean,
  name: string,
  deck: Card[] | null[]
}

export default function ShareDeckScreen() {
  console.log('Share Deck Screen');
  const {i18n} = useI18n();
  const { deck_id } = useLocalSearchParams<{ deck_id: string }>();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [loading, setLoading] = useState(false);
  const shareService = useMemo(() => new ShareService(), []);
  const ref = useRef<any>(null);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const [element] = useState({...DEFAULT_ELEMENT});

  const [data, setData] = useState<ShareDeckData>({
    background: null,
    quality: 0.8,
    duplicated: true,
    horizontal: false,
    profile: {...DEFAULT_PROFILE},
    valid: false,
    name: '',
    deck: Array.from({ length: 20 }, (_, i) => (null))
  });

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const sub = DataRxjs.getData<StorageDeck[]>('decks')
      .subscribe(res => {
        if (deck_id !== undefined) {
          const selected = res.find(deck => deck.id === Number(deck_id));

          if (selected) {
            setData({
              background: data.background,
              quality: data.quality,
              name: selected.name,
              duplicated: data.duplicated,
              horizontal: data.horizontal,
              profile: data.profile,
              valid: selected.valid,
              deck: selected.cards.map(card => state.cardState.cards.find(c => c.id === card) || null) as Card[]
            })
  
            Object.keys(element).forEach((key: any) => {
              if (selected.energies?.includes(key)) {
                (element as any)[key] = true;
              }
            });
          }
        }
    });

    return () => sub.unsubscribe();
  }, [state.cardState.cards]);

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setData(prev => ({...prev, profile}));
    };

    getProfile();
  }, []);

  const handleShare = useCallback(() => {
    SoundService.play('POP_PICK');
    setLoading(true);
  
    const length = getFilteredLength();
  
    const payload: ShareContentProps = {
      ref, 
      name: data.name, 
      quality: data.quality, 
      length, 
      type: 'deck', 
      horizontal: data.horizontal
    };
  
    shareService.makeScreenShot(payload).then(() => setLoading(false));
  }, [ref, data]);

  function getFilteredLength(): number {
    const {items} = filterUniqueItems(data.deck as Card[]);
    return data.duplicated ? data.deck.length : items.length;
  }

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

  const renderPreviewItem = useCallback(({item}: {item: Card}) => (
    <View style={[createDeckStyles.previewItem]}>
        <View style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
          { item ? 
          <ThemedView style={{backgroundColor: Colors.light.background}}>
            <Image accessibilityLabel={item?.name[lang]} 
                    style={[
              CardGridStyles.image, 
              {width: Platform.OS === 'web' ? 29.1 : 49.4, height: 46, borderRadius: 4}
            ]} 
            source={getImageLanguage69x96(lang, item?.id)}
            placeholder={BACKWARD_CARD}/>
          </ThemedView> : <MaterialIcons name="add" 
                                         style={{fontSize: 16, color: Colors.light.icon}}/>
          }
        </View>
    </View>
  ), []);

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

  function handleChange(key: string, value: boolean): void {
    SoundService.play('CHANGE_VIEW');
    setData(prev => ({...prev, [key]: value}));
  }

  return (
    <>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={'share_deck'} styles={{marginTop: 0, alignItems: 'inherit', paddingInline: 0}}>
        <ThemedView style={{position: 'absolute', left: -9999}}  >
          {
            Platform.OS === 'web' ?
            <View ref={ref} style={{width: 'auto'}}>
              <DeckCollage deck={data.deck as Card[]} 
                           element={element} 
                           name={data.name}
                           profile={data.profile}
                           background={data.background as AvatarIcon}
                           duplicated={data.duplicated}
                           horizontal={data.horizontal}/>
            </View> :
            <ViewShot ref={ref} style={{width: 'auto'}}>
              <DeckCollage deck={data.deck as Card[]} 
                           element={element} 
                           name={data.name}
                           profile={data.profile}
                           background={data.background as AvatarIcon}
                           duplicated={data.duplicated}
                           horizontal={data.horizontal}/>
            </ViewShot>
          }
        </ThemedView>
        <ThemedView style={{paddingHorizontal: 14}}>
          <ThemedView style={{width: '100%', marginBottom: 8, paddingInline: 14}}>
            <ThemedView style={[CreateScreenStyles.deckName, {justifyContent: 'space-between', width: '100%'}]}>
              <ThemedText style={{color: 'black'}}>{data.name}</ThemedText>
                <ThemedView style={[CreateScreenStyles.energies, {backgroundColor: 'white'}]}>
                  {
                    Object.keys(element).map((key, i) => {
                      const image = (TYPE_MAP as any)[key]?.image;
                      return (
                          (element as any)[key] &&
                          <Image
                            key={key}
                            source={image}
                            style={{
                              width: 22,
                              height: 22,
                              position: 'relative'
                            }}
                          />
                      );
                    })
                  }
                </ThemedView>
            </ThemedView>
            <ThemedView style={{marginBlock: 20, left: -1}}>
              <FlatList data={data.deck as Card[]}
                        numColumns={10}
                        contentContainerStyle={{width: '100%'}}
                        renderItem={renderPreviewItem}
                        keyExtractor={(item, index) => index + 1 + ''}
                        showsVerticalScrollIndicator={false}
              />
            </ThemedView>
          </ThemedView>

          <ScrollView style={{width: '100%', paddingInline: 14}}>
          <ThemedView style={styles.options}>
            <ThemedText style={[filterStyles.header, {marginBottom: 16}]}>{i18n.t('export')}</ThemedText>

            <ThemedView style={settingsStyles.container}>
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('duplicated_cards')}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                  <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                      color={'white'}
                                      onValueChange={(value) => handleChange('duplicated', value)}
                                      style={CardGridStyles.switch}
                                      value={data.duplicated}/>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedView style={settingsStyles.container}>
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('horizontal')}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                  <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                      color={'white'}
                                      onValueChange={(value) => handleChange('horizontal', value)}
                                      style={CardGridStyles.switch}
                                      value={data.horizontal}/>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedView style={[settingsStyles.container, {height: 52}]}>
              <Pressable onPress={handleBackground} style={{flex: 1}} >
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('background_image')}</ThemedText>
                  {
                    Boolean(data.background) && 
                      <Image source={data.background?.icon} style={shareTradeStyles.coin}/>
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
              <TouchableOpacity style={[homeScreenStyles.ctaButton, {marginTop: 16}]} 
                                onPress={handleShare}
                                disabled={!data.valid}>
                <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center', height: 22}]}>
                  {i18n.t('download')}
                </ThemedText>
              </TouchableOpacity>
              {
                !data.valid && 
                  <ThemedText style={{color: 'crimson', fontSize: 12, paddingLeft: 4, top: -36}}>
                    {i18n.t('invalid_cant_share')}
                  </ThemedText>
              }
            </ThemedView>
          </ThemedView>
          </ScrollView>

        </ThemedView>

      </SharedScreen>
      <Portal>{isBackgroundVisible && memoizedPickBackground}</Portal>
    </>
  )
}

const styles = StyleSheet.create({
  options: {
    width: '100%',
    gap: 8
  },
});
