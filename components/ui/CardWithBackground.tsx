import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path, ClipPath } from 'react-native-svg';

const SVG_WIDTH = 334;
const SVG_HEIGHT = 380;

const CardWithDiagonalBackground = ({ children, startColor = "#c490fc", endColor = "#a369e2" }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Svg height={SVG_HEIGHT} width={SVG_WIDTH} style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor={startColor} stopOpacity="1" />
              <Stop offset="100%" stopColor={endColor} stopOpacity="1" />
            </LinearGradient>
            <ClipPath id="clipPath">
              <Path d="M 0 0 L 350 0 L 334 110 L 0 150 Z" />
            </ClipPath>
          </Defs>

          <Rect
            x="0"
            y="0"
            width={SVG_WIDTH}
            height="100%"
            fill="url(#grad)"
            clipPath="url(#clipPath)"
          />
        </Svg>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
  },
  card: {
    flex: 1,
    width: SVG_WIDTH,
    height: SVG_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    padding: 16,
    paddingBlock: 14
  },
  cardText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardWithDiagonalBackground;
