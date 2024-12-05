import { Image } from 'expo-image';
import React, { MutableRefObject } from "react";
import { View, TouchableOpacity } from "react-native";
import Animated from 'react-native-reanimated';

import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import StateButton from "@/components/ui/StateButton";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { GENETIC_APEX } from "@/shared/definitions/sentences/path.sentences";
import { MenuStyles, filterStyles, TabsMenuStyles, ModalStyles, ButtonStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";

interface ExpansionMenuProps {
  PACKS: any[],
  filterObj: MutableRefObject<FilterSearch>,
  handleExpansion: (value: boolean) => Promise<void>
}

export const ExpansionsMenu = React.memo(({PACKS, filterObj, handleExpansion }: ExpansionMenuProps) => {
  return (
    <Animated.View style={[MenuStyles.expansions]}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={filterStyles.expansionShadow}></ThemedView>
        <ThemedView style={filterStyles.expansionContainer}>
          <Image source={GENETIC_APEX} style={{ width: 106, height: 50 }}></Image>
          <ThemedView style={{ flexDirection: 'row', marginBlock: 32, gap: 10 }}>
            {PACKS.map((icon: any, index: number) => (
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