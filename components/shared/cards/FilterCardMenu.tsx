import React, { useContext } from "react";
import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useRef, useState,  } from "react";
import { Portal, Provider } from "react-native-paper";
import { Subject } from "rxjs";

import { 
  AttackItem,
  ElementItem,
  ExpansionItem,
  ExpansionsMenu,
  FavoriteItem,
  HealthItem,
  MiscellaniaItem,
  OtherItems,
  RarityItem,
  StageItem
} from './components/index';

import { 
  ButtonStyles,
  filterStyles,
  LayoutStyles,  
  ModalStyles, 
} from "@/shared/styles/component.styles";

import { getFilterSearch } from "@/shared/definitions/utils/constants";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import InvertButton from "@/components/ui/InvertButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { AppContext } from "@/app/_layout";
import SoundService from "@/core/services/sounds.service";
import { SpecialItem } from "./components/SpecialItem";

export default function FilterCardMenu({isVisible, onClose, animatedStyle}: TabMenu) {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { dispatch } = context;
  
  const {i18n} = useI18n();
  const [expansionVisible, setExpansionVisible] = useState<boolean>(false);

  const filterObj = useRef<FilterSearch>(getFilterSearch());
  const [expansionSelected, setExpansionSelected] = useState<boolean>(false);

  if (!isVisible) return null;

  const nextValues: {[key: string] : Subject<boolean>} = {
    element$: new Subject<boolean>(),
    rarity$: new Subject<boolean>(),
    stage$: new Subject<boolean>(),
    miscellania$: new Subject<boolean>()
  }

  function onNext(subject: string): void {
    nextValues[subject].next(true);
  }

  const playSound = async (value: string) => {
    await SoundService.play(value);
  }

  async function closeMenu(): Promise<void> {
    await playSound('AUDIO_MENU_CLOSE');
    onClose();
    dispatch({type: 'SET_FILTER', value: filterObj.current});
  }

  async function handleExpansion(value: boolean): Promise<void> {
    if (value) {
      filterObj.current.resetExpansion();
      await playSound('AUDIO_MENU_OPEN');
    } else {
      await playSound('AUDIO_MENU_CLOSE');
      setExpansionSelected(
        Object.keys(filterObj.current.expansion)
         .some(key => (Boolean((filterObj.current.expansion as any)[key])))
      );
    }
    setExpansionVisible(value);
  }

  const PokemonItem = ({element}: any) => {
    return (
      <>
        <ThemedView style={filterStyles.row}>
          <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('type')}</ThemedText>
          <InvertButton onClick={() => onNext('element$')}></InvertButton>
        </ThemedView>

        <ElementItem filterObj={filterObj} element={element} typeSelectAll$={nextValues.element$}></ElementItem>
        <HealthItem filterObj={filterObj} playSound={playSound}></HealthItem>
        <AttackItem filterObj={filterObj} playSound={playSound}></AttackItem>
        <OtherItems filterObj={filterObj}></OtherItems>
      </>
    )
  }

  const renderExpansionsMenu = () => (
    <>
      {expansionVisible && (
        <ExpansionsMenu
          filterObj={filterObj}
          handleExpansion={handleExpansion}
        />
      )}
    </>
  );

  return (
    <Provider>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={[StyleSheet.absoluteFill]} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={[LayoutStyles.overlay]} onPress={() => closeMenu()}></Pressable>
      <Animated.View style={[animatedStyle, filterStyles.container, i18n.locale === 'ja' && {height: '86.1%'}]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('filter')}</ThemedText>
        </View>
        <SafeAreaView style={[ModalStyles.modalScrollView, {paddingHorizontal: 20, paddingVertical: 0}]}>
          <ScrollView showsVerticalScrollIndicator={false} style={filterStyles.list}>
            <>
              <ThemedView style={[filterStyles.row, {marginTop: 4}]}>
                <ThemedText style={filterStyles.header}>{i18n.t('favorites')}</ThemedText>
              </ThemedView>
              <FavoriteItem filterObj={filterObj}></FavoriteItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('rarity')}</ThemedText>
                <InvertButton onClick={() => onNext('rarity$')} styles={{top: 8}}></InvertButton>
              </ThemedView>
              <RarityItem filterObj={filterObj} 
                          raritySelectAll$={nextValues.rarity$}>
              </RarityItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('pokemon')}</ThemedText>
              </ThemedView>
              <PokemonItem element={filterObj.current.element}></PokemonItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('trainer_card')}</ThemedText>
                <InvertButton onClick={() => onNext('stage$')} styles={{top: 9}}></InvertButton>
              </ThemedView>
              <StageItem filterObj={filterObj} 
                         stageSelectAll$={nextValues.stage$}>
               </StageItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('expansions')}</ThemedText>
              </ThemedView>
              <ExpansionItem expansionSelected={expansionSelected} 
                             handleExpansion={handleExpansion}>
              </ExpansionItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('miscellania')}</ThemedText>
              </ThemedView>
              <MiscellaniaItem filterObj={filterObj} 
                               miscellaniaSelectAll$={nextValues.miscellania$} 
                               onMiscellaniaSelectAll={() => onNext('miscellania$')}>
              </MiscellaniaItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('special')}</ThemedText>
              </ThemedView>
              <SpecialItem filterObj={filterObj}></SpecialItem>
            </>
          </ScrollView>

        </SafeAreaView>
        <View style={ModalStyles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
      <Portal>{renderExpansionsMenu()}</Portal>
    </Provider>
  );
}
