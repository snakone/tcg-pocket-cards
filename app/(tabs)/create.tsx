import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { useI18n } from '@/core/providers/LanguageProvider';

export default function CreateDeckScreen() {
  const {i18n} = useI18n();

  return (
    <ParallaxScrollView title={"deck_creation"} 
                        modalTitle='create_deck' 
                        modalContent={CreateScreenModal()}>
        <ThemedText>
          {i18n.t('under_construction')}
        </ThemedText>
    </ParallaxScrollView>
  );
}


