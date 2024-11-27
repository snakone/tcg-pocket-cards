import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Subscription } from 'rxjs';

import { ThemedText } from '../ThemedText';
import { filterStyles } from '@/shared/styles/component.styles';
import { useI18n } from '@/core/providers/LanguageProvider';

const StateButton = ({children, style, label, onPress, showLabel, labelMargin}: any) => {
  const [pressed, setPressed] = useState(false);
  const {i18n} = useI18n();

  const handlePress = () => {
    setPressed((prevPressed) => !prevPressed);
  };

  useEffect(() => {
    const sub: Subscription = onPress?.subscribe(() => {
      handlePress();
    })

    return () => {
      sub?.unsubscribe();
    }
  }, [])

  return (
    <TouchableOpacity
      style={[
        style,
        pressed && { backgroundColor: '#444444' }
      ]}
      onPress={handlePress}
    >
      {children}
      {
      showLabel && 
      <ThemedText style={[
        filterStyles.buttonText, 
        labelMargin && {left: 8}, 
        pressed && {color: 'white'}]}>{i18n.t(label)}
      </ThemedText>}
    </TouchableOpacity>
  );
};

export default StateButton;