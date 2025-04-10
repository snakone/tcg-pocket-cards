import { FlatList } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';

import { useI18n } from '@/core/providers/LanguageProvider';

import { LanguageType } from "@/shared/definitions/types/global.types";
import { Colors } from '@/shared/definitions/utils/colors';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { CHAMPION_ICON } from '@/shared/definitions/sentences/path.sentences';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { getImageLanguageForGraphic } from '@/shared/definitions/utils/functions';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RainbowDivider from '../RainbowDivider';

interface GraphicTopProps {
  styles: any;
  data: any;
  language: LanguageType;
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicTop = ({data, styles, language}: GraphicTopProps) => {
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

  const DATA: any[] = [
    { 
      label: 'rarity', 
      icon: 'diamond',
      style: {color: 'skyblue'},
      list: data.rarity
    },
    { 
      label: 'retire_cost', 
      icon: 'grass',
      style: {top: 3},
      list: data.retreat
    },
    { 
      label: 'health_points', 
      icon: 'favorite-outline',
      style: {color: 'skyblue', top: 6},
      list: data.health
    },
    { 
      label: 'height', 
      icon: 'height',
      style: {top: 6},
      list: data.height
    },
    { 
      label: 'weight', 
      icon: 'scale',
      style: {color: 'skyblue', fontSize: 34, left: 13, top: 11},
      list: data.weight
    },
    { 
      label: 'attack', 
      icon: 'bolt',
      style: {},
      list: data.attack
    },
  ]

  return (
    <>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <Image source={CHAMPION_ICON} style={[styles.expansionImage, {width: 58, height: 46, top: -4, marginRight: 0}]}></Image>
          <ThemedText style={[styles.subTitlte, {marginBottom: 30}]}>{i18n.t('top_20')}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={[styles.textMargin, {marginBottom: 14}]}>{i18n.t('top_20_description')}</ThemedText>

      {
        DATA.map((item, index) => {
          return (
            <ThemedView key={index.toString()}>
              <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons name={item.icon} style={[styles.stageIcon, item.style]}/>
                  <ThemedText style={[styles.subTitlte, {marginBottom: 20, color: Colors.light.text}]}>{i18n.t(item.label)}</ThemedText>
                </ThemedView>
              </ThemedView>

              <FlatList data={item.list}
                        renderItem={renderItem}
                        numColumns={numColumns}
                        contentContainerStyle={[styles.list, {marginTop: 0, marginBottom: 0}]}
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