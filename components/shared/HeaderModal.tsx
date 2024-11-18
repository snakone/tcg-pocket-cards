import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Modal, Text, ScrollView, Platform } from 'react-native';
import { Audio } from 'expo-av';

import { HeaderWithCustomModalProps } from '@/shared/definitions/interfaces/layout.interfaces';
import { CLOSE_SENTENCE } from '@/shared/definitions/sentences/global.sentences';
import { AUDIO_MENU_CLOSE, AUDIO_MENU_OPEN } from '@/shared/definitions/sentences/path.sentences';
import { IconStyles, ModalStyles } from '@/shared/styles/component.styles';

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
      opened.current.setVolumeAsync(.6);

      if (Platform.OS === 'web') {
        closed.current.setVolumeAsync(.3);
      }
    }

    loadSounds();
  }, []);

  const playSound = async () => {
    if (!modalVisible && opened.current) {
        await opened.current.replayAsync();
      } else if (modalVisible && closed.current){
        await closed.current.replayAsync();
    }
  }

  const toggleModal = async () => {
    await playSound();
    setModalVisible(!modalVisible);
  };

  return (
    <ThemedView>
      <ThemedText type="headerTitle">{title}</ThemedText>
      {
        modalVisible ? null : (
          <TouchableOpacity style={IconStyles.iconContainer} onPress={toggleModal}>
            <IconSymbol name="questionmark.app.fill" style={IconStyles.icon}/>
          </TouchableOpacity>
        )
      }

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>{modalTitle}</Text>
            </View>
            <ScrollView style={styles.modalScrollView}>{modalContent}</ScrollView>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
                accessibilityLabel={CLOSE_SENTENCE}
              >
                <Text>{closeText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
}

