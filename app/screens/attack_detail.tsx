import React, { useCallback, useContext, useEffect, useState } from "react";
import { Image } from 'expo-image';
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";

import { AppContext } from "../_layout";
import { Attack, AttackMetaData, Card } from "@/shared/definitions/interfaces/card.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { getImageLanguage116x162, getUniqueAttacks } from "@/shared/definitions/utils/functions";
import { CardGridStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { detailScrollStyles } from "@/components/dedicated/detail/detail.scroll";
import { RenderAttackItem } from "@/components/dedicated/attacks/AttackItem";

export default function AttackDetailScreen() {
  console.log('Attack Detail Screen')
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [attack, setAttack] = useState<AttackMetaData>();
  const [related, setRelated] = useState<Card[]>([]);
  const [similar, setSimilar] = useState<AttackMetaData[]>([]);
  const [lang, setLang] = useState<LanguageType>('en');
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const [card_id, index] = id.split('_');
    const cards = state.cardState.cards;
    const card = cards.find(c => c.id === Number(card_id));
    const active = card?.attacks?.[Number(index)];
  
    if (!active) {
      router.replace('/attacks');
      return;
    }
  
    setAttack(active as AttackMetaData);
  
    const related = cards.filter(c =>
      c.attacks?.some(att =>
        att &&
        att.name.es === active.name.es &&
        att.description?.es === active.description?.es &&
        att.damage === active.damage
      )
    );
  
    setRelated(related);
  
    const allAttacks = cards.reduce<AttackMetaData[]>((acc, c) => {
      if (c.attacks) {
        acc.push(...c.attacks.map((att, i) => ({
          ...att,
          card: c.id,
          index: i
        })));
      }
      return acc;
    }, []);
  
    if (allAttacks.length > 0) {
      const uniqueAttacks = getUniqueAttacks(allAttacks);
      const similar = uniqueAttacks.filter(att =>
        att.energy.length === active.energy.length &&
        att.damage === active.damage &&
        att.name.es !== active.name.es
      );
  
      setSimilar(similar);
    }
  }, [state.cardState.cards]);

  const goToDetailScreen = async (id: number) => {
    SoundService.play('PICK_CARD_SOUND');
    router.push(`/screens/detail?id=${encodeURIComponent(id)}`);
  };

  const goToAttackDetail = (item: AttackMetaData) => {
    SoundService.play('AUDIO_MENU_OPEN');
    router.replace(`/screens/attack_detail?id=${encodeURIComponent(`${item.card}_${item.index}`)}`);
  }

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => goToDetailScreen(item.id)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          <Image accessibilityLabel={item.name[lang]}
                 source={getImageLanguage116x162(lang, item.id)}
                 placeholder={BACKWARD_CARD}
                 style={[
                  CardGridStyles.image, 
                  {width: 64.6}
                ]}/>
        </View>
      </TouchableOpacity>
    </View>
  ), [lang]);

  const keyExtractor = useCallback((item: Card) => String(item.id), []);
  const keyExtractorSimilar = useCallback((item: Attack, index: number) => String(item.name) + index, []);

  const renderItem = useCallback(({item}: {item: AttackMetaData}) => {
    return <RenderAttackItem 
              item={item}
              lang={lang}
              onPress={() => goToAttackDetail(item)}
            />
  }, [lang]);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 52,
    offset: 52 * index,
    index, 
  }), []);

  return (
    <>
      {  attack && 
        <SharedScreen title={'attack_name'}>
          <ThemedView style={[
              detailScrollStyles.attackContainer, 
              {width: '100%', alignItems: 'flex-start', marginBottom: 16}
            ]}>
            <ThemedView style={detailScrollStyles.attackItem}>
              <ThemedView style={detailScrollStyles.attackEnergy}>
                {
                  attack.energy.map((energy, j) => (
                    <Image key={j} source={TYPE_MAP[energy].image} style={detailScrollStyles.energy}></Image>
                  ))
                }
              </ThemedView>
              <ThemedText style={detailScrollStyles.attackName}>{attack.name[lang]}</ThemedText>
            </ThemedView>

            { attack.damage > 0 && <ThemedText style={detailScrollStyles.attackDamage}>{attack.damage}</ThemedText>}

            { attack.description && 
              <ThemedView style={[{width: '100%', marginTop: 16}, Platform.OS === 'android' && {top: 16}]}>
                <ThemedText style={{fontSize: 12}}>{attack.description[lang]}</ThemedText>
              </ThemedView>
            }
          </ThemedView>
          <ThemedView style={Platform.OS === 'android' && {height: Math.ceil((related.length) / 5) * 94}}>
            <FlatList data={related}
                      numColumns={5}
                      contentContainerStyle={[{width: '100%'}]}
                      keyExtractor={keyExtractor}
                      initialNumToRender={25}
                      maxToRenderPerBatch={35}
                      windowSize={15}
                      removeClippedSubviews={false}
                      showsVerticalScrollIndicator={false}
                      ListEmptyComponent={<ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>}
                      renderItem={renderCard}
                      ListFooterComponent={<ThemedView style={{height: 16}}></ThemedView>}
            />
          </ThemedView>
          <ThemedView style={{width: '100%', flex: 1, paddingBottom: 12}}>
            <ThemedText style={{fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: Platform.OS === 'android' ? 20 : 10,
                          marginBottom: 20}}>{i18n.t('related_attacks')}
            </ThemedText>
            <FlatList data={similar}
                      numColumns={1}
                      contentContainerStyle={[{width: '100%', paddingBottom: 68}]}
                      keyExtractor={keyExtractorSimilar}
                      getItemLayout={getItemLayout}
                      initialNumToRender={25}
                      maxToRenderPerBatch={35}
                      windowSize={15}
                      removeClippedSubviews={false}
                      showsVerticalScrollIndicator={false}
                      ListEmptyComponent={() => <ThemedText>{i18n.t('no_related_attacks')}</ThemedText>}
                      renderItem={renderItem}
            />
          </ThemedView>
        </SharedScreen>
      }
    </>
  )
}