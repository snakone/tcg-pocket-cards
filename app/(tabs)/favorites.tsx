import { useContext } from "react";
import React from "react";

import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import ImageGridWithSearch from "@/components/ui/CardGrid";
import { FavoritesModal } from "@/components/modals";

export default function FavoritesScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;

  return (
    <>
      <ImageGridWithSearch state={state} 
                           modal={FavoritesModal()}
                           title="favorites"
                           modalTitle="favorites_modal_title"
                           type="favorites"
                           filterKey={'cards'}/>
    </>
  );
}