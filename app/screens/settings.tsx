import { useCallback, useContext, useMemo } from "react";
import { Platform, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

import { useI18n } from "@/core/providers/LanguageProvider";
import Storage from "@/core/storage/storage.service";
import SoundService from "@/core/services/sounds.service";
import { Slider } from "@miblanchard/react-native-slider";

import { AppContext } from "../_layout";
import { SettingsState } from "@/hooks/settings.reducer";
import { CardGridStyles, filterStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { LanguageType } from "@/shared/definitions/types/global.types";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import SelectInput from "@/components/ui/SelectInput";

export default function SettingsScreen() {
  console.log('Settings Screen')
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const {i18n, setLocale} = useI18n();

  const settings = useMemo(() => state.settingsState, [state.settingsState]);

  async function toggleMusic(): Promise<void> {
    const updatedSettings = {
      ...state.settingsState,
      music: !state.settingsState.music,
    };
  
    dispatch({ type: 'SET_SETTINGS', value: updatedSettings });
    Storage.set('music', updatedSettings.music);
    await SoundService.play('POP_PICK');
  }

  async function toggleSound(): Promise<void> {
    const updated: SettingsState = {
      ...state.settingsState,
      sound: !state.settingsState.sound,
    };
  
    SoundService.setEnabled(updated.sound);
    dispatch({ type: 'SET_SETTINGS', value: updated });
    Storage.set('sound', updated.sound);
    await SoundService.play('POP_PICK');
  }

  const TrackItem = useCallback((index: any) => {
    if (index === 0 || index === 10) return null;
    return (
      <ThemedView style={{
        width: 2,
        height: 4,
        right: -10,
        backgroundColor: '#777',
        position: 'relative',
        zIndex: 1000,
        opacity: 1
      }}>  
      </ThemedView>
    )
  }, []);

  function handleMusicVolumeChange(ev: number[]): void {
    SoundService.play('SCALE');
    const value = ev[0];
    const updated: SettingsState = {
      ...state.settingsState,
      music_volume: (value / 10),
    };
  
    dispatch({ type: 'SET_SETTINGS', value: updated });
    Storage.set('music_volume', updated.music_volume);
  }

  function handleSoundVolumeChange(ev: number[]): void {
    SoundService.play('SCALE');
    const value = ev[0];
    const updated: SettingsState = {
      ...state.settingsState,
      sound_volume: (value / 10),
    };
  
    dispatch({ type: 'SET_SETTINGS', value: updated });
    Storage.set('sound_volume', updated.sound_volume);
    SoundService.setVolume(updated.sound_volume);
  }

  function handleLanguage(lang: LanguageType): void {
    setLocale(lang);
    const updated: SettingsState = {
      ...state.settingsState,
      language: lang,
    };
  
    dispatch({ type: 'SET_SETTINGS', value: updated });
    Storage.set('language', updated.language);
  }

  function handleIntro(value: 'show' | 'hide'): void {
    const updated: SettingsState = {
      ...state.settingsState,
      show_intro: value === 'show',
    };
  
    dispatch({ type: 'SET_SETTINGS', value: updated });
    Storage.set('show_intro', updated.show_intro);
  }

  return (
    <SharedScreen title={'config'}>
      <ThemedText style={filterStyles.header}>{i18n.t('sound')}</ThemedText>
      <ThemedView style={settingsStyles.container}>
        <ThemedView style={settingsStyles.row}>
          <ThemedText>{i18n.t('music')}</ThemedText>
          <ThemedView style={settingsStyles.rightContainer}>
            <IconSymbol name={settings?.music ? 'app.dashed' : 'app.badge'} 
                        style={[settingsStyles.icon, {transform: [{scaleX: 1.3}]}]} 
                        color={Colors.light.text}>
            </IconSymbol>
            <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                color={'white'}
                                onValueChange={toggleMusic}
                                style={CardGridStyles.switch}
                                value={settings?.music}/>
          </ThemedView>
        </ThemedView>
        <Slider maximumValue={10} 
                minimumValue={0} 
                step={1} 
                containerStyle={settingsStyles.slider}
                maximumTrackTintColor={Colors.light.skeleton}
                minimumTrackTintColor="mediumaquamarine" 
                animateTransitions={true} 
                animationType={'timing'}
                thumbStyle={settingsStyles.thumb}
                trackStyle={settingsStyles.track}
                trackClickable={true}
                value={settings.music_volume * 10}
                onSlidingComplete={handleMusicVolumeChange}
                trackMarks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderTrackMarkComponent={(index) => <TrackItem index={index}></TrackItem>}/>
      </ThemedView>
      <ThemedView style={settingsStyles.container}>
        <ThemedView style={settingsStyles.row}>
        <ThemedText>{i18n.t('sound_effects')}</ThemedText>
          <ThemedView style={settingsStyles.rightContainer}>
            <IconSymbol name={settings?.sound ? 'voiceover' : 'video.circle'} 
                        style={settingsStyles.icon} 
                        color={Colors.light.text}>
            </IconSymbol>
            <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                color={'white'}
                                onValueChange={toggleSound}
                                style={CardGridStyles.switch}
                                value={settings?.sound}/>
          </ThemedView>
        </ThemedView>
        <Slider maximumValue={10} 
                minimumValue={0} 
                step={1} 
                containerStyle={settingsStyles.slider}
                maximumTrackTintColor={Colors.light.skeleton}
                minimumTrackTintColor="mediumaquamarine" 
                animateTransitions={true} 
                animationType={'timing'}
                thumbStyle={settingsStyles.thumb}
                trackStyle={settingsStyles.track}
                trackClickable={true}
                value={settings.sound_volume * 10}
                onSlidingComplete={handleSoundVolumeChange}
                trackMarks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderTrackMarkComponent={(index) => <TrackItem index={index}></TrackItem>}/>
      </ThemedView>

      <ThemedText style={[filterStyles.header, {marginTop: 24}]}>{i18n.t('system')}</ThemedText>
      <ThemedView style={settingsStyles.container}>
        <ThemedView style={settingsStyles.row}>
          <ThemedText>{i18n.t('language')}</ThemedText>
          <ThemedView style={{marginLeft: 'auto'}}>
            <SelectInput options={['es', 'en', 'ja']} 
                         label={settings.language}
                         onSelect={(opt) => (SoundService.play('POP_PICK'), handleLanguage(opt))}
                         width={140}
                         height={128}
                         shadow={false}
                         textStyle={{left: 6}}
                         iconStyle={{right: -2}}
                         itemStyle={{paddingBlock: 6}}>
            </SelectInput>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={settingsStyles.container}>
        <ThemedView style={settingsStyles.row}>
          <ThemedText>{i18n.t('start_screen')}</ThemedText>
          <ThemedView style={{marginLeft: 'auto'}}>
            <SelectInput options={['show', 'hide']} 
                         label={settings.show_intro ? 'show' : 'hide'}
                         onSelect={(opt) => (SoundService.play('POP_PICK'), handleIntro(opt))}
                         width={140}
                         height={92}
                         shadow={false}
                         textStyle={{left: 6}}
                         iconStyle={{right: -2}}
                         itemStyle={{paddingBlock: 6}}>
            </SelectInput>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </SharedScreen>
  )
}

export const settingsStyles = StyleSheet.create({
  container: {
    padding: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    width: '100%',
    marginBottom: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: 80,
    position: 'relative',
    left: 4
  }, 
  icon: {
    position: 'relative',
    width: 25, 
    height: 25,
    right: 6
  },
  slider: {
    width: '100%',
    marginTop: 12,
    justifyContent: 'center', 
    marginInline: 'auto',
  },
  thumb: { 
    backgroundColor: 'white', 
    width: Platform.OS === 'web' ? 20.5 : 23, 
    height: Platform.OS === 'web' ? 20.5 : 23,
    borderRadius: Platform.OS === 'web' ? 20.5 : 23,
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.5)'
  },
  track: {
    height: 16,
    borderRadius: 16
  },
  trackCard: {
    boxShadow: Platform.OS === 'web' ? '0px 2px 8px rgba(0, 0, 0, 0.2)' : 'none',
    height: 16,
    borderRadius: 16
  }
});