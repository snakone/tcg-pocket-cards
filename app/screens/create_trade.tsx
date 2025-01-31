import { Platform, Pressable, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import React from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { HelpItemStyles } from "@/shared/styles/component.styles";
import SoundService from "@/core/services/sounds.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedView } from "@/components/ThemedView";
import { AppContext } from "../_layout";
import Storage from "@/core/storage/storage.service";

export default function CreateTradeScreen() {
  const {i18n} = useI18n();
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const styles = HelpItemStyles;

  const playSound = async () => {
    SoundService.play('AUDIO_MENU_CLOSE');
  }

  return (
    <>
      <SharedScreen title={'create_trade'} styles={{paddingHorizontal: 16}}>
        <ThemedView>
          <ThemedText>Create Trade</ThemedText>
        </ThemedView>
      </SharedScreen>
    </>
  )
}

