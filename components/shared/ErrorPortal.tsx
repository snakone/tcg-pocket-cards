import React from "react";
import { StyleSheet, View, Platform, ScrollView, TouchableOpacity } from "react-native";
import { Portal } from "react-native-paper";
import { BlurView } from "expo-blur";

import { ErrorType } from "@/shared/definitions/types/global.types";
import { ThemedText } from "../ThemedText";
import { ButtonStyles, ModalStyles, WebStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { IconSymbol } from "../ui/IconSymbol";
import { MaterialIcons } from "@expo/vector-icons";
import { useI18n } from "../../core/providers/LanguageProvider";

export interface ErrorPortalProps {
  visible: boolean,
  message: string,
  type: ErrorType,
  close: () => void
}

const ErrorPortal = ({ visible, message, type = "error", close}: ErrorPortalProps) => {
  if (!visible) return null;

  const styles = ModalStyles;
  const {i18n} = useI18n();

  const getIconByType = (type: ErrorType) => {
    switch (type) {
      case "info": return {icon: "help-outline", color: 'dodgerblue'};
      case "warning": return {icon: "info-outline", color: 'darkorange'};
      case "error": return {icon: "error-outline", color: 'crimson'};
      default: return {icon: "error-outline", color: 'crimson'};
    }
  };

  const errorData: {icon: any, color: string} = getIconByType(type);

  return (
    <Portal>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
        <View style={[styles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
          <View style={styles.modalView}>
            <View style={[styles.modalHeader, {flexDirection: 'row', justifyContent: 'center'}]}>
              <ThemedText style={styles.modalHeaderTitle}>{i18n.t('error')}</ThemedText>
              <MaterialIcons name={errorData.icon} style={
                {
                  fontSize: 24,
                  position: 'relative',
                  left: 12,
                  color: errorData.color
                  }}>
              </MaterialIcons>
            </View>
            <ScrollView style={styles.modalScrollView}>
              <ThemedText style={{textAlign: 'center'}}>{i18n.t(message)}</ThemedText>
            </ScrollView>
            <View style={styles.modalFooter}>
              <TouchableOpacity style={ButtonStyles.button} 
                                onPress={close} 
                                accessibilityLabel={CLOSE_SENTENCE}
                                accessibilityRole="button"
                                accessible={true}>
                <View style={ButtonStyles.insetBorder}>
                  <IconSymbol name="clear"></IconSymbol>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Portal>
  );
};

export default ErrorPortal;