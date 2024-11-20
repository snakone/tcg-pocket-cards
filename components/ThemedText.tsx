import { Text } from 'react-native';

import { ThemedTextProps } from '@/shared/definitions/types/global.types';
import { ThemeTextStyles } from '@/shared/styles/component.styles';
import { Colors } from '@/shared/definitions/utils/colors';

export function ThemedText({
  style,
  color = Colors.light.text,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const styles = ThemeTextStyles;

  return (
    <Text style={[{ color }, styles[type], style]} {...rest} />
  );
}


