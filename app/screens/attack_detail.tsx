import React, { useCallback, useContext, useEffect, useState } from "react";
import { Image } from 'expo-image';
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';

import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { useI18n } from "@/core/providers/LanguageProvider";
import { Attack, Card } from "@/shared/definitions/interfaces/card.interfaces";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { detailScrollStyles } from "@/components/dedicated/detail/detail.scroll";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { getImageLanguage116x162 } from "@/shared/definitions/utils/functions";
import { CardGridStyles } from "@/shared/styles/component.styles";
import SkeletonCardGrid from "@/components/skeletons/SkeletonCardGrid";
import { Colors } from "@/shared/definitions/utils/colors";
import { renderAttackItem } from "@/components/dedicated/attacks/AttackItem";
import SoundService from "@/core/services/sounds.service";

export default function AttackDetailScreen() {
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [attack, setAttack] = useState<Attack>();
  const [related, setRelated] = useState<Card[]>([]);
  const [similar, setSimilar] = useState<Attack[]>([]);
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const router = useRouter();

  useEffect(() => {
    if (state.attacksState.current) {
      setAttack(state.attacksState.current);
    } else {
      setTimeout(() => router.navigate('/attacks'), 150);
      return;
    }
    
    const related = state.cardState.cards.filter(card => {
      if (card.attacks && card.attacks.length > 0 && state.attacksState.current) {
        if (card.attacks.some(att => 
          att !== undefined && 
          (
            att.name.es === state.attacksState.current?.name.es && 
            att.description?.es === state.attacksState.current.description?.es && 
            att.damage === state.attacksState.current.damage
          ))) {
          return true;
        }
      }

      return false
    });

    setRelated(related);
  }, [state.attacksState.current, state.cardState.cards]);

  const RenderEmpty = () => {
    const renderCardState = useCallback(() => {
      return state.cardState.loaded ? (
        <ThemedText style={{ padding: 6 }}>{i18n.t('no_cards_found')}</ThemedText>
      ) : (<SkeletonCardGrid columns={7} amount={56} width={47}/>);
    }, [state.cardState.loaded]);
  
    return renderCardState();
  };

  useEffect(() => {
    if (!state.attacksState.current) { return; }
    const attack = state.attacksState.current;
    const filtered = state.attacksState.attack_list.filter(att => {
      if (
        (att.energy.length === attack.energy.length && att.damage === attack.damage) &&
        att.name.es !== attack.name.es
      ) {
        return true;
      }
      return false;
    });

    setSimilar(filtered);
  }, [state.attacksState.current, state.attacksState.attack_list]);

  const goToDetailScreen = async (id: number) => {
    SoundService.play('PICK_CARD_SOUND');
    router.push(`/screens/detail?id=${encodeURIComponent(id)}`);
  };

  const goToAttackDetail = (item: Attack) => {
    SoundService.play('AUDIO_MENU_OPEN');
    dispatch({type: 'SET_CURRENT_ATTACK', value: item});
    router.replace(`/screens/attack_detail`);
  }

  const renderCard = useCallback(({item, index}: {item: Card, index: number}) => (
    <View style={{margin: 1, backgroundColor: Colors.light.skeleton, borderRadius: 8}}>
      <TouchableOpacity
            onPress={() => goToDetailScreen(item.id)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          <Image accessibilityLabel={item.name[lang]}
                 source={getImageLanguage116x162(lang, item.id)}
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

  const renderItem = useCallback(({item}: {item: Attack}) => {
    return renderAttackItem({ item, lang, onPress: () => goToAttackDetail(item) })
  }, [lang]);

  return (
    <>
      {  attack && 
        <SharedScreen title={'attack_name'}>
          <ThemedView style={[
              detailScrollStyles.attackContainer, 
              {width: '100%', alignItems: 'flex-start', marginBottom: 20}
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
                <ThemedView style={{width: '100%', marginTop: 16}}>
                  <ThemedText style={{fontSize: 12}}>{attack.description[lang]}</ThemedText>
                </ThemedView>
              }
          </ThemedView>
          <ThemedView>
            <FlatList data={related}
                      numColumns={5}
                      contentContainerStyle={[{width: '100%'}]}
                      keyExtractor={keyExtractor}
                      initialNumToRender={25}
                      maxToRenderPerBatch={35}
                      windowSize={15}
                      removeClippedSubviews={false}
                      showsVerticalScrollIndicator={false}
                      ListEmptyComponent={RenderEmpty}
                      renderItem={renderCard}
                      ListFooterComponent={<ThemedView style={{height: 16}}></ThemedView>}
            />
          </ThemedView>
          <ThemedView style={{width: '100%', flex: 1}}>
            <ThemedText style={{fontSize: 16,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginBottom: 20}}>{i18n.t('related_attacks')}
            </ThemedText>
            <FlatList data={similar}
                      numColumns={1}
                      contentContainerStyle={[{width: '100%', paddingBottom: 68}]}
                      keyExtractor={keyExtractorSimilar}
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

const styles = StyleSheet.create({

});