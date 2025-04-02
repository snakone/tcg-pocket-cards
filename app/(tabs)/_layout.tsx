import { Tabs } from 'expo-router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Platform, Pressable } from 'react-native';
import { Portal, Provider } from 'react-native-paper';
import { map } from 'rxjs';

import SoundService from '@/core/services/sounds.service';
import { ModalRxjs } from '@/core/rxjs/ModalRxjs';
import { useI18n } from '@/core/providers/LanguageProvider';

import { AppContext } from '../_layout';
import { FILTER_CARDS_HEIGHT, MENU_WIDTH, MODAL_KEYS, RIPPLE_CONFIG } from '@/shared/definitions/utils/constants';
import { CustomTabButtonStyles, TabButtonStyles } from '@/shared/styles/component.styles';
import { ModalType } from '@/shared/definitions/types/global.types';

import { IconSymbol, SvgStackSymbol, SvgStylusSymbol, SvgTradeSymbol } from '@/components/ui/IconSymbol';
import TabsMenu from '@/components/shared/TabsMenu';
import FilterCardMenu from '@/components/shared/cards/FilterCardMenu';
import SortCardMenu from '@/components/shared/cards/SortCardMenu';
import PickAvatarMenu from '@/components/dedicated/profile/PickAvatarMenu';
import PickCoinMenu from '@/components/dedicated/profile/PickCoinMenu';
import PickBestMenu from '@/components/dedicated/profile/PickBestMenu';
import FilterAttackMenu from '@/components/shared/attacks/FilterAttackMenu';
import SortAttackMenu from '@/components/shared/attacks/SortAttackMenu';

export default function TabLayout() {
  const distanceFromBottom = useSharedValue(FILTER_CARDS_HEIGHT);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAvatarVisible, setIsAvatarVisible] = useState(false);
  const [isCoinVisible, setIsCoinVisible] = useState(false);
  const [isBestVisible, setIsBestVisible] = useState(false);
  const [isMobileEmulator, setIsMobileEmulator] = useState(false);

  const [modalVisibility, setModalVisivility] = useState<Record<ModalType, boolean>>({
    cards: false,
    attacks: false,
    cardsSort: false,
    attacksSort: false,
    avatar: false,
    coin: false,
    best: false
  });

  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const menuRight = useSharedValue(MENU_WIDTH);
  const {i18n} = useI18n();

  // MENU
  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: menuRight.value }]
    };
  });

  useEffect(() => { 
    if (Platform.OS === 'web') {
      menuRight.value = withTiming(0, { duration: 0 });
    }
    menuRight.value = isMenuVisible ? withTiming(0, { duration: 150 }) : MENU_WIDTH;
  }, [isMenuVisible]);

  const memoizedMenu = useMemo(() => {
    return <TabsMenu isVisible={isMenuVisible} 
                     animatedStyle={menuAnimatedStyle} 
                     onClose={() => setIsMenuVisible(false)} />;
  }, [isMenuVisible]);

  // SORT CARDS
  const modalAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: distanceFromBottom.value }]
    };
  });

  useEffect(() => {
    if (Platform.OS === 'web' && window && window.devicePixelRatio > 1) {
      setIsMobileEmulator(true);
    }
  }, []);

  function isAnyModalVisible(): boolean {
    return Object.values(modalVisibility).some(Boolean);
  }

  useEffect(() => {
    distanceFromBottom.value = isAnyModalVisible() ? 
                                withTiming(0, { duration: 150 }) : 
                                withTiming(FILTER_CARDS_HEIGHT, { duration: 0 });
  }, [isAnyModalVisible()]);


  const memoizedPickAvatar = useMemo(() => {
    return <PickAvatarMenu isVisible={isAvatarVisible} 
                           animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle} 
                           onClose={onClose}/>
  }, [isAvatarVisible]);

  const memoizedPickCoin = useMemo(() => {
    return <PickCoinMenu isVisible={isCoinVisible} 
                         animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle} 
                         onClose={onClose}/>
  }, [isCoinVisible]);

  const memoizedPickBest = useMemo(() => {
    return <PickBestMenu isVisible={isBestVisible} 
                         animatedStyle={{}} 
                         onClose={onClose}/>
  }, [isBestVisible]);

  useEffect(() => {
    const sub = ModalRxjs.getAllRefs()
      .pipe(
        map(values =>
          Object.fromEntries(
            MODAL_KEYS.map((key, i) => [key, values[i]])
          ) as Record<ModalType, boolean>
        )
      ).subscribe(setModalVisivility);

    return (() => {
      if (sub) sub.unsubscribe()
    })
  }, []);

  useEffect(() => {
    setIsAvatarVisible(state.modalState.avatar_opened);
  }, [state.modalState.avatar_opened]);

  useEffect(() => {
    setIsCoinVisible(state.modalState.coin_opened);
  }, [state.modalState.coin_opened]);

  useEffect(() => {
    setIsBestVisible(state.modalState.best_opened);
  }, [state.modalState.best_opened]);

  function handleMenu(value: boolean): void {
    setIsMenuVisible(value);
    playSound();
  }

  const playSound = async () => {
    await SoundService.play('CHANGE_VIEW');
  };

  function onClose(): void {
    setIsAvatarVisible(false);
    setIsCoinVisible(false);
    setIsBestVisible(false);
  }

  const emulatorStyle = () => Platform.OS === 'web' && !isMobileEmulator;
  const emulatorStyleNot = () => Platform.OS === 'web' && window.innerWidth < 1500;

  return (
    <Provider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'skyblue',
          tabBarHideOnKeyboard: false,
          freezeOnBlur: true,
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
            animation: 'shift',
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
            animation: 'shift',
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
            animation: 'shift',
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
            animation: 'shift',
            title: i18n.t('trade')
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            animation: 'shift',
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
            animation: 'shift',
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
            animation: 'shift',
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
            animation: 'shift',
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('share')
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            animation: 'shift',
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('favorites')
          }}
        />
        <Tabs.Screen
          name="infographics"
          options={{
            animation: 'shift',
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
            animation: 'shift',
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
            animation: 'shift',
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
            title: i18n.t('games')
          }}
        />
      </Tabs>

      {/* // CARDS */}
      <Portal>{isMenuVisible && memoizedMenu}</Portal>
      <Portal>
        {modalVisibility.cards && 
          <FilterCardMenu animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle} 
                          filterKey={"cards"}/>}
      </Portal>
      <Portal>
        {modalVisibility.cardsSort && 
          <SortCardMenu animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle} 
                        filterKey={"cards"}/>}
      </Portal>

      {/* // PROFILE */}
      <Portal>{isAvatarVisible && memoizedPickAvatar}</Portal>
      <Portal>{isCoinVisible && memoizedPickCoin}</Portal>
      <Portal>{isBestVisible && memoizedPickBest}</Portal>

      {/* // ATTACKS */}
      <Portal>
        {modalVisibility.attacks && 
          <FilterAttackMenu animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle}
                            filterKey={"attacks"}/>}
      </Portal>
      <Portal>
        {modalVisibility.attacksSort && 
          <SortAttackMenu animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle} 
                          filterKey={"attacks"}/>}
      </Portal>
    </Provider>
  );
}

