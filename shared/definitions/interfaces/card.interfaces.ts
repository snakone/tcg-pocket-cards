import { PACKS_TYPE } from "../enums/packs.enums";
import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardStageENUM } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";

interface BaseCard {
  id: number,
  name: string;
  rarity: CardRarityENUM,
  expansion: CardExpansionENUM,
  stage: CardStageENUM,
  artist: string;
  number: number;
}

export interface UsableCard extends BaseCard {
  description?: string;
}

export interface Card extends UsableCard {
  health: number | -1;
  retreat: number | -1;
  element: PokemonTypeENUM | -1;
  weak?: PokemonTypeENUM | null,
  evolve?: string | null;
  flavor: string;
  attacks?: Attack[],
  ability?: Ability;
  found?: PACKS_TYPE[];
  pokedex: number | -1;
  series?: CardExpansionTypeENUM;
  related?: number[];
  isEX?: boolean;
  extra?: string;
}

interface Attack {
  name: string;
  damage: number;
  energy: PokemonTypeENUM[];
  description?: string;
}

interface Ability {
  name: string;
  description: string;
}

export interface CardPackTag {
  label: string, 
  tag: string, 
  color: string, 
  background: string,
  amount: string;
}

