import { CollectionStat } from '@/shared/definitions/interfaces/global.interfaces';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { CreateScreenStyles } from '@/shared/styles/component.styles';
import { ApprovedCheck, ClockSymbol, CrossSquareIcon, PercentageSymbol, StarSymbol, SvgStackSymbol } from '@/components/ui/IconSymbol';

interface CollectionStatsProps {
  stat: CollectionStat,
  round: (value: string) => string
}

export default function CollectionStatsItem({stat, round}: CollectionStatsProps) {

  return (
    <ThemedView style={[CreateScreenStyles.deckItem, styles.row, {gap: 16, width: '100%', marginBottom: 8}]}>
      <ThemedView style={styles.row}>
        {CrossSquareIcon({})}
        <ThemedText style={styles.text}>{stat.length}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        {ApprovedCheck({})}
        <ThemedText style={styles.text}>{stat.owned}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        {ClockSymbol({})}
        <ThemedText style={styles.text}>{stat.missing}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        {PercentageSymbol({})}
        <ThemedText style={styles.text}>{round(stat.perct_owned)}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        <ThemedView style={{top: -1}}>
          {StarSymbol({})}
        </ThemedView>
        {
          stat.perct_missing && 
          <ThemedText style={[styles.text, {left: 1}]}>{round(stat.perct_missing)}</ThemedText>
        }

      </ThemedView>
    </ThemedView>
  )
};

const styles = StyleSheet.create({
 row: {
  flexDirection: 'row',
  gap: 7,
  alignItems: 'center',
  justifyContent: 'center'
 },
 text: {
  fontSize: 12,
 }
});