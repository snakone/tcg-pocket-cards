import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { NewsScreenModal } from '@/components/modals';

export default function NewsScreen() {
  const {i18n} = useI18n();
  
  return (
    <ParallaxScrollView title={"news"} 
                        modalTitle='news'
                        modalContent={NewsScreenModal()}>
      <ThemedText>
        {i18n.t('under_construction')}
      </ThemedText>
    </ParallaxScrollView>
  );
}