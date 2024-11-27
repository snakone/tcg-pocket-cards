import React from "react";
import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Audio } from "expo-av";
import { useRef, useEffect, useCallback, useState, useContext, useMemo } from "react";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { Portal, Provider } from "react-native-paper";
import { Subject } from "rxjs";

import { AppContext } from "@/app/_layout";
import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, filterStyles, LayoutStyles, MenuStyles, ModalStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AUDIO_MENU_CLOSE } from "@/shared/definitions/sentences/path.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import { DAMAGES, FILTER_CARDS_HEIGHT, getFilterSearch, iconWidth, RARITY_MAP, TYPE_MAP } from "@/shared/definitions/utils/contants";
import SelectInput from "@/components/ui/SelectInput";
import StateButton from "@/components/ui/StateButton";

export default function FilterCardMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const closed = useRef<Audio.Sound>();
  const {i18n} = useI18n();
  const [filterSearch, setFilterSearch] = useState<any>(getFilterSearch());
  const [expansionVisible, setExpansionVisible] = useState<boolean>(false);
  const distanceFromBottom = useSharedValue(FILTER_CARDS_HEIGHT);

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
      closed.current = sound;
    }

    loadSounds();
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

  const playSound = useCallback(async () => {
    if (closed.current) await closed.current.replayAsync();
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

  function closeExpansionMenu() {
    setExpansionVisible(false);
  }

  const FavoriteItem = () => {
    return (
      <ThemedView style={filterStyles.flexContainer}>
        <StateButton showLabel={true} label={'favorites'} style={filterStyles.button}></StateButton>
        <StateButton showLabel={true} label={'no_favorites'} style={filterStyles.button}></StateButton>
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
                <StateButton onPress={raritySelectAll$} key={index} style={
                  [{overflow: 'hidden'}, 
                    filterStyles.button, 
                    filterStyles.imageContainer, 
                    { width: iconWidth + (amount - 1) * 44}]
                }>
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
                               showLabel={true}>
                  </StateButton>
          })
        }
      </ThemedView>
    )
  }

  const PokemonItem = (item: any) => {
    return (
      <>
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('type')}</ThemedText>
        <ThemedView style={[
          filterStyles.flexContainer, 
          {justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48}
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
                            key={i} style={[filterStyles.button, 
                            {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '48%'}]}>
                    <Image source={image} style={{width: 21, height: 21, position: 'absolute', left: 20, marginRight: 8}}></Image>
                  </StateButton>
                )
            })
          }
        </ThemedView>

        {/* HEALTH */}
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('health')}</ThemedText>
        <ThemedView style={[
          filterStyles.flexContainer, 
          {justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48}
        ]}>
          {
            ['min', 'max'].map((k, i) => {
              return (
                <SelectInput key={i} 
                             options={DAMAGES} 
                             label={k} 
                             onSelect={(opt, i) => null}>
                </SelectInput>  
              )
            })
          }
          <MaterialIcons name="remove" style={filterStyles.separator}></MaterialIcons>
        </ThemedView>

        {/* ATTACK */}
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('attack')}</ThemedText>
        <ThemedView style={[filterStyles.flexContainer, filterStyles.buttonContainer]}>
          {
            ['min', 'max'].map((k, i) => {
              return (
                <SelectInput key={i} 
                             options={DAMAGES} 
                             label={k} 
                             onSelect={(opt, i) => console.log({opt, i})}>
                </SelectInput>  
              )
            })
          }
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
                             label={k}>
                </StateButton>     
              )
            })
          }
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
                               label={key}>
                  </StateButton>
                )
            })
          }
      </ThemedView>
    )
  }

  const ExpansionItem = ({expansion} : {expansion: any}) => {
    return (
      <Pressable onPress={() => setExpansionVisible(true)}>
        <ThemedView style={[
          filterStyles.button, 
          filterStyles.gridButton, 
          {width: '100%', marginBottom: 28}
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
          <ThemedView style={{flex: 1, padding: 20}}>
            <ThemedText>{i18n.t('expansions')}</ThemedText>
          </ThemedView>
        <View style={[ModalStyles.modalFooter, {width: '100%'}]}>
                  <TouchableOpacity style={ButtonStyles.button} 
                                    onPress={closeExpansionMenu} 
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
                style={StyleSheet.absoluteFill} 
                tint="light" 
                experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} onPress={() => closeMenu()}></Pressable>
      <Animated.View style={[animatedStyle, filterStyles.container]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('filter')}</ThemedText>
        </View>
        <SafeAreaView style={[ModalStyles.modalScrollView]}>
          {/* SCROLL */}
          <ScrollView style={filterStyles.list} showsVerticalScrollIndicator={false}>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('favorites')}</ThemedText>
              </ThemedView>
              <FavoriteItem></FavoriteItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('rarity')}</ThemedText>
                <Pressable onPress={() => onRaritySelectAll()}>
                  <ThemedView style={[]}>
                    <ThemedText>Mostrar</ThemedText>
                  </ThemedView>
                </Pressable>

              </ThemedView>
              <RarityItem rarity={filterSearch.rarity}></RarityItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('pokemon')}</ThemedText>
                <ThemedView style={[]}>
                  <Pressable onPress={() => onTypeSelectAll()}>
                    <ThemedText>Mostrar</ThemedText>
                  </Pressable>
                </ThemedView>
              </ThemedView>
              <PokemonItem element={filterSearch.element}></PokemonItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('trainer_card')}</ThemedText>
                <ThemedView style={[]}>
                <Pressable onPress={() => onStageSelectAll()}>
                    <ThemedText>Mostrar</ThemedText>
                  </Pressable>
                </ThemedView>
              </ThemedView>
              <StageItem stage={filterSearch.stage}></StageItem>
            </>
            <>
              <ThemedView style={filterStyles.row}>
                <ThemedText style={filterStyles.header}>{i18n.t('expansions')}</ThemedText>
              </ThemedView>
              <ExpansionItem expansion={filterSearch.expansion}></ExpansionItem>
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


