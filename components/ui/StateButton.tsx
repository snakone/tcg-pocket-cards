import React, { ReactNode, useEffect, useState } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Observable, Subscription } from 'rxjs';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';

import { ThemedText } from '../ThemedText';
import { filterStyles } from '@/shared/styles/component.styles';
import { FilterSearch } from '@/shared/definitions/classes/filter.class';
import { FilterAttackSearch } from '@/shared/definitions/classes/filter_attack.class';

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
  onClick?: () => void,
  filterObj?: React.MutableRefObject<FilterSearch | FilterAttackSearch>,
  disabled?: boolean
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
  filterObj,
  onClick,
  disabled = false
}: StateButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const {i18n} = useI18n();

  const handlePress = () => {
    SoundService.play('POP_PICK');
    if(onClick !== undefined) onClick();
    setPressed((prevPressed) => !prevPressed);
    if(filterObj?.current) {
      const value = !pressed || null;
      (filterObj.current as any)[propFilter][keyFilter] = value;
    }
  };

  useEffect(() => {
    if (filterObj && (filterObj?.current as any)[propFilter][keyFilter] === true) {
      setPressed(true);
    }

    const sub: Subscription | undefined = onPress?.subscribe(() => {
      setPressed((prevPressed) => {
        if(filterObj?.current) {
          const value = !prevPressed || null;
          (filterObj.current as any)[propFilter][keyFilter] = value;
        }
        return !prevPressed
      });
    })

    return () => {
      sub?.unsubscribe();
    }
  }, []);

  return (
    <TouchableOpacity
      style={[
        style,
        (pressed || filterObj && (filterObj?.current as any)[propFilter][keyFilter]) && { backgroundColor: color },
        isImage && { opacity: 0.5 },
        (pressed || filterObj && (filterObj?.current as any)[propFilter][keyFilter]) && isImage && { opacity: 1 }
      ]}
      onPress={handlePress}
      disabled={disabled} 
    >
      {children}
      {
      showLabel && 
      <ThemedText style={[
        filterStyles.buttonText, 
        labelMargin && {left: 18}, 
        (pressed || filterObj && (filterObj?.current as any)[propFilter][keyFilter]) && {color: 'white'}]}>{i18n.t(label || '')}
      </ThemedText>}
    </TouchableOpacity>
  );
};

export default StateButton;