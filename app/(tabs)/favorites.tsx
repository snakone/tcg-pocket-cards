import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Subscription } from "rxjs";

import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import CardsService from "@/core/services/cards.service";
import { useError } from "@/core/providers/ErrorProvider";
import ImageGridWithSearch from "@/components/ui/CardGrid";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { FavoritesModal } from "@/components/modals";
import React from "react";
import Storage from '@/core/storage/storage.service';
import { Card } from "@/shared/definitions/interfaces/card.interfaces";

export default function FavoritesScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [loading, setLoading] = useState(true);
  const { show: showError } = useError();

  const cardsService = useMemo(() => new CardsService(), []);

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', cards: res });
          Storage.set('cards', res);
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          Storage.set('cards', []);
          setLoading(false);
        }
      });

      return sub;
  }, [dispatch]);
  
  useEffect(() => {
    const cards: Card[] = state.settingsState.cards;

    if (cards && cards.length !== 0 && !state.cardState.loaded) {
      dispatch({ type: 'SET_CARDS', cards });
      setLoading(false);
      return;
    }
    
    let sub: Subscription;
    !state.cardState.loaded ? sub = loadCards() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, []);

  return (
    <>
      { loading && <LoadingOverlay/> }
        <ImageGridWithSearch state={state} 
                             key={loading ? 'loading' : 'loaded'}
                             modal={FavoritesModal()}
                             title="favorites"
                             modalTitle="favorites_modal_title"
                             type="favorites"/>
    </>
  );
}