import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ProfileScreenModal } from '@/components/modals/ProfileScreenModal';
import { useI18n } from '@/core/providers/LanguageProvider';

export default function ProfileScreen() {
  const {i18n} = useI18n();
  
  return (
    <ParallaxScrollView title={"profile"} 
                        modalTitle='profile'
                        modalContent={ProfileScreenModal()}>
      <ThemedText>
        {i18n.t('under_construction')}
      </ThemedText>
    </ParallaxScrollView>
  );
}


