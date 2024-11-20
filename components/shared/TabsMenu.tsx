import { StyleSheet, Image, Animated, Platform, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

import { layoutStyles, menuStyles } from '@/shared/styles/component.styles';
import { TabMenu } from '@/shared/definitions/interfaces/layout.interfaces';
import { ThemedText } from '../ThemedText';

export default function TabsMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;
  
  return (
    <>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={layoutStyles.overlay} 
                 onPress={() => onClose()}>
      </Pressable>
      <Animated.View style={[menuStyles.container, animatedStyle]}>
        <ThemedText>HELLO</ThemedText>
      </Animated.View>
    </>
  )
}