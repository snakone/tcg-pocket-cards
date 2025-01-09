import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  color?: string;
};

export function ThemedView({ style, color, ...rest }: ThemedViewProps) {
  return <View style={[{ backgroundColor: color }, style]} {...rest} />;
}
