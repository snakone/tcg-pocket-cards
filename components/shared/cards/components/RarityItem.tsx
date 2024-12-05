import { memo, MutableRefObject } from "react";
import { Subject } from "rxjs";
import { Image } from 'expo-image';

import { ThemedView } from "@/components/ThemedView";
import StateButton from "@/components/ui/StateButton";
import { RARITY_MAP, ICON_WIDTH } from "@/shared/definitions/utils/contants";
import { filterStyles } from "@/shared/styles/component.styles";
import { FilterSearch } from "@/shared/definitions/classes/filter.class";
import { RarityWithoutSpecial } from "@/shared/definitions/enums/card.enums";

interface RarityItemProps {
  rarity: { [key in RarityWithoutSpecial]: boolean | null },
  filterObj: MutableRefObject<FilterSearch>,
  raritySelectAll$: Subject<boolean>
}

export const RarityItem = memo(({ rarity, filterObj, raritySelectAll$ }: RarityItemProps) => {
  return (
    <ThemedView style={[filterStyles.flexContainer, { flexWrap: 'wrap', marginBottom: 48 }]}>
      {Object.keys(rarity).map((key, index) => {
        const image = RARITY_MAP[key]?.image;
        const amount = RARITY_MAP[key]?.amount;

        return image ? (
          <StateButton
            propFilter="rarity"
            keyFilter={index}
            onPress={raritySelectAll$}
            key={index}
            filterObj={filterObj}
            style={[
              { overflow: 'hidden' },
              filterStyles.button,
              filterStyles.imageContainer,
              { width: ICON_WIDTH + (amount - 1) * 44 },
            ]}
          >
            {Array.from({ length: amount }).map((_, i) => (
              <Image
                key={index + (i + 1)}
                source={image}
                style={[
                  filterStyles.image,
                  index === 7 && { width: 30, transform: [{ scale: 0.86 }] },
                ]}
              />
            ))}
          </StateButton>
        ) : (
          // PROMO
          <StateButton
            key={index}
            onPress={raritySelectAll$}
            style={filterStyles.button}
            label={'promo'}
            showLabel={true}
            propFilter="rarity"
            keyFilter={8}
            filterObj={filterObj}
          />
        );
      })}
    </ThemedView>
  );
});