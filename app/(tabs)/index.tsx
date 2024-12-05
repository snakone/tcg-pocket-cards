import { Image } from 'expo-image';
import { TouchableOpacity} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';
import { useI18n } from '@/core/providers/LanguageProvider';
import { homeScreenStyles } from '@/shared/styles/component.styles';
import { HERO_IMAGE } from '@/shared/definitions/sentences/path.sentences';
import { useRouter } from 'expo-router';
import SoundService from '@/core/services/sounds.service';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/contants';

export default function HomeScreen() {
  const {i18n} = useI18n();
  const styles = homeScreenStyles;
  const router = useRouter();

  const playSound = async () => {
    SoundService.play('CHANGE_VIEW');
  };

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={HomeScreenModal()}
                        modalHeight={LARGE_MODAL_HEIGHT}>
      <ThemedView style={styles.container}>
        <Image
          source={HERO_IMAGE}
          style={styles.heroImage}/>
        <ThemedText style={[styles.title, {paddingTop: 2}]}>{i18n.t('hero_title')}</ThemedText>
        <ThemedText style={styles.subtitle}>
          {i18n.t('hero_discover')} <ThemedText style={{fontWeight: 'bold'}}>{i18n.t('pocket')}</ThemedText>. {i18n.t('hero_create')}
        </ThemedText>

        <TouchableOpacity style={styles.ctaButton} onPress={() => (playSound(), router.push('/screens/help'))}>
          <ThemedText style={styles.ctaText}>{i18n.t('discover_more')}</ThemedText>
        </TouchableOpacity>

        <ThemedView style={styles.infoSection}>
          <ThemedText style={styles.infoText}>
            {i18n.t('hero_sub')} <ThemedText style={[styles.infoText, {fontWeight: 'bold'}]}>
            {i18n.t('hero_lucre')}</ThemedText> {i18n.t('hero_seek')}
          </ThemedText>
          <ThemedText style={styles.infoText}>
            {i18n.t('hero_join')}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

