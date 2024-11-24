import { Tabs } from 'expo-router';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Platform, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Portal, Provider } from 'react-native-paper';

import { IconSymbol, SvgStackSymbol, SvgStylusSymbol } from '@/components/ui/IconSymbol';
import { CHANGE_VIEW } from '@/shared/definitions/sentences/path.sentences';
import { FILTER_CARDS_HEIGHT, MENU_WIDTH, RIPPLE_CONFIG } from '@/shared/definitions/utils/contants';
import { CustomTabButtonStyles, TabButtonStyles } from '@/shared/styles/component.styles';
import TabsMenu from '@/components/shared/TabsMenu';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import { AppContext } from '../_layout';
import SortCardMenu from '@/components/shared/SortCardMenu';
import FilterCardMenu from '@/components/shared/FilterCardMenu';

export default function TabLayout() {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const audio = useRef<Audio.Sound>();
  const menuRight = useSharedValue(MENU_WIDTH);
  const distanceFromBottom = useSharedValue(FILTER_CARDS_HEIGHT);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // MENU
  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: menuRight.value }]
    };
  });

  useEffect(() => {
    if (Platform.OS === 'web') {
      menuRight.value = 0;
      return;
    }
    menuRight.value = isModalVisible ? withTiming(0, { duration: 150 }) : MENU_WIDTH;
  }, [isModalVisible]);

  const memoizedMenu = useMemo(() => {
    return <TabsMenu isVisible={isModalVisible} 
                     animatedStyle={menuAnimatedStyle} 
                     onClose={() => setIsModalVisible(false)} />;
  }, [isModalVisible, menuAnimatedStyle]);

  // SORT CARDS
  const modalAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: distanceFromBottom.value }]
    };
  });

  useEffect(() => {
    distanceFromBottom.value = isSortVisible || isFilterVisible ? 
                          withTiming(0, { duration: 150 }) : 
                          FILTER_CARDS_HEIGHT;
  }, [isSortVisible, isFilterVisible]);

  const memoizedSort = useMemo(() => {
    return <SortCardMenu isVisible={isSortVisible} 
                         animatedStyle={modalAnimatedStyle} 
                         onClose={onClose}/>
  }, [isSortVisible, modalAnimatedStyle]);

  const memoizedFilter = useMemo(() => {
    return <FilterCardMenu isVisible={isFilterVisible} 
                           animatedStyle={modalAnimatedStyle} 
                           onClose={onClose}/>
  }, [isFilterVisible, modalAnimatedStyle]);

  useEffect(() => {
    setIsSortVisible(state.modalState.sort_opened);
  }, [state.modalState.sort_opened]);

  useEffect(() => {
    setIsFilterVisible(state.modalState.filter_opened);
  }, [state.modalState.filter_opened]);

  function handleModal(value: boolean): void {
    setIsModalVisible(value);
    playSound();
  }

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  function onClose(): void {
    setIsSortVisible(false);
    setIsFilterVisible(false);
    dispatch({type: 'CLOSE_MODALS'});
  }

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(CHANGE_VIEW);
      audio.current = sound;
    }

    loadSound();
  }, []);

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
                        style={TabButtonStyles.icon} />,
            animation: 'shift'
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            title: 'Cartas',
            tabBarIcon: ({ color }) => 
              <SvgStackSymbol color={color} 
                              style={TabButtonStyles.stacks} />,
            animation: 'shift'
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => 
              <SvgStylusSymbol color={color}
                               style={TabButtonStyles.stylus} />,
            animation: 'shift'
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            animation: 'shift',
            tabBarButton: () => (
              <Pressable onPress={() => handleModal(true)} 
                         style={{padding: 5, flex: 1}} 
                         android_ripple={RIPPLE_CONFIG}>
                <IconSymbol name="menubar.rectangle" 
                            color={'#8E8E8F'}
                            style={CustomTabButtonStyles.icon} />
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            animation: 'shift',
            tabBarItemStyle: {
              display: 'none'
            },
            tabBarButton: () => null,
          }}
        />
      </Tabs>
      <Portal>{isModalVisible && memoizedMenu}</Portal>
      <Portal>{isSortVisible && memoizedSort}</Portal>
      <Portal>{isFilterVisible && memoizedFilter}</Portal>
    </Provider>
  );
}

