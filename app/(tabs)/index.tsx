import { Image } from 'expo-image';
import { TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

import { useI18n } from '@/core/providers/LanguageProvider';
import SoundService from '@/core/services/sounds.service';

import { homeScreenStyles } from '@/shared/styles/component.styles';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import { HERO_IMAGE } from '@/shared/definitions/sentences/path.sentences';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenModal } from '@/components/modals/screens/HomeScreenModal';


export default function HomeScreen() {
  const {i18n} = useI18n();
  const styles = homeScreenStyles;
  const router = useRouter();

  const playSound = async () => {
    SoundService.play('CHANGE_VIEW');
  };

  function handleClick(): void {
    playSound();
    router.push('/screens/help');
  }

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={<HomeScreenModal></HomeScreenModal>}
                        modalHeight={LARGE_MODAL_HEIGHT}>
      <ThemedView style={styles.container}>
        <Image
          source={HERO_IMAGE}
          style={styles.heroImage}
          alt='Hero'/>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedText style={[styles.title, {paddingTop: 2}]}>{i18n.t('hero_title')}</ThemedText>
          <ThemedText style={styles.subtitle}>
            {i18n.t('hero_discover')} <ThemedText style={{fontWeight: 'bold'}}>{i18n.t('pocket')}</ThemedText>. {i18n.t('hero_create')}
          </ThemedText>

          <TouchableOpacity style={[styles.ctaButton, {width: 204, marginHorizontal: 'auto', marginBlock: 50, paddingHorizontal: 10}]} 
                            onPress={handleClick}>
            <ThemedText style={[styles.ctaText, {textAlign: 'center', width: 184}]}>{i18n.t('discover_more')}</ThemedText>
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
        </ScrollView>
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

