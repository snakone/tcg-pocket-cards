import { memo, MutableRefObject } from "react";
import React from "react";

import { useI18n } from "@/core/providers/LanguageProvider";

import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterStyles } from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";

export const OtherItems = memo(({ filterObj }: {filterObj: MutableRefObject<FilterSearch>}) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('others')}
      </ThemedText>

      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: 54 },
        ]}
      >
        {['with_ability', 'without_ability'].map((k, i) => (
          <StateButton
            key={i}
            style={[filterStyles.button, filterStyles.gridButton]}
            showLabel={true}
            label={k}
            propFilter="ability"
            keyFilter={k}
            filterObj={filterObj}
          />
        ))}
      </ThemedView>
    </>
  );
});