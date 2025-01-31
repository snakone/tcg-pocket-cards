import { Tabs } from 'expo-router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Platform, Pressable } from 'react-native';
import { Portal, Provider } from 'react-native-paper';

import { AppContext } from '../_layout';
import { IconSymbol, SvgStackSymbol, SvgStylusSymbol, SvgTradeSymbol } from '@/components/ui/IconSymbol';
import { FILTER_CARDS_HEIGHT, MENU_WIDTH, RIPPLE_CONFIG } from '@/shared/definitions/utils/constants';
import { CustomTabButtonStyles, TabButtonStyles } from '@/shared/styles/component.styles';
import TabsMenu from '@/components/shared/TabsMenu';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import FilterCardMenu from '@/components/shared/cards/FilterCardMenu';
import SortCardMenu from '@/components/shared/cards/SortCardMenu';
import SoundService from '@/core/services/sounds.service';
import { useI18n } from '@/core/providers/LanguageProvider';
import PickAvatarMenu from '@/components/dedicated/profile/PickAvatarMenu';
import PickCoinMenu from '@/components/dedicated/profile/PickCoinMenu';
import PickBestMenu from '@/components/dedicated/profile/PickBestMenu';

export default function TabLayout() {
  const distanceFromBottom = useSharedValue(FILTER_CARDS_HEIGHT);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isAvatarVisible, setIsAvatarVisible] = useState(false);
  const [isCoinVisible, setIsCoinVisible] = useState(false);
  const [isBestVisible, setIsBestVisible] = useState(false);
  const [isMobileEmulator, setIsMobileEmulator] = useState(false);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
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
    return isSortVisible || 
           isFilterVisible || 
           isAvatarVisible || 
           isCoinVisible || 
           isBestVisible;
  }

  useEffect(() => {
    distanceFromBottom.value = isAnyModalVisible() ? 
                                withTiming(0, { duration: 150 }) : 
                                withTiming(FILTER_CARDS_HEIGHT, { duration: 0 });
  }, [isSortVisible, isFilterVisible, isAvatarVisible, isCoinVisible, isBestVisible]);

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={isSortVisible} 
                         animatedStyle={Platform.OS !== 'web' && modalAnimatedStyle} 
                         onClose={onClose}/>
  }, [isSortVisible]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={isFilterVisible} 
                           animatedStyle={{}} 
                           onClose={onClose}/>
  }, [isFilterVisible]);

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
    setIsSortVisible(state.modalState.sort_opened);
  }, [state.modalState.sort_opened]);

  useEffect(() => {
    setIsFilterVisible(state.modalState.filter_opened);
  }, [state.modalState.filter_opened]);

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
    setIsSortVisible(false);
    setIsFilterVisible(false);
    setIsAvatarVisible(false);
    setIsCoinVisible(false);
    setIsBestVisible(false);
    dispatch({type: 'CLOSE_MODALS'});
  }

  const emulatorStyle = () => Platform.OS === 'web' && !isMobileEmulator;

  return (
    <Provider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'skyblue',
          tabBarHideOnKeyboard: false,
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
                        style={[TabButtonStyles.icon, emulatorStyle() && {top: -5}]} />,
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
                              style={[TabButtonStyles.stacks, emulatorStyle() && {top: -3, left: 4}]} />,
            animation: 'shift',
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => 
              <SvgStylusSymbol color={color}
                               style={[TabButtonStyles.stylus, emulatorStyle() && {top: -3, left: 4}]} />,
            animation: 'shift',
            title: i18n.t('create')
          }}
        />
        <Tabs.Screen
          name="trade"
          options={{
            tabBarIcon: ({ color }) =>
              <SvgTradeSymbol color={color}
                              style={[TabButtonStyles.trade, emulatorStyle() && {top: 0, left: 2}]} />,
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
      </Tabs>
      <Portal>{isMenuVisible && memoizedMenu}</Portal>
      <Portal>{isSortVisible && memoizedSort}</Portal>
      <Portal>{isFilterVisible && memoizedFilter}</Portal>
      <Portal>{isAvatarVisible && memoizedPickAvatar}</Portal>
      <Portal>{isCoinVisible && memoizedPickCoin}</Portal>
      <Portal>{isBestVisible && memoizedPickBest}</Portal>
    </Provider>
  );
}

