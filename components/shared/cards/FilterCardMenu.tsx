import { BlurView } from "expo-blur";
import { Platform, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { Audio } from "expo-av";
import { useRef, useEffect, useCallback } from "react";

import { TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { AUDIO_MENU_CLOSE } from "@/shared/definitions/sentences/path.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "@/core/providers/LanguageProvider";

export default function FilterCardMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;

  const styles = ModalStyles;
  const closed = useRef<Audio.Sound>();
  const {i18n} = useI18n();

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      closed.current = sound;
    }

    loadSounds();
  }, []);

  const playSound = useCallback(async () => {
    if (closed.current) await closed.current.replayAsync();
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

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
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('filter')}</ThemedText>
        </View>
        <ScrollView style={styles.modalScrollView}>
          <ThemedView></ThemedView>
        </ScrollView>
        <View style={styles.modalFooter}>
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
    height: 400, 
    position: 'absolute', 
    width: '100%',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40, borderTopRightRadius: 40
  },
});


