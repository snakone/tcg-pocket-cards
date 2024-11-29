import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Observable, Subscription } from 'rxjs';

import { ThemedText } from '../ThemedText';
import { filterStyles } from '@/shared/styles/component.styles';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Sound } from 'expo-av/build/Audio';
import { AppContext } from '@/app/_layout';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';

interface StateButtonProps {
  children?: ReactNode,
  style?: StyleProp<ViewStyle>,
  label?: string,
  onPress?: Observable<boolean>,
  showLabel?: boolean,
  labelMargin?: boolean,
  sound: React.MutableRefObject<Sound | undefined>,
  color?: string,
  isImage?: boolean,
  propFilter: string,
  keyFilter: string | number,
  obj?: any
}

const StateButton = ({
  children, 
  style, 
  label, 
  onPress, 
  showLabel, 
  labelMargin, 
  sound, 
  color = '#444444',
  isImage = false,
  propFilter,
  keyFilter,
  obj
}: StateButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {i18n} = useI18n();

  const handlePress = () => {
    sound.current && sound.current.replayAsync();
    setPressed((prevPressed) => !prevPressed);
    if(obj?.current) {
      obj.current[propFilter][keyFilter] = !pressed;
    }
  };

  useEffect(() => {
    const sub: Subscription | undefined = onPress?.subscribe(() => {
      setPressed((prevPressed) => {
        if(obj?.current) {
          obj.current[propFilter][keyFilter] = !prevPressed;
        }
        return !prevPressed
      });
    })

    return () => {
      sub?.unsubscribe();
    }
  }, [])

  return (
    <TouchableOpacity
      style={[
        style,
        pressed && { backgroundColor: color },
        isImage && { opacity: 0.6 },
        pressed && isImage && { opacity: 1}
      ]}
      onPress={handlePress}
    >
      {children}
      {
      showLabel && 
      <ThemedText style={[
        filterStyles.buttonText, 
        labelMargin && {left: 8}, 
        pressed && {color: 'white'}]}>{i18n.t(label || '')}
      </ThemedText>}
    </TouchableOpacity>
  );
};

export default StateButton;