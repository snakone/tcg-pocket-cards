import { useEffect } from 'react';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenStyles } from '@/shared/styles/component.styles';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';
import CardWithDiagonalSVG from '@/components/ui/CardWithBackground';
import { CHARIZARD_PACK, MEWTWO_PACK, PIKACHU_PACK } from '@/shared/definitions/sentences/path.sentences';
import { useI18n } from '@/core/providers/LanguageProvider';

import Animated, { 
  Easing, 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withSequence, 
  withTiming 
} from 'react-native-reanimated';

export default function HomeScreen() {
  const styles = HomeScreenStyles;
  const {i18n} = useI18n();

  const rotate = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withSequence(
        withTiming(8, { duration: 3800, easing: Easing.elastic(2) }), 
        withTiming(-8, { duration: 3800, easing: Easing.elastic(2) }) 
      ),
      -1,
      true 
    );

    translateY.value = withRepeat(
      withTiming(-3, { duration: 2000, easing: Easing.ease }),
      -1,
      true 
    );
  }, [translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 350 },
        { rotateY: `${rotate.value}deg` }, 
        { translateY: translateY.value }
      ],
    };
  })

  function getDaysRemaining(): number {
    const target = new Date(2025, 0, 29);
    const today = new Date();
    const diff = target.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days;
  }

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={HomeScreenModal()}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{i18n.t('current_packs')}</ThemedText>
        <ThemedText>
          <CardWithDiagonalSVG>
            <ThemedView style={{flexDirection: 'row', gap: 10}}>
              <Animated.View style={animatedStyle}>
                <Image source={CHARIZARD_PACK} style={{width: 95, height: 190}}></Image>
              </Animated.View>
              <Animated.View style={animatedStyle}>
                <Image source={MEWTWO_PACK} style={{width: 95, height: 190}}></Image>
              </Animated.View>
              <Animated.View style={animatedStyle}>
                <Image source={PIKACHU_PACK} style={{width: 95, height: 190}}></Image>
              </Animated.View>
            </ThemedView>
          </CardWithDiagonalSVG>
          <ThemedView style={{width: '100%'}}>
            <ThemedText style={
              {textAlign: 'right', 
              fontSize: 14, 
              position: 'relative', 
              top: 8, 
              width: '100%'
            }}>{i18n.t('ends_in')}
              <ThemedText type='defaultSemiBold' style={{fontSize: 14}}>
                {getDaysRemaining()}
              </ThemedText> {i18n.t('days')}
            </ThemedText>
          </ThemedView>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
