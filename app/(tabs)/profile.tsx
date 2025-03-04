import { Platform, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useCallback, useContext, useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import Storage from '@/core/storage/storage.service';
import { UserProfile } from '@/shared/definitions/interfaces/global.interfaces';
import { AVATAR_MAP, COIN_MAP } from '@/shared/definitions/utils/constants';
import { Colors } from '@/shared/definitions/utils/colors';
import SoundService from '@/core/services/sounds.service';
import { NO_CONTEXT, USER_LABEL } from '@/shared/definitions/sentences/global.sentences';
import { AppContext } from '../_layout';
import { CardGridStyles, TabsMenuStyles } from '@/shared/styles/component.styles';
import { createDeckStyles } from '../screens/create_deck';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { getImageLanguage } from '@/shared/definitions/utils/functions';

export default function ProfileScreen() {
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const [userName, setUserName] = useState('');
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  const [profile, setProfile] = useState<UserProfile>(
    {name: '', avatar: 'eevee', coin: 'eevee', best: null}
  );

  function handleText(text: string): void {
    if (text.length > 15) return;
    setUserName(text);
    Storage.set('name', text);
  }

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile(profile);
      setUserName(profile.name);
    };

    getProfile();
  }, []);

  useEffect(() => {
    setProfile(prev => ({...prev, avatar: state.settingsState.avatar}))
  }, [state.settingsState.avatar]);

  useEffect(() => {
    setProfile(prev => ({...prev, coin: state.settingsState.coin}))
  }, [state.settingsState.coin]);

  useEffect(() => {
    setProfile(prev => ({...prev, best: state.settingsState.best}))
  }, [state.settingsState.best]);

  async function handleActionMenu(action: string): Promise<void> {
    await playSound();
    dispatch({type: action, value: true});
  }

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_OPEN');
  }, []);
  
  return (
    <ParallaxScrollView title={"profile"} 
                        modalTitle='profile'
                        showHeader={false}>
      <ThemedView style={{alignItems: 'center', flex: 1}}>
        <ThemedView style={styles.header}>
          <ThemedView style={styles.avatarContainer}>
            <Pressable onPress={() => handleActionMenu('OPEN_AVATAR')}>
              <Image source={AVATAR_MAP[profile.avatar]} style={styles.avatar}/>
            </Pressable>
            <ThemedView style={styles.editContainer}>
              <Pressable onPress={() => handleActionMenu('OPEN_AVATAR')}>
                <MaterialIcons name="mode-edit-outline" style={styles.editIcon} />
              </Pressable>
            </ThemedView>
          </ThemedView>
          <ThemedView style={[TabsMenuStyles.user, {marginTop: 40, width: 275}]}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TextInput placeholder={i18n.t('name_placeholder')}
                         value={userName}
                         onChangeText={(text) => (handleText(text))}
                         placeholderTextColor={Colors.light.text}
                         accessibilityLabel={USER_LABEL}
                         inputMode='text'
                         maxLength={15}
                         style={[styles.input, Platform.OS !== 'web' && {top: 0, paddingRight: 6}]}
                        />
              <MaterialIcons name="edit" style={styles.editInput} />
            </ThemedView>
          </ThemedView>
          <ThemedView style={[TabsMenuStyles.user, {marginTop: 20, width: 275, gap: 0}]}>
            <Image source={COIN_MAP[profile.coin]} 
                  style={TabsMenuStyles.avatar}>
            </Image>
            <Pressable style={{flex: 1}} 
                       onPress={() => handleActionMenu('OPEN_COIN')}
                       hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
              <ThemedView style={{
                paddingInline: Platform.OS === 'web' ? 18 : 16, 
                height: 50, 
                justifyContent: 'center', 
                left: -2, 
                alignItems: 'center'
              }}>
                <ThemedText style={{zIndex: 4, textAlign: 'center', fontSize: 13, opacity: 0.7}}>
                  {i18n.t('select_coin')}
                </ThemedText>
              </ThemedView>
            </Pressable>
          </ThemedView>
          <ThemedView style={[{width: '100%', flex: 1, marginTop: 40, alignItems: 'center'}]}>
            <ThemedText style={{fontSize: 13, height: 17}}>{i18n.t('best_card')}</ThemedText>

            <ThemedView style={styles.separator}></ThemedView>
              <ThemedView style={[
                  CardGridStyles.imageContainer, 
                  {marginTop: 12, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)', height: 334},
                  Boolean(!profile.best) && {opacity: 0.8} 
                ]}>
                <ThemedView style={{flex: 1, backgroundColor: 'white'}}>
                  <TouchableOpacity onPress={() => handleActionMenu('OPEN_BEST')} 
                                    style={styles.previewCard}>
                    { profile.best ? 
                      <>
                        <Image style={[
                            CardGridStyles.image, 
                            {width: 240}
                          ]} 
                        source={getImageLanguage(lang, profile.best)}/>        
                      </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
                    }
                  </TouchableOpacity>
                </ThemedView>
              </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  avatarContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    position: 'relative',
  },
  avatar: {
    width: 120, 
    height: 120, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 100
  },
  editContainer: {
    position: 'absolute',
    bottom: 26,
    right: 8,
    zIndex: 50,
    backgroundColor: Colors.light.background,
    padding: 6,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  },
  editIcon: {
    zIndex: 100, 
    width: 20, 
    height: 20, 
    color: Colors.light.icon,
    fontSize: 20
  },
  input: {
    width: 275,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 6,
    paddingInline: 18,
    borderRadius: 50,
    paddingRight: 20,
    top: -1,
    position: 'relative',
    color: Colors.light.text
  },
  editInput: {
    position: 'absolute', 
    right: 12, 
    top: 9, 
    color: Colors.light.icon, 
    fontSize: 20, 
    opacity: 0.8
  },
  separator: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
    height: 2, 
    width: '60%',
    marginTop: 8
  },
  previewCard: {
    width: 240, 
    justifyContent: 'center', 
    alignItems: 'center', 
    aspectRatio: 367/512
  }
});


