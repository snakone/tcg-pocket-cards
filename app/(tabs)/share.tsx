import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { ShareScreenModal } from '@/components/modals';

export default function ShareScreen() {
  const {i18n} = useI18n();
  
  return (
    <ParallaxScrollView title={"share"} 
                        modalTitle='share'
                        modalContent={ShareScreenModal()}>
      <ThemedText>
        {i18n.t('under_construction')}
      </ThemedText>
    </ParallaxScrollView>
  );
}