import { useLocalSearchParams } from "expo-router";
import { FlatList, Platform, Pressable, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from 'expo-image';
import { Portal, Provider, Switch } from "react-native-paper";
import ViewShot from "react-native-view-shot";
import { Slider } from "@miblanchard/react-native-slider";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import DeckCollage from "@/components/dedicated/share/DeckCollage";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import Storage from '@/core/storage/storage.service';
import ShareService from "@/core/services/share.service";
import { AvatarIcon, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { CardGridStyles, CreateScreenStyles, filterStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { CARD_IMAGE_MAP_69x96 } from "@/shared/definitions/utils/card.images";
import { createDeckStyles } from "./create_deck";
import { settingsStyles } from "./settings";
import { IconSymbol } from "@/components/ui/IconSymbol";
import SoundService from "@/core/services/sounds.service";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import PickBackgroundMenu from "@/components/dedicated/share/PickCBackgroundMenu";
import { filterUniqueItems } from "@/shared/definitions/utils/functions";

export default function ShareDeckScreen() {
  const {i18n} = useI18n();
  const { deck_id } = useLocalSearchParams<{ deck_id: string }>();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [deck, setDeck] = useState<any[]>(Array.from({ length: 20 }, (_, i) => (null)));
  const [deckName, setDeckName] = useState('');
  const [loading, setLoading] = useState(false);
  const shareService = useMemo(() => new ShareService(), []);
  const ref = useRef<any>(null);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [background, setBackground] = useState<AvatarIcon>();
  const [quality, setQuality] = useState<number>(0.8);
  const [duplicated, setDuplicated] = useState<boolean>(true);

  const [profile, setProfile] = useState<UserProfile>(
    {name: '', avatar: 'eevee', coin: 'eevee', best: null}
  );

  const [element, setElement] = useState({
    [PokemonTypeENUM.GRASS]: null, 
    [PokemonTypeENUM.FIRE]: null,
    [PokemonTypeENUM.WATER]: null,
    [PokemonTypeENUM.ELECTRIC]: null,
    [PokemonTypeENUM.PSYCHIC]: null,
    [PokemonTypeENUM.FIGHT]: null,
    [PokemonTypeENUM.DARK]: null,
    [PokemonTypeENUM.STEEL]: null,
    [PokemonTypeENUM.DRAGON]: null,
    [PokemonTypeENUM.NORMAL]: null
  });

  useEffect(() => {
    const checkDeck = async () => {
      if (deck_id !== undefined) {
        const selected = state.settingsState.decks.find(deck => deck.id === Number(deck_id));
        if (selected) {
          const deck = selected.cards.map(card => state.cardState.cards.find(c => c.id === card) || null);
          setDeck(deck);
          setDeckName(selected.name);
          Object.keys(element).forEach((key: any) => {
            if (selected.energies?.includes(key)) {
              (element as any)[key] = true;
            }
          })
        }
      }
    };

    checkDeck();
  }, [state.cardState.cards]);

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
    const length = getFilteredLength();
    shareService.makeScreenShot(ref, deckName, quality, length, 'deck').then(_ => setLoading(false));
  }

  function getFilteredLength(): number {
    const {items} = filterUniqueItems(deck);
    return duplicated ? deck.length : items.length;
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

  const renderPreviewItem = useCallback(({item}: {item: Card}) => (
    <View style={[createDeckStyles.previewItem]}>
        <View style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
          { item ? 
          <ThemedView style={{backgroundColor: Colors.light.background}}>
            <Image accessibilityLabel={item?.name} 
                    style={[
              CardGridStyles.image, 
              {width: Platform.OS === 'web' ? 29.1 : 49.4, height: 46, borderRadius: 4}
            ]} 
            source={CARD_IMAGE_MAP_69x96[String(item?.id)]}/>
            { state.settingsState.favorites?.includes(item.id) && 
              <ThemedView style={[CardGridStyles.triangle, {
                borderRightWidth: 8,
                borderBottomWidth: 8
              }]}></ThemedView>
            }
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
    setQuality(value);
  }

  function handleDuplicatedChange(value: boolean): void {
    SoundService.play('CHANGE_VIEW');
    setDuplicated(value);
  }

  return (
    <Provider>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={'share_deck'} styles={{marginTop: 0}}>
        <ThemedView style={{position: 'absolute', left: -9999}}  >
          {
            Platform.OS === 'web' ?
            <View ref={ref} style={{width: 'auto'}}>
              <DeckCollage deck={deck} 
                           element={element} 
                           name={deckName}
                           profile={profile}
                           background={background}
                           duplicated={duplicated}/>
            </View> :
            <ViewShot ref={ref} style={{width: 'auto'}}>
              <DeckCollage deck={deck} 
                           element={element} 
                           name={deckName}
                           profile={profile}
                           background={background}
                           duplicated={duplicated}/>
            </ViewShot>
          }
        </ThemedView>
        
        <ThemedView style={{width: '100%'}}>
          <ThemedView style={[CreateScreenStyles.deckName, {justifyContent: 'space-between', width: '100%'}]}>
            <ThemedText style={{fontSize: 15}}>{deckName}</ThemedText>
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
            <FlatList data={deck}
                      numColumns={10}
                      contentContainerStyle={{width: '100%'}}
                      renderItem={renderPreviewItem}
                      keyExtractor={(item, index) => index + 1 + ''}
                      showsVerticalScrollIndicator={false}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.options}>
          <ThemedText style={filterStyles.header}>{i18n.t('export')}</ThemedText>

          <ThemedView style={settingsStyles.container}>
            <ThemedView style={settingsStyles.row}>
              <ThemedText>{i18n.t('duplicated_cards')}</ThemedText>
              <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                    color={'white'}
                                    onValueChange={handleDuplicatedChange}
                                    style={CardGridStyles.switch}
                                    value={duplicated}/>
              </ThemedView>
            </ThemedView>
          </ThemedView>

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
            <TouchableOpacity style={[homeScreenStyles.ctaButton, {marginBlock: 45}]} 
                              onPress={handleShare}>
              <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center', height: 22}]}>
                {i18n.t('download')}
              </ThemedText>
            </TouchableOpacity>
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
    gap: 8
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
});
