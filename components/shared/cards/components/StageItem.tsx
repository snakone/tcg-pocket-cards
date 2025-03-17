import React, { memo, MutableRefObject } from "react";
import { Subject } from "rxjs";

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { STAGE_MAP } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { CardStageENUM } from "@/shared/definitions/enums/card.enums";

interface StageItemProps {
  filterObj: MutableRefObject<FilterSearch>,
  stageSelectAll$?: Subject<boolean>,
  onlyPokemon?: boolean
}

const enumPokemon: CardStageENUM[] = [
  CardStageENUM.BASIC,
  CardStageENUM.ONE,
  CardStageENUM.TWO
];

const enumTrainer: CardStageENUM[] = [
  CardStageENUM.ITEM,
  CardStageENUM.TOOL,
  CardStageENUM.FOSSIL,
  CardStageENUM.SUPPORTER
];

export const StageItem = memo(({ filterObj, stageSelectAll$, onlyPokemon }: StageItemProps) => {
  const arr = onlyPokemon ? enumPokemon : enumTrainer;
  return (
    <ThemedView style={[filterStyles.flexContainer, filterStyles.buttonContainer, { marginBottom: 48 }]}>
      {arr.map((key, i) => {
        const label = (STAGE_MAP as any)[key]?.label;

        return (
          <StateButton
            style={[filterStyles.button, filterStyles.gridButton]}
            key={i}
            onPress={stageSelectAll$}
            showLabel={true}
            label={label}
            propFilter="stage"
            keyFilter={key}
            filterObj={filterObj}
          />
        );
      })}
    </ThemedView>
  );
});