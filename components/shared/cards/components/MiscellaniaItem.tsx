import { memo, MutableRefObject } from "react";
import { Subject } from "rxjs";
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import InvertButton from "@/components/ui/InvertButton";
import StateButton from "@/components/ui/StateButton";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import { useI18n } from "@/core/providers/LanguageProvider";
import { IsExButtonList } from "./IsExItem";
import React from "react";

interface MiscellaniaItemProps {
  weak: { [key in PokemonTypeENUM]: boolean | null },
  filterObj: MutableRefObject<FilterSearch>,
  miscellaniaSelectAll$: Subject<boolean>,
  onMiscellaniaSelectAll: () => void
}

export const MiscellaniaItem = memo(({ 
  weak, filterObj, 
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
        {Object.keys(weak).map((key, i) => {
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