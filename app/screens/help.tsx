import { Modal, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import HelpItem from "@/components/ui/HelpItem";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CLOSE_SENTENCE, HELP_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { AUDIO_MENU_CLOSE } from "@/shared/definitions/sentences/path.sentences";
import { Colors } from "@/shared/definitions/utils/colors";
import { IconItemWithModal } from "@/shared/definitions/interfaces/layout.interfaces";
import { IconSymbolName } from "@/shared/definitions/utils/switches";
import { ButtonStyles, HelpItemStyles, ModalStyles, WebStyles } from "@/shared/styles/component.styles";
import { TermsModal } from "@/components/modals/TermsModal";
import { PoliticsModal } from "@/components/modals/PoliticsModal";
import { AboutModal } from "@/components/modals/AboutModal";
import { PrivacyModal } from "@/components/modals/PrivacyModal";
import { ContactModal } from "@/components/modals/ContactModal";

export default function HelpScreen() {
  const styles = HelpItemStyles;
  const audio = useRef<Audio.Sound>();

  const items: IconItemWithModal[] = [
    { 
      label: 'Términos de uso',
      icon: 'terminal',
      modal: 'terms',
      content: <TermsModal></TermsModal>
    },
    { 
      label: 'Política de privacidad',
      icon: 'candybarphone',
      modal: 'politics',
      content: <PoliticsModal></PoliticsModal>
    },
    {
      label: 'Sobre esta aplicación',
      icon: 'location.fill',
      modal: 'about',
      content: <AboutModal></AboutModal>
    },
    { 
      label: 'Recopilación de datos',
      icon: 'laurel.leading',
      modal: 'privacy',
      content: <PrivacyModal></PrivacyModal>
    },
    { 
      label: 'Contacta con nosotros',
      icon: 'mail',
      modal: 'contact',
      content: <ContactModal></ContactModal>
    },
    {
      label: 'Ir a la pantalla de título',
      icon: 'door.garage.open',
      modal: 'exit'
    }
  ];

  const [modals, setModals] = useState(items.reduce((acc, item) => {
    acc[item.modal] = false;
    return acc;
  }, {} as {[key: string]: boolean}));

  const getModalVisible = (modalName: string) => modals[modalName];

  const open = (modalName: string) => {
    if (modalName === 'exit') {
      // EXIT HERE
      return;
    }

    setModals(prevState => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const close = async (modalName: string) => {
    await playSound();

    if (modalName) {
      setModals(prevState => ({
        ...prevState,
        [modalName]: false,
      }));
    } else {
      setModals(items.reduce((acc, item) => {
        acc[item.modal] = false;
        return acc;
      }, {} as {[key: string]: boolean}));
    }
  };

  const playSound = async () => {
    if (audio.current) {
      audio.current.replayAsync();
    }
  }

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      audio.current = sound;

      if (Platform.OS === 'web') {
        audio.current.setVolumeAsync(.3);
      }
    }

    loadSounds();
  }, []);

  return (
    <>
      <SharedScreen title={HELP_SENTENCE}>
        <View style={styles.content}>
          {
            items.map(item => (
            <HelpItem onClick={() => open(item.modal)} key={item.label}>
              <IconSymbol name={item.icon as IconSymbolName} style={styles.icon}></IconSymbol>
              <ThemedText style={{color: Colors.light.text}}>{item.label}</ThemedText>
            </HelpItem>
            ))
          }
        </View>
      </SharedScreen>
      {
        items.map(item => (
          <Modal
            animationType="slide"
            transparent={false}
            visible={getModalVisible(item.modal)}
            onRequestClose={() => close(item.modal)}
            hardwareAccelerated={true}
            key={item.modal}
          >
            <View style={[ModalStyles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
              <View style={ModalStyles.modalView}>
                <View style={ModalStyles.modalHeader}>
                  <ThemedText style={ModalStyles.modalHeaderTitle}>
                    {item.label}
                  </ThemedText>
                </View>
                <ScrollView style={ModalStyles.modalScrollView}>
                  {item.content}
                </ScrollView>
                <View style={ModalStyles.modalFooter}>
                  <TouchableOpacity style={ButtonStyles.button} 
                                    onPress={() => close(item.modal)} 
                                    accessibilityLabel={CLOSE_SENTENCE}>
                    <View style={ButtonStyles.insetBorder}>
                      <IconSymbol name="clear"></IconSymbol>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        ))
      }
    </>
  )
}

