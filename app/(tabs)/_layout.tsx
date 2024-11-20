import { Tabs } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Platform, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Portal, Provider } from 'react-native-paper';

import { IconSymbol, SvgStackSymbol, SvgStylusSymbol } from '@/components/ui/IconSymbol';
import { CHANGE_VIEW } from '@/shared/definitions/sentences/path.sentences';
import { MENU_WIDTH, RIPPLE_CONFIG } from '@/shared/definitions/utils/contants';
import { customTabButtonStyles, tabButtonStyles } from '@/shared/styles/component.styles';
import TabsMenu from '@/components/shared/TabsMenu';

export default function TabLayout() {

  const audio = useRef<Audio.Sound>();
  const menuRight = useSharedValue(MENU_WIDTH);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: menuRight.value },
      ]
    };
  });

  async function handleModal(value: boolean): Promise<void> {
    await playSound();
    setIsModalVisible(value);
  }

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(CHANGE_VIEW);
      audio.current = sound;
    }

    loadSound();
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web') {
      menuRight.value = 0;
      return; 
    }
    if (isModalVisible) {
      menuRight.value = withTiming(0, { duration: 150 });
    } else { menuRight.value = MENU_WIDTH; }
  }, [isModalVisible]);

  return (
    <Provider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'skyblue',
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
                        style={tabButtonStyles.icon} />,
            animation: 'shift'
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            title: 'Cartas',
            tabBarIcon: ({ color }) => 
              <SvgStackSymbol color={color} 
                              style={tabButtonStyles.stacks} />,
            animation: 'shift'
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => 
              <SvgStylusSymbol color={color}
                               style={tabButtonStyles.stylus} />,
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
                            style={customTabButtonStyles.icon} />
              </Pressable>
            ),
          }}
        />
      </Tabs>
      <Portal>
          {isModalVisible && (
            <TabsMenu isVisible={isModalVisible} 
                      animatedStyle={menuAnimatedStyle} 
                      onClose={() => setIsModalVisible(false)}> 
            </TabsMenu>
          )}
      </Portal>
    </Provider>
  );
}

