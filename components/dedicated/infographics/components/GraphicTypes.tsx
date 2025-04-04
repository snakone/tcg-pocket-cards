import { DimensionValue, FlatList } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';

import { useI18n } from '@/core/providers/LanguageProvider';

import { 
  GRASS_ICON, 
  FIRE_ICON, 
  WATER_ICON, 
  ELECTRIC_ICON, 
  PSYCHIC_ICON, 
  FIGHT_ICON, 
  DARK_ICON, 
  STEEL_ICON, 
  DRAGON_ICON, 
  NORMAL_ICON 
} from '@/shared/definitions/sentences/path.sentences';

import { LanguageType } from "@/shared/definitions/types/global.types";
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { Colors } from '@/shared/definitions/utils/colors';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { getImageLanguage69x96 } from '@/shared/definitions/utils/functions';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RainbowDivider from '../RainbowDivider';

interface GraphicTypesProps {
  styles: any;
  data: any;
  language: LanguageType
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicTypes = ({data, styles, language}: GraphicTypesProps) => {
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
    { label: 'grass', image: GRASS_ICON, value: data.grassCardsLength, list: data.grassCards },
    { label: 'fire', image: FIRE_ICON, value: data.fireCardsLength, list: data.fireCards },
    { label: 'water', image: WATER_ICON, value: data.waterCardsLength, list: data.waterCards },
    { label: 'electric', image: ELECTRIC_ICON, value: data.electricCardsLength, list: data.electricCards },
    { label: 'psychic', image: PSYCHIC_ICON, value: data.psychicCardsLength, list: data.psychicCards },
    { label: 'fight', image: FIGHT_ICON, value: data.fightCardsLength, list: data.fightCards },
    { label: 'dark', image: DARK_ICON, value: data.darkCardsLength, list: data.darkCards },
    { label: 'steel', image: STEEL_ICON, value: data.steelCardsLength, list: data.steelCards },
    { label: 'dragon', image: DRAGON_ICON, value: data.dragonCardsLength, list: data.dragonCards, getWidth: true },
    { label: 'normal', image: NORMAL_ICON, value: data.normalCardsLength, list: data.normalCards },
  ];

  return (
    <>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
          <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('types')}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('types_description')}</ThemedText>

      {
        DATA.map((item, index) => {
          return (
            <ThemedView key={index.toString()}>
              <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginLeft: 12}}>
                  <Image source={item.image} style={styles.energy}/>
                  <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t(item.label)}</ThemedText>
                </ThemedView>
                <ThemedText style={styles.subTitlte}>{item.value}</ThemedText>
              </ThemedView>

              <FlatList data={item.list}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {marginTop: 0}]}
                        style={[{width: collageWith, borderRadius: 8}, item.getWidth && {width: getItemWidth(item.value)}]}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ''}/> 

              <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
            </ThemedView>
          )
        })
      }     
    </>
  )
}