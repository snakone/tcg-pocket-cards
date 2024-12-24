import { ThemedText } from "../ThemedText";
import { useI18n } from "@/core/providers/LanguageProvider";
import React from "react";

export function CreateScreenModal() {
  const {i18n} = useI18n();

  return (
    <ThemedText>
      {i18n.t('under_construction')}
    </ThemedText>
  )
}