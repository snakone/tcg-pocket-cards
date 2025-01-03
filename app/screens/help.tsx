import { Platform, Pressable, View } from "react-native";
import { useState } from "react";
import { Modal as PaperModal, Portal } from "react-native-paper";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import HelpItem from "@/components/ui/HelpItem";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { Colors } from "@/shared/definitions/utils/colors";
import { IconItemWithModal } from "@/shared/definitions/interfaces/layout.interfaces";
import { IconSymbolName } from "@/shared/definitions/utils/switches";
import { ButtonStyles, HelpItemStyles, ModalStyles, WebStyles } from "@/shared/styles/component.styles";
import { LARGE_MODAL_HEIGHT, MIN_MODAL_HEIGHT } from "@/shared/definitions/utils/contants";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";

import {
  AboutModal,
  ContactModal,
  CreditsModal,
  PoliticsModal,
  TermsModal,
  ThemedView,
  UserDataModal
} from '@/components/modals/index';
import React from "react";

export default function HelpScreen() {
  const styles = HelpItemStyles;
  const {i18n} = useI18n();
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const items: IconItemWithModal[] = [
    { 
      icon: 'terminal',
      modal: 'terms',
      content: <TermsModal></TermsModal>,
      height: LARGE_MODAL_HEIGHT
    },
    { 
      icon: 'candybarphone',
      modal: 'politics',
      content: <PoliticsModal></PoliticsModal>,
      height: LARGE_MODAL_HEIGHT
    },
    {
      icon: 'location.fill',
      modal: 'about',
      content: <AboutModal></AboutModal>,
      height: LARGE_MODAL_HEIGHT
    },
    { 
      icon: 'laurel.leading',
      modal: 'privacy',
      content: <UserDataModal></UserDataModal>,
      height: LARGE_MODAL_HEIGHT
    },
    { 
      icon: 'mail',
      modal: 'contact',
      content: <ContactModal></ContactModal>,
      height: LARGE_MODAL_HEIGHT
    },
    { 
      icon: 'creditcard',
      modal: 'credits',
      content: <CreditsModal></CreditsModal>,
      height: LARGE_MODAL_HEIGHT
    },
    {
      icon: 'door.garage.open',
      modal: 'exit',
      height: MIN_MODAL_HEIGHT
    }
  ];

  const open = (modalName: string) => {
    if (modalName === 'exit') { 
      router.replace('/?show=true')
      return;
    }

    setCurrentModal(modalName);
  };

  const close = async () => {
    await playSound();
    setCurrentModal(null);
  };

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

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
              contentContainerStyle={{height: Platform.OS === 'web' ? '100%' : '110%'}}>
              <View style={[
                ModalStyles.centeredView, Platform.OS === 'web' ? 
                 {...WebStyles.view, top: -60} : {flex: 1, top: 0}]}>
                <View style={ModalStyles.modalView}>
                  <View style={ModalStyles.modalHeader}>
                    <ThemedText style={[ModalStyles.modalHeaderTitle, {marginTop: 4}]}>
                      {i18n.t(item.modal)}
                    </ThemedText>
                  </View>
                  <ThemedView style={[ModalStyles.modalScrollView, {height: item.height}]}>
                    {item.content}
                  </ThemedView>
                  <View style={ModalStyles.modalFooter}>
                    <Pressable style={ButtonStyles.button} 
                                      onPress={close} 
                                      accessibilityLabel={CLOSE_SENTENCE}>
                      <View style={ButtonStyles.insetBorder}>
                        <IconSymbol name="clear"></IconSymbol>
                      </View>
                    </Pressable>
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

