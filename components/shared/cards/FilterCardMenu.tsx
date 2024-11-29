import React from "react";
import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Audio } from "expo-av";
import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { Portal, Provider } from "react-native-paper";
import { Subject } from "rxjs";

import { 
  ButtonStyles,
  filterStyles,
  LayoutStyles, 
  MenuStyles,
  ModalStyles, 
  TabsMenuStyles 
} from "@/shared/styles/component.styles";

import { 
  AUDIO_MENU_CLOSE, 
  CHARIZARD_ICON,
   GENETIC_APEX, 
   MEWTWO_ICON, 
   PIKACHU_ICON, 
   POP_PICK 
  } from "@/shared/definitions/sentences/path.sentences";

import { 
  DAMAGES, 
  FILTER_CARDS_HEIGHT, 
  getFilterSearch, 
  iconWidth, 
  RARITY_MAP, 
  TYPE_MAP 
} from "@/shared/definitions/utils/contants";

import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SelectInput from "@/components/ui/SelectInput";
import StateButton from "@/components/ui/StateButton";
import InvertButton from "@/components/ui/InvertButton";

export default function FilterCardMenu({isVisible, onClose, animatedStyle}: TabMenu) {
  if (!isVisible) return null;
  const closed = useRef<Audio.Sound>();
  const pick = useRef<Audio.Sound>();
  const {i18n} = useI18n();
  const [expansionVisible, setExpansionVisible] = useState<boolean>(false);
  const distanceFromBottom = useSharedValue(FILTER_CARDS_HEIGHT);

  const filterObj = useRef(getFilterSearch());

  const typeSelectAll$ = new Subject<boolean>();
  const raritySelectAll$ = new Subject<boolean>();
  const stageSelectAll$ = new Subject<boolean>();

  function onTypeSelectAll(): void {
    typeSelectAll$.next(true);
  }

  function onRaritySelectAll(): void {
    raritySelectAll$.next(true);
  }

  function onStageSelectAll(): void {
    stageSelectAll$.next(true);
  }
  
  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      const { sound: pickSound } = await Audio.Sound.createAsync(POP_PICK);
      closed.current = sound;
      pick.current = pickSound;
    }

    loadSounds();
    filterObj.current = getFilterSearch();
  }, []);

  const modalAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: distanceFromBottom.value }]
    };
  });

  useEffect(() => {
    distanceFromBottom.value = expansionVisible ? 
                          withTiming(0, { duration: 150 }) : 
                          FILTER_CARDS_HEIGHT;
  }, [expansionVisible]);

  const playClose = useCallback(async () => {
    if (closed.current) await closed.current.replayAsync();
  }, []);

  const playPop = useCallback(async () => {
    if (pick.current) await pick.current.replayAsync();
  }, []);

  async function closeMenu(): Promise<void> {
    await playClose();
    onClose();
  }

  async function handleExpansion(value: boolean): Promise<void> {
    await playPop();
    setExpansionVisible(value);
  }

  const FavoriteItem = () => {
    return (
      <ThemedView style={filterStyles.flexContainer}>
        <StateButton obj={filterObj} 
                     sound={pick} 
                     showLabel={true} 
                     label={'favorites'} 
                     style={filterStyles.button} 
                     propFilter="favorite" 
                     keyFilter={"included"}>
        </StateButton>
        <StateButton obj={filterObj} 
                     sound={pick} 
                     showLabel={true} 
                     label={'no_favorites'} 
                     style={filterStyles.button} 
                     propFilter="favorite" 
                     keyFilter={"not_favorite"}>
        </StateButton>
      </ThemedView>
    );
  };

  const RarityItem = ({rarity}: {rarity: any}) => {
    return (
      <ThemedView style={[filterStyles.flexContainer, {flexWrap: 'wrap', marginBottom: 48}]}>
        {
          Object.keys(rarity).map((key, index) => {
            const image = RARITY_MAP[key]?.image;
            const amount = RARITY_MAP[key]?.amount;
              return image ? (
                <StateButton propFilter="rarity" 
                             keyFilter={index} 
                             onPress={raritySelectAll$} 
                             key={index} 
                             sound={pick} 
                             obj={filterObj}
                             style={
                              [
                                {overflow: 'hidden'}, 
                                filterStyles.button, 
                                filterStyles.imageContainer, 
                                { width: iconWidth + (amount - 1) * 44}
                              ]}>
                  {Array.from({ length: amount }).map((_, i) => (
                    <Image
                      key={index + (i + 1)}
                      source={image}
                      style={[
                        filterStyles.image, index === 7 ? 
                          {width: 30, transform: [{scale: 0.86}]} : null
                      ]}
                    />
                  ))}
                </StateButton>
              ) : <StateButton key={index + Math.random()} 
                               onPress={raritySelectAll$} 
                               style={filterStyles.button} 
                               label={'promo'} 
                               showLabel={true}
                               sound={pick}
                               propFilter="rarity"
                               keyFilter={8}
                               obj={filterObj}>
                  </StateButton>
          })}
      </ThemedView>
    )
  }

  const PokemonItem = (item: any) => {
    return (
      <>
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('type')}</ThemedText>
        <ThemedView style={[
          filterStyles.flexContainer, 
          {justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48, paddingRight: 16}
        ]}>
          {
            Object.keys(item.element).map((key, i) => {
                const image = TYPE_MAP[key]?.image;
                const label = TYPE_MAP[key]?.label;
                return (
                  <StateButton label={label} 
                               showLabel={true}
                               sound={pick} 
                               onPress={typeSelectAll$}
                               labelMargin={true}
                               propFilter="element"
                               keyFilter={i}
                               obj={filterObj}
                               key={i} style={[filterStyles.button, 
                              {
                                flexDirection: 'row', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                width: '48%'
                              }]}>
                    <Image source={image} style={{
                      width: 21, 
                      height: 21, 
                      position: 'absolute', 
                      left: 20, 
                      marginRight: 8}}>
                    </Image>
                  </StateButton>
              )})
          }
        </ThemedView>

        {/* HEALTH */}
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('health')}</ThemedText>
        <ThemedView style={[
          filterStyles.flexContainer, 
          filterStyles.buttonContainer
        ]}>
          {
            ['min', 'max'].map((k, i) => {
              return (
                <SelectInput key={i} 
                             options={DAMAGES} 
                             label={k} 
                             onSelect={(opt, i) => (playPop(), filterObj.current.health[k] = opt)}>
                </SelectInput>  
              )
          })}
          <MaterialIcons name="remove" style={filterStyles.separator}></MaterialIcons>
        </ThemedView>

        {/* ATTACK */}
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('attack')}</ThemedText>
        <ThemedView style={[filterStyles.flexContainer, filterStyles.buttonContainer]}>
          {
            ['min', 'max'].map((k: any, i) => {
              return (
                <SelectInput key={i} 
                             options={DAMAGES} 
                             label={k} 
                             onSelect={(opt, i) => (playPop(), filterObj.current.attack[k] = opt)}>
                </SelectInput>  
            )})}
          <MaterialIcons name="remove" style={filterStyles.separator}></MaterialIcons>
        </ThemedView>

        {/* OTHERS */}
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('others')}</ThemedText>
        <ThemedView style={[filterStyles.flexContainer, filterStyles.buttonContainer]}>
          {
            ['with_ability', 'without_ability'].map((k, i) => {
              return (
                <StateButton key={i} 
                             style={[filterStyles.button, filterStyles.gridButton]} 
                             showLabel={true} 
                             label={k}
                             sound={pick}
                             propFilter="ability"
                             keyFilter={k}
                             obj={filterObj}>
                </StateButton>     
            )})}
        </ThemedView>
      </>
    )
  }

  const StageItem = ({stage}: {stage: any}) => {
    return (
      <ThemedView style={[filterStyles.flexContainer, filterStyles.buttonContainer]}>
          {
            Object.keys(stage).map((key, i) => {
                return (
                  <StateButton style={[filterStyles.button, filterStyles.gridButton]} 
                               key={i} 
                               onPress={stageSelectAll$} 
                               showLabel={true}
                               sound={pick}
                               label={key}
                               propFilter="stage"
                               keyFilter={key}
                               obj={filterObj}>
                  </StateButton>
                )
          })}
      </ThemedView>
    )
  }

  const ExpansionItem = ({expansion} : {expansion: any}) => {
    return (
      <Pressable onPress={() => handleExpansion(true)}>
        <ThemedView style={[
          filterStyles.button, 
          filterStyles.buttonContainer,  
          {marginBottom: 28, marginRight: 16}
        ]}>
          <ThemedText style={filterStyles.buttonText}>{i18n.t('expansions')}</ThemedText>
          <MaterialIcons name="keyboard-arrow-right" 
                           style={{
                            position: 'absolute', 
                            justifyContent: 'flex-end', 
                            fontSize: 24,
                            marginTop: 1,
                            color: '#555',
                            right: 7
                      }}/>
        </ThemedView>
      </Pressable>
    )
  }

  const memoizedExpansionsMenu = useMemo(() => {
    return (
    <Animated.View style={[MenuStyles.expansions, modalAnimatedStyle]}>
      <ThemedView style={{flex: 1}}>
        <ThemedView style={filterStyles.expansionShadow}></ThemedView>
        <ThemedView style={{flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
          <Image source={GENETIC_APEX} style={{width: 106, height: 50}}></Image>
          <ThemedView style={{flexDirection: 'row', marginTop: 20, marginBottom: 38, gap: 10}}>
            <StateButton sound={pick} isImage={true} color="" propFilter="expansion" keyFilter={0} obj={filterObj}>
              <Image source={PIKACHU_ICON} style={{width: 110, height: 40}}></Image>
            </StateButton>
            <StateButton sound={pick} isImage={true} color="" propFilter="expansion" keyFilter={1} obj={filterObj}>
              <Image source={MEWTWO_ICON} style={{width: 110, height: 40}}></Image>
            </StateButton>
            <StateButton sound={pick} isImage={true} color="" propFilter="expansion" keyFilter={2} obj={filterObj}>
              <Image source={CHARIZARD_ICON} style={{width: 110, height: 40}}></Image>
            </StateButton>
          </ThemedView>

          <View style={[TabsMenuStyles.separator, {width: '100%'}]}></View>
        </ThemedView>

        <View style={[ModalStyles.modalFooter, {width: '100%'}]}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={() => handleExpansion(false)} 
                            accessibilityLabel={CLOSE_SENTENCE}
                            accessibilityRole="button"
                            accessible={true}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </Animated.View>
   )
  }, [expansionVisible, modalAnimatedStyle]);

  return (
    <Provider>
      <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
                style={[StyleSheet.absoluteFill]} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={[LayoutStyles.overlay]} onPress={() => closeMenu()}></Pressable>
      <Animated.View style={[animatedStyle, filterStyles.container]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('filter')}</ThemedText>
        </View>
        <SafeAreaView style={[ModalStyles.modalScrollView]}>
          {/* SCROLL */}
          <ScrollView style={[filterStyles.list]} showsVerticalScrollIndicator={false}>
            <>
              <ThemedView style={[filterStyles.row, {marginTop: 4}]}>
                <ThemedText style={filterStyles.header}>{i18n.t('favorites')}</ThemedText>
              </ThemedView>
              <FavoriteItem></FavoriteItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('rarity')}</ThemedText>
                <InvertButton sound={pick} onClick={() => onRaritySelectAll()}></InvertButton>
              </ThemedView>
              <RarityItem rarity={filterObj.current.rarity}></RarityItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('pokemon')}</ThemedText>
                <InvertButton sound={pick} onClick={() => onTypeSelectAll()}></InvertButton>
              </ThemedView>
              <PokemonItem element={filterObj.current.element}></PokemonItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('trainer_card')}</ThemedText>
                <InvertButton sound={pick} onClick={() => onStageSelectAll()}></InvertButton>
              </ThemedView>
              <StageItem stage={filterObj.current.stage}></StageItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('expansions')}</ThemedText>
              </ThemedView>
              <ExpansionItem expansion={filterObj.current.expansion}></ExpansionItem>
            </>
          </ScrollView>

        </SafeAreaView>
        <View style={ModalStyles.modalFooter}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Portal>{expansionVisible && memoizedExpansionsMenu}</Portal>
    </Provider>
  );
}


