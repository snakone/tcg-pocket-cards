import React from "react";
import { StyleSheet } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

import SelectDropdown from "react-native-select-dropdown";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { useI18n } from "@/core/providers/LanguageProvider";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

interface SelectInputProps {
  options: any[], 
  label: string, 
  onSelect: (value: any, index: number) => void,
  filterObj?: React.MutableRefObject<FilterSearch>,
  propFilter: string,
  keyFilter: string | number
}

export default function SelectInput({
  options, 
  label, 
  onSelect, 
  filterObj,
  propFilter,
  keyFilter,
}: SelectInputProps) {
  const {i18n} = useI18n();

  return (
    <SelectDropdown
      data={options}
      onSelect={onSelect}
      disableAutoScroll={true}
      defaultValue={(filterObj?.current as any)[propFilter][keyFilter] ?? keyFilter}
      dropdownOverlayColor="invisible"
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropDown}
      renderButton={(selectedItem, isOpened) => {
        return (
          <ThemedView style={[
            filterStyles.button, 
            filterStyles.gridButton, {width: '45%'}, 
            {...(selectedItem && {backgroundColor: '#444444'})}
          ]}>
            <ThemedText style={[filterStyles.buttonText, {...(selectedItem && {color: 'white'})}]}>
              {(selectedItem && selectedItem) || i18n.t(label)}
            </ThemedText>
            <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                           style={[styles.icon, {color: selectedItem ? 'white' : '#555'}]}/>
          </ThemedView>
        );
      }}
      renderItem={(item, _, isSelected) => {
        return (
          <ThemedView style={[styles.item, {...(isSelected && {backgroundColor: '#444444'})}]}>
            <ThemedText style={[filterStyles.buttonText, {...(isSelected && {color: 'white'})}]}>{item}</ThemedText>
          </ThemedView>
        );
      }}
  />
  )
}

const styles = StyleSheet.create({
  dropDown: {
    boxShadow: '8px 12px 12px rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'white',
    height: 225,
    marginTop: 8
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 20
  },
  icon: {
    position: 'absolute', 
    justifyContent: 'flex-end', 
    fontSize: 24,
    marginTop: 1,
    right: 7
  }
});