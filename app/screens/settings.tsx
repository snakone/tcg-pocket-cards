import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";

export default function SettingsScreen() {
  return (
    <SharedScreen title={'config'}>
      <ThemedText type="subtitle">Step 1: Explore</ThemedText>
      <ThemedText>
        Tap the Explore tab to learn more about what's included in this starter app.
      </ThemedText>
    </SharedScreen>
  )
}