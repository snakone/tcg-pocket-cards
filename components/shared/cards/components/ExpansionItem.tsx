import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";
import { filterStyles, expansionStyles } from "@/shared/styles/component.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { memo } from "react";
import { Pressable } from "react-native";

export const ExpansionItem = memo(({expansionSelected, handleExpansion}: any) => {
  const {i18n} = useI18n();

  return (
    <Pressable onPress={() => handleExpansion(true)}>
      <ThemedView
        style={[
          filterStyles.button,
          expansionStyles.buttonBase,
          expansionSelected && expansionStyles.selectedBackground,
        ]}
      >
        <ThemedText
          style={[
            filterStyles.buttonText,
            expansionSelected && expansionStyles.buttonTextSelected,
          ]}
        >
          {i18n.t(expansionSelected ? 'with_select' : 'no_select')}
        </ThemedText>
        <MaterialIcons name="keyboard-arrow-right" style={expansionStyles.icon} />
      </ThemedView>
    </Pressable>
  );
});