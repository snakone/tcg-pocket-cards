import { Tabs } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { IconSymbol, SvgStackSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {

  const audio = useRef<Audio.Sound>();

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(
        require("@/assets/sounds/change-view.mp3")
      );
      audio.current = sound;
    }

    loadSound();

    return () => {
      // Liberar recursos al desmontar
      if (audio.current) {
        audio.current.unloadAsync();
      }
    };
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
      screenListeners={({navigation, route}) => ({
        tabPress: async (e) => {
          const state = navigation.getState();
          const currentRoute = state.routes[state.index].name;

          if (currentRoute === route.name) {
            // Si ya estamos en el tab activo, evitar la acción
            e.preventDefault();
          } else {
            // Si no, reproducir sonido
            await playSound();
          }
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
    </Tabs>
  );
}

const tabButtonStyles = StyleSheet.create({
  icon: {
    marginTop: 7,
    fontSize: 24
  },
});
