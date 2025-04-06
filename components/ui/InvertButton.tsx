import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';

import { Colors } from '@/shared/definitions/utils/colors';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface InvertButtonProps {
  onClick: () => void,
  styles?: any
}

const InvertButton = ({
  onClick,
  styles = {}
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
      style={[{height: 20}, styles]}
      onPress={handlePress}
    >
      <ThemedView style={{flexDirection: 'row', left: -16}}>
        <Animated.View style={[{
          width: 20, 
          height: 20, 
          position: 'relative', 
          left: -9, 
          top: -1
        }, animatedStyle
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