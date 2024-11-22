import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { CreateScreenModal } from '@/components/modals/CreateScreenModal';
import { useContext, useEffect } from 'react';
import { AppContext } from '../_layout';

export default function CreateDeckScreen() {
  return (
    <ParallaxScrollView title={"Creación de mazos"} 
                        modalTitle='Crear mazos' 
                        modalContent={CreateScreenModal()}>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}


