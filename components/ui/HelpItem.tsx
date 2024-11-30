import { TouchableOpacity } from 'react-native';

import { RouteItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { Colors } from '@/shared/definitions/utils/colors';
import { HelpItemStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "../ThemedView";
import { IconSymbol } from './IconSymbol';
import SoundService from '@/core/services/sounds.service';

export default function HelpItem({ onClick, children }: RouteItem) {
  const handleClick = async () => {
    await SoundService.play('AUDIO_MENU_OPEN');
    onClick();
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <ThemedView style={HelpItemStyles.item}>
        {children}
        <ThemedView style={{ marginLeft: 'auto' }}>
          <IconSymbol name="chevron.right.circle" color={Colors.light.text} />
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

