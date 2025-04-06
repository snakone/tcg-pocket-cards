import { DimensionValue, FlatList } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';

import { useI18n } from '@/core/providers/LanguageProvider';

import { LanguageType } from '@/shared/definitions/types/global.types';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { getImageLanguageForGraphic } from '@/shared/definitions/utils/functions';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { Colors } from '@/shared/definitions/utils/colors';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RainbowDivider from '../RainbowDivider';

interface GraphicMiscellaniaProps {
  styles: any;
  data: any;
  language: LanguageType
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicMiscellania = ({data, styles, language}: GraphicMiscellaniaProps) => {
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
        source={getImageLanguageForGraphic(item?.id)}/>
      </ThemedView>
    )
  }, []);

  function getItemWidth(length: number): DimensionValue {
    if (length >= 20) { return '100%'}
    return (length * 60) + 40;
  }

  const DATA: any[] = [
    { label: 'abilities', value: data.withAbilityCardsLength, list: data.withAbilityCards },
    { label: 'items', value: data.itemCardsLength, list: data.itemCards, getWidth: true },
    { label: 'tools', value: data.toolCardsLength, list: data.toolCards, getWidth: true },
    { label: 'fossils', value: data.fossilCardsLength, list: data.fossilCards, getWidth: true },
    { label: 'supporter', value: data.supporterCardsLength, list: data.supporterCards },
  ];

  return (
    <>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 28}}>
          <ThemedText style={[styles.subTitlte, {marginBottom: 20}]}>{i18n.t('miscellania')}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={[styles.textMargin, {marginBottom: 10}]}>{i18n.t('miscellania_description')}</ThemedText>

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
                        contentContainerStyle={[styles.list, {marginBottom: 10}]}
                        style={{width: collageWith, borderRadius: 8}}
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