import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Subscription } from "rxjs";

import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import CardsService from "@/core/services/cards.service";
import { useError } from "@/core/providers/ErrorProvider";
import ImageGridWithSearch from "@/components/ui/CardGrid";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { FavoritesModal } from "@/components/modals";

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
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          setLoading(false);
        }
      });

      return sub;
  }, [dispatch]);
  
  useEffect(() => {
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
                             modalTitle="favorites"
                             type="favorites"/>
    </>
  );
}