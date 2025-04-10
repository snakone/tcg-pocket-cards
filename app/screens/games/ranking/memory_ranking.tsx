import { useEffect, useMemo, useState } from "react";
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Divider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { firstValueFrom, Subscription } from "rxjs";

import { useI18n } from "@/core/providers/LanguageProvider";
import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import { GamesRxjs } from "@/core/rxjs/GamesRxjs";
import GamesService from "@/core/services/games.service";
import SoundService from "@/core/services/sounds.service";

import { cardStyles, CreateScreenStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { AVATAR_MAP, MODE_MAP} from "@/shared/definitions/utils/constants";
import { MemoryUserRanking } from "@/shared/definitions/interfaces/global.interfaces";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import LoadingOverlay from "@/components/ui/LoadingOverlay";

export default function RankingMemoryScreen() {
  const {i18n} = useI18n();
  const [mode, setMode] = useState<number>(4);
  const [ranking, setRanking] = useState<MemoryUserRanking[]>();
  const gamesService = useMemo(() => new GamesService(), []);
  const [loading, setLoading] = useState(true);
  const { confirm } = useConfirmation();

  const filteredRanking = useMemo(() => {
    return ranking?.filter(r => r.mode === mode) || [];
  }, [mode, ranking]);

  const modes = [
    {checked: false, label: '4x4', value: 4},
    {checked: false, label: '6x6', value: 6},
    {checked: false, label: '8x8', value: 8}
  ];

  useEffect(() => {
    let sub: Subscription;
    const checkData = async () => {
      try {
        const local = await firstValueFrom(GamesRxjs.getRanking());
        if (local.length === 0) {
          sub = gamesService.getRanking('memory')
           .subscribe((res) => {
              setRanking(res);
              GamesRxjs.setRanking(res);
              setLoading(false);
          });
        } else {
          setRanking(local);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
      }
    }

    checkData();
    return (() => sub?.unsubscribe());
  }, []);

  function onClick(mode: number): void {
    SoundService.play('POP_PICK');
    setMode(mode);
  }

  const renderItem = ({item, index}: any) => {
    return <>
      <ThemedView style={styles.item}>
        <ThemedView style={[
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
          <ThemedText style={[
              {minWidth: 40},
              index === 0 && {fontSize: 32},
              index === 1 && {fontSize: 26},
              index === 2 && {fontSize: 20}
            ]}>{index + 1}.</ThemedText>
            
              <ThemedView style={[styles.avatarContainer]}>
                <Image source={AVATAR_MAP[item.avatar]} style={styles.avatar}/>
              </ThemedView>
              <ThemedText style={[styles.text, {minWidth: 105, marginLeft: 18, top: -12, fontWeight: 'bold'}]}>{item.name}</ThemedText>
           
        </ThemedView>
        
        <ThemedView style={{flexDirection: 'row', position: 'absolute', gap: 16, left: 106, top: 38, width: '66%'}}>
          <ThemedText style={styles.text}>{item.time}</ThemedText>
          <ThemedView style={[{marginLeft: 'auto', flexDirection: 'row', gap: 6}]}>
            <ThemedText style={[styles.text, {textAlign: 'right'}]}>{MODE_MAP[item.mode]}</ThemedText>
            <MaterialIcons name={"grid-4x4"} style={{fontSize: 20, color: Colors.light.icon}}></MaterialIcons>
          </ThemedView>
          <ThemedView style={[{flexDirection: 'row', gap: 6}]}>
            <ThemedText style={[styles.text, {minWidth: 21, textAlign: 'right'}]}>{item.moves}</ThemedText>
            <MaterialIcons name={"commit"} style={{fontSize: 20, color: Colors.light.icon}}></MaterialIcons>
          </ThemedView>
        </ThemedView>

      </ThemedView>
    </>
  };

  const refresh = async () => {
    SoundService.play('POP_PICK');
    const userConfirmed = await confirm("refresh", "refresh_ranking");
    if (userConfirmed) {
      try {
        setLoading(true);
        const ranking = await firstValueFrom(gamesService.getRanking('memory')) as MemoryUserRanking[];
        setRanking(ranking);
        GamesRxjs.setRanking(ranking);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
  }
  
  return (
    <>
      <SharedScreen title={'ranking'} styles={{alignItems: 'center', paddingInline: 16, marginTop: 2}}>
      { loading && <LoadingOverlay fullWidth={Platform.OS === 'android'}/> }
        <ThemedView style={[
          CreateScreenStyles.deckItem, 
          styles.mode
        ]}>
          {
            modes.map((m, i) => {
              return (
                <TouchableOpacity style={[
                                    {width: '33%', alignItems: 'center', padding: 6}, 
                                    mode === m.value && {backgroundColor: 'skyblue'}
                                  ]}
                                  key={i.toString()}
                                  onPress={() => onClick(m.value)}>
                  <ThemedText style={mode === m.value && {color: 'white'}}>{m.label}</ThemedText>
                </TouchableOpacity>
              )
            })
          }
        </ThemedView>
        <FlatList
          data={filteredRanking}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{width: '100%', marginTop: 12, paddingBottom: Platform.OS === 'android' ? 100 : 80, paddingInline: 6}}
          style={{width: '100%'}}
          ListEmptyComponent={<ThemedText style={{ marginTop: 10 }}>{i18n.t('no_ranking_found')}</ThemedText>}
          ItemSeparatorComponent={() => <Divider style={{width: '88%', marginLeft: 'auto'}}></Divider>}
        />

        <TouchableOpacity onPress={refresh} 
                          style={[cardStyles.container]}>
          <ThemedView>
            <MaterialIcons name="sync" 
                           color={'#8E8E8F'}
                           style={{fontSize: 32}} />
          </ThemedView>
        </TouchableOpacity>
      </SharedScreen>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '100%', 
    flexDirection: 'row', 
    gap: 0, 
    justifyContent: 'space-between',
    marginBottom: 6,
    height: 65,
    alignItems: 'center',
    marginTop: 4
  },
  text: {
    fontSize: 13
  },
  avatarContainer: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    position: 'relative',
  },
  avatar: {
    width: 40, 
    height: 40, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 40,
  },
  mode: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 0, 
    marginBottom: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  }
});