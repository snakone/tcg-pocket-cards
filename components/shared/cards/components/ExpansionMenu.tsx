import { Image } from 'expo-image';
import React, { MutableRefObject } from "react";
import { View, TouchableOpacity } from "react-native";
import Animated from 'react-native-reanimated';

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import StateButton from "@/components/ui/StateButton";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { GENETIC_APEX, GENETIC_APEX_PACKS, MEW_ICON, MYTHICAL_ISLAND_MEW_ICON, MYTHICAL_ISLAND_PACKS } from "@/shared/definitions/sentences/path.sentences";
import { MenuStyles, filterStyles, TabsMenuStyles, ModalStyles, ButtonStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

interface ExpansionMenuProps {
  filterObj: MutableRefObject<FilterSearch>,
  handleExpansion: (value: boolean) => Promise<void>
}

export const ExpansionsMenu = React.memo(({filterObj, handleExpansion }: ExpansionMenuProps) => {
  return (
    <Animated.View style={[MenuStyles.expansions]}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={[filterStyles.expansionShadow, {marginBottom: 10}]}></ThemedView>
        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={GENETIC_APEX} style={{ width: 106, height: 50 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 32, gap: 10 }}>
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
              { width: '100%', height: 2, marginTop: 4 },
            ]}
          ></View>
        </ThemedView>

        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={MYTHICAL_ISLAND_MEW_ICON} style={{ width: 106, height: 52 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 32, gap: 10 }}>
            {MYTHICAL_ISLAND_PACKS.map((icon: any, index: number) => (
              <StateButton
                key={index}
                isImage={true}
                color=""
                propFilter="expansion"
                keyFilter={8 + index}
                filterObj={filterObj}
              >
                <Image source={icon} style={[filterStyles.packImage, {height: 112}]} />
              </StateButton>
            ))}
          </ThemedView>
        </ThemedView>

        <View style={[ModalStyles.modalFooter]}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={() => handleExpansion(false)} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </Animated.View>
  );
});