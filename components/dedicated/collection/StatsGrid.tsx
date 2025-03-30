import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CardRarityENUM } from '@/shared/definitions/enums/card.enums';
import { CollectionElementStat, CollectionRarityStat } from '@/shared/definitions/interfaces/global.interfaces';
import { TabsMenuStyles } from '@/shared/styles/component.styles';
import { EXPANSION } from '@/shared/definitions/enums/packs.enums';
import { SEPARATOR } from '@/shared/definitions/sentences/path.sentences';

interface StatsGridProps {
  allRarity: CollectionRarityStat[],
  allElements: CollectionElementStat[],
  expansion?: EXPANSION | number
}

export const StatsGrid: React.FC<StatsGridProps> = ({ allRarity, allElements, expansion }) => {
  return (
    <ThemedView style={{left: 1}}>
      {
        (!expansion || (expansion && Number(expansion) !== 99)) &&
        <ThemedView style={{flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 18, width: 356}}>
          {
            allRarity.filter(data => data !== undefined).map((data, i) => {
              return (
              <ThemedView style={[styles.chip, data.value === CardRarityENUM.CROWN && {width: 77}]} key={i.toString()}>
                <ThemedView style={{flexDirection: 'row', justifyContent: 'center'}}>
                  {Array.from({ length: data.amount }).map((_, i) => (
                    <Image source={data.icon}
                            key={i.toString()}
                            style={[
                              styles.energy, 
                            {marginRight: 2}, 
                            (data.value === CardRarityENUM.INMERSIVE || data.value === CardRarityENUM.SUPER) && {marginRight: 3},
                            i > 2 && {marginRight: 4},
                            data.value === CardRarityENUM.CROWN && {width: 21, height: 13},
                            (data.value === CardRarityENUM.SHINY || data.value === CardRarityENUM.DOUBLE_SHINY) && {height: 13},
                          ]}/>
                  ))}
                </ThemedView>
                <ThemedText style={[styles.chipText, {minWidth: 43, textAlign: 'center'}]}>{data.owned}/{data.length}</ThemedText>
              </ThemedView>
              )
            })
          }
        </ThemedView>
      }

      <ThemedView style={{flexDirection: 'row', gap: 8, flexWrap: 'wrap'}}>
        {
          allElements.filter(data => data !== undefined).map((data, i) => {
            return (
            <ThemedView style={[styles.chip]} key={i.toString()}>
              <Image source={data.icon} style={styles.energy}/>
              <ThemedText style={[styles.chipText, {minWidth: 41, textAlign: 'center'}]}>{data.owned}/{data.length}</ThemedText>
            </ThemedView>
            )
          })
        }
      </ThemedView>
      {
        expansion === undefined && Platform.OS === 'web' &&
          <View style={[TabsMenuStyles.separator, {height: 1, marginTop: 22, marginBottom: 26, width: '100%'}]}></View>
      }
      {
        expansion === undefined && Platform.OS === 'android' &&
          <Image source={SEPARATOR} style={{width: 390, height: 32, marginTop: 16, marginBottom: 10, left: -16}}/> 
      }
      
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
   },
   chipText: {
    fontSize: 12
   },
   energy: {
    width: 16, 
    height: 16, 
    marginRight: 8
   }
});