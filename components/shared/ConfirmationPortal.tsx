import React from "react";
import { StyleSheet, View, Platform, ScrollView, TouchableOpacity } from "react-native";
import { Portal } from "react-native-paper";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

import { ErrorType } from "@/shared/definitions/types/global.types";
import { ThemedText } from "../ThemedText";
import { ModalStyles, WebStyles } from "@/shared/styles/component.styles";
import { useI18n } from "../../core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import { splashStyles } from "../ui/SplashScreen";

export interface ErrorPortalProps {
  visible: boolean,
  title: string,
  message: string,
  type: ErrorType | undefined,
  handleConfirm: (value: boolean) => void
}

const ConfirmationPortal = ({ visible, title, message, type = "info", handleConfirm}: ErrorPortalProps) => {
  if (!visible) return null;

  const styles = ModalStyles;
  const {i18n} = useI18n();

  const handleClose = (value: boolean) => {
    SoundService.play('AUDIO_MENU_CLOSE');
    handleConfirm(value);
  }

  return (
    <Portal>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
        <View style={[styles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
          <View style={[styles.modalView, {minHeight: 'auto'}]}>
            <View style={[styles.modalHeader, {flexDirection: 'row', justifyContent: 'center'}]}>
              <ThemedText style={styles.modalHeaderTitle}>{i18n.t(title)}</ThemedText>
              <MaterialIcons name={'help-outline'} style={
                {
                  fontSize: 24,
                  position: 'relative',
                  left: 12,
                  color: 'dodgerblue'
                  }}>
              </MaterialIcons>
            </View>
            <ScrollView style={[styles.modalScrollView, {minHeight: 'auto'}]}>
              <ThemedText style={{textAlign: 'center', marginBlock: 6, marginBottom: 9}}>{i18n.t(message)}</ThemedText>
            </ScrollView>
            <View style={[styles.modalFooter, {flexDirection: 'row', gap: 16, justifyContent: 'center', height: 82}]}>
              <TouchableOpacity style={[
                  splashStyles.button, 
                  {backgroundColor: 'white'},
               ]} onPress={() => handleClose(false)}>
                <ThemedText style={{fontWeight: 600}}>{i18n.t('cancel')}</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClose(true)}
                                style={[
                                  splashStyles.button, type === 'delete' && 
                                  {backgroundColor: 'transparent', borderWidth: 1, borderColor: 'crimson'}
                                ]} >
                <ThemedText style={[
                  {color: 'white', fontWeight: 600}, 
                  type === 'delete' && {color: 'crimson'}
                ]}>{i18n.t('ok')}</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Portal>
  );
};

export default ConfirmationPortal;