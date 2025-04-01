import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Platform, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { Modal as PaperModal, Portal } from 'react-native-paper';

import { HeaderWithCustomModalProps } from '@/shared/definitions/interfaces/layout.interfaces';
import { ButtonStyles, IconStyles, ModalStyles, ThemeTextStyles, WebStyles } from '@/shared/styles/component.styles';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';
import { useI18n } from '../../core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';

export default function HeaderWithCustomModal({ 
  title, 
  modalTitle, 
  modalContent,
  modalHeight,
  animatedStyle = {},
  animatedIconStyle = {},
  showHeader = true
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
    <Animated.View style={[IconStyles.iconContainer, animatedIconStyle, {zIndex: 10}]}>
      <TouchableOpacity onPress={toggleModal}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                        accessibilityLabel={'CLOSE_MODAL'}
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
        {
          showHeader && <RenderHeader></RenderHeader>
        }
        {visible && (
          <Portal>
            <PaperModal visible={visible}
                        dismissableBackButton={true}
                        contentContainerStyle={{height: Platform.OS === 'web' ? '100%' : '110%'}}>
              <View style={[styles.centeredView, {flex: 1}]}>
                <View style={styles.modalView}>
                  <View style={styles.modalHeader}>
                    {
                      modalTitle &&
                      <ThemedText style={[styles.modalHeaderTitle, i18n.locale === 'ja' && {fontSize: 20}]}>{i18n.t(modalTitle)}</ThemedText>
                    }
                  </View>
                  <View style={[styles.modalScrollView, {minHeight: modalHeight}]}>{modalContent}</View>
                  <View style={[styles.modalFooter, {paddingTop: 12}, Platform.OS === 'android' && {paddingTop: 18}]}>
                    <Pressable style={ButtonStyles.button} 
                                              onPress={toggleModal} 
                                              accessibilityLabel={'CLOSE_SENTENCE'}
                                              accessibilityRole="button"
                                              accessible={true}>
                      <View style={ButtonStyles.insetBorder}>
                        <IconSymbol name="clear"></IconSymbol>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            </PaperModal>
          </Portal>
        )}
    </>
  );
}

