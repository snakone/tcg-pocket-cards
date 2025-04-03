import { Image } from 'expo-image';
import { TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StorageDeck } from "@/shared/definitions/interfaces/global.interfaces";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { CardGridStyles, CreateScreenStyles } from "@/shared/styles/component.styles";
import { AppState } from '@/hooks/root.reducer';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { BACKWARD_CARD } from '@/shared/definitions/sentences/path.sentences';

  export const RenderDeckItem = (
    {item, state, onPress}: {item: StorageDeck, state: AppState, onPress: any}
  ) => {
    return (
      <ThemedView style={[CreateScreenStyles.deckItem,
                          {
                            borderColor: !item.valid  ? 'goldenrod' : 'transparent', 
                            borderWidth: !item.valid  ? 1 : 0
                          }]}>
        <TouchableOpacity style={{flex: 1}} onPress={onPress}>
          <ThemedView style={{flexDirection: 'row'}}>
            <ThemedView style={CreateScreenStyles.popularCards}>
              {
                [0, 1].map((i) => (
                  <Image style={[
                    CardGridStyles.image,
                    CreateScreenStyles.popularImage, {
                      transform: [{rotate: `${10 + (i * 8)}deg`}],
                      left: i * 25, 
                      zIndex: (1 / (i + 1) * 100),
                    }
                  ]} 
                  source={item.popular[i] ? getImageLanguage116x162(state.settingsState.language, item.popular[i]) : BACKWARD_CARD}
                  placeholder={BACKWARD_CARD}
                  key={i}/>
                ))
              }
            </ThemedView>
            <ThemedView style={[CreateScreenStyles.deckName, {justifyContent: 'space-between', width: '67%'}]}>
              <ThemedText style={[{left: 0, color: 'none'}, item.valid && {top: 1}]}>{item.name}</ThemedText>
              <ThemedView style={{position: 'absolute', right: 2, marginTop: 2}}>
                {
                  item && item.energies?.length > 0 && 
                    <ThemedView style={CreateScreenStyles.energies}>
                    {
                      item.energies.map((energy, i) => {                   
                        const image = (TYPE_MAP as any)[energy]?.image;
                        return (
                          <Image
                            key={i}
                            source={image}
                            style={{
                              width: 20,
                              height: 20,
                              position: 'relative',
                            }}
                          />
                        );
                      })
                    }
                  </ThemedView>
                }
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    )
};