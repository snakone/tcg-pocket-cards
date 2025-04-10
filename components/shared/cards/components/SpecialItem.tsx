import { memo, MutableRefObject } from "react";
import { Platform } from "react-native";
import React from "react";

import { useI18n } from "@/core/providers/LanguageProvider";

import { 
  CONDITION_ATTACK, 
  CONDITION_LINKS, 
  CONDITION_MAP, 
  CONDITION_OTHERS, 
  CONDITION_STATUS
} from "@/shared/definitions/utils/constants";

import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { ThemedText } from "@/components/ThemedText";

interface SpecialItemProps {
  filterObj: MutableRefObject<FilterSearch>,
}

export const SpecialItem = memo(({ filterObj }: SpecialItemProps) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('damage')}
      </ThemedText>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: 48 }
        ]}
      >
        {CONDITION_ATTACK.map((key, i) => {
          const label = (CONDITION_MAP as any)[key]?.label;

          return (
            <StateButton
              key={i}
              label={label}
              showLabel={true}
              propFilter="condition"
              keyFilter={key}
              filterObj={filterObj}
              style={[filterStyles.button, filterStyles.gridButton]}>
            </StateButton>
          );
        })}
      </ThemedView>

      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('status')}
      </ThemedText>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: 48 }
        ]}
      >
        {CONDITION_STATUS.map((key, i) => {
          const label = (CONDITION_MAP as any)[key]?.label;

          return (
            <StateButton
              key={i}
              label={label}
              showLabel={true}
              propFilter="condition"
              keyFilter={key}
              filterObj={filterObj}
              style={[filterStyles.button, filterStyles.gridButton]}>
            </StateButton>
          );
        })}
      </ThemedView>

      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('others')}
      </ThemedText>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: Platform.OS === 'web' ? 48 : 60 },
        ]}
      >
        {CONDITION_OTHERS.map((key, i) => {
          const label = (CONDITION_MAP as any)[key]?.label;

          return (
            <StateButton
              key={i}
              label={label}
              showLabel={true}
              propFilter="condition"
              keyFilter={key}
              filterObj={filterObj}
              style={[filterStyles.button, filterStyles.gridButton]}>
            </StateButton>
          );
        })}
      </ThemedView>

      <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
        {i18n.t('links')}
      </ThemedText>
      <ThemedView
        style={[
          filterStyles.flexContainer,
          filterStyles.buttonContainer,
          { marginBottom: Platform.OS === 'web' ? 48 : 60 },
        ]}
      >
        {CONDITION_LINKS.map((key, i) => {
          const label = (CONDITION_MAP as any)[key]?.label;

          return (
            <StateButton
              key={i}
              label={label}
              showLabel={true}
              propFilter="condition"
              keyFilter={key}
              filterObj={filterObj}
              style={[filterStyles.button, filterStyles.gridButton]}>
            </StateButton>
          );
        })}
      </ThemedView>
    </>
  );
});