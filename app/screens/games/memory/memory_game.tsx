import React, { useEffect, useState, useRef, useContext, useCallback, useMemo } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Portal } from "react-native-paper";
import { firstValueFrom } from "rxjs";

import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import Storage from '@/core/storage/storage.service';
import GamesService from "@/core/services/games.service";

import { AppContext } from '@/app/_layout';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { Colors } from "@/shared/definitions/utils/colors";
import { cardStyles, CreateScreenStyles, homeScreenStyles, ModalStyles, WebStyles } from "@/shared/styles/component.styles";
import { filterCards } from "@/shared/definitions/utils/functions";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { DEFAULT_PROFILE, getFilterSearch, MODE_MAP } from "@/shared/definitions/utils/constants";
import { MemoryGameMenuData, MemoryUserRanking, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";

import { MemoryCard } from "./memory_card";
import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ClockSymbol, IconSymbol } from "@/components/ui/IconSymbol";
import { splashStyles } from "@/components/ui/SplashScreen";
import MemoryGameMenu from "./memory_menu";

const shuffleCards = (array: any[]) => {
  const shuffled = [...array, ...array].sort(() => Math.random() - 0.5);
  return shuffled.map((card, index) => ({ ...card, _id: index }));
};

export default function MemoryGame() {
  const {i18n} = useI18n();
  const [cards, setCards] = useState<any[]>([]);
  const [openCards, setOpenCards] = useState<any[]>([]);
  const [pairedCards, setPairedCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<Record<string, boolean>>({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [mode, setMode] = useState<4 | 6 | 8>(4);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const filterObj = useRef<FilterSearch>(getFilterSearch());
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const gamesService = useMemo(() => new GamesService(), []);
  const [forceRender, setForceRender] = useState(0);
  const triggerRender = () => setForceRender(prev => prev + 1);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile({...profile});
    };

    getProfile();
  }, []);

  const MODE_LENGTH: any = {
    4: 8,
    6: 18,
    8: 32
  }

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 350);
    } else if (openCards.length === 1) {
      setTimeout(() => enable(), 700);
    }
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards, mode]);

  useEffect(() => {
    setCards(getCards(mode));
    return (() => stopTimer());
  }, [state.cardState.cards]);

  const getCards = useCallback((mode: 4 | 6 | 8) => {
    const data = [...state.cardState.cards];
    const sort = data.sort(() => Math.random() - 0.5);
    sort.length = MODE_LENGTH[mode];
    const shuffle = shuffleCards(sort);
    return [...shuffle];
  }, [])

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === (MODE_LENGTH[mode])) {
      setTimeout(() => {
        setShowModal(true);
        setFinished(true);
        stopTimer();
      }, 500);
    }
  };

  function openMenu(): void {
    SoundService.play('AUDIO_MENU_OPEN');
    setIsMenuVisible(true);
  }

  function closeModal(save = false): void {
    setShowModal(false);
    SoundService.play('AUDIO_MENU_CLOSE');
    if (save) { saveRanking(); }
  }

  async function saveRanking(): Promise<void> {
    const payload: MemoryUserRanking = {
      avatar: profile.avatar,
      name: profile.name,
      mode,
      time: formatTime(seconds),
      moves
    }

    await firstValueFrom(gamesService.registerRanking('memory', payload));
  }

  function handleMenuClose(data: MemoryGameMenuData): void {
    setIsMenuVisible(false);
    SoundService.play('AUDIO_MENU_CLOSE');
    const empty = data.filter.current.areAllPropertiesNull();
    filterObj.current = data.filter.current;

    if (data.mode !== mode) {
      setMode(_ => data.mode);
      triggerRender();
    }
    
    if (data.mode !== mode || !empty) {
      const cards = [...state.cardState.cards];
      const filtered = filterCards(data.filter.current, cards, []);
      const sort = filtered.sort(() => Math.random() - 0.5);
      sort.length = MODE_LENGTH[data.mode];
      const shuffle = shuffleCards(sort);
      setCards(shuffle);
    }
  }

  const evaluate = () => {
    const [first, second] = openCards;
    if (first.name.es === second.name.es && first.rarity === second.rarity) {
      setTimeout(() => {
        setClearedCards((prev) => ({ ...prev, [JSON.stringify(`${first.name.es}_${first.rarity}`)]: true }));
        setOpenCards([]);
        SoundService.play('SUCCESS_SOUND');
        setPairedCards(prev => ([first._id, second._id, ...prev]));
        setTimeout(() => enable(), 310);
      }, 700);

    } else {
      timeoutRef.current = setTimeout(() => {
        setOpenCards([]);
        SoundService.play('FLIP_CARD_REVERSE');
        setTimeout(() => enable(), 310);
      }, 700);
    }
  }

  const disable = () => setShouldDisableAllCards(true);
  const enable = () => setShouldDisableAllCards(false);

  const handleCardClick = (card: any) => {
    if (
      openCards.length === 2 || 
      openCards.some(c => c._id === card._id) || 
      shouldDisableAllCards
    ) return;

    disable();
    SoundService.play('FLIP_CARD');
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, card]);
      setTimeout(() => setMoves((moves) => moves + 1), 450);
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpenCards([card]);
    }
  };

  const checkIsFlipped = (card: any) => openCards.some(c => c._id === card._id) && !pairedCards.includes(card._id);
  const checkIsInactive = (card: Card) => Boolean(clearedCards[JSON.stringify(`${card.name.es}_${card.rarity}`)]);

  const handleRestart = () => {
    SoundService.play('AUDIO_MENU_CLOSE');
    setCards(getCards(mode));
  
    setPairedCards([]);
    stopTimer();
    setClearedCards(prev => ({}));
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    setDisabled(true);
    setSeconds(0);
    triggerRender();
    setFinished(false);
  };

  const startTimer = () => {
    if (finished) { return; }
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    setDisabled(false);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const formatTime = (secs: number) => {
    const hrs = String(Math.floor(secs / 3600)).padStart(2, "0");
    const mins = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const secsStr = String(secs % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secsStr}`;
  };

  return (
    <>
      <SharedScreen title={'memory_game'} styles={{paddingInline: 16, alignItems: 'center', marginTop: 0}}>
        <ThemedView style={[
          CreateScreenStyles.deckItem, 
          {width: '100%', paddingHorizontal: 14},
        ]}>
          <ThemedView style={{flexDirection: 'row', gap: 12}}>
            <>
              <ThemedView style={{top: 0}}>
                {ClockSymbol({rotation: seconds * 6})}
              </ThemedView>
              <ThemedText style={{top: 1}}>{formatTime(seconds)}</ThemedText>
            </>
            <ThemedView style={{marginLeft: 36, flexDirection: 'row'}}>
              <ThemedText>{i18n.t('moves')}: </ThemedText>
              <ThemedText style={{top: 1, left: 10, textAlign: 'right'}}>{moves}</ThemedText>
            </ThemedView>
            <>
              <TouchableOpacity onPress={() => handleRestart()} style={{position: 'absolute', right: 0}}>
                <MaterialIcons
                    name="sync"
                    style={{ fontSize: 21, marginLeft: 16, top: 1 }}
                    color={Colors.light.icon}
                  />
              </TouchableOpacity>
            </>

          </ThemedView>
        </ThemedView>
        <View style={[styles.container, {width: '100%'}]} key={forceRender}>
          <FlatList
            data={cards}
            keyExtractor={(item) => item.id.toString()}
            numColumns={mode}
            contentContainerStyle={{minHeight: 486, width: '100%', left: 0}}
            renderItem={({ item, index }) => (
              <MemoryCard
                card={item}
                isInactive={checkIsInactive(item)}
                isFlipped={checkIsFlipped(item)}
                onPress={() => handleCardClick(item)}
                disabled={disabled}
                mode={mode}
              />
            )}
          />

          <TouchableOpacity disabled={!!intervalRef.current || finished}
                            onPress={() => startTimer()}
                            style={[
                              homeScreenStyles.ctaButton,
                              {marginBottom: 10, marginTop: 24, backgroundColor: 'mediumaquamarine', width: '100%'},
                              (!!intervalRef.current || finished) && {backgroundColor: 'grey', opacity: 0.3}
                            ]}>
            <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center'}]}>
              {i18n.t('start')}
            </ThemedText>
          </TouchableOpacity>

          {
            showModal && 
            <Portal>
              <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                        style={StyleSheet.absoluteFill} 
                        tint="light" 
                        experimentalBlurMethod='dimezisBlurView'/>
                <View style={[ModalStyles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
                  <View style={[ModalStyles.modalView, {minHeight: 'auto'}]}>
                    <View style={[ModalStyles.modalHeader, {flexDirection: 'row', justifyContent: 'center'}]}>
                      <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('result')}</ThemedText>
                      <MaterialIcons name={'info-outline'} style={
                        {
                          fontSize: 24,
                          position: 'relative',
                          left: 12,
                          color: 'dodgerblue'
                        }}>
                      </MaterialIcons>
                    </View>
                    <View style={[ModalStyles.modalScrollView, {minHeight: 'auto'}]}>
                      <ThemedText style={{textAlign: 'center', marginBlock: 6, marginBottom: 9, top: -1}}>
                        {i18n.t('your_points', {mode: MODE_MAP[mode], time: formatTime(seconds), moves})}
                      </ThemedText>

                    </View>
                    <View style={[ModalStyles.modalFooter, {flexDirection: 'row', gap: 16, justifyContent: 'center', height: 82}]}>
                      <TouchableOpacity style={[
                          splashStyles.button, 
                          {backgroundColor: 'white'},
                      ]} onPress={() => closeModal()}>
                        <ThemedText style={{fontWeight: 600}}>{i18n.t('close')}</ThemedText>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => closeModal(true)}
                                        style={[splashStyles.button, {backgroundColor: 'skyblue'}]} >
                        <ThemedText style={[
                          {color: 'white', fontWeight: 600, fontSize: 15}
                        ]}>{i18n.t('ok')}</ThemedText>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </Portal>
          }
        </View>
        <TouchableOpacity onPress={openMenu} 
                          disabled={!!intervalRef.current || finished} 
                          style={[cardStyles.container]}>
          <ThemedView>
            <IconSymbol name="menubar.rectangle" 
                        color={'#8E8E8F'}
                        style={{fontSize: 28}} />
          </ThemedView>
        </TouchableOpacity>
      </SharedScreen>
      {
        isMenuVisible && <MemoryGameMenu onClose={(data) => handleMenuClose(data)}
                                         selectedMode={mode}
                                         isVisible={isMenuVisible}
                                         filterObj={filterObj}/>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f4f4f4'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  instructions: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 20 
  },
  scoreBoard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
    marginVertical: 20 
  },
  score: { 
    fontSize: 16, 
    fontWeight: 'bold'
  },
  restartButton: { 
    backgroundColor: '#007bff', 
    padding: 10, 
    borderRadius: 5
  },
  restartText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold'
  }
});
