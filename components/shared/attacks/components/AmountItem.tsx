import { memo, MutableRefObject } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { ThemedView } from "@/components/ThemedView";
import SelectInput from "@/components/ui/SelectInput";
import { ENERGY_AMOUNT } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { useI18n } from "@/core/providers/LanguageProvider";
import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";

interface AmountItemProps {
  filterObj: MutableRefObject<FilterAttackSearch>,
  playSound: (sound: string) => void
}

export const AmountItem = memo(({ filterObj, playSound }: AmountItemProps) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: 48 },
        ]}
      >
        {['min', 'max'].map((k, i) => (
          <SelectInput
            key={i}
            options={['---', ...ENERGY_AMOUNT]}
            label={k}
            filterObj={filterObj}
            propFilter="amount"
            keyFilter={k}
            textStyle={{left: -4}}
            height={215}
            itemStyle={{paddingBlock: 4}}
            onSelect={(opt) => {
              playSound('POP_PICK');
              (filterObj.current.amount as any)[k] = opt;
            }}
          />
        ))}
        <MaterialIcons name="remove" style={filterStyles.separator} />
      </ThemedView>
    </>
  );
});