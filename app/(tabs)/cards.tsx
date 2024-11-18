import ParallaxScrollView from '@/components/ParallaxScrollView';
import ImageGridWithSearch from '@/components/ui/CardGrid';
import { CardsScreenModal } from '@/components/modals/CardsScreenModal';

export default function CardsScreen() {
  return (
    <ParallaxScrollView title={"Colección de cartas"} 
                        modalTitle='Cartas'
                        modalContent={CardsScreenModal()}>
      <ImageGridWithSearch/>
    </ParallaxScrollView>
  );
}


