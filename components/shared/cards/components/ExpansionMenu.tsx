import { Image } from 'expo-image';
import React, { MutableRefObject } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Animated from 'react-native-reanimated';

import { useBottomSlideAnimation } from '@/hooks/modalBottomAnimation';
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { MenuStyles, filterStyles, ModalStyles, ButtonStyles } from "@/shared/styles/component.styles";

import { 
  GENETIC_APEX,
  GENETIC_APEX_PACKS,
  MYTHICAL_ISLAND_MEW_ICON,
  MYTHICAL_ISLAND_PACKS, 
  SHINING_PACKS, 
  SHINING_REVELRY_ICON, 
  SMACK_DOWN,
  SMACK_DOWN_PACKS,
  TRIUMPH_LIGHT_ARCEUS_ICON,
  TRIUMPH_LIGHT_PACKS
} from "@/shared/definitions/sentences/path.sentences";

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import StateButton from "@/components/ui/StateButton";


const MODAL_HEIGHT = 662;

interface ExpansionMenuProps {
  filterObj: MutableRefObject<FilterSearch>,
  handleExpansion: (value: boolean) => Promise<void>,
  isVisible: boolean
}

const DATA = [
  {
    logo: {
      value: GENETIC_APEX,
      width: 70,
      height: 30
    },
    packs: GENETIC_APEX_PACKS,
    filterOffset: 0
  },
  {
    logo: {
      value: MYTHICAL_ISLAND_MEW_ICON,
      width: 70,
      height: 36
    },
    packs: MYTHICAL_ISLAND_PACKS,
    filterOffset: 8
  },
  {
    logo: {
      value: SMACK_DOWN,
      width: 70,
      height: 32
    },
    packs: SMACK_DOWN_PACKS,
    filterOffset: 10
  },
  {
    logo: {
      value: TRIUMPH_LIGHT_ARCEUS_ICON,
      width: 78,
      height: 32
    },
    packs: TRIUMPH_LIGHT_PACKS,
    filterOffset: 13
  },
  {
    logo: {
      value: SHINING_REVELRY_ICON,
      width: 74,
      height: 37
    },
    packs: SHINING_PACKS,
    filterOffset: 15
  }
]

export const ExpansionsMenu = React.memo(({filterObj, handleExpansion, isVisible }: ExpansionMenuProps) => {
  const animatedStyle = useBottomSlideAnimation(isVisible, MODAL_HEIGHT);

  return (
    <Animated.View style={[MenuStyles.expansions, {height: MODAL_HEIGHT}, animatedStyle]}>
      <ThemedView style={[filterStyles.expansionShadow, {marginBottom: 10}]}></ThemedView>
      <ScrollView style={{ flex: 1, position: 'relative', paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>

        {
          DATA.map((item, i) => {
            return (
              <ThemedView style={filterStyles.expansionContainer} key={i.toString()}>
                <ThemedView style={{minWidth: 120, alignItems: 'center'}}>
                  <Image source={item.logo.value} 
                         style={[
                          { width: item.logo.width, height: item.logo.height}, 
                          filterStyles.expansionImage
                        ]}/>
                </ThemedView>
                <ThemedView style={{ flexDirection: 'row', marginBlock: 12, gap: 6 }}>
                  {item.packs.map((icon: any, index: number) => (
                    <StateButton
                      key={index}
                      isImage={true}
                      color=""
                      propFilter="expansion"
                      keyFilter={index + item.filterOffset}
                      filterObj={filterObj}
                    >
                      <Image source={icon} style={filterStyles.packImage} />
                    </StateButton>
                  ))}
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ScrollView>
      <View style={ModalStyles.modalFooter}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={() => handleExpansion(false)} 
                            accessibilityLabel={'CLOSE_SENTENCE'}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
    </Animated.View>
  );
});