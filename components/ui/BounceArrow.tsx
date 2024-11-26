import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { IconSymbol } from './IconSymbol';

const BounceArrow = ({ direction = 'right' }) => {
  const bounceAnim = useRef(new Animated.Value(0)).current; // Valor animado

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 500,
          easing: (t) => t * .9,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          easing: (t) => t * .9,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 20,
      top: -1,
      left: direction === 'left' ? 6 : null,
      right: direction === 'right' ? 0 : null
    },
    icon: {
      color: 'skyblue',
      fontSize: 24
    }
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          {
            transform: [
              {
                translateX: bounceAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange:
                    direction === 'right' ? [0, 10] : [0, -10],
                }),
              },
            ],
            opacity: .7
          },
        ]}
      >
        <IconSymbol name={direction === 'left' ? 'arrow.backward.circle' : 'arrow.forward.circle'}
                    color={'skyblue'} 
                    style={styles.icon}>
        </IconSymbol>
      </Animated.Text>
    </View>
  );
};

export default BounceArrow;
