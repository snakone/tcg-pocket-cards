import { View, TouchableOpacity } from "react-native";
import { useI18n } from "@/core/providers/LanguageProvider";

import { ModalStyles, ButtonStyles } from "@/shared/styles/component.styles";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface FooterListProps {
  filteredLength: number;
  onPress: () => void;
  height: number
}

export const FooterList: React.FC<FooterListProps> = ({ filteredLength, onPress, height }) => {
  const {i18n} = useI18n();
  
  if (filteredLength < 34) {
    return <ThemedView style={{ height }} />;
  }

  return (
    <View
      style={[
        ModalStyles.modalFooter,
        { marginTop: 30, marginBottom: 34, boxShadow: 'none', paddingTop: 20 },
      ]}
    >
      <TouchableOpacity
        style={ButtonStyles.button}
        onPress={onPress}
        accessibilityLabel={'GO_UP'}
        accessibilityRole="button"
        accessible={true}
      >
        <View style={ButtonStyles.insetBorder}>
          <ThemedText>{i18n.t('go_up')}</ThemedText>
        </View>
      </TouchableOpacity>
    </View>
  );
};