import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Colors } from '@/shared/definitions/utils/colors';
import { CollapsideStyles } from '@/shared/styles/component.styles';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './ui/IconSymbol';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const styles = CollapsideStyles;

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={Colors.light.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}


