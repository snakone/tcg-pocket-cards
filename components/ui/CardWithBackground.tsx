import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path, ClipPath } from 'react-native-svg';

export const SVG_WIDTH = 358;
export const SVG_HEIGHT = 250;

interface CardWithGradientProps {
  children: React.ReactNode,
  startColor?: string,
  endColor?: string,
  width?: number,
  height?: number,
  scaleY?: number
}

const CardWithDiagonalBackground = ({ 
  children, 
  startColor = "#e3cdfb", 
  endColor = "#630dbe", 
  width = SVG_WIDTH, 
  height = SVG_HEIGHT,
  scaleY = 2 
}: CardWithGradientProps) => {
  const path = `M 0 0 L 358 0 L 358 110 L 0 150 Z`;

  return (
    <View style={styles.container}>
      <View style={[styles.card,  {width}]}>
        <Svg width={width} style={[StyleSheet.absoluteFill, {transform: [{scaleY}]}]}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor={startColor} stopOpacity="1" />
              <Stop offset="100%" stopColor={endColor} stopOpacity="1" />
            </LinearGradient>
            <ClipPath id="clipPath">
              <Path d={path} />
            </ClipPath>
          </Defs>

          <Rect
            x="0"
            y="0"
            width={width}
            height={height}
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
    borderRadius: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    padding: 16,
    paddingTop: 28,
    overflow: 'hidden',
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6
  }
});

export default CardWithDiagonalBackground;
