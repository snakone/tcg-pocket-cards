import { Image } from 'expo-image';
import { DimensionValue, FlatList } from 'react-native';
import RainbowDivider from '../RainbowDivider';
import { useCallback } from 'react';

import { useI18n } from '@/core/providers/LanguageProvider';

import { NORMAL_RARITY, STAR_RARITY, CROWN_RARITY, RAINBOW_RARITY } from '@/shared/definitions/sentences/path.sentences';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { getImageLanguageForGraphic } from '@/shared/definitions/utils/functions';
import { Colors } from '@/shared/definitions/utils/colors';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface GraphicGradesProps {
  styles: any;
  data: any;
  language: LanguageType
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicGrades = ({data, styles, language}: GraphicGradesProps) => {
  const {i18n} = useI18n();

  const gradeRow: any[] = [
    { image: NORMAL_RARITY, length: 3, width: 26, height: 27, value: data.rareCardsLength, list: data.rareCards },
    { image: NORMAL_RARITY, length: 4, width: 26, height: 27, value: data.doubleCardsLength, list: data.doubleCards },
    { image: STAR_RARITY, length: 1, width: 28, height: 29, value: data.artCardsLength, list: data.artCards },
    { image: STAR_RARITY, length: 2, width: 28, height: 29, value: data.superCardsLength, list: data.superCards },
    { image: STAR_RARITY, length: 3, width: 28, height: 29, value: data.inmersiveCardsLength, getWidth: true, list: data.inmersiveCards },
    { image: RAINBOW_RARITY, length: 1, width: 28, height: 29, value: data.rainbowCardsLength, getWidth: true, list: data.rainbowCards },
    { image: RAINBOW_RARITY, length: 2, width: 28, height: 29, value: data.doubleRainbowCardsLength, getWidth: true, list: data.doubleRainbowCards },
    { image: CROWN_RARITY, length: 1, width: 49, height: 32, value: data.crownCardsLength, getWidth: true, list: data.crownCards },
  ];

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
        source={getImageLanguageForGraphic(item?.id)}/>
      </ThemedView>
    )
  }, []);

  function getItemWidth(length: number): DimensionValue {
    if (length >= 20) { return '100%'}
    return (length * 60) + 40;
  }
  
  return (
    <>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
          <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('grade')}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('grade_description')}</ThemedText>

      {
        gradeRow.map((item, index) => {
          return (
            <ThemedView key={index.toString()}>
              <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
                  {Array.from({ length: item.length }).map((_, i) => (
                    <Image
                      key={(i + 1)}
                      source={item.image}
                      style={{
                        width: item.width,
                        height: item.height,
                        top: 2
                      }}
                    />
                  ))}
                </ThemedView>
                <ThemedText style={styles.subTitlte}>{item.value}</ThemedText>
              </ThemedView>
              
              <FlatList data={item.list}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {marginBottom: 10}]}
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