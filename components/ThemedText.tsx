import { Text } from 'react-native';

import { ThemedTextProps } from '@/shared/definitions/types/global.types';
import { ThemeTextStyles } from '@/shared/styles/component.styles';

export function ThemedText({
  style,
  color,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const styles = ThemeTextStyles;

  return (
    <Text style={[{ color }, styles[type], style]} {...rest} />
  );
}


