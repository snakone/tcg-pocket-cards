import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { DecksScreenModal } from '@/components/modals';

export default function DecksScreen() {
  const {i18n} = useI18n();
  
  return (
    <ParallaxScrollView title={"decks"} 
                        modalTitle='decks'
                        modalContent={DecksScreenModal()}>
      <ThemedText>
        {i18n.t('under_construction')}
      </ThemedText>
    </ParallaxScrollView>
  );
}