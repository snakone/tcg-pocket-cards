import React, { useContext } from "react";
import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
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
  CHARIZARD_ICON,
  GENETIC_APEX, 
  MEWTWO_ICON, 
  PIKACHU_ICON,
  PROMO_A1,
  PROMO_A2, 
} from "@/shared/definitions/sentences/path.sentences";

import { 
  DAMAGES, 
  FILTER_CARDS_HEIGHT, 
  getFilterSearch, 
  iconWidth, 
  RARITY_MAP, 
  STAGE_MAP, 
  TYPE_MAP 
} from "@/shared/definitions/utils/contants";

import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import SelectInput from "@/components/ui/SelectInput";
import StateButton from "@/components/ui/StateButton";
import InvertButton from "@/components/ui/InvertButton";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { AppContext } from "@/app/_layout";
import SoundService from "@/core/services/sounds.service";

export default function FilterCardMenu({isVisible, onClose, animatedStyle}: TabMenu) {
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { dispatch } = context;
  
  const {i18n} = useI18n();
  const [expansionVisible, setExpansionVisible] = useState<boolean>(false);
  const distanceFromBottom = useSharedValue(FILTER_CARDS_HEIGHT);
  const filterObj = useRef<FilterSearch>(getFilterSearch());
  const [expansionSelected, setExpansionSelected] = useState<boolean>(false);

  if (!isVisible) return null;

  const typeSelectAll$ = new Subject<boolean>();
  const raritySelectAll$ = new Subject<boolean>();
  const stageSelectAll$ = new Subject<boolean>();
  const miscellaniaSelectAll$ = new Subject<boolean>();

  function onTypeSelectAll(): void {
    typeSelectAll$.next(true);
  }

  function onRaritySelectAll(): void {
    raritySelectAll$.next(true);
  }

  function onStageSelectAll(): void {
    stageSelectAll$.next(true);
  }

  function onMiscellaniaSelectAll(): void {
    miscellaniaSelectAll$.next(true);
  }
  
  useEffect(() => {
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

  const FavoriteItem = () => {
    return (
      <ThemedView style={filterStyles.flexContainer}>
        <StateButton filterObj={filterObj} 
                     showLabel={true} 
                     label={'favorites'} 
                     style={filterStyles.button} 
                     propFilter="favorite" 
                     keyFilter={"included"}>
        </StateButton>
        <StateButton filterObj={filterObj} 
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
                             filterObj={filterObj}
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
                               propFilter="rarity"
                               keyFilter={8}
                               filterObj={filterObj}>
                  </StateButton>
          })}
      </ThemedView>
    )
  }

  const PokemonItem = (item: any) => {
    return (
      <>
        <ThemedView style={filterStyles.row}>
          <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('type')}</ThemedText>
          <InvertButton onClick={() => onTypeSelectAll()}></InvertButton>
        </ThemedView>
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
                               onPress={typeSelectAll$}
                               labelMargin={true}
                               propFilter="element"
                               keyFilter={i}
                               filterObj={filterObj}
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
            ['min', 'max'].map((k: any, i) => {
              return (
                <SelectInput key={i} 
                             options={DAMAGES} 
                             label={k}
                             filterObj={filterObj}
                             propFilter="health"
                             keyFilter={k}
                             onSelect={(opt) => (playSound('POP_PICK'), (filterObj.current.health as any)[k] = opt)}>
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
                             filterObj={filterObj}
                             propFilter="attack"
                             keyFilter={k}
                             onSelect={(opt) => (playSound('POP_PICK'), (filterObj.current.attack as any)[k] = opt)}>
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
                             propFilter="ability"
                             keyFilter={k}
                             filterObj={filterObj}>
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
              const label = STAGE_MAP[key]?.label;

              return (
                <StateButton style={[filterStyles.button, filterStyles.gridButton]} 
                              key={i} 
                              onPress={stageSelectAll$} 
                              showLabel={true}
                              label={label}
                              propFilter="stage"
                              keyFilter={key}
                              filterObj={filterObj}>
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
          {marginBottom: 48, marginRight: 16, alignItems: 'center', justifyContent: 'center'},
          expansionSelected && {backgroundColor: '#444444'}
        ]}>
          <ThemedText style={[
            filterStyles.buttonText, expansionSelected && {color: 'white'}
            ]}>{i18n.t(expansionSelected ? 'with_select' : 'no_select')}
          </ThemedText>
          <MaterialIcons name="keyboard-arrow-right" 
                           style={{
                            position: 'absolute', 
                            justifyContent: 'flex-end', 
                            fontSize: 24,
                            top: 4,
                            color: '#555',
                            right: 7
                      }}/>
        </ThemedView>
      </Pressable>
    )
  }

  const MiscellaniaItem = ({miscellania} : {miscellania: any}) => {
    return (
      <>
        <ThemedView style={filterStyles.row}>
          <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('weak')}</ThemedText>
          <InvertButton onClick={() => onMiscellaniaSelectAll()}></InvertButton>
        </ThemedView>
        <ThemedView style={[
          filterStyles.flexContainer, 
          {justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48, paddingRight: 16}
        ]}>
          {
            Object.keys(miscellania).map((key, i) => {
                const image = TYPE_MAP[key]?.image;
                const label = TYPE_MAP[key]?.label;
                return (
                  <StateButton label={label} 
                               showLabel={true}
                               onPress={miscellaniaSelectAll$}
                               labelMargin={true}
                               propFilter="weak"
                               keyFilter={i}
                               filterObj={filterObj}
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

        {/* EX */}
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('ex')}</ThemedText>
        <ThemedView style={[
          filterStyles.flexContainer, 
          filterStyles.buttonContainer
        ]}>
          {
            ['not_ex', 'is_ex'].map((k, i) => {
              return (
                <StateButton key={i} 
                             style={[filterStyles.button, filterStyles.gridButton]} 
                             showLabel={true} 
                             label={k}
                             propFilter="ex"
                             keyFilter={k}
                             filterObj={filterObj}>
                </StateButton>     
            )})}
        </ThemedView>
      </>
    )
  }

  const memoizedExpansionsMenu = useMemo(() => {
    return (
    <Animated.View style={[MenuStyles.expansions, modalAnimatedStyle]}>
      <ThemedView style={{flex: 1}}>
        <ThemedView style={filterStyles.expansionShadow}></ThemedView>
        <ThemedView style={{flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
          <Image source={GENETIC_APEX} style={{width: 106, height: 50}}></Image>
          <ThemedView style={{flexDirection: 'row', marginBlock: 38, gap: 10}}>
            <StateButton isImage={true} color="" propFilter="expansion" keyFilter={0} filterObj={filterObj}>
              <Image source={PIKACHU_ICON} style={{width: 110, height: 40}}></Image>
            </StateButton>
            <StateButton isImage={true} color="" propFilter="expansion" keyFilter={1} filterObj={filterObj}>
              <Image source={MEWTWO_ICON} style={{width: 110, height: 40}}></Image>
            </StateButton>
            <StateButton isImage={true} color="" propFilter="expansion" keyFilter={2} filterObj={filterObj}>
              <Image source={CHARIZARD_ICON} style={{width: 110, height: 40}}></Image>
            </StateButton>
          </ThemedView>

          <ThemedView style={{flexDirection: 'row', marginTop: 4, marginBottom: 24, gap: 40}}>
            <StateButton isImage={true} color="" propFilter="expansion" keyFilter={3} filterObj={filterObj}>
              <Image source={PROMO_A1} style={{width: 50, height: 94}}></Image>
            </StateButton>
            <StateButton isImage={true} color="" propFilter="expansion" keyFilter={4} filterObj={filterObj}>
              <Image source={PROMO_A2} style={{width: 50, height: 94}}></Image>
            </StateButton>
          </ThemedView>

          <View style={[TabsMenuStyles.separator, {width: '100%', height: 3, marginTop: 20}]}></View>
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
                <InvertButton onClick={() => onRaritySelectAll()}></InvertButton>
              </ThemedView>
              <RarityItem rarity={filterObj.current.rarity}></RarityItem>
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
                <InvertButton onClick={() => onStageSelectAll()}></InvertButton>
              </ThemedView>
              <StageItem stage={filterObj.current.stage}></StageItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('expansions')}</ThemedText>
              </ThemedView>
              <ExpansionItem expansion={filterObj.current.expansion}></ExpansionItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('miscellania')}</ThemedText>
              </ThemedView>
              <MiscellaniaItem miscellania={filterObj.current.weak}></MiscellaniaItem>
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


