import { DimensionValue, FlatList } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';

import { useI18n } from '@/core/providers/LanguageProvider';

import { LanguageType } from "@/shared/definitions/types/global.types";
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { getImageLanguage69x96 } from '@/shared/definitions/utils/functions';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { Colors } from '@/shared/definitions/utils/colors';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RainbowDivider from '../RainbowDivider';

interface GraphicConditionsProps {
  styles: any;
  data: any;
  language: LanguageType;
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicConditions = ({data, styles, language}: GraphicConditionsProps) => {
  const {i18n} = useI18n();

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => {
    return (
      <ThemedView style={
          [{backgroundColor: Colors.light.background, height: 48}, 
          index > 19 && {boxShadow: '0px -2px 12px rgba(0, 0, 0, 0.7)'}
        ]}>
        <Image accessibilityLabel={item?.name[language]} 
                style={[
          CardGridStyles.image, 
          {width: 60, borderRadius: 4, height: 82}
        ]} 
        source={getImageLanguage69x96(language, item?.id)}/>
      </ThemedView>
    )
  }, []);

  function getItemWidth(length: number): DimensionValue {
    if (length >= 20) { return '100%'}
    return (length * 60) + 40;
  }

  const DATA: any[] = [
    { label: 'condition_attack_bench', value: data.benchConditionLength, list: data.benchCondition},
    { label: 'condition_recoil', value: data.recoilConditionLength, list: data.recoilCondition, getWidth: true },
    { label: 'condition_extra_damage', value: data.extraConditionLength, list: data.extraCondition},
    { label: 'condition_resist', value: data.resistConditionLength, list: data.resistCondition},
    { label: 'condition_heal', value: data.healConditionLength, list: data.healCondition},
    { label: 'condition_poison', value: data.poisonConditionLength, list: data.poisonCondition, getWidth: true },
    { label: 'condition_paralyze', value: data.paralizeConditionLength, list: data.paralizeCondition, getWidth: true },
    { label: 'condition_sleep', value: data.sleepConditionLength, list: data.sleepCondition, getWidth: true },
    { label: 'condition_confusion', value: data.confusionConditionLength, list: data.confusionCondition, getWidth: true },
    { label: 'condition_burned', value: data.benchConditionLength, list: data.benchCondition, getWidth: true },
    { label: 'condition_flip', value: data.flipConditionLength, list: data.flipCondition},
    { label: 'condition_nothing', value: data.nothingConditionLength, list: data.nothingCondition, getWidth: true },
    { label: 'condition_discard', value: data.discardConditionLength, list: data.discardCondition},
    { label: 'condition_add', value: data.addConditionLength, list: data.addCondition},
    { label: 'condition_corner', value: data.cornerConditionLength, list: data.cornerCondition, getWidth: true },
    { label: 'condition_withdraw', value: data.withdrawConditionLength, list: data.withdrawCondition, getWidth: true },
    { label: 'condition_retire', value: data.retireConditionLength, list: data.retireCondition, getWidth: true },
    { label: 'condition_call', value: data.callConditionLength, list: data.callCondition, getWidth: true },
    { label: 'condition_inactive', value: data.inactiveConditionLength, list: data.inactiveCondition, getWidth: true },
    { label: 'condition_play_cards', value: data.playCardsConditionLength, list: data.playCardsCondition, getWidth: true },
    { label: 'condition_random_attack', value: data.randomConditionLength, list: data.randomCondition, getWidth: true },
    { label: 'arceus_link', value: data.arceusConditionLength, list: data.arceusCondition, getWidth: true },
    { label: 'condition_end_turn', value: data.endTurnConditionLength, list: data.endTurnCondition, getWidth: true },
    { label: 'condition_plus_ex', value: data.plusEXConditionLength, list: data.plusEXCondition, getWidth: true },
  ];
  
  return (
    <>
      <ThemedText style={styles.subTitlte}>{i18n.t('conditions')}</ThemedText>
      <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('conditions_description')}</ThemedText>

      {
        DATA.map((item, index) => {
          return (
            <ThemedView key={index.toString()}>
              <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ThemedText style={[styles.subTitlte, {color: Colors.light.text}]}>{i18n.t(item.label)}</ThemedText>
                <ThemedText style={styles.subTitlte}>{item.value}</ThemedText>
              </ThemedView>
              
              <FlatList data={item.list}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 10}]}
                        style={[{width: collageWith, borderRadius: 8}, item.getWidth && {width: getItemWidth(item.value)}]}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/>
            </ThemedView>
          )
        })
      }             

      <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>       
    </>
  )
}