import { useContext, useEffect, useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import { SettingsState } from "@/hooks/settings.reducer";
import { Pressable } from "react-native";

export default function SettingsScreen() {
  const [settings, setSettings] = useState<SettingsState>();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;

  useEffect(() => {
    setSettings(state.settingsState);
  }, [])

  return (
    <SharedScreen title={'config'}>
      <ThemedText type="subtitle">Step 1: Explore</ThemedText>
    </SharedScreen>
  )
}