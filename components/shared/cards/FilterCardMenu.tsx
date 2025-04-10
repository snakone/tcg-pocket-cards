import React, { useCallback, useEffect } from "react";
import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useRef, useState,  } from "react";
import { Portal } from "react-native-paper";
import { Subject } from "rxjs";
import { MaterialIcons } from "@expo/vector-icons";

import { FilterRxjs } from "@/core/rxjs/FilterRxjs";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";

import { useBottomSlideAnimation } from "@/hooks/modalBottomAnimation";
import { TabMenuCards } from "@/shared/definitions/interfaces/layout.interfaces";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { getFilterSearch } from "@/shared/definitions/utils/constants";
import { Colors } from "@/shared/definitions/utils/colors";

import { 
  ButtonStyles,
  filterStyles,
  LayoutStyles,  
  ModalStyles, 
} from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import InvertButton from "@/components/ui/InvertButton";
import { SpecialItem } from "./components/SpecialItem";
import { CollectionItem } from "../collection/components/CollectionItem";

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

const MODAL_HEIGHT = 712;

export default function FilterCardMenu({
  filterKey,
  isVisible,
  onClose
}: TabMenuCards) {
  console.log('Filter Card Menu')
  const {i18n} = useI18n();
  const [expansionVisible, setExpansionVisible] = useState<boolean>(false);
  const filterObj = useRef<FilterSearch>(new FilterSearch());
  const [expansionSelected, setExpansionSelected] = useState<boolean>(false);
  const [forceRender, setForceRender] = useState(0);
  const triggerRender = () => setForceRender(prev => prev + 1);
  const animatedStyle = useBottomSlideAnimation(isVisible, MODAL_HEIGHT);

  function onNext(subject: string): void {
    nextValues[subject].next(true);
  }

  useEffect(() => {
    const sub = FilterRxjs.getFilter<FilterSearch>(filterKey)
     .subscribe(res => {
      filterObj.current = res;
      triggerRender();
    });

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    setExpansionSelected(
      Object.keys(filterObj.current.expansion)
       .some(key => (Boolean((filterObj.current.expansion as any)[key])))
    );
  }, []);

  const nextValues: {[key: string] : Subject<boolean>} = {
    element$: new Subject<boolean>(),
    rarity$: new Subject<boolean>(),
    stage$: new Subject<boolean>(),
    miscellania$: new Subject<boolean>()
  }

  const playSound = async (value: string) => {
    await SoundService.play(value);
  }

  function closeMenu(): void {
    FilterRxjs.setFilter({key: filterKey, value: filterObj.current});

    if (onClose !== undefined) {
      playSound('AUDIO_MENU_CLOSE');
      onClose();
      return;
    }
  }

  async function handleExpansion(value: boolean): Promise<void> {
    if (value) {
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

  function handleReset(): void {
    playSound('POP_PICK');
    filterObj.current = getFilterSearch();
    setExpansionSelected(false);
    triggerRender();
  }

  const PokemonItem = React.memo(({ element }: any) => {
    return (
      <>
        <ThemedView style={filterStyles.row}>
          <ThemedText type="defaultSemiBold" style={{ marginBottom: 12 }}>
            {i18n.t('type')}
          </ThemedText>
          <InvertButton onClick={() => onNext('element$')} />
        </ThemedView>
  
        <ElementItem filterObj={filterObj} element={element} typeSelectAll$={nextValues.element$} />
        <HealthItem filterObj={filterObj} playSound={playSound} />
        <AttackItem filterObj={filterObj} playSound={playSound} />
        <OtherItems filterObj={filterObj} />
      </>
    );
  });

  const StagePokemonItem = React.memo(({ element }: any) => (
    <StageItem filterObj={filterObj} onlyPokemon={true} />
  ));

  const RenderExpansionsMenu = useCallback(() => (
    <>
      {expansionVisible && (
        <ExpansionsMenu filterObj={filterObj} 
                        handleExpansion={handleExpansion}
                        isVisible={expansionVisible}/>
      )}
    </>
  ), [expansionVisible, filterObj]);

  if (!isVisible) { return null; }

  return (
    <>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={[StyleSheet.absoluteFill]} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={[LayoutStyles.overlay]} onPress={() => closeMenu()}></Pressable>
      <Animated.View style={[Platform.OS === 'web' && animatedStyle, filterStyles.container, {height: MODAL_HEIGHT}]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={[ModalStyles.modalHeaderTitle, i18n.locale === 'ja' && {fontSize: 20}]}>{i18n.t('filter')}</ThemedText>
        </View>
        <SafeAreaView style={[ModalStyles.modalScrollView, {paddingHorizontal: 20, paddingVertical: 0, marginTop: 16, maxHeight: '75.6%'}]}>
          <ScrollView key={forceRender} showsVerticalScrollIndicator={false} style={filterStyles.list}>

            <TouchableOpacity onPress={handleReset} style={[
              filterStyles.button, 
              filterStyles.gridButton, 
              filterStyles.reset
            ]}>
              <MaterialIcons name="filter-alt-off" 
                             style={{width: 23, height: 23, fontSize: 22, color: Colors.light.icon}}>
              </MaterialIcons>
            </TouchableOpacity>

            {
              filterKey === 'collection' &&
              <>
                <ThemedView style={[filterStyles.row, {marginTop: 4}]}>
                  <ThemedText style={filterStyles.header}>{i18n.t('collection')}</ThemedText>
                </ThemedView>
                <CollectionItem filterObj={filterObj}></CollectionItem>
              </>
            }
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
                <ThemedText style={filterStyles.header}>{i18n.t('stage')}</ThemedText>
              </ThemedView>
              <StagePokemonItem element={filterObj.current.element}></StagePokemonItem>
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
        <View style={[ModalStyles.modalFooter, i18n.locale === 'ja' && {top: -2}]}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
      <Portal>
        <RenderExpansionsMenu></RenderExpansionsMenu>
      </Portal>
    </>
  );
}
