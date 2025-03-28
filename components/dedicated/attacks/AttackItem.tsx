import { Image } from 'expo-image';
import { TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { CreateScreenStyles } from "@/shared/styles/component.styles";
import { Attack } from '@/shared/definitions/interfaces/card.interfaces';
import { LanguageType } from '@/shared/definitions/types/global.types';

interface AttackItem {
  item: Attack;
  lang: LanguageType;
  onPress: any;
  disabled: boolean;
  focused: boolean;
}

  export const renderAttackItem = ({item, lang, onPress, disabled, focused}: AttackItem) => {
    return (
      <ThemedView style={[CreateScreenStyles.deckItem]}>
        <TouchableOpacity style={{flex: 1}} onPress={onPress} disabled={disabled}>
          {
            !focused ? <ThemedView style={{minHeight: 30}}></ThemedView> : 
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
          }

        </TouchableOpacity>
      </ThemedView>
    )
};