import { memo, MutableRefObject } from "react";
import { Subject } from "rxjs";
import { Image } from 'expo-image';

import { RARITY_MAP, ICON_WIDTH } from "@/shared/definitions/utils/constants";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { CardRarityENUM } from "@/shared/definitions/enums/card.enums";

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";

interface RarityItemProps {
  filterObj: MutableRefObject<FilterSearch>,
  raritySelectAll$: Subject<boolean>
}

export const RarityItem = memo(({ filterObj, raritySelectAll$ }: RarityItemProps) => {
  return (
    <ThemedView style={[filterStyles.flexContainer, { flexWrap: 'wrap', marginBottom: 48 }]}>
      {Object.keys(filterObj.current.rarity).filter(key => key !== '0').map((key, index) => {
        const image = (RARITY_MAP as any)[key]?.image;
        const amount = (RARITY_MAP as any)[key]?.amount;

        return image && (
          <StateButton
            propFilter="rarity"
            keyFilter={key}
            onPress={raritySelectAll$}
            key={index}
            filterObj={filterObj}
            style={[
              { overflow: 'hidden' },
              filterStyles.button,
              filterStyles.imageContainer,
              { width: ICON_WIDTH + (amount - 1) * 25 },
            ]}
          >
            {Array.from({ length: amount }).map((_, i) => (
              <Image
                key={index + (i + 1)}
                source={image}
                style={[
                  filterStyles.image,
                  Number(key) === CardRarityENUM.CROWN && { width: 30, transform: [{ scale: 0.86 }] },
                ]}
              />
            ))}
          </StateButton>
        )
      })}
      <StateButton
        onPress={raritySelectAll$}
        style={filterStyles.button}
        label={'promo'}
        showLabel={true}
        propFilter="rarity"
        keyFilter={0}
        filterObj={filterObj}
      />
    </ThemedView>
  );
});