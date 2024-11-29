import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { ThemedText } from '../ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Sound } from 'expo-av/build/Audio';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '../ThemedView';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '@/shared/definitions/utils/colors';

interface InvertButtonProps {
  sound: React.MutableRefObject<Sound | undefined>,
  onClick: () => void
}

const InvertButton = ({
  sound,
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
    sound.current && sound.current.replayAsync();
    onClick();
  };

  return (
    <TouchableOpacity
      style={{height: 20}}
      onPress={handlePress}
    >
      <ThemedView style={{flexDirection: 'row'}}>
        <Animated.View style={[{
          width: 20, 
          height: 20, 
          position: 'relative', 
          left: -7, 
          top: 3}, animatedStyle
        ]}>
          <MaterialIcons name="sync" 
                            size={20} 
                            color={color}
                            style={{width: 20, height: 20}}>   
            </MaterialIcons>
        </Animated.View>

        <ThemedText>Invertir</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default InvertButton;