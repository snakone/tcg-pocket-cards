import { Platform, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedText } from "../ThemedText";
import { filterStyles, sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedView } from "../ThemedView";
import { settingsStyles } from "@/app/screens/settings";
import SoundService from "@/core/services/sounds.service";
import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import Storage from "@/core/storage/storage.service";
import { SettingsState } from "@/hooks/settings.reducer";
import LoadingOverlay from "../ui/LoadingOverlay";
import ShareService from "@/core/services/share.service";

import { 
  decryptDataAndroid,
  decryptDataWeb, 
  importEncryptedFileAndroid, 
  importEncryptedFileWeb, 
  isObjectSettings, 
  saveEncryptedFileAndroid, 
  saveEncryptedFileWeb 
} from "@/shared/definitions/utils/functions";

export function BackupModal() {
  const {i18n} = useI18n();
  const { confirm } = useConfirmation();
  const styles = sharedModalStyles;
  const [settings, setSettings] = useState<SettingsState | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStorage = async () => {
      const data = await Storage.loadSettings();
      const profile = await Storage.getProfile();
      setSettings({...data, ...profile});
    }

    getStorage();
  }, []);


  async function handleImport(): Promise<void> {
    SoundService.play('CHANGE_VIEW');
    const userConfirmed = await confirm("backup_replace", "backup_replace_question");
    if (userConfirmed) {
      let unsavedSettings: SettingsState;

      if (Platform.OS === 'web') {
        const encrypted = await importEncryptedFileWeb();
        unsavedSettings = decryptDataWeb(encrypted);
        setLoading(true);
      } else {
        const encrypted = await importEncryptedFileAndroid();
        unsavedSettings = decryptDataAndroid(encrypted);
        setLoading(true);
      }

      if (isObjectSettings(unsavedSettings)) {
        Storage.setSettings(unsavedSettings);
        ShareService.onImport(unsavedSettings);
      }

      setTimeout(() => setLoading(false), 1000);
    }
  }

  async function handleExport(): Promise<void> {
    SoundService.play('CHANGE_VIEW');

    if (Platform.OS === 'web') {
      setLoading(true);
      saveEncryptedFileWeb(settings);
    } else {
      setLoading(true);
      await saveEncryptedFileAndroid(settings);
    }

    setTimeout(() => setLoading(false), 1000);
  }
  
  return (
    <>
      { loading && <LoadingOverlay/> }
      <ThemedView style={{flex: 1}}>
        <ScrollView style={{flex: 1}} 
                    showsVerticalScrollIndicator={false} >
          <ThemedText style={[styles.text, {marginTop: 4, marginBottom: 30}]}>{i18n.t('backup_intro')}</ThemedText>

          <ThemedText style={filterStyles.header}>{i18n.t('import')}</ThemedText>

          <ThemedView style={[settingsStyles.container, {height: 52, boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px'}]}>
            <TouchableOpacity onPress={handleImport} style={{flex: 1}} >
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('select_a_file')}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                  <MaterialIcons name={'upload-file'} 
                                style={[
                                  {fontSize: 28, left: 8, color: 'skyblue', position: 'absolute'}, 
                                  Platform.OS !== 'web' && {top: -14}
                                ]}/>
                </ThemedView>
              </ThemedView>
            </TouchableOpacity>
            <ThemedText style={backUpStyles.valid}>{i18n.t('valid_file')}</ThemedText>
          </ThemedView>

          <ThemedText style={[filterStyles.header, {marginTop: 30}]}>{i18n.t('export')}</ThemedText>

          <ThemedView style={[settingsStyles.container, {height: 52, boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px'}]}>
            <TouchableOpacity onPress={handleExport} style={{flex: 1}} >
              <ThemedView style={settingsStyles.row}>
                <ThemedText>{i18n.t('backup_button')}</ThemedText>
                <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                  <MaterialIcons name={'file-open'} 
                                style={[
                                  {fontSize: 28, left: 8, color: 'mediumaquamarine', position: 'absolute'}, 
                                  Platform.OS !== 'web' && {top: -14}
                                ]}/>
                </ThemedView>
              </ThemedView>
            </TouchableOpacity>
          </ThemedView>
          
        </ScrollView>
      </ThemedView>
    </>
  )
}

const backUpStyles = StyleSheet.create({
  valid: {
    position: 'absolute', 
    bottom: -23, 
    right: 4,
    fontSize: 11
  }
});