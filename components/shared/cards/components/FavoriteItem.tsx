import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterStyles } from "@/shared/styles/component.styles";
import { memo, MutableRefObject } from "react";

export const FavoriteItem = memo(({filterObj}: {filterObj: MutableRefObject<FilterSearch>}) => {
  return (
    <ThemedView style={filterStyles.flexContainer}>
      <StateButton
        filterObj={filterObj}
        showLabel={true}
        label={'favorites'}
        style={filterStyles.button}
        propFilter="favorite"
        keyFilter={"included"}
      />
      <StateButton
        filterObj={filterObj}
        showLabel={true}
        label={'no_favorites'}
        style={filterStyles.button}
        propFilter="favorite"
        keyFilter={"not_favorite"}
      />
    </ThemedView>
  );
});