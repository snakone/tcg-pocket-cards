import { HELP_SENTENCE } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";

export default function HelpScreen() {
  return (
    <SharedScreen title={HELP_SENTENCE}>
      <ThemedText type="subtitle">Step 1: Explore</ThemedText>
      <ThemedText>
        Tap the Explore tab to learn more about what's included in this starter app.
      </ThemedText>
    </SharedScreen>
  )
}

