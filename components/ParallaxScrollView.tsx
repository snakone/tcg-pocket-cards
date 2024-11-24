import { SafeAreaView, View } from 'react-native';

import HeaderWithCustomModal from './shared/HeaderModal';
import { ThemedView } from './ThemedView';
import { ParallaxProps } from '@/shared/definitions/types/global.types';
import { ParallaxStyles } from '@/shared/styles/component.styles';

export default function ParallaxScrollView({
  children,
  title,
  modalContent,
  modalTitle
}: ParallaxProps) {
  const styles = ParallaxStyles;
  
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <HeaderWithCustomModal title={title} 
                                 modalContent={modalContent} 
                                 modalTitle={modalTitle}/>
        </View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}


