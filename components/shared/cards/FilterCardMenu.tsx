import { BlurView } from "expo-blur";
import { Platform, Pressable, SafeAreaView, SectionList, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { Audio } from "expo-av";
import { useRef, useEffect, useCallback, useState, useContext } from "react";

import { AppContext } from "@/app/_layout";
import { DataSection, FilterSearch, TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AUDIO_MENU_CLOSE } from "@/shared/definitions/sentences/path.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";
import { getFilterSearch, RARITY_MAP, TYPE_MAP } from "@/shared/definitions/utils/contants";
import { Image } from "expo-image";

const iconWidth = 36;

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
  const [filterSearch, setFilterSearch] = useState<FilterSearch>(getFilterSearch());
  const [filterList, setFilterList] = useState<DataSection[]>([]);

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      closed.current = sound;
    }

    loadSounds();
  }, []);

  useEffect(() => {
    const DATA: DataSection[] = [
      {title: 'favorites', data: [filterSearch.favorite]},
      {title: 'rarity', data: [filterSearch.rarity]},
      {title: 'pokemon', data: [
        filterSearch.element, 
        filterSearch.health, 
        filterSearch.attack, 
        filterSearch.ability
      ]},
      {title: 'trainer_card', data: [filterSearch.stage]},
      {title: 'expansions', data: [filterSearch.expansion]},
    ];

    setFilterList(DATA);
  }, [filterSearch])

  const playSound = useCallback(async () => {
    if (closed.current) await closed.current.replayAsync();
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

  const favoriteItem = (item: Pick<FilterSearch, "favorite">, index: number) => {
    return (
      <ThemedView style={filterStyles.flexContainer}>
        <ThemedText style={filterStyles.button}>Favoritas</ThemedText>
        <ThemedText style={filterStyles.button}>No favoritas</ThemedText>
      </ThemedView>
    )
  }

  const rarityItem = (item: Pick<FilterSearch, "rarity">, index: number) => {
    return (
      <ThemedView style={[filterStyles.flexContainer, {flexWrap: 'wrap', marginBottom: 48}]}>
        {
          Object.keys(item).map((key, index) => {
            const image = RARITY_MAP[key]?.image;
            const amount = RARITY_MAP[key]?.amount;
              return image ? (
                <ThemedView key={index} style={
                  [{overflow: 'hidden'}, filterStyles.button, filterStyles.imageContainer, {
                    width: iconWidth + (amount - 1) * 44
                  }]
                }>
                  {Array.from({ length: amount }).map((_, i) => (
                    <Image
                      key={index + (i + 1)}
                      source={image}
                      style={[filterStyles.image, index === 7 ? {width: 30, transform: [{scale: 0.86}]} : null]}
                    />
                  ))}
                </ThemedView>
              ) : <ThemedText key={index + Math.random()} style={filterStyles.button}>PROMO</ThemedText>
          })
        }
      </ThemedView>
    )
  }

  const pokemonItem = (item: Pick<FilterSearch, "element">, index: number) => {
    return (
      <>
        <ThemedText type="defaultSemiBold" style={{marginBottom: 12}}>{i18n.t('type')}</ThemedText>
        <ThemedView style={[filterStyles.flexContainer, {justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48}]}>
          {
            Object.keys(item).map((key, i) => {
              if (index === 0) {
                const image = TYPE_MAP[key]?.image;
                const label = TYPE_MAP[key]?.label;
                return (
                  <ThemedView style={[filterStyles.button, {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '48%'}]} key={index + i}>
                    <Image source={image} style={{width: 21, height: 21, position: 'absolute', left: 20}}></Image>
                    <ThemedText key={index + Math.random()} style={{color: '#555', position: 'relative', left: 8}}>{i18n.t(label)}</ThemedText>
                  </ThemedView>
                )
              }

              return (
                <ThemedText key={index + i}>{key}</ThemedText>
              )
            })
          }
        </ThemedView>
      </>
    )
  }

  const stageItem = (item: Pick<FilterSearch, "stage">, index: number) => {
    return (
      <ThemedView style={{flexDirection: 'row'}}>
        {
          Object.keys(item).map(i => {
            return (
              <ThemedText key={index + i}>{i}</ThemedText>
            )
          })
        }
      </ThemedView>
    )
  }

  const expansionItem = (item: Pick<FilterSearch, "expansion">, index: number) => {
    return (
      <ThemedView style={{flexDirection: 'row'}}>
        <ThemedText>Select Expansion</ThemedText>
      </ThemedView>
    )
  }

  const sectionSwitch = (item: Pick<FilterSearch, any>, index: number): any => ({
    favorites: () => favoriteItem(item, index),
    rarity: () => rarityItem(item, index),
    pokemon: () => pokemonItem(item, index),
    trainer_card: () => stageItem(item, index),
    expansions: () => expansionItem(item, index)
  })

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, filterStyles.container]}>
        <View style={[ModalStyles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('filter')}</ThemedText>
        </View>
        <SafeAreaView style={ModalStyles.modalScrollView}>
        <SectionList
            sections={filterList}
            keyExtractor={(item, index) => `${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={filterStyles.list}
            renderItem={({item, section, index}) => sectionSwitch(item, index)[section.title]()}
            renderSectionHeader={({section: {title}}) => (
              <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ThemedText style={filterStyles.header}>{i18n.t(title)}</ThemedText>
                <ThemedView style={[]}>
                  <ThemedText>Mostrar</ThemedText>
                </ThemedView>
              </ThemedView>
            )}
          />
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
    </>
  );
}

const filterStyles = StyleSheet.create({
  container: {
    height: '75%', 
    position: 'absolute', 
    width: '100%',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40, borderTopRightRadius: 40
  },
  header: {
    fontSize: 20, 
    fontWeight: 600, 
    marginBottom: 24, 
    color: '#333'
  },
  list: {
    padding: Platform.OS === 'web' ? 20 : 0
  },
  button: {
    boxShadow: '8px 12px 12px rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    color: '#555'
  },
  image: {
    width: 19,
    height: 20,
  },
  imageContainer: {
    height: 32,
    width: iconWidth,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: 'row'
  },
  flexContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 36, 
    columnGap: 12,
    rowGap: 16
  },
  showAll: {
    position: 'absolute', 
    right: 0, 
    top: -45
  }
});


