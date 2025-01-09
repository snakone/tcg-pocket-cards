import React, { memo, MutableRefObject } from "react";
import { Subject } from "rxjs";

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { STAGE_MAP } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { CardStageENUM } from "@/shared/definitions/enums/card.enums";

interface StageItemProps {
  stage: { [key in CardStageENUM] : boolean | null},
  filterObj: MutableRefObject<FilterSearch>,
  stageSelectAll$: Subject<boolean>
}

export const StageItem = memo(({ stage, filterObj, stageSelectAll$ }: StageItemProps) => {
  return (
    <ThemedView style={[filterStyles.flexContainer, filterStyles.buttonContainer, { marginBottom: 48 }]}>
      {Object.keys(stage).map((key, i) => {
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