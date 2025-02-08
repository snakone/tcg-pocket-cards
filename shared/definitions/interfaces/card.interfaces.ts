import { PACKS_TYPE } from "../enums/packs.enums";
import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardSpecialConditionENUM, CardStageENUM } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { LanguageType } from "../types/global.types";

interface BaseCard {
  id: number,
  name: {[key in LanguageType]: string};
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
  flavor: {[key in LanguageType]: string};
  attacks?: Attack[],
  ability?: Ability;
  found?: PACKS_TYPE[];
  pokedex: number | -1;
  series?: CardExpansionTypeENUM;
  related?: number[];
  isEX?: boolean;
  extra?: {[key in LanguageType]: string};
  condition: CardSpecialConditionENUM[];
  info?: PokedexInfo;
}

interface Attack {
  name: {[key in LanguageType]: string};
  damage: number;
  energy: PokemonTypeENUM[];
  description?: {[key in LanguageType]: string};
}

interface Ability {
  name: {[key in LanguageType]: string};
  description: {[key in LanguageType]: string};
}

interface PokedexInfo {
  type: {[key in LanguageType]: string};
  height: {[key in LanguageType]: string};
  weight: {[key in LanguageType]: string};
}

export interface CardPackTag {
  label: string, 
  tag: string, 
  color: string, 
  background: string,
  promo_amount: string;
}

