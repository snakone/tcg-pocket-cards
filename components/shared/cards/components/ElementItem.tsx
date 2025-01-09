import { memo, MutableRefObject } from "react";
import { Image } from 'expo-image';
import { Subject } from "rxjs";

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { TYPE_MAP } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { PokemonTypeENUM } from "@/shared/definitions/enums/pokemon.enums";

interface ElementItemProps {
  element: { [key in PokemonTypeENUM]: boolean | null },
  filterObj: MutableRefObject<FilterSearch>,
  typeSelectAll$: Subject<boolean>
}

export const ElementItem = memo(({ element, filterObj, typeSelectAll$ }: ElementItemProps) => {
  return (
    <ThemedView
      style={[
        filterStyles.flexContainer,
        { justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 48, paddingRight: 16 },
      ]}
    >
      {Object.keys(element).map((key, i) => {
        const image = (TYPE_MAP as any)[key]?.image;
        const label = (TYPE_MAP as any)[key]?.label;

        return (
          <StateButton
            key={i}
            label={label}
            showLabel={true}
            onPress={typeSelectAll$}
            labelMargin={true}
            propFilter="element"
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