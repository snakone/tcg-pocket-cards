import { Image } from 'expo-image';
import { TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StorageDeck } from "@/shared/definitions/interfaces/global.interfaces";
import { CARD_IMAGE_MAP, CARD_IMAGE_MAP_116x162 } from "@/shared/definitions/utils/card.images";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { CardGridStyles, CreateScreenStyles } from "@/shared/styles/component.styles";

  export const renderDeckItem = (
    {item, index, onPress}: {item: StorageDeck, index: number, onPress: any}
  ) => {
    return (
      <ThemedView style={[CreateScreenStyles.deckItem, 
                          {
                            borderColor: !item.valid  ? 'goldenrod' : 'transparent', 
                            borderWidth: 1, 
                            borderLeftWidth: 0, 
                            borderTopWidth: 0, 
                            borderBottomWidth: 0
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
                    }, CARD_IMAGE_MAP[String(item.popular[i])] && {opacity: 1}
                  ]} 
                  source={CARD_IMAGE_MAP_116x162[String(item.popular[i])]}
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
              <ThemedText style={{left: 0, top: 1}}>{item.name}</ThemedText>
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
                              width: 18,
                              height: 18,
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