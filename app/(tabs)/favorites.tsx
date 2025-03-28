import { useContext } from "react";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import ImageGridWithSearch from "@/components/ui/CardGrid";
import { FavoritesModal } from "@/components/modals";

export default function FavoritesScreen() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state } = context;
  const focused = useIsFocused();

  return (
    <>
      <ImageGridWithSearch state={state} 
                           modal={FavoritesModal()}
                           title="favorites"
                           modalTitle="favorites_modal_title"
                           type="favorites"
                           focused={focused}/>
    </>
  );
}