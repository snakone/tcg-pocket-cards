import { Tabs } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Platform, Pressable, PressableAndroidRippleConfig, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import * as NavigationBar from 'expo-navigation-bar';
import { Portal, Provider } from 'react-native-paper';

import { IconSymbol, SvgStackSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';
import { ThemedText } from '@/components/ThemedText';
import { CHANGE_VIEW } from '@/shared/definitions/sentences/path.sentences';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const menuWidth = 250;

export default function TabLayout() {

  const audio = useRef<Audio.Sound>();

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  const menuRight = useSharedValue(menuWidth);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(CHANGE_VIEW);
      audio.current = sound;
    }

    loadSound();
  }, []);

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: menuRight.value },
      ]
    };
  });

  useEffect(() => {
    if (Platform.OS === 'web') {
      menuRight.value = 0;
      return; 
    }
    if (isModalVisible) {
      menuRight.value = withTiming(0, { duration: 150 });
    } else { menuRight.value = 200; }
  }, [isModalVisible]);

  async function handleModal(value: boolean): Promise<void> {
    await playSound();
    setIsModalVisible(value);
  }

  return (
    <Provider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.tint,
          headerShown: false,
          tabBarLabel: '',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {
              boxShadow: '0px -4px 16px rgba(0, 0, 0, 0.2)'
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
                              style={tabButtonStyles.icon} />,
            animation: 'shift'
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => 
              <IconSymbol name="newspaper.fill" 
                          color={color}
                          style={tabButtonStyles.icon} />,
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
                         android_ripple={rippleConfig}>
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
            <>
            <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                      style={StyleSheet.absoluteFill} 
                      tint="light" 
                      experimentalBlurMethod='dimezisBlurView'/>
            <Pressable style={styles.overlay} 
                       onPress={() => setIsModalVisible(false)}>
            </Pressable>
            <Animated.View style={[menuStyles.container, menuAnimatedStyle]}>
              <ThemedText>HELLO</ThemedText>
            </Animated.View>
            </>
          )}
      </Portal>
    </Provider>
  );
}

const tabButtonStyles = StyleSheet.create({
  icon: {
    marginTop: 7,
    fontSize: 24
  },
});

const customTabButtonStyles = StyleSheet.create({
  icon: {
    fontSize: 24,
    justifyContent: 'center', 
    marginTop: Platform.OS === 'web' ? 6 : 8,
    marginLeft: Platform.OS === 'web' ? 3 : 28,
    display: 'flex'
  },
});

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    position: 'absolute'
  },
});

const menuStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: menuWidth,
    height: 425,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    right: 0,
    bottom: 60,
    overflow: 'hidden',
    paddingInline: 24,
    paddingBlock: 42 
  },
});

const rippleConfig: PressableAndroidRippleConfig = {
  color: 'rgba(0, 0, 0, .32)', 
  borderless: true, 
  foreground: false, 
  radius: 58
}
