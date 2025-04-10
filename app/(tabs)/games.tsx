import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useI18n } from '@/core/providers/LanguageProvider';
import { GamesScreenModal } from '@/components/modals';
import { BACKUP_HEIGHT } from '@/shared/definitions/utils/constants';
import { AppContext } from '../_layout';
import SoundService from '@/core/services/sounds.service';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { CreateScreenStyles } from '@/shared/styles/component.styles';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';

export default function GamesScreen() {
  console.log('Games Screen')
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(state.cardState.cards);
  }, [state.cardState.cards]);

  function handleRoute(route?: string): void {
    SoundService.play('CHANGE_VIEW');
    router.push(`/screens/games/memory/memory_game`);
  }
  
  return (
    <>
      <ParallaxScrollView title={"games"}
                          showToggle={false}>
        <ThemedText style={{marginTop: 4, marginBottom: 10, paddingHorizontal: 8}}>{i18n.t('games_intro')}</ThemedText>
        <TouchableOpacity onPress={() => handleRoute()}>
          <ThemedView style={[CreateScreenStyles.deckItem, {paddingHorizontal: 20, paddingVertical: 14, paddingTop: 10}]}>
            <ThemedView style={{}}>
              <ThemedText type='subtitle' style={{fontSize: 18, marginBottom: 4}}>{i18n.t('memory_game')}</ThemedText>
              <ThemedText>{i18n.t('memory_game_desc')}</ThemedText>    
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  quizImage: {
    top: 4,
    marginBottom: 6,
    overflow: 'hidden',
    width: 50,
    height: 50,
    opacity: 0.8
  },
});