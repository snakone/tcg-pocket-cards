import { PACKS } from "../enums/packs.enums";
import { CardExpansionENUM, CardRarityENUM, CardTypeENUM } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";

interface BaseCard {
  name: string;
  rarity: CardRarityENUM,
  expansion: CardExpansionENUM,
  type: CardTypeENUM,
  artist: string;
  number: number;
}

export interface UsableCard extends BaseCard {
  description: string;
}

export interface Card extends BaseCard {
  health: number;
  retreat: number;
  element: PokemonTypeENUM;
  weak: PokemonTypeENUM,
  evolve: string | null;
  flavor: string;
  attacks: Attack[],
  ability?: Ability;
  found: PACKS[];
  image: string;
}

interface Attack {
  name: string;
  damage: number | null;
  energy: PokemonTypeENUM[];
  description?: string;
}

interface Ability {
  name: string;
  description: string;
}

