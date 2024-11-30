import { useContext, useEffect, useRef } from "react";

import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import { NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AppContext } from "../_layout";
import { SettingsState } from "@/hooks/settings.reducer";

export default function SettingsScreen() {
  const settings = useRef<SettingsState>();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;

  useEffect(() => {
    settings.current = state.settingsState;
    console.log(settings.current)
  }, [])

  return (
    <SharedScreen title={'config'}>
      <ThemedText type="subtitle">Step 1: Explore</ThemedText>
      <ThemedText>
        Tap the Explore tab to learn more about what's included in this starter app.
      </ThemedText>
    </SharedScreen>
  )
}