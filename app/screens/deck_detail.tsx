import { useState, useEffect, useCallback, useContext } from "react";
import { Image } from 'expo-image';
import { Platform, StyleSheet } from "react-native";
import { FlatList, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { combineLatest, filter } from "rxjs";

import Storage from '@/core/storage/storage.service';
import { DataRxjs } from "@/core/rxjs/DataRxjs";
import { useI18n } from "@/core/providers/LanguageProvider";

import { AppContext } from "../_layout";
import { CARD_IMAGE_WIDTH_5, CardGridStyles, CreateScreenStyles } from "@/shared/styles/component.styles";
import { StorageDeck, UserProfile } from "@/shared/definitions/interfaces/global.interfaces";
import { AVATAR_MAP, DEFAULT_ELEMENT, DEFAULT_PROFILE, TYPE_MAP } from "@/shared/definitions/utils/constants";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";
import { getImageLanguage116x162 } from "@/shared/definitions/utils/functions";
import { LanguageType } from "@/shared/definitions/types/global.types";

import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function DeckDetailScreen() {
  console.log('Deck Screen Detail')
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const {i18n} = useI18n();
  const { deck_id } = useLocalSearchParams<{ deck_id: string }>();
  const [current, setCurrent] = useState<any>();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [lang] = useState<LanguageType>(state.settingsState.language);
  const [element, setElement] = useState<any>({...DEFAULT_ELEMENT});

  useEffect(() => {
    const sub = combineLatest([
      DataRxjs.getData<StorageDeck[]>('decks'),
      DataRxjs.deckPreview$.pipe(filter(Boolean))
    ]).subscribe(([decks, preview]) => {
      if (preview.element !== undefined) {
        setElement(preview.element);

        setCurrent((prev: any) => {
          return {
            ...prev,
            name: preview.name,
            cards: preview.active.map(card => card?.id) as number[]
          }
        });
      } else {
        const related = decks.find(d => d.id === Number(deck_id));
        if (related) {
          setCurrent(related);
          related.energies.forEach(energy => element[String(energy)] = true);
        };
      }
    })
    return (() => sub.unsubscribe());
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile({...profile});
    };

    getProfile();
  }, []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 97,
    offset: 97 * index,
    index, 
  }), []);

  const renderItem = useCallback(({item, index}: {item: number | null, index: number}) => (
    <View style={[
      CardGridStyles.imageContainer,
      {marginHorizontal: Platform.OS === 'android' ? 1.5 : 1, marginVertical: 1}]}>
      <View style={[{flex: 1, backgroundColor: 'white'}]}>
          <View>
            <Image style={[
                CardGridStyles.image, 
                {width: CARD_IMAGE_WIDTH_5}
              ]} 
            source={item ? {uri: getImageLanguage116x162(lang, item)} : BACKWARD_CARD}
            placeholder={BACKWARD_CARD}/>
          </View>
      </View>
    </View>
  ), [lang]);

  return (
    <SharedScreen title="deck_detail" styles={{paddingInline: 16}}>
      <ThemedView style={[CreateScreenStyles.deckItem, {paddingHorizontal: 16, paddingVertical: 10, width: '100%'}]}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
          <Image source={AVATAR_MAP[profile.avatar]} style={styles.avatar}/>
          <ThemedText>{profile.name}</ThemedText>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 8, justifyContent: 'space-between'}}>
          <ThemedText type='defaultSemiBold' style={{fontSize: 16, left: 2, marginBottom: 0}}>{current?.name}</ThemedText>
          <ThemedView style={[CreateScreenStyles.energies, {backgroundColor: 'white'}]}>
            {
              Object.keys(element).map((key, i) => {
                const image = (TYPE_MAP as any)[key]?.image;
                return (
                  (element as any)[key] &&
                    <Image
                      key={i}
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
      </ThemedView>

      <FlatList data={current?.cards}
                numColumns={5}
                contentContainerStyle={[{width: '100%', marginTop: 12}]}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={25}
                maxToRenderPerBatch={25}
                windowSize={10}
                removeClippedSubviews={false}
                getItemLayout={getItemLayout}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>}
                renderItem={renderItem}
                keyboardDismissMode={'on-drag'}/>
    </SharedScreen>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  avatarContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 12,
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
    borderRadius: 100
  }
})