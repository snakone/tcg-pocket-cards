import { Image } from 'expo-image';
import { TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { useContext, useEffect } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';
import { useI18n } from '@/core/providers/LanguageProvider';
import { homeScreenStyles } from '@/shared/styles/component.styles';
import { HERO_IMAGE } from '@/shared/definitions/sentences/path.sentences';
import SoundService from '@/core/services/sounds.service';
import { LARGE_MODAL_HEIGHT } from '@/shared/definitions/utils/constants';
import { NO_CONTEXT } from '@/shared/definitions/sentences/global.sentences';
import { AppContext } from '../_layout';

export default function HomeScreen() {
  console.log('Home Screen')
  const {i18n} = useI18n();
  const styles = homeScreenStyles;
  const router = useRouter();
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;

  const playSound = async () => {
    SoundService.play('CHANGE_VIEW');
  };

  function handleClick(): void {
    playSound();
    dispatch({type: 'SET_NAVIGATING', value: true});
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
                            onPress={handleClick}
                            disabled={state.cardState.navigating}>
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

