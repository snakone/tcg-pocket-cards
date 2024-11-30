export enum CardStageENUM {
  BASIC, ONE, TWO, ITEM, TOOL, FOSSIL, SUPPORTER
}

export enum CardRarityENUM {
  COMMON, UNCOMMON, RARE, DOUBLE, ART, SUPER, INMERSIVE, CROWN, PROMO, SPECIAL
}

export enum CardExpansionENUM {
  GENETIC_APEX, PROMO_A
}

export enum CardExpansionTypeENUM {
  A1
}

export type RarityWithoutSpecial = Exclude<CardRarityENUM, CardRarityENUM.SPECIAL>;

