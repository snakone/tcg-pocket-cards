import { Modal, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import HelpItem from "@/components/ui/HelpItem";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
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
import { useI18n } from "@/core/providers/LanguageProvider";
import { Modal as PaperModal, Portal } from "react-native-paper";

export default function HelpScreen() {
  const styles = HelpItemStyles;
  const audio = useRef<Audio.Sound>();
  const {i18n} = useI18n();

  const items: IconItemWithModal[] = [
    { 
      icon: 'terminal',
      modal: 'terms',
      content: <TermsModal></TermsModal>
    },
    { 
      icon: 'candybarphone',
      modal: 'politics',
      content: <PoliticsModal></PoliticsModal>
    },
    {
      icon: 'location.fill',
      modal: 'about',
      content: <AboutModal></AboutModal>
    },
    { 
      icon: 'laurel.leading',
      modal: 'privacy',
      content: <PrivacyModal></PrivacyModal>
    },
    { 
      icon: 'mail',
      modal: 'contact',
      content: <ContactModal></ContactModal>
    },
    {
      icon: 'door.garage.open',
      modal: 'exit'
    }
  ];

  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const open = (modalName: string) => {
    if (modalName === 'exit') {
      // EXIT HERE
      return;
    }

    setCurrentModal(modalName);
  };

  const close = async () => {
    await playSound();
    setCurrentModal(null);
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
      <SharedScreen title={'help'}>
        <View style={styles.content}>
          {
            items.map(item => (
            <HelpItem onClick={() => open(item.modal)} key={item.modal}>
              <IconSymbol name={item.icon as IconSymbolName} style={styles.icon}></IconSymbol>
              <ThemedText style={{color: Colors.light.text}}>{i18n.t(item.modal)}</ThemedText>
            </HelpItem>
            ))
          }
        </View>
      </SharedScreen>
      <Portal>
        {
          items.map(item => (
            <PaperModal
              visible={currentModal === item.modal}
              onDismiss={close}
              key={item.modal}
              dismissable={false}
              contentContainerStyle={{height: '200%'}}
            >
              <View style={[ModalStyles.centeredView, Platform.OS === 'web' ? WebStyles.view : null]}>
                <View style={ModalStyles.modalView}>
                  <View style={ModalStyles.modalHeader}>
                    <ThemedText style={ModalStyles.modalHeaderTitle}>
                      {i18n.t(item.modal)}
                    </ThemedText>
                  </View>
                  <ScrollView style={ModalStyles.modalScrollView}>
                    {item.content}
                  </ScrollView>
                  <View style={ModalStyles.modalFooter}>
                    <TouchableOpacity style={ButtonStyles.button} 
                                      onPress={close} 
                                      accessibilityLabel={CLOSE_SENTENCE}>
                      <View style={ButtonStyles.insetBorder}>
                        <IconSymbol name="clear"></IconSymbol>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </PaperModal>
          ))
        }
      </Portal>
    </>
  )
}

