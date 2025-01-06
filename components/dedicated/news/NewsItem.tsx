import { PocketNews } from '@/shared/definitions/interfaces/global.interfaces';
import React from 'react';
import { StyleSheet, } from 'react-native';
import { Image } from 'expo-image';
import { I18n } from 'i18n-js';

import { LanguageType } from '@/shared/definitions/types/global.types';
import { formatDate } from '@/shared/definitions/utils/functions';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface NewsItemProps {
  pocketNew: PocketNews,
  language: LanguageType,
  i18n: I18n
}

export default function NewsItem(
  {
    pocketNew, 
    language,
    i18n
  }: NewsItemProps
) {

  const typeElement = (type: 'pocket' | 'game') => {
    return (
      <ThemedView style={[
        styles.type,
        {backgroundColor: type === 'pocket' ? 'rgb(226, 22, 192)' : 'mediumaquamarine'}
        ]}>
        <ThemedText style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
          {type === 'pocket' ? i18n.t('update') : i18n.t('official')}
          </ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView style={styles.item}>
      <Image source={pocketNew.image} style={styles.image} />
      <ThemedView style={styles.info}>
        <ThemedView style={styles.date}>
          {typeElement(pocketNew.type)}
          <ThemedText style={{fontSize: 13, top: 1}}>{formatDate(pocketNew.date, language)}</ThemedText>
        </ThemedView>
        <ThemedText style={styles.title}>{pocketNew.title[language]}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    marginBottom: 20
  },
  title: { 
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 6
  },
  image: { 
    width: '100%', 
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    objectFit: 'cover'
  },
  date: {
    flexDirection: 'row',
    gap: 12,
  },
  info: {
    paddingVertical: 12,
    paddingHorizontal: 14
  },
  type: {
    paddingVertical: 2, 
    paddingHorizontal: 16,
    borderRadius: 12
  },
});