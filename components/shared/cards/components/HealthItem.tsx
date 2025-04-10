import { memo, MutableRefObject } from "react";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { useI18n } from "@/core/providers/LanguageProvider";

import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { DAMAGES } from "@/shared/definitions/utils/constants";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SelectInput from "@/components/ui/SelectInput";


interface HealthItemProps {
  filterObj: MutableRefObject<FilterSearch>,
  playSound: (sound: string) => void
}

export const HealthItem = memo(({ filterObj, playSound }: HealthItemProps) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('health')}
      </ThemedText>

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
            options={['---', ...DAMAGES]}
            label={k}
            filterObj={filterObj}
            propFilter="health"
            keyFilter={k}
            textStyle={{left: -4}}
            itemStyle={{paddingBlock: 4}}
            onSelect={(opt) => {
              playSound('POP_PICK');
              (filterObj.current.health as any)[k] = opt;
            }}
          />
        ))}
        <MaterialIcons name="remove" style={filterStyles.separator} />
      </ThemedView>
    </>
  );
});