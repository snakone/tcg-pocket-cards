import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Audio } from 'expo-av';
import Animated from 'react-native-reanimated';
import { Modal as PaperModal, Portal } from 'react-native-paper';

import { HeaderWithCustomModalProps } from '@/shared/definitions/interfaces/layout.interfaces';
import { CLOSE_MODAL, CLOSE_SENTENCE } from '@/shared/definitions/sentences/global.sentences';
import { AUDIO_MENU_CLOSE, AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { ButtonStyles, IconStyles, ModalStyles, ThemeTextStyles, WebStyles } from '@/shared/styles/component.styles';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';
import { useI18n } from '../../core/providers/LanguageProvider';

export default function HeaderWithCustomModal({ 
  title, 
  modalTitle, 
  modalContent,
  animatedStyle = {},
  animatedIconStyle = {}
}: HeaderWithCustomModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = ModalStyles;
  const opened = useRef<Audio.Sound>();
  const closed = useRef<Audio.Sound>();
  const {i18n} = useI18n();

  useEffect(() => {
    async function loadSounds() {
      const { sound: open } = await Audio.Sound.createAsync(AUDIO_MENU_OPEN);
      const { sound: close } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      opened.current = open;
      closed.current = close;
      opened.current.setVolumeAsync(.5);

      if (Platform.OS === 'web') {
        closed.current.setVolumeAsync(.3);
      }
    }

    loadSounds();

    return () => {
      if (opened.current) opened.current.unloadAsync();
      if (closed.current) closed.current.unloadAsync();
    };
  }, []);

  const toggleModal = useCallback(async () => {
    setModalVisible((prev) => {
      const sound = modalVisible ? closed.current : opened.current;
      if (sound) sound.replayAsync();
     return !prev;
    });
  }, [modalVisible]);

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
        {modalVisible && (
          <Portal>
            <PaperModal dismissable={false}
                        visible={modalVisible}
                        onDismiss={toggleModal}
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

