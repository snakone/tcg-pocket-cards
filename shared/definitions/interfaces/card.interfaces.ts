import { PACKS_TYPE } from "../enums/packs.enums";
import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardSpecialConditionENUM, CardStageENUM } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { LanguageType } from "../types/global.types";

interface BaseCard {
  id: number,
  name: Record<LanguageType, string>;
  rarity: CardRarityENUM,
  expansion: CardExpansionENUM,
  stage: CardStageENUM,
  artist: string;
  number: number;
  order: number;
}

export interface Card extends BaseCard {
  health: number | -1;
  retreat: number | -1;
  element: PokemonTypeENUM | -1;
  weak?: PokemonTypeENUM | null,
  evolve?: number[];
  flavor: Record<LanguageType, string>;
  attacks?: Attack[],
  ability?: Ability;
  found?: PACKS_TYPE[];
  pokedex: number | -1;
  series?: CardExpansionTypeENUM;
  related?: number[];
  isEX?: boolean;
  extra?: Record<LanguageType, string>;
  condition: CardSpecialConditionENUM[];
  info?: PokedexInfo;
  shiny: boolean;
}

export interface Attack {
  id?: number;
  name: Record<LanguageType, string>;
  damage: number;
  energy: PokemonTypeENUM[];
  description?: Record<LanguageType, string>;
}

export interface AttackMetaData extends Attack {
  card: number;
  index: number;
}

interface Ability {
  name: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
}

interface PokedexInfo {
  type: Record<LanguageType, string>;
  height: Record<LanguageType, string>;
  weight: Record<LanguageType, string>;
}

export interface CardPackTag {
  label: string, 
  tag: string, 
  color: string, 
  background: string,
  promo_amount: string;
}

