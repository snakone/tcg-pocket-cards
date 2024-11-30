import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import { Modal as PaperModal, Portal } from 'react-native-paper';

import { HeaderWithCustomModalProps } from '@/shared/definitions/interfaces/layout.interfaces';
import { CLOSE_MODAL, CLOSE_SENTENCE } from '@/shared/definitions/sentences/global.sentences';
import { ButtonStyles, IconStyles, ModalStyles, ThemeTextStyles, WebStyles } from '@/shared/styles/component.styles';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';
import { useI18n } from '../../core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';

export default function HeaderWithCustomModal({ 
  title, 
  modalTitle, 
  modalContent,
  animatedStyle = {},
  animatedIconStyle = {}
}: HeaderWithCustomModalProps) {
  const [visible, setVisible] = useState(false);
  const styles = ModalStyles;
  const {i18n} = useI18n();

  const toggleModal = useCallback(async () => {
    setVisible((prev) => {
      const sound = visible ? 'AUDIO_MENU_CLOSE' : 'AUDIO_MENU_OPEN';
      SoundService.play(sound);
     return !prev;
    });
  }, [visible]);

  const RenderModalToggle = () => (
    <Animated.View style={[IconStyles.iconContainer, animatedIconStyle]}>
      <TouchableOpacity onPress={toggleModal}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                        accessibilityLabel={CLOSE_MODAL}
                        accessibilityRole="button"
                        accessible={true}>
        <IconSymbol name="questionmark.app.fill" style={IconStyles.icon} />
      </TouchableOpacity>
    </Animated.View>
  );

  const RenderHeader = () => (
    <Animated.View style={animatedStyle}>
      <ThemedText style={[ThemeTextStyles.headerTitle]}>{i18n.t(title)}</ThemedText>
    </Animated.View>
  )

  return (
    <>
      <RenderModalToggle></RenderModalToggle>
      <RenderHeader></RenderHeader>
        {visible && (
          <Portal>
            <PaperModal dismissable={false}
                        visible={visible}
                        contentContainerStyle={{height: '200%'}}>
              <View style={[styles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
                <View style={styles.modalView}>
                  <View style={styles.modalHeader}>
                    <ThemedText style={styles.modalHeaderTitle}>{i18n.t(modalTitle)}</ThemedText>
                  </View>
                  <ScrollView style={styles.modalScrollView}>{modalContent}</ScrollView>
                  <View style={styles.modalFooter}>
                    <TouchableOpacity style={ButtonStyles.button} 
                                      onPress={toggleModal} 
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
            </PaperModal>
          </Portal>
        )}
    </>
  );
}

