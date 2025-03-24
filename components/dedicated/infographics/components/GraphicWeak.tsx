import { FlatList } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { CardGridStyles } from '@/shared/styles/component.styles';
import RainbowDivider from '../RainbowDivider';
import { Colors } from '@/shared/definitions/utils/colors';
import { LanguageType } from '@/shared/definitions/types/global.types';

import { 
  GRASS_ICON, 
  FIRE_ICON, 
  WATER_ICON, 
  ELECTRIC_ICON, 
  PSYCHIC_ICON, 
  FIGHT_ICON, 
  DARK_ICON, 
  STEEL_ICON 
} from '@/shared/definitions/sentences/path.sentences';

interface GraphicWeakProps {
  styles: any;
  data: any;
  language: LanguageType
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicWeak = ({data, styles, language}: GraphicWeakProps) => {
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
        source={getImageLanguage116x162(language, item?.id)}/>
      </ThemedView>
    )
  }, []);

  const DATA: any[] = [
    { label: 'grass', image: GRASS_ICON, value: data.weakGrassCardsLength, list: data.weakGrassCards },
    { label: 'fire', image: FIRE_ICON, value: data.weakFireCardsLength, list: data.weakFireCards },
    { label: 'water', image: WATER_ICON, value: data.weakWaterCardsLength, list: data.weakWaterCards },
    { label: 'electric', image: ELECTRIC_ICON, value: data.weakElectricCardsLength, list: data.weakElectricCards },
    { label: 'psychic', image: PSYCHIC_ICON, value: data.weakPsychicCardsLength, list: data.weakPsychicCards },
    { label: 'fight', image: FIGHT_ICON, value: data.weakFightCardsLength, list: data.weakFightCards },
    { label: 'dark', image: DARK_ICON, value: data.weakDarkCardsLength, list: data.weakDarkCards },
    { label: 'steel', image: STEEL_ICON, value: data.weakSteelCardsLength, list: data.weakSteelCards },
  ];

  return (
    <>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
          <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('weakness')}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('weakness_description')}</ThemedText>

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
                        style={{width: collageWith, borderRadius: 8}}
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