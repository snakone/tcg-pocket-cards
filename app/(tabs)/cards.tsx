import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '../_layout';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ImageGridWithSearch from '@/components/ui/CardGrid';
import { CardsScreenModal } from '@/components/modals/CardsScreenModal';
import CardsService from '@/core/services/cards.service';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import { Subscription } from 'rxjs';
import { ThemedText } from '@/components/ThemedText';

export default function CardsScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const cardsService = useMemo(() => new CardsService(), []);
  const [loading, setLoading] = useState(true);

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', cards: res });
          setLoading(false);
        },
        error: () => setLoading(false)
      });

      return sub;
  }, [cardsService, dispatch]);
  
  useEffect(() => {
    let sub: Subscription;
    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, [state.cardState.loaded]);

  if (loading) {
    return <ThemedText>Laoding...</ThemedText>;
  }

  return (
    <ParallaxScrollView title={"Colección de cartas"} 
                        modalTitle='Cartas'
                        modalContent={CardsScreenModal()}>
      <ImageGridWithSearch cards={state.cardState.cards}/>
    </ParallaxScrollView>
  );
}


