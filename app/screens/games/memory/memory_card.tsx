import React, { useEffect } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";

import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { getImageLanguage116x162 } from "@/shared/definitions/utils/functions";
import { LanguageType } from "@/shared/definitions/types/global.types";

interface CardProps {
  onPress: () => void;
  card: Card;
  isFlipped: boolean;
  isInactive: boolean;
  disabled: boolean,
  mode: 4 | 6 | 8
}

export const MemoryCard: React.FC<CardProps> = ({ onPress, card, isFlipped, isInactive, disabled, mode }) => {
  const {i18n} = useI18n();
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (isInactive) return;
    rotation.value = withTiming(isFlipped ? 180 : 0, { duration: 500 });
  }, [isFlipped, isInactive]);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotation.value}deg` }],
    opacity: rotation.value > 90 ? 0 : 1,
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotation.value - 180}deg` }],
    opacity: rotation.value > 90 ? 1 : 0,
  }));

  return (
    <TouchableOpacity onPress={onPress} disabled={isFlipped || isInactive || disabled}>
      <View style={[
        styles.card, 
        isInactive && styles.inactive, 
        disabled && styles.disabled, 
        mode === 6 && {width: 50},
        mode === 8 && {width: 34.8}
      ]}>
        <Animated.View style={[styles.cardFace, frontStyle]}>
          <Image source={BACKWARD_CARD} style={[
            styles.image, 
            mode === 6 && {width: 54, height: 76},
            mode === 8 && {width: 41, height: 57}
          ]} />
        </Animated.View>

        <Animated.View style={[styles.cardFace, styles.backFace, backStyle]}>
          <Image source={{uri: getImageLanguage116x162(i18n.locale as LanguageType, card.id)}} 
                 style={[
                  styles.image, 
                  mode === 6 && {width: 54, height: 76},
                  mode === 8 && {width: 41, height: 57}
                ]} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 367/512
  },
  cardFace: {
    position: "absolute",
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  backFace: {
    backgroundColor: "#f8f8f8",
  },
  inactive: {
    opacity: 0.5,
  },
  disabled: {
    opacity: Platform.OS === 'android' ? 0.6 : 0.8
  },
  image: {
    width: 80,
    height: 112,
    borderRadius: 4,
  },
});

export default MemoryCard;
