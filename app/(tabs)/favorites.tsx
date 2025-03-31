import React from "react";

import ImageGridWithSearch from "@/components/ui/CardGrid";
import { FavoritesModal } from "@/components/modals";

export default function FavoritesScreen() {
  console.log('Favorite Screen')
  return (
    <>
      <ImageGridWithSearch modal={<FavoritesModal></FavoritesModal>}
                           title="favorites"
                           modalTitle="favorites_modal_title"
                           type="favorites"
                           filterKey={'cards'}/>
    </>
  );
}