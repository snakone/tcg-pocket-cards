import { memo, MutableRefObject } from "react";
import { Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { useI18n } from "@/core/providers/LanguageProvider";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import React from "react";

export const IsExButtonList = memo(({ filterObj }: { filterObj: MutableRefObject<FilterSearch> }) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('ex')}
      </ThemedText>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: Platform.OS === 'web' ? 40 : 60 },
        ]}
      >
        {['not_ex', 'is_ex'].map((k, i) => (
          <StateButton
            key={i}
            style={[filterStyles.button, filterStyles.gridButton]}
            showLabel={true}
            label={k}
            propFilter="ex"
            keyFilter={k}
            filterObj={filterObj}
          />
        ))}
      </ThemedView>
    </>
  );
});