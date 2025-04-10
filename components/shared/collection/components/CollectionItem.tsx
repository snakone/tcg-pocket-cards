import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterStyles } from "@/shared/styles/component.styles";
import { memo, MutableRefObject } from "react";

export const CollectionItem = memo(({filterObj}: {filterObj: MutableRefObject<FilterSearch>}) => {
  return (
    <ThemedView style={filterStyles.flexContainer}>
      <StateButton
        filterObj={filterObj}
        showLabel={true}
        label={'owned'}
        style={filterStyles.button}
        propFilter="collection"
        keyFilter={"owned"}
      />
      <StateButton
        filterObj={filterObj}
        showLabel={true}
        label={'no_owned'}
        style={filterStyles.button}
        propFilter="collection"
        keyFilter={"not_owned"}
      />
    </ThemedView>
  );
});