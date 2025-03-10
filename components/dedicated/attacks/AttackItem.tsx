import { Image } from 'expo-image';
import { TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StorageDeck } from "@/shared/definitions/interfaces/global.interfaces";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { CardGridStyles, CreateScreenStyles } from "@/shared/styles/component.styles";
import { AppState } from '@/hooks/root.reducer';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { Attack } from '@/shared/definitions/interfaces/card.interfaces';
import { LanguageType } from '@/shared/definitions/types/global.types';

  export const renderAttackItem = (
    {item, lang, onPress}: {item: Attack, lang: LanguageType, onPress: any}
  ) => {

    return (
      <ThemedView style={[CreateScreenStyles.deckItem]}>
        <TouchableOpacity style={{flex: 1}} onPress={onPress}>
          <ThemedView style={{flexDirection: 'row'}}>
            <ThemedView style={[CreateScreenStyles.deckName, {justifyContent: 'space-between', width: '100%', minHeight: 30}]}>
              <ThemedText style={[{left: 6, color: 'none'}]}>
                {item.name[lang]}
                {
                  item.damage > 0 && <ThemedText style={{fontWeight: 'bold'}}> - {item.damage}</ThemedText>
                }
              </ThemedText>
              <ThemedView style={{position: 'absolute', right: 2, marginTop: 2}}>
                {
                  item && item.energy?.length > 0 && 
                    <ThemedView style={CreateScreenStyles.energies}>
                    {
                      item.energy.map((ener, i) => {                   
                        const image = (TYPE_MAP as any)[ener]?.image;
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