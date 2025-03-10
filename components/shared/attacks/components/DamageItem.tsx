import { memo, MutableRefObject } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { ThemedView } from "@/components/ThemedView";
import SelectInput from "@/components/ui/SelectInput";
import { ATTACK_DAMAGES, DAMAGES } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { useI18n } from "@/core/providers/LanguageProvider";
import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";

interface DamageItemProps {
  filterObj: MutableRefObject<FilterAttackSearch>,
  playSound: (sound: string) => void
}

export const DamageItem = memo(({ filterObj, playSound }: DamageItemProps) => {
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
            options={ATTACK_DAMAGES}
            label={k}
            filterObj={filterObj}
            propFilter="damage"
            keyFilter={k}
            textStyle={{left: -4}}
            itemStyle={{paddingBlock: 4}}
            onSelect={(opt) => {
              playSound('POP_PICK');
              (filterObj.current.damage as any)[k] = opt;
            }}
          />
        ))}
        <MaterialIcons name="remove" style={filterStyles.separator} />
      </ThemedView>
    </>
  );
});