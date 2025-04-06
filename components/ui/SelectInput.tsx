import React, { useEffect, useRef, useState } from "react";
import { DimensionValue, Platform, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";

import { useI18n } from "@/core/providers/LanguageProvider";

import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

interface SelectInputProps {
  options: any[], 
  label: string, 
  onSelect: (value: any, index: number) => void,
  filterObj?: React.MutableRefObject<FilterSearch | FilterAttackSearch>,
  propFilter?: string,
  keyFilter?: string | number,
  dropDownStyle?: StyleProp<ViewStyle>,
  width?: number | string,
  height?: number,
  shadow?: boolean,
  textStyle?: StyleProp<TextStyle>,
  iconStyle?: StyleProp<TextStyle>,
  itemStyle?: StyleProp<ViewStyle>,
  translate?: boolean,
  autoScroll?: boolean
}

export default function SelectInput({
  options, 
  label, 
  onSelect, 
  filterObj,
  propFilter,
  keyFilter,
  height = 225,
  width = '45%',
  shadow = true,
  textStyle = {},
  iconStyle = {},
  itemStyle = {},
  translate = true,
  autoScroll = false
}: SelectInputProps) {
  const {i18n} = useI18n();
  const dropdownRef = useRef<SelectDropdown>(null);

  const [value, setValue] = useState(filterObj && propFilter && keyFilter && 
    ((filterObj.current as any)[propFilter][keyFilter] ?? keyFilter));

  useEffect(() => {
    const index = options.filter(x => x !== '---').findIndex(x => x === label);
    if (index !== -1) {
      dropdownRef.current?.selectIndex(index);
    }
  }, [label]);

  function handleClick(item: string | null, index: number): void {
    if (item === '---') {
      setValue(null);
      if (propFilter && keyFilter) {
        item = null;
      }
    }

    onSelect(item, index);
  }

  return (
    <SelectDropdown
      data={options}
      ref={dropdownRef}
      onSelect={handleClick}
      statusBarTranslucent={true}
      disableAutoScroll={!autoScroll}
      defaultValue={value}
      dropdownOverlayColor="transparent"
      showsVerticalScrollIndicator={false}
      dropdownStyle={{...styles.dropDown, height}}
      renderButton={(item, isOpened) => {
        const selected = filterObj && item && (item as string) !== '---';
        return (
          <ThemedView style={[
            filterStyles.button, 
            filterStyles.gridButton, {width}, 
            selected && {backgroundColor: '#444444'},
            !shadow && {boxShadow: 'none'},
          ]}>
            <ThemedText style={[filterStyles.buttonText, selected && {color: 'white'}, textStyle]}>
             {
             (selected && item) ? 
                item : 
                  (!selected && item && (item as string) !== '---') ? 
                    translate ? i18n.t(item) : 
                      item : 
                  translate ? i18n.t(label) 
                : label
            }
            </ThemedText>
            <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                           style={[styles.icon, {color: selected ? 'white' : '#555'}, iconStyle]}/>
          </ThemedView>
        );
      }}
      renderItem={(item, _, isSelected) => {
        const selected = filterObj && item && (item as string) !== '---';
        return (
          <ThemedView style={[
            styles.item, 
            itemStyle, 
            ((isSelected && (item as string) !== '---') || label === item) && 
              {backgroundColor: '#444444'}]}>
            <ThemedText style={[
                filterStyles.buttonText, 
                ((isSelected && (item as string) !== '---') || label === item) 
                  && {color: 'white'}
              ]}>{!selected && translate ? i18n.t(item) : item}
            </ThemedText>
          </ThemedView>
        );
      }}/>
  )
}

const styles = StyleSheet.create({
  dropDown: {
    boxShadow: '8px 12px 12px rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'web' ? 12 : -12
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  icon: {
    position: 'absolute', 
    justifyContent: 'flex-end', 
    fontSize: 24,
    marginTop: 1,
    right: 7
  }
});