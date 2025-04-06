import { Platform, Pressable, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Modal as PaperModal, Portal } from "react-native-paper";
import { useRouter } from "expo-router";
import React from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import HelpItem from "@/components/ui/HelpItem";
import { IconSymbol } from "@/components/ui/IconSymbol";
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
import { settingsInitialState } from "@/hooks/settings.reducer";

import {
  AboutModal,
  BackupModal,
  ContactModal,
  CreditsModal,
  PoliticsModal,
  TermsModal,
  UserDataModal
} from '@/components/modals/index';

export default function HelpScreen() {
  console.log('Help Screen')
  const styles = HelpItemStyles;
  const {i18n, setLocale } = useI18n();
  const router = useRouter();
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    // NO CONTEXT ON SHARED SCREEN
    const subImport = ShareService.importedSettings$.subscribe(res => {
      if (res !== null) {
        dispatch({type: 'SET_SETTINGS', value: res});
        Storage.setSettings(res);
      }
    });
    
    const subDelete = ShareService.deleteSettings$.subscribe(_ => {
      dispatch({type: 'RESET_SETTINGS'});
      reloadSettings();
    });

    return () => {
      subImport.unsubscribe();
      subDelete.unsubscribe();
    }
  }, []);

  async function reloadSettings(): Promise<void> {
    const settings = {...settingsInitialState};
    SoundService.setEnabled(settings.sound);
    setLocale(settings.language);
    SoundService.setVolume(settings.sound_volume);
    await Storage.reload()
  }
  

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
      height: BACKUP_HEIGHT
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

    setDisabled(true);
    setCurrentModal(modalName);
  };

  const close = async () => {
    await playSound();
    setCurrentModal(null);
    setDisabled(false);
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
            <HelpItem onClick={() => open(item.modal)} key={item.modal} item={item} disabled={disabled}>
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
                  dismissableBackButton={true}
                  contentContainerStyle={{height: Platform.OS === 'web' ? '100%' : '110%', justifyContent: 'flex-start'}}>
                  <View style={[
                    ModalStyles.centeredView, Platform.OS === 'web' ? 
                    {...WebStyles.view} : {flex: 1, top: 0}]}>
                    <View style={[ModalStyles.modalView, i18n.locale === 'ja' && {maxHeight: '79%'}]}>
                      <View style={ModalStyles.modalHeader}>
                        <ThemedText style={[ModalStyles.modalHeaderTitle, {marginTop: 4}]}>
                          {i18n.t(item.modal)}
                        </ThemedText>
                      </View>
                      <ThemedView style={[ModalStyles.modalScrollView, {height: item.height}]}>
                        {item.content}
                      </ThemedView>
                      <View style={[ModalStyles.modalFooter, {paddingTop: 14}, (i18n.locale === 'ja' || Platform.OS === 'android') && {paddingTop: 16}]}>
                        <Pressable style={ButtonStyles.button} 
                                          onPress={close} 
                                          accessibilityLabel={'CLOSE_SENTENCE'}>
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

