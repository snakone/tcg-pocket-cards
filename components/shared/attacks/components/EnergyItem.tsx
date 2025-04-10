import { memo, MutableRefObject } from "react";
import { Image } from 'expo-image';
import { Subject } from "rxjs";

import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";
import { FilterAttackSearch } from "@/shared/definitions/classes/filter_attack.class";

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";

interface EnergyItemProps {
  energy: { [key in PokemonTypeENUM]: boolean | null },
  filterObj: MutableRefObject<FilterAttackSearch>,
  typeSelectAll$: Subject<boolean>
}

export const EnergyItem = memo(({ energy, filterObj, typeSelectAll$ }: EnergyItemProps) => {
  return (
    <ThemedView
      style={[
        filterStyles.flexContainer,
        { justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48, paddingRight: 16 },
      ]}
    >
      {Object.keys(energy).map((key, i) => {
        const image = (TYPE_MAP as any)[key]?.image;
        const label = (TYPE_MAP as any)[key]?.label;

        return (
          <StateButton
            key={i}
            label={label}
            showLabel={true}
            onPress={typeSelectAll$}
            labelMargin={true}
            propFilter="energy"
            disabled={i === 8}
            isImage={i === 8}
            keyFilter={i}
            filterObj={filterObj}
            style={[
              filterStyles.button,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '48%',
              },
            ]}
          >
            <Image
              source={image}
              style={{
                width: 21,
                height: 21,
                position: 'absolute',
                left: 20,
                marginRight: 8,
              }}
            />
          </StateButton>
        );
      })}
    </ThemedView>
  );
});