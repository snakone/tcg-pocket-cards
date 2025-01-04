import { SafeAreaView, View } from 'react-native';

import HeaderWithCustomModal from './shared/HeaderModal';
import { ThemedView } from './ThemedView';
import { ParallaxProps } from '@/shared/definitions/types/global.types';
import { ParallaxStyles } from '@/shared/styles/component.styles';
import { MIN_MODAL_HEIGHT } from '@/shared/definitions/utils/contants';

export default function ParallaxScrollView({
  children,
  title,
  modalContent,
  modalTitle,
  modalHeight = MIN_MODAL_HEIGHT,
  styles = {},
  showHeader = true
}: ParallaxProps) {
 
  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        { showHeader && 
          <View style={ParallaxStyles.header}>
            <HeaderWithCustomModal title={title} 
                                  modalContent={modalContent} 
                                  modalTitle={modalTitle}
                                  modalHeight={modalHeight}/>
          </View>
        }
        <ThemedView style={[ParallaxStyles.content, styles]}>{children}</ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}


