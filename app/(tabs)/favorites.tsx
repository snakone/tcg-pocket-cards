import React from "react";

import ImageGridWithSearch from "@/components/ui/CardGrid";
import { FavoritesScreenModal } from '@/components/modals/index';

export default function FavoritesScreen() {
  console.log('Favorite Screen')
  return (
    <ImageGridWithSearch modal={<FavoritesScreenModal></FavoritesScreenModal>}
                          title="favorites"
                          modalTitle="favorites_modal_title"
                          type="favorites"/>
  );
}