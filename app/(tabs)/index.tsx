import { useEffect } from 'react';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';

import Animated, { 
  Easing, 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withSequence, 
  withTiming 
} from 'react-native-reanimated';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenStyles, indexScreenStyles } from '@/shared/styles/component.styles';
import { HomeScreenModal } from '@/components/modals/HomeScreenModal';
import CardWithDiagonalSVG from '@/components/ui/CardWithBackground';
import { CHARIZARD_PACK, MEWTWO_PACK, PIKACHU_PACK } from '@/shared/definitions/sentences/path.sentences';
import { useI18n } from '@/core/providers/LanguageProvider';
import { Colors } from '@/shared/definitions/utils/colors';
import { getDaysRemaining } from '@/shared/definitions/utils/contants';

export default function HomeScreen() {
  const {i18n} = useI18n();
  const styles = indexScreenStyles;

  const rotate = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(
      withSequence(
        withTiming(8, { duration: 3000, easing: Easing.elastic(1) }), 
        withTiming(-8, { duration: 3000, easing: Easing.elastic(1) }) 
      ),
      -1,
      true 
    );

    translateY.value = withRepeat(
      withTiming(-4, { duration: 2000, easing: Easing.ease }),
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

  return (
    <ParallaxScrollView title={"tcg"} 
                        modalTitle='welcome' 
                        modalContent={HomeScreenModal()}
                        styles={{justifyContent: 'center'}}>
      <ThemedView style={[HomeScreenStyles.stepContainer, {height: 298}]}>
        <CardWithDiagonalSVG>
          <ThemedView style={{flexDirection: 'row', gap: 10}}>
            <Animated.View style={[animatedStyle, styles.cardShadow]}>
              <Image source={CHARIZARD_PACK} style={styles.imageWidth}></Image>
            </Animated.View>
            <Animated.View style={[animatedStyle, styles.cardShadow]}>
              <Image source={MEWTWO_PACK} style={styles.imageWidth}></Image>
            </Animated.View>
            <Animated.View style={[animatedStyle, styles.cardShadow]}>
              <Image source={PIKACHU_PACK} style={styles.imageWidth}></Image>
            </Animated.View>
          </ThemedView>
        </CardWithDiagonalSVG>
        <ThemedView style={styles.timerContainer}>
          <ThemedView style={styles.timerOutter}>
          <ThemedView style={styles.timerInner}>
            <ThemedView>
              <ThemedView style={styles.row}>
              <ThemedView style={styles.progressBarBackground}>
                <ThemedView style={[styles.progressBarFill, { width: `${getDaysRemaining().progress}%` }]} />
              </ThemedView>
              </ThemedView>
              <ThemedView style={[styles.row, {height: 20, position: 'relative', top: 2, left: -2}]}>
                <MaterialIcons name="schedule" color={Colors.light.text} size={14} style={{marginRight: 6}}></MaterialIcons>
                <ThemedText style={{fontSize: 12}}>{getDaysRemaining().remainingText}</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      
      <ThemedView style={{flexDirection: 'row', gap: 16, marginTop: 24}}>
          <CardWithDiagonalSVG width={171} height={50} scaleY={1}>
            <ThemedView style={styles.row}>
              <ThemedText>Hello</ThemedText>
            </ThemedView>
          </CardWithDiagonalSVG>
          <CardWithDiagonalSVG>
            <ThemedView>
              <ThemedText>Hello</ThemedText>
            </ThemedView>
          </CardWithDiagonalSVG>
        </ThemedView>
    </ParallaxScrollView>
  );
}

