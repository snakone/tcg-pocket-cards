import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';
import { useI18n } from '@/core/providers/LanguageProvider';

export default function HomeScreen() {
  const {i18n} = useI18n();

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={HomeScreenModal()}>
      <ThemedView>
        <ThemedText>Hello</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

