import { StyleSheet, Platform, Pressable, View, FlatList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useRef, useEffect, useState } from 'react';
import { Audio } from 'expo-av';

import { LayoutStyles, MenuStyles, TabsMenuStyles } from '@/shared/styles/component.styles';
import { TabMenu } from '@/shared/definitions/interfaces/layout.interfaces';
import { IconSymbolName } from '@/shared/definitions/utils/switches';
import { CHANGE_VIEW } from '@/shared/definitions/sentences/path.sentences';
import { ThemedText } from '../ThemedText';
import { IconSymbol } from '../ui/IconSymbol';

export default function TabsMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;

  const router = useRouter();
  const [progress, setProgress] = useState(false);
  const fillProgress = useSharedValue(0.26);
  const audio = useRef<Audio.Sound>();

  const startAnimation = () => {
    fillProgress.value = withTiming(1, {
      duration: 1200,
      easing: Easing.poly(1.2),
    }, function (isFinished) {
      if (isFinished !== undefined) {
        runOnJS(setProgress)(isFinished);
      }
    });
  };

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  const handleRoute = async (route: string) => {
    await playSound();
    switch(route) {
      case 'help': router.push('/screens/help');
       break;
      case 'settings': router.push('/screens/settings');
       break;
    }
    onClose();
  }

  const animatedFillStyle = useAnimatedStyle(() => {
    return {
      width: `${fillProgress.value * 100}%`,
    };
  });

  useEffect(() => {
    if(progress) {
      playSound();
      onClose();
      setTimeout(() => {
        router.push('/profile')
      }, 100);
    }
  }, [progress])

  const resetAnimation = () => {
    fillProgress.value = withTiming(0.26, {
      duration: 300,
      easing: Easing.out(Easing.ease),
    });
  };

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(CHANGE_VIEW);
      audio.current = sound;
    }

    loadSound();
  }, []);

  const LIST = [
    { label: 'Mazos', icon: 'wind', route: '' },
    { label: 'Favoritos', icon: 'star', route: '' },
  ];

  const HELP = [
    { label: 'Configuración', icon: 'washer.circle', route: 'settings' },
    { label: 'Ayuda', icon: 'questionmark.app.fill', route: 'help' },
  ];

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
                   onPressOut={resetAnimation}>
          <Animated.View style={[TabsMenuStyles.container, animatedFillStyle]} 
          />
          <View style={TabsMenuStyles.user}>
            <Image source={require("@/assets/images/coins/eevee.png")} 
                   style={TabsMenuStyles.avatar}>
            </Image>
            <View style={{paddingInline: 18}}>
              <ThemedText type='defaultSemiBold' style={{zIndex: 4}}>Alejandra2346</ThemedText>
            </View>
          </View>
        </Pressable>
        <View>
          <FlatList data={LIST}
                    style={{paddingBlock: 24, paddingInline: 10}}
                    renderItem={({item}) => 
            <View style={TabsMenuStyles.listItem}>
              <IconSymbol name={item.icon as IconSymbolName} 
                          style={TabsMenuStyles.listIcon}/>
              <TouchableOpacity style={{width: '100%'}} onPress={() => handleRoute(item.route)}>
                <ThemedText style={TabsMenuStyles.listLabel}>{item.label}</ThemedText>
              </TouchableOpacity>
            </View>}>
          </FlatList>
          <View style={TabsMenuStyles.separator}></View>
          <FlatList data={HELP}
                    style={{paddingBlock: 24, paddingInline: 10}}
                    renderItem={({item}) => 
            <View style={TabsMenuStyles.itemSmall}>
              <IconSymbol name={item.icon as IconSymbolName} 
                          style={TabsMenuStyles.iconSmall}/>
              <TouchableOpacity style={{width: '100%'}} onPress={() => handleRoute(item.route)}>
                <ThemedText style={TabsMenuStyles.labelSmall}>{item.label}</ThemedText>
              </TouchableOpacity>
            </View>}>
          </FlatList>
          <View style={[TabsMenuStyles.separator, {height: 1.1}]}></View>
        </View>
      </Animated.View>
    </>
  )
}