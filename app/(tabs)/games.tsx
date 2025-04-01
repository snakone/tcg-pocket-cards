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
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(state.cardState.cards);
  }, [state.cardState.cards]);

  function handleClick(id?: string): void {
    SoundService.play('CHANGE_VIEW');
    // router.push(`/screens/news_detail?id=${encodeURIComponent(id)}`);
    const foo = generateQuestion();
    console.log(foo);
  }

  function getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getRandomProperty(item: Card): string {
    const keys = Object.keys(item).filter(
      key => typeof (item as any)[key] !== 'object' && key !== '_id' && key !== 'name' && key !== 'order' && key !== 'evolve' && key !== 'number' && key !== 'isEX'
    );
    return getRandomItem(keys);
  }
  
  function generateQuestion(): { question: string; correctAnswer: string; options: string[] } {
    const item = getRandomItem(cards);
    const randomKey = getRandomProperty(item);
    const question = `¿Qué Pokémon tiene el atributo '${randomKey}' con valor '${(item as any)[randomKey]}'?`;
    const correctAnswer = item.name.es;
    const options = [correctAnswer, ...cards.filter(i => i.id !== item.id).slice(0, 3).map(i => i.name.es)];
    return { question, correctAnswer, options: options.sort(() => Math.random() - 0.5) };
  }
  
  return (
    <>
      <ParallaxScrollView title={"games"} 
                          modalTitle='games'
                          modalContent={<GamesScreenModal></GamesScreenModal>}
                          modalHeight={BACKUP_HEIGHT}>
        <ThemedText style={{marginTop: 4, marginBottom: 10}}>{i18n.t('games_intro')}</ThemedText>
        <TouchableOpacity onPress={() => handleClick()}>
          <ThemedView style={[CreateScreenStyles.deckItem, {paddingHorizontal: 14, paddingVertical: 14}]}>
            <ThemedView style={{flexDirection: 'row', gap: 24, alignItems: 'center'}}>
              
              <ThemedView>
                <ThemedText type='subtitle' style={{fontSize: 18, marginBottom: 4}}>{i18n.t('random_deck_challenge')}</ThemedText>
                <ThemedText>{i18n.t('game_challenge')}</ThemedText>    
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity>
          <ThemedView style={[CreateScreenStyles.deckItem, {paddingHorizontal: 14, paddingVertical: 14}]}>
            <ThemedView style={{flexDirection: 'row', gap: 24, alignItems: 'center'}}>
              
              <ThemedView>
                <ThemedText type='subtitle' style={{fontSize: 18, marginBottom: 4}}>{i18n.t('quiz_game')}</ThemedText>
                <ThemedText>{i18n.t('quiz_game_desc')}</ThemedText>    
              </ThemedView>
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