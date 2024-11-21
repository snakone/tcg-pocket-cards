import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { ProfileScreenModal } from '@/components/modals/ProfileScreenModal';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView title={"Perfil de entrenador"} 
                        modalTitle='Perfil'
                        modalContent={ProfileScreenModal()}>
      <ThemedView>
        <ThemedText>Profile</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}


