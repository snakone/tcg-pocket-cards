import { Platform, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useContext, useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { map } from 'rxjs';
import { useRouter } from 'expo-router';
import { Portal } from 'react-native-paper';

import SoundService from '@/core/services/sounds.service';
import { useI18n } from '@/core/providers/LanguageProvider';
import Storage from '@/core/storage/storage.service';
import { DataRxjs } from '@/core/rxjs/DataRxjs';

import { AppContext } from '../_layout';
import { AVATAR_MAP, COIN_MAP, DEFAULT_PROFILE } from '@/shared/definitions/utils/constants';
import { Colors } from '@/shared/definitions/utils/colors';
import { LanguageType, ModalType } from '@/shared/definitions/types/global.types';
import { getImageLanguage } from '@/shared/definitions/utils/functions';
import { UserCollectionItem, UserProfile } from '@/shared/definitions/interfaces/global.interfaces';
import { CardGridStyles, TabsMenuStyles } from '@/shared/styles/component.styles';
import { BACKWARD_CARD } from '@/shared/definitions/sentences/path.sentences';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { createDeckStyles } from '@/app/screens/create_deck';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import PickBestMenu from '@/components/dedicated/profile/PickBestMenu';
import PickCoinMenu from '@/components/dedicated/profile/PickCoinMenu';
import PickAvatarMenu from '@/components/dedicated/profile/PickAvatarMenu';

export default function ProfileScreen() {
  console.log('Profile Screen')
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state } = context;
  const [lang, setLang] = useState<LanguageType>(state.settingsState.language);
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [collection, setCollection] = useState<number>(0);
  
  const [modalVisibility, setModalVisivility] = useState<Partial<Record<ModalType, boolean>>>({
    avatar: false,
    coin: false,
    best: false
  });

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile({...profile});
    };

    getProfile();
  }, []);

  function handleModalVisibility(key: ModalType, value: boolean): void {
    setModalVisivility(prev => ({...prev, [key]: value}));
    value ? SoundService.play('AUDIO_MENU_OPEN') :
      SoundService.play('AUDIO_MENU_CLOSE');
  }

  async function handleClose(key: ModalType): Promise<void> {
    handleModalVisibility(key, false);
    setProfile({...await Storage.getProfile()});
  }

  useEffect(() => {
    setLang(state.settingsState.language);
  }, [state.settingsState.language]);

  useEffect(() => {
    const sub = DataRxjs.getData<UserCollectionItem[]>('collection')
     .pipe(map(res => res.reduce((acc, curr) => {
      const length = Object.values(curr.amount).reduce((acc, curr) => acc + curr, 0);
      return length + acc;
    }, 0)))
     .subscribe(res => setCollection(res));

    return () => sub.unsubscribe();
  }, []);

  function goToCollection(): void {
    SoundService.play('CHANGE_VIEW');
    router.push('/screens/collection');
  }

  function handleText(text: string): void {
    if (text.length > 15) return;
    setProfile(prev => ({...prev, name: text}));
    Storage.set('name', text);
  }
  
  return (
    <>
      <ParallaxScrollView title={"profile"} 
                          showHeader={false}>
        <ThemedView style={{alignItems: 'center', flex: 1}}>
          <ThemedView style={[styles.header, {marginTop: 42}]}>
            <ThemedView style={[styles.avatarContainer, {top: 10}]}>
              <Pressable onPress={() => handleModalVisibility('avatar', true)}>
                <Image source={AVATAR_MAP[profile.avatar]} style={styles.avatar}/>
              </Pressable>
              <ThemedView style={styles.editContainer}>
              <Pressable onPress={() => handleModalVisibility('avatar', true)}>
                  <MaterialIcons name="mode-edit-outline" style={styles.editIcon} />
                </Pressable>
              </ThemedView>
            </ThemedView>
            <ThemedView style={[TabsMenuStyles.user, {marginTop: 40, width: 275}]}>
              <ThemedView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TextInput placeholder={i18n.t('name_placeholder')}
                           value={profile.name}
                           onChangeText={handleText}
                           placeholderTextColor={Colors.light.text}
                           accessibilityLabel={'USER_LABEL'}
                           inputMode='text'
                           maxLength={15}
                           style={[styles.input, Platform.OS !== 'web' && {top: 0, paddingRight: 6}]}
                          />
                <MaterialIcons name="edit" style={styles.editInput} />
              </ThemedView>
            </ThemedView>
            
            <TouchableOpacity onPress={goToCollection}>
              <ThemedView style={[TabsMenuStyles.user, {marginTop: 16, width: 275}]}>
                <ThemedView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <MaterialIcons name="style" style={[
                      styles.editInput, 
                      {fontSize: 23, right: 'auto', left: 12, top: 6}, i18n.locale === 'ja' && {top: 9},
                      Platform.OS === 'android' && {top: 5}
                    ]} />
                  <ThemedText style={[
                      styles.input, {fontSize: 14, width: 207, paddingVertical: 8, left: 34},
                      i18n.locale === 'ja' && {top: 1},
                    ]}>{i18n.t('my_collection')}</ThemedText>
                  <ThemedText style={[
                    {textAlign: 'right', minWidth: 50}, Platform.OS === 'android' && {top: -1}
                    ]}>{collection}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </TouchableOpacity>

            <ThemedView style={[styles.separator, {marginTop: 22}]}></ThemedView>

            <ThemedView style={[TabsMenuStyles.user, {marginTop: 20, width: 275, gap: 0}]}>
              <Image source={COIN_MAP[profile.coin]} 
                    style={TabsMenuStyles.avatar}>
              </Image>
              <Pressable style={{flex: 1}} 
                        onPress={() => handleModalVisibility('coin', true)}
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
            
            <ThemedView style={[{width: '100%', flex: 1, marginTop: 32, alignItems: 'center'}]}>
              <ThemedText style={{fontSize: 13, height: 17}}>{i18n.t('best_card')}</ThemedText>

              <ThemedView style={styles.separator}></ThemedView>
                <ThemedView style={[
                    CardGridStyles.imageContainer, 
                    {marginTop: 12, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)', height: 279},
                    Boolean(!profile.best) && {opacity: 0.8} 
                  ]}>
                  <ThemedView style={{flex: 1, backgroundColor: 'white'}}>
                    <TouchableOpacity onPress={() => handleModalVisibility('best', true)} 
                                      style={styles.previewCard}>
                      { profile.best ? 
                        <>
                          <Image style={[
                              CardGridStyles.image, 
                              {width: 200}
                            ]} 
                          source={{uri: getImageLanguage(lang, profile.best)}}
                          placeholder={BACKWARD_CARD}/>        
                        </> : <MaterialIcons name="add" style={createDeckStyles.addIcon}></MaterialIcons>
                      }
                    </TouchableOpacity>
                  </ThemedView>
                </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      <Portal>
        { modalVisibility.avatar && 
          <PickAvatarMenu isVisible={modalVisibility.avatar}
                          onClose={() => handleClose('avatar')}/> }
      </Portal>
      <Portal>
        { modalVisibility.coin && 
          <PickCoinMenu isVisible={modalVisibility.coin}
                        onClose={() => handleClose('coin')}/> }
      </Portal>
      <Portal>
        { modalVisibility.best && 
          <PickBestMenu cards={state.cardState.cards} 
                        language={state.settingsState.language}
                        isVisible={modalVisibility.best}
                        onClose={() => handleClose('best')}/>
        }
      </Portal>
    </>
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
    fontSize: 16,
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
    top: 7, 
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
    width: 200, 
    justifyContent: 'center', 
    alignItems: 'center', 
    aspectRatio: 367/512
  }
});


