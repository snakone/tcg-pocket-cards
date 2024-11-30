import { Image } from 'expo-image';
import { TouchableOpacity} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';
import { useI18n } from '@/core/providers/LanguageProvider';
import { indexScreenStyles } from '@/shared/styles/component.styles';
import { CHANGE_VIEW, HERO_IMAGE } from '@/shared/definitions/sentences/path.sentences';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const {i18n} = useI18n();
  const styles = indexScreenStyles;
  const router = useRouter();

  const audio = useRef<Audio.Sound>();

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(CHANGE_VIEW);
      audio.current = sound;
    }

    loadSound();
  }, []);

  const playSound = async () => {
    if (audio.current) {
      await audio.current.replayAsync();
    }
  };

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={HomeScreenModal()}
                        styles={{overflow: 'visible'}}>
      <ThemedView style={styles.container}>
        <Image
          source={HERO_IMAGE}
          style={styles.heroImage}/>
        <ThemedText style={styles.title}>{i18n.t('hero_title')}</ThemedText>
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

