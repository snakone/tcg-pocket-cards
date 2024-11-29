import { PACKS } from "../enums/packs.enums";
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
  health: number;
  retreat: number;
  element: PokemonTypeENUM;
  weak: PokemonTypeENUM,
  evolve: string | null;
  flavor: string;
  attacks: Attack[],
  ability?: Ability;
  found: PACKS[];
  pokedex?: number;
  series?: CardExpansionTypeENUM;
  related?: number[];
  isEX: boolean;
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

