import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, Pressable } from 'react-native';

import SoundService from '@/core/services/sounds.service';
import { ModalRxjs } from '@/core/rxjs/ModalRxjs';
import { useI18n } from '@/core/providers/LanguageProvider';

import { RIPPLE_CONFIG } from '@/shared/definitions/utils/constants';
import { CustomTabButtonStyles, TabButtonStyles } from '@/shared/styles/component.styles';

import { IconSymbol, SvgStackSymbol, SvgStylusSymbol, SvgTradeSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {
  console.log('Tabs')
  const [isMobileEmulator, setIsMobileEmulator] = useState(false);
  const {i18n} = useI18n();

  useEffect(() => {
    if (Platform.OS === 'web' && window && window.devicePixelRatio > 1) {
      setIsMobileEmulator(true);
    }
  }, []);

  function handleMenu(value: boolean): void {
    ModalRxjs.setMenuVisibility(value);
  }

  const playSound = async () => {
    await SoundService.play('CHANGE_VIEW');
  };

  const emulatorStyle = () => Platform.OS === 'web' && !isMobileEmulator;
  const emulatorStyleNot = () => Platform.OS === 'web' && window.innerWidth < 1500;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'skyblue',
          tabBarHideOnKeyboard: false,
          freezeOnBlur: true,
          animation: 'none',
          headerShown: false,
          tabBarLabel: '',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {
              boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.2)'
            },
          }),
        }}
        screenListeners={({navigation, route}) => ({
          tabPress: async (e) => {
            const state = navigation.getState();
            const currentRoute = state.routes[state.index].name;
            currentRoute === route.name ? e.preventDefault() : await playSound();
          },
        })}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => 
            <IconSymbol name="house.fill" 
                        color={color}
                        style={[
                          TabButtonStyles.icon, 
                          emulatorStyleNot() ? {top: 0} : emulatorStyle() && {top: -5}]} />,
            title: i18n.t('home')
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            title: i18n.t('cards'),
            tabBarIcon: ({ color }) => 
              <SvgStackSymbol color={color} 
                              style={[
                                TabButtonStyles.stacks, 
                                emulatorStyleNot() ? {top: 2} : emulatorStyle() && {top: -3, left: 4}]} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => 
              <SvgStylusSymbol color={color}
                               style={[
                                TabButtonStyles.stylus, 
                                emulatorStyleNot() ? {top: 2} : emulatorStyle() && {top: -3, left: 4}]} />,
            title: i18n.t('create')
          }}
        />
        <Tabs.Screen
          name="trade"
          options={{
            tabBarIcon: ({ color }) =>
              <SvgTradeSymbol color={color}
                              style={[
                                TabButtonStyles.trade, 
                                emulatorStyleNot() ? {top: 5} : emulatorStyle() && {top: 1, left: 3}, 
                                Platform.OS !== 'web' && {top: 5}]} />,
            title: i18n.t('trade')
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarButton: () => (
              <Pressable onPress={() => handleMenu(true)} 
                         style={{padding: 5, flex: 1}} 
                         android_ripple={RIPPLE_CONFIG}>
                <IconSymbol name="menubar.rectangle" 
                            color={'#8E8E8F'}
                            style={[CustomTabButtonStyles.icon, emulatorStyle() && {top: -1}]} />
              </Pressable>
            ),
          }}
        />
        {/* MENU LINKS */}
        <Tabs.Screen
          name="profile"
          options={{
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('profile')
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('news')
          }}
        />
        <Tabs.Screen
          name="share"
          options={{
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('share')
          }}
        />
        <Tabs.Screen
          name="infographics"
          options={{
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('infographics')
          }}
        />
        <Tabs.Screen
          name="attacks"
          options={{
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('attacks')
          }}
        />
        <Tabs.Screen
          name="games"
          options={{
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('games')
          }}
        />
      </Tabs>
    </>
  );
}

