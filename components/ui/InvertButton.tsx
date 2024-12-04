import React, { useState } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio';

import { ThemedText } from '../ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { ThemedView } from '../ThemedView';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '@/shared/definitions/utils/colors';
import SoundService from '@/core/services/sounds.service';

interface InvertButtonProps {
  onClick: () => void
}

const InvertButton = ({
  onClick
}: InvertButtonProps) => {
  const {i18n} = useI18n();

  const rotation = useSharedValue(0);
  const [color, setColor] = useState(Colors.light.text);

  const rotate = () => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, { duration: 300 });
    setColor(prevColor => (prevColor === Colors.light.text ? 'skyblue' : Colors.light.text));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const handlePress = () => {
    rotate();
    SoundService.play('POP_PICK');
    onClick();
  };

  return (
    <Pressable
      style={{height: 20}}
      onPress={handlePress}
    >
      <ThemedView style={{flexDirection: 'row', left: -16}}>
        <Animated.View style={[{
          width: 20, 
          height: 20, 
          position: 'relative', 
          left: -9, 
          top: 1}, animatedStyle
        ]}>
          <MaterialIcons name="sync" 
                            size={20} 
                            color={color}
                            style={{width: 20, height: 20}}>   
            </MaterialIcons>
        </Animated.View>

        <ThemedText style={{fontSize: 14, position: 'relative', top: -2}}>{i18n.t('invert')}</ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default InvertButton;