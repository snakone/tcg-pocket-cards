import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { HelpItemStyles} from "@/shared/styles/component.styles";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedView } from "@/components/ThemedView";
import { AppContext } from "../_layout";
import { UserCollection } from "@/shared/definitions/interfaces/global.interfaces";
import { CardLanguageENUM } from "@/shared/definitions/enums/card.enums";
import { settingsStyles } from "./settings";
import { COLLECTION_LANGUAGE_MAP, CollectionLanguageList } from "@/shared/definitions/utils/constants";
import { Colors } from "@/shared/definitions/utils/colors";

export default function CollectionStatsScreen() {
  const {i18n} = useI18n();
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [collection, setCollection] = useState<UserCollection[]>([]);
  const [langCollection, setLangCollection] = useState<CardLanguageENUM>(CardLanguageENUM.EN);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [missingCards, setMIssingCards] = useState<number>(0);

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

  useEffect(() => {
    setCollection(state.settingsState.collection);
    selectLanguage(CardLanguageENUM.EN, false);
  }, [state.settingsState.collection]);

  const selectLanguage = useCallback((value: CardLanguageENUM, sound = true) => {
    if (sound) {
      SoundService.play('POP_PICK');
    }

    setLangCollection(value);
    calculate(value);
  }, []);

  const calculate = useCallback((value: CardLanguageENUM) => {
    const total = state.settingsState.collection.reduce((acc, curr) => {
      return acc + curr.amount[value];
    }, 0);

    setTotalCards(total);

    const cards = state.cardState.cards;
    const current = new Set(Array.from(state.settingsState.collection.filter(coll => coll.amount[value] > 0).map(coll => coll.id)));
    const missing = cards.filter(card => !current.has(card.id)).length;
    setMIssingCards(missing);

  }, [state.settingsState.collection, state.cardState.cards]);

  const perctTotal = useMemo(() => {
    const allCards = totalCards + missingCards;
    const total = ((missingCards / allCards) * 100).toFixed(2);
    return Number(total);
  }, [totalCards, missingCards]);

  return (
    <>
      <SharedScreen title={'stats'} styles={{paddingInline: 16}}>
        <ThemedView style={[settingsStyles.container, {marginBottom: 16, padding: 0, borderRadius: 12}]}>
          <ThemedView style={[settingsStyles.row, {width: '100%', gap: 0}]}>
            {
              CollectionLanguageList.map((item, i) => {
                return (
                  <TouchableOpacity onPress={() => selectLanguage(item)} key={i.toString()}>
                    <ThemedText style={[
                      styles.lang,
                      i === 0 && {paddingLeft: 12, borderTopLeftRadius: 12, borderBottomLeftRadius: 12},
                      i === CollectionLanguageList.length - 1 && {paddingRight: 12, borderTopRightRadius: 12, borderBottomRightRadius: 12},
                      langCollection === item && {backgroundColor: Colors.light.icon, color: 'white'}
                      ]}>{COLLECTION_LANGUAGE_MAP[item]}</ThemedText>
                  </TouchableOpacity>
                )
              })
            }
          </ThemedView>
        </ThemedView>

        <ThemedView>
          <ThemedText>{i18n.t('total_cards')} - {totalCards}</ThemedText>
          <ThemedText>{i18n.t('missing_cards')} - {missingCards}</ThemedText>
          <ThemedText>{i18n.t('percentage_missing')} - {perctTotal}%</ThemedText>
          <ThemedText>{i18n.t('percentage_owned')} - {(100 - perctTotal).toFixed(2)}%</ThemedText>
        </ThemedView>
      </SharedScreen>
    </>
  )
}

export const styles = StyleSheet.create({
 lang: {
  fontWeight: 'bold',
  fontSize: 12,
  paddingVertical: 12,
  paddingHorizontal: 7,
  textAlign: 'center',
  borderRadius: 2
}
});

