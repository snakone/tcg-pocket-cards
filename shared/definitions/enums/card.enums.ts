export enum CardStageENUM {
  BASIC, ONE, TWO, ITEM, TOOL, FOSSIL, SUPPORTER
}

export enum CardRarityENUM {
  PROMO, SPECIAL, COMMON, UNCOMMON, RARE, DOUBLE, ART, SUPER, INMERSIVE, CROWN
}

export enum CardExpansionENUM {
  GENETIC_APEX, PROMO_A, MYTHICAL_ISLAND, SPACE_TIME_SMACKDOWN, TRIUMPH_LIGHT
}

export enum CardExpansionTypeENUM {
  A1, A1A, A2, A2A
}

export enum CardSpecialConditionENUM {
  ATTACK_BENCH,
  HEAL,
  RECOIL,
  POISON,
  PARALYZE,
  SLEEP,
  CONFUSION,
  BURNED,
  FLIP,
  NOTHING,
  DISCARD,
  ADD,
  EXTRA_DAMAGE,
  RESIST,
  CORNER,
  WITHDRAW_CARD,
  RETIRE,
  CALL,
  INACTIVE,
  FORCE_SWITCH,
  ARCEUS_LINK,
  PLAY_CARDS
}

export enum CardLanguageENUM {
  ES, EN, JAP, FRA, ALE, ITA, BR, COR, CHI
}

export type RarityWithoutSpecial = Exclude<CardRarityENUM, CardRarityENUM.SPECIAL>;

