import { memo, MutableRefObject } from "react";
import { Subject } from "rxjs";
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import React from "react";

import { useI18n } from "@/core/providers/LanguageProvider";

import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { filterStyles } from "@/shared/styles/component.styles";

import { IsExButtonList } from "./IsExItem";
import { IsShinyButtonList } from "./IsShinyItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import InvertButton from "@/components/ui/InvertButton";
import StateButton from "@/components/ui/StateButton";

interface MiscellaniaItemProps {
  filterObj: MutableRefObject<FilterSearch>,
  miscellaniaSelectAll$: Subject<boolean>,
  onMiscellaniaSelectAll: () => void
}

export const MiscellaniaItem = memo(({ 
  filterObj, 
  miscellaniaSelectAll$, 
  onMiscellaniaSelectAll 
}: MiscellaniaItemProps) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedView style={filterStyles.row}>
        <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
          {i18n.t('weak')}
        </ThemedText>
        <InvertButton onClick={() => onMiscellaniaSelectAll()} styles={{top: 1}} />
      </ThemedView>

      <ThemedView style={[filterStyles.flexContainer, styles.container]}>
        {Object.keys(filterObj.current.weak).map((key, i) => {
          const image = (TYPE_MAP as any)[key]?.image;
          const label = (TYPE_MAP as any)[key]?.label;

          return (
            <StateButton
              key={i}
              label={label}
              showLabel={true}
              onPress={miscellaniaSelectAll$}
              labelMargin={true}
              propFilter="weak"
              keyFilter={i}
              filterObj={filterObj}
              style={[filterStyles.button, styles.button]}>
              <Image source={image} style={styles.image}/>
            </StateButton>
          );
        })}
      </ThemedView>

      <IsExButtonList filterObj={filterObj}></IsExButtonList>
      <IsShinyButtonList filterObj={filterObj}></IsShinyButtonList>
    </>
  );
});

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 48,
    paddingRight: 16
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
  },
  image: {
    width: 21,
    height: 21,
    position: 'absolute',
    left: 20,
    marginRight: 8,
  }
});