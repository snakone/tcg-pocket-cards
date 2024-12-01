import React, { ReactNode, useEffect, useState } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Observable, Subscription } from 'rxjs';

import { ThemedText } from '../ThemedText';
import { filterStyles } from '@/shared/styles/component.styles';
import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';

interface StateButtonProps {
  children?: ReactNode,
  style?: StyleProp<ViewStyle>,
  label?: string,
  onPress?: Observable<boolean>,
  showLabel?: boolean,
  labelMargin?: boolean,
  color?: string,
  isImage?: boolean,
  propFilter: string,
  keyFilter: string | number,
  filterObj?: React.MutableRefObject<FilterSearch>
}

const StateButton = ({
  children, 
  style, 
  label, 
  onPress, 
  showLabel, 
  labelMargin, 
  color = '#444444',
  isImage = false,
  propFilter,
  keyFilter,
  filterObj
}: StateButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {i18n} = useI18n();

  const handlePress = () => {
    SoundService.play('POP_PICK');
    setPressed((prevPressed) => !prevPressed);
    if(filterObj?.current) {
      (filterObj.current as any)[propFilter][keyFilter] = !pressed;
    }
  };

  useEffect(() => {
    const sub: Subscription | undefined = onPress?.subscribe(() => {
      setPressed((prevPressed) => {
        if(filterObj?.current) {
          (filterObj.current as any)[propFilter][keyFilter] = !prevPressed;
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
        (pressed || (filterObj?.current as any)[propFilter][keyFilter]) && { backgroundColor: color },
        isImage && { opacity: 0.5 },
        (pressed || (filterObj?.current as any)[propFilter][keyFilter]) && isImage && { opacity: 1}
      ]}
      onPress={handlePress}
    >
      {children}
      {
      showLabel && 
      <ThemedText style={[
        filterStyles.buttonText, 
        labelMargin && {left: 8}, 
        (pressed || (filterObj?.current as any)[propFilter][keyFilter]) && {color: 'white'}]}>{i18n.t(label || '')}
      </ThemedText>}
    </TouchableOpacity>
  );
};

export default StateButton;