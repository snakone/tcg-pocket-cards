import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenStyles } from '@/shared/styles/component.styles';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';

export default function HomeScreen() {
  const styles = HomeScreenStyles;

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={HomeScreenModal()}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
