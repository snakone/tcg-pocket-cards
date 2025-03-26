import { TouchableOpacity } from 'react-native';

import { RouteItem } from "@/shared/definitions/interfaces/layout.interfaces";
import { Colors } from '@/shared/definitions/utils/colors';
import { HelpItemStyles } from '@/shared/styles/component.styles';
import { ThemedView } from "../ThemedView";
import { IconSymbol } from './IconSymbol';
import SoundService from '@/core/services/sounds.service';

export default function HelpItem({ onClick, children, item, disabled }: RouteItem) {
  const handleClick = async () => {
    await SoundService.play('AUDIO_MENU_OPEN');
    onClick();
  };

  return (
    <TouchableOpacity disabled={disabled} onPress={handleClick}>
      <ThemedView style={[
          HelpItemStyles.item, 
          item.modal === 'make_backup' && {borderWidth: 1, borderColor: 'mediumaquamarine'}]}>
        {children}
        <ThemedView style={{ marginLeft: 'auto' }}>
          <IconSymbol name="chevron.right.circle" color={item.modal === 'make_backup' ? 'mediumaquamarine' : Colors.light.text} />
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

