import { memo, MutableRefObject } from "react";
import { Platform } from "react-native";
import React from "react";

import { useI18n } from "@/core/providers/LanguageProvider";

import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";

export const IsShinyButtonList = memo(({ filterObj }: { filterObj: MutableRefObject<FilterSearch> }) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('shiny')}
      </ThemedText>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: Platform.OS === 'web' ? 48 : 60 },
        ]}
      >
        {['not_shiny', 'is_shiny'].map((k, i) => (
          <StateButton
            key={i}
            style={[filterStyles.button, filterStyles.gridButton]}
            showLabel={true}
            label={k}
            propFilter="shiny"
            keyFilter={k}
            filterObj={filterObj}
          />
        ))}
      </ThemedView>
    </>
  );
});