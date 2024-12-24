import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedText } from "../ThemedText";

export function ShareScreenModal() {
  const {i18n} = useI18n();
  
  return (
    <ThemedText>
      {i18n.t('under_construction')}
    </ThemedText>
  )
}