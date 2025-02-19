import { Platform, Pressable, View } from "react-native";
import { useCallback, useContext, useEffect, useState } from "react";
import { Modal as PaperModal, Portal } from "react-native-paper";
import { useRouter } from "expo-router";
import React from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import HelpItem from "@/components/ui/HelpItem";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { Colors } from "@/shared/definitions/utils/colors";
import { IconItemWithModal } from "@/shared/definitions/interfaces/layout.interfaces";
import { IconSymbolName } from "@/shared/definitions/utils/switches";
import { ButtonStyles, HelpItemStyles, ModalStyles, WebStyles } from "@/shared/styles/component.styles";
import { BACKUP_HEIGHT, LARGE_MODAL_HEIGHT, MIN_MODAL_HEIGHT } from "@/shared/definitions/utils/constants";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedView } from "@/components/ThemedView";
import { ConfirmationProvider } from "@/core/providers/ConfirmationProvider";
import ShareService from "@/core/services/share.service";
import { AppContext } from "../_layout";
import { ErrorProvider } from "@/core/providers/ErrorProvider";
import Storage from "@/core/storage/storage.service";

import {
  AboutModal,
  BackupModal,
  ContactModal,
  CreditsModal,
  PoliticsModal,
  TermsModal,
  UserDataModal
} from '@/components/modals/index';
import CardsService from "@/core/services/cards.service";

export default function HelpScreen() {
  const styles = HelpItemStyles;
  const {i18n} = useI18n();
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const cardsService = new CardsService();

  useEffect(() => {
    // NO CONTEXT ON SHARED SCREEN
    const subImport = ShareService.importedSettings$.subscribe(res => {
      if (res !== null) {
        if (state.cardState.cards.length > 0) {
          res.cards = state.cardState.cards;
        }
        dispatch({type: 'SET_SETTINGS', value: res});
        Storage.setSettings(res);
      }
    });

    const subDelete = ShareService.deleteSettings$.subscribe(_ => {
        dispatch({type: 'RESET_SETTINGS'});
        dispatch({type: 'RESET_CARDS'});
        loadCards();
    });

    return () => {
      subImport.unsubscribe();
      subDelete.unsubscribe();
    }
  }, []);

  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', value: res });
          Storage.set('cards', res);
        },
        error: (err) => {
          console.log(err);
          Storage.set('cards', []);
        }
      });

      return sub;
  }, []);

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
      icon: 'u.square',
      modal: 'make_backup',
      content: <BackupModal></BackupModal>,
      height: Platform.OS === 'web' ? BACKUP_HEIGHT : (BACKUP_HEIGHT - 20)
    },
    {
      icon: 'door.garage.open',
      modal: 'exit',
      height: MIN_MODAL_HEIGHT
    }
  ];

  const open = (modalName: string) => {
    if (modalName === 'exit') { 
      router.replace('/?show=true');
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
            <HelpItem onClick={() => open(item.modal)} key={item.modal} item={item}>
              <IconSymbol name={item.icon as IconSymbolName} 
                          style={[
                            styles.icon, 
                            item.modal === 'make_backup' && 
                              {color: 'mediumaquamarine', fontSize: 23}]}/>
              <ThemedText style={{color: Colors.light.text}}>{i18n.t(item.modal)}</ThemedText>
            </HelpItem>
            ))
          }
        </View>
      </SharedScreen>
      <Portal>
        <ConfirmationProvider>
          <ErrorProvider>
            {
              items.map(item => (
                <PaperModal
                  visible={currentModal === item.modal}
                  onDismiss={close}
                  key={item.modal}
                  dismissable={false}
                  contentContainerStyle={{height: Platform.OS === 'web' ? '100%' : '110%', justifyContent: 'flex-start'}}>
                  <View style={[
                    ModalStyles.centeredView, Platform.OS === 'web' ? 
                    {...WebStyles.view} : {flex: 1, top: 0}]}>
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
          </ErrorProvider>
        </ConfirmationProvider>
      </Portal>
    </>
  )
}

