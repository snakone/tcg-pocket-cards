import { Image } from 'expo-image';
import React, { MutableRefObject } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Animated from 'react-native-reanimated';

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import StateButton from "@/components/ui/StateButton";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { MenuStyles, filterStyles, TabsMenuStyles, ModalStyles, ButtonStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

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

interface ExpansionMenuProps {
  filterObj: MutableRefObject<FilterSearch>,
  handleExpansion: (value: boolean) => Promise<void>
}

export const ExpansionsMenu = React.memo(({filterObj, handleExpansion }: ExpansionMenuProps) => {
  return (
    <Animated.View style={[MenuStyles.expansions]}>
      <ThemedView style={[filterStyles.expansionShadow, {marginBottom: 10}]}></ThemedView>
      <ScrollView style={{ flex: 1, position: 'relative' }} showsVerticalScrollIndicator={false}>
        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={GENETIC_APEX} style={{ width: 106, height: 50 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 24, gap: 10 }}>
            {GENETIC_APEX_PACKS.map((icon: any, index: number) => (
              <StateButton
                key={index}
                isImage={true}
                color=""
                propFilter="expansion"
                keyFilter={index}
                filterObj={filterObj}
              >
                <Image source={icon} style={filterStyles.packImage} />
              </StateButton>
            ))}
          </ThemedView>
          <View
            style={[
              TabsMenuStyles.separator,
              { width: '100%', height: 2, marginTop: 4, marginBottom: 12 },
            ]}
          ></View>
        </ThemedView>

        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={MYTHICAL_ISLAND_MEW_ICON} style={{ width: 106, height: 52 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 24, gap: 10 }}>
            {MYTHICAL_ISLAND_PACKS.map((icon: any, index: number) => (
              <StateButton
                key={index}
                isImage={true}
                color=""
                propFilter="expansion"
                keyFilter={8 + index}
                filterObj={filterObj}
              >
                <Image source={icon} style={filterStyles.packImage} />
              </StateButton>
            ))}
          </ThemedView>
          <View
            style={[
              TabsMenuStyles.separator,
              { width: '100%', height: 2, marginTop: 4, marginBottom: 12 },
            ]}
          ></View>
        </ThemedView>

        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={SMACK_DOWN} style={{ width: 118, height: 52 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 24, gap: 10 }}>
            {SMACK_DOWN_PACKS.map((icon: any, index: number) => (
              <StateButton
                key={index}
                isImage={true}
                color=""
                propFilter="expansion"
                keyFilter={10 + index}
                filterObj={filterObj}
              >
                <Image source={icon} style={[filterStyles.packImage, {height: 118}]} />
              </StateButton>
            ))}
          </ThemedView>
          <View
            style={[
              TabsMenuStyles.separator,
              { width: '100%', height: 2, marginTop: 4, marginBottom: 12 },
            ]}
          ></View>
        </ThemedView>

        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={TRIUMPH_LIGHT_ARCEUS_ICON} style={{ width: 124, height: 53 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 24, gap: 10 }}>
            {TRIUMPH_LIGHT_PACKS.map((icon: any, index: number) => (
              <StateButton
                key={index}
                isImage={true}
                color=""
                propFilter="expansion"
                keyFilter={13 + index}
                filterObj={filterObj}
              >
                <Image source={icon} style={[filterStyles.packImage, {height: 118}]} />
              </StateButton>
            ))}
          </ThemedView>
          <View
            style={[
              TabsMenuStyles.separator,
              { width: '100%', height: 2, marginTop: 4, marginBottom: 12 },
            ]}
          ></View>
        </ThemedView>

        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={SHINING_REVELRY_ICON} style={{ width: 116, height: 57 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 24, gap: 10 }}>
            {SHINING_PACKS.map((icon: any, index: number) => (
              <StateButton
                key={index}
                isImage={true}
                color=""
                propFilter="expansion"
                keyFilter={15 + index}
                filterObj={filterObj}
              >
                <Image source={icon} style={[filterStyles.packImage, {height: 118}]} />
              </StateButton>
            ))}
          </ThemedView>
        </ThemedView>
      </ScrollView>
      <View style={[ModalStyles.modalFooter]}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={() => handleExpansion(false)} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
    </Animated.View>
  );
});