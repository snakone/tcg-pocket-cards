import { Platform, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { useI18n } from "@/core/providers/LanguageProvider";
import SoundService from "@/core/services/sounds.service";
import Storage from "@/core/storage/storage.service";
import ShareService from "@/core/services/share.service";
import { useConfirmation } from "@/core/providers/ConfirmationProvider";
import { SettingsState } from "@/hooks/settings.reducer";
import { useError } from "@/core/providers/ErrorProvider";

import { settingsStyles } from "@/app/screens/settings";
import { filterStyles, sharedModalStyles } from "@/shared/styles/component.styles";

import { 
  decryptDataAndroid,
  decryptDataWeb, 
  importEncryptedFileAndroid, 
  importEncryptedFileWeb, 
  isObjectSettings, 
  saveEncryptedFileAndroid, 
  saveEncryptedFileWeb 
} from "@/shared/definitions/utils/functions";

import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export function BackupModal() {
  const {i18n} = useI18n();
  const { confirm } = useConfirmation();
  const styles = sharedModalStyles;
  const [settings, setSettings] = useState<SettingsState | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const { show: showError } = useError();
  const router = useRouter();

  useEffect(() => {
    const getStorage = async () => {
      const {settings} = await Storage.loadSettings();
      setSettings({...settings});
    }

    getStorage();
  }, []);

  async function handleImport(): Promise<void> {
    SoundService.play('CHANGE_VIEW');
    const userConfirmed = await confirm("backup_replace", "backup_replace_question");
    if (userConfirmed) {
      try {
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
          ShareService.onSettingsImport(unsavedSettings);
        }
      } catch (err) {
        console.log(err);
        showError("error_on_import");
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

  async function handleDelete(): Promise<void> {
    SoundService.play('CHANGE_VIEW');
    const userConfirmed = await confirm("delete_config", "delete_config_question", "delete");
    if (userConfirmed) {
      ShareService.onDeleteSettings();
      Storage.deleteSettings();
      router.replace('/?show=true');
    }
  }
  
  return (
    <>
      <ThemedView style={{flex: 1}}>
        { loading && <LoadingOverlay/> }
        <ScrollView style={{flex: 1}} 
                    showsVerticalScrollIndicator={false} >
          <ThemedText style={[
            styles.text, 
            {marginTop: 4, marginBottom: Platform.OS !== 'web' ? 24 : i18n.locale === 'ja' ? 20 : 28}
            ]}>{i18n.t('backup_intro')}
          </ThemedText>

          <ThemedText style={[filterStyles.header, {fontSize: i18n.locale === 'ja' ? 16 : 17}]}>{i18n.t('import')}</ThemedText>

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

          <ThemedText style={[
            filterStyles.header, 
            {marginTop: 20, fontSize: i18n.locale === 'ja' ? 16 : 17}]}>{i18n.t('export')}
          </ThemedText>

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

          <ThemedView style={{opacity: 0.8}}>
            <ThemedText style={[
                filterStyles.header, 
                {marginTop: 20, fontSize: i18n.locale === 'ja' ? 16 : 17, color: 'crimson'}
                ]}>{i18n.t('delete')}
              </ThemedText>

            <ThemedView style={[
                settingsStyles.container, 
                {height: 52, boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px'},
                Platform.OS !== 'web' && {marginBottom: 14}
              ]}>
              <TouchableOpacity onPress={handleDelete} style={{flex: 1}} >
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('delete_all_config')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 38}]}>
                    <MaterialIcons name={'delete-forever'} 
                                  style={[
                                    {fontSize: 28, left: 8, color: 'crimson', position: 'absolute'}, 
                                    Platform.OS !== 'web' && {top: -14}
                                  ]}/>
                  </ThemedView>
                </ThemedView>
              </TouchableOpacity>
            </ThemedView>
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