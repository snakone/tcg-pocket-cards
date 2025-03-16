import { StyleSheet, Platform, Pressable, View, FlatList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect, useState, useCallback } from 'react';

import { LayoutStyles, MenuStyles, TabsMenuStyles } from '@/shared/styles/component.styles';
import { TabMenu } from '@/shared/definitions/interfaces/layout.interfaces';
import { IconSymbolName } from '@/shared/definitions/utils/switches';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';
import { MENU_LIST, MENU_HELP, COIN_MAP } from '@/shared/definitions/utils/constants';
import { useI18n } from '../../core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import React from 'react';
import Storage from '@/core/storage/storage.service';
import { UserProfile } from '@/shared/definitions/interfaces/global.interfaces';

export default function TabsMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;
  const router = useRouter();
  const [progress, setProgress] = useState(false);
  const fillProgress = useSharedValue(0.26);
  const {i18n} = useI18n();
  const [list, setList] = useState(MENU_LIST);
  const [profile, setProfile] = useState<UserProfile>(
    {name: '', avatar: 'eevee', coin: 'eevee', best: null}
  );

  const startAnimation = () => {
    fillProgress.value = withTiming(1, {
      duration: 500,
      easing: Easing.poly(1.2),
    }, function (isFinished) {
      if (isFinished !== undefined) {
        runOnJS(setProgress)(isFinished);
      }
    });
  };

  const playSound = useCallback(async () => {
    await SoundService.play('CHANGE_VIEW');
  }, []);

  const handleRoute = async (route: string) => {
    onClose();
    await playSound();
    switch(route) {
      case 'news': router.push('/news');
        break;
      case 'favorites': router.push('/favorites');
        break;
      case 'share': router.push('/share');
        break;
      case 'infographics': router.push('/infographics');
        break;
      case 'help': router.push('/screens/help');
        break;
      case 'settings': router.push('/screens/settings');
        break;
      case 'attacks': router.push('/attacks');
        break;
      case 'games': router.push('/games');
        break;
    }
  }

  const animatedFillStyle = useAnimatedStyle(() => {
    return {
      width: `${fillProgress.value * 100}%`,
    };
  });

  useEffect(() => {
    if (Platform.OS === 'web') {
      setList(prev => ([...prev, { label: 'infographics', icon: 'info.bubble', route: 'infographics' }]));
    }
  }, []);

  useEffect(() => {
    if(progress) {
      playSound();
      onClose();
      setTimeout(() => {
        router.push('/profile')
      }, 50);
    }
  }, [progress]);

  useEffect(() => {
    const getProfile = async () => {
      const profile: UserProfile = await Storage.getProfile();
      setProfile(profile);
    };

    getProfile();
  }, []);

  const resetAnimation = () => {
    fillProgress.value = withTiming(0.26, {
      duration: 300,
      easing: Easing.out(Easing.ease),
    });
  };

  return (
    <>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => onClose()}>
      </Pressable>
      <Animated.View style={[MenuStyles.container, animatedStyle]}>
        <Pressable onPressIn={startAnimation}
                   onTouchStart={startAnimation}
                   onPressOut={resetAnimation}>
          <Animated.View style={[TabsMenuStyles.container, animatedFillStyle]} />
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
          <FlatList data={list}
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
    </>
  )
}