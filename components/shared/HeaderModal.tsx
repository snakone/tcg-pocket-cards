import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Modal, ScrollView, Platform } from 'react-native';
import { Audio } from 'expo-av';

import { HeaderWithCustomModalProps } from '@/shared/definitions/interfaces/layout.interfaces';
import { CLOSE_SENTENCE } from '@/shared/definitions/sentences/global.sentences';
import { AUDIO_MENU_CLOSE, AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { ButtonStyles, IconStyles, ModalStyles, WebStyles } from '@/shared/styles/component.styles';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';
import { ThemedView } from '../ThemedView';

export default function HeaderWithCustomModal({ 
  title, 
  modalTitle, 
  modalContent,
  closeText
}: HeaderWithCustomModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = ModalStyles;
  const opened = useRef<Audio.Sound>();
  const closed = useRef<Audio.Sound>();

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

  const playSound = useCallback(async () => {
    const sound = modalVisible ? closed.current : opened.current;
    if (sound) await sound.replayAsync();
  }, [modalVisible]);

  const toggleModal = useCallback(async () => {
    await playSound();
    setModalVisible((prev) => !prev);
  }, [playSound]);

  const RenderModalToggle = () => (
    <TouchableOpacity 
      style={IconStyles.iconContainer} 
      onPress={toggleModal}
    >
      <IconSymbol name="questionmark.app.fill" style={IconStyles.icon} />
    </TouchableOpacity>
  );

  return (
    <ThemedView>
      <ThemedText type="headerTitle">{title}</ThemedText>
      {
        modalVisible ? null : (<RenderModalToggle></RenderModalToggle>)
      }

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModal}
        hardwareAccelerated={true}
      >
        <View style={[styles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <ThemedText style={styles.modalHeaderTitle}>{modalTitle}</ThemedText>
            </View>
            <ScrollView style={styles.modalScrollView}>{modalContent}</ScrollView>
            <View style={styles.modalFooter}>
              <TouchableOpacity style={ButtonStyles.button} 
                                onPress={toggleModal} 
                                accessibilityLabel={CLOSE_SENTENCE}>
                <View style={ButtonStyles.insetBorder}>
                  <IconSymbol name="clear"></IconSymbol>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
}

