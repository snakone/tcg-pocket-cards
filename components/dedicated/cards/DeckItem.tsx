import { Image } from 'expo-image';
import { TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StorageDeck } from "@/shared/definitions/interfaces/global.interfaces";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { CardGridStyles, CreateScreenStyles } from "@/shared/styles/component.styles";
import { AppState } from '@/hooks/root.reducer';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';

  export const renderDeckItem = (
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
                  Boolean(item.popular[i]) ? <Image style={[
                    CardGridStyles.image,
                    CreateScreenStyles.popularImage, {
                      transform: [{rotate: `${10 + (i * 8)}deg`}],
                      left: i * 25, 
                      zIndex: (1 / (i + 1) * 100),
                    }
                  ]} 
                  source={getImageLanguage116x162(state.settingsState.language, item.popular[i])}
                  key={i}/> :
                  <ThemedView style={[
                    CardGridStyles.image,
                    CreateScreenStyles.popularImage, {
                      transform: [{rotate: `${10 + (i * 8)}deg`}],
                      left: i * 25, 
                      zIndex: (1 / (i + 1) * 100),
                      opacity: 0.8
                    }
                  ]}
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