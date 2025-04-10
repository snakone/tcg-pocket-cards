import { StyleSheet, Platform, Pressable, View, FlatList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated from 'react-native-reanimated';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect, useState, useCallback } from 'react';
import React from 'react';

import Storage from '@/core/storage/storage.service';
import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';

import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';
import { LayoutStyles, MenuStyles, TabsMenuStyles, WebStyles } from '@/shared/styles/component.styles';
import { TabMenu } from '@/shared/definitions/interfaces/layout.interfaces';
import { MENU_LIST, MENU_HELP, COIN_MAP, DEFAULT_PROFILE, ROUTES_MAP } from '@/shared/definitions/utils/constants';
import { UserProfile } from '@/shared/definitions/interfaces/global.interfaces';
import { IconSymbolName } from '@/shared/definitions/utils/switches';
import { RouteKey } from '@/shared/definitions/types/global.types';
import { ThemedView } from '../ThemedView';

export default function TabsMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;
  const router = useRouter();
  const {i18n} = useI18n();
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile({...profile});
    };

    getProfile();
  }, []);

  const playSound = useCallback(async () => {
    await SoundService.play('CHANGE_VIEW');
  }, []);

  const handleRoute = async (route: RouteKey) => {
    onClose?.();
    await playSound();
  
    const targetRoute = ROUTES_MAP[route];
  
    if (targetRoute) {
      router.navigate(targetRoute);
    }
  };

  return (
    <ThemedView style={Platform.OS === 'web' ? [WebStyles.view, {boxShadow: 'none'}] : { flex: 1 }}>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => (onClose?.(), playSound())}>
      </Pressable>
      <Animated.View style={[MenuStyles.container, animatedStyle]}>
        <Pressable onPress={() => handleRoute('profile')}>
          <View style={TabsMenuStyles.user}>
            <Image source={COIN_MAP[profile.coin]} 
                  style={TabsMenuStyles.avatar}>
            </Image>
            <View style={{paddingInline: 18}}>
              <ThemedText type='defaultSemiBold' style={{zIndex: 4, textAlign: 'center', fontSize: 14}}>
                {profile.name || i18n.t('press_here')}
              </ThemedText>
            </View>
          </View>
        </Pressable>
        <View>
          <FlatList data={MENU_LIST}
                    style={[{paddingBlock: 22, paddingInline: 10}, Platform.OS !== 'web' && {paddingBottom: 20}]}
                    renderItem={({item}) => 
            <View style={TabsMenuStyles.listItem}>
              <IconSymbol name={item.icon as IconSymbolName} 
                          style={TabsMenuStyles.listIcon}/>
              <TouchableOpacity style={{width: '100%'}} onPress={() => handleRoute(item.route)}>
                <ThemedText style={TabsMenuStyles.listLabel}>{i18n.t(item.label)}</ThemedText>
              </TouchableOpacity>
            </View>
          }>
          </FlatList>

          <View style={TabsMenuStyles.separator}></View>

          <FlatList data={MENU_HELP}
                    style={{paddingBlock: 24, paddingInline: 10}}
                    renderItem={({item}) => 
            <View style={TabsMenuStyles.itemSmall}>
              <IconSymbol name={item.icon as IconSymbolName} 
                          style={[TabsMenuStyles.listIcon, {fontSize: 24}]}/>
              <TouchableOpacity style={{width: '100%'}} onPress={() => handleRoute(item.route)}>
                <ThemedText style={TabsMenuStyles.labelSmall}>{i18n.t(item.label)}</ThemedText>
              </TouchableOpacity>
            </View>}>
          </FlatList>
        </View>
      </Animated.View>
    </ThemedView>
  )
}