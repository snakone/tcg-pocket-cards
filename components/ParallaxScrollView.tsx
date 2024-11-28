import { SafeAreaView, View } from 'react-native';

import HeaderWithCustomModal from './shared/HeaderModal';
import { ThemedView } from './ThemedView';
import { ParallaxProps } from '@/shared/definitions/types/global.types';
import { ParallaxStyles } from '@/shared/styles/component.styles';

export default function ParallaxScrollView({
  children,
  title,
  modalContent,
  modalTitle,
  styles = {}
}: ParallaxProps) {
 
  return (
    <ThemedView style={ParallaxStyles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={ParallaxStyles.header}>
          <HeaderWithCustomModal title={title} 
                                 modalContent={modalContent} 
                                 modalTitle={modalTitle}/>
        </View>
        <ThemedView style={[ParallaxStyles.content, styles]}>{children}</ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}


