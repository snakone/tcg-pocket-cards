export enum CardStageENUM {
  BASIC, ONE, TWO, ITEM, TOOL, FOSSIL, SUPPORTER
}

export enum CardRarityENUM {
  PROMO, SPECIAL, COMMON, UNCOMMON, RARE, DOUBLE, ART, SUPER, INMERSIVE, CROWN
}

export enum CardExpansionENUM {
  GENETIC_APEX, PROMO_A, MYTHICAL_ISLAND, SPACE_TIME_SMACKDOWN
}

export enum CardExpansionTypeENUM {
  A1, A1A, A2
}

export type RarityWithoutSpecial = Exclude<CardRarityENUM, CardRarityENUM.SPECIAL>;

