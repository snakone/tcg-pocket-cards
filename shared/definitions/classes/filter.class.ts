import { CardRarityENUM, CardStageENUM, RarityWithoutSpecial } from "../enums/card.enums"
import { EXPANSION } from "../enums/packs.enums"
import { PokemonTypeENUM } from "../enums/pokemon.enums"

export class FilterSearch {
  public favorite: { included: boolean | null, not_favorite: boolean | null }
  public rarity: { [key in RarityWithoutSpecial]: boolean | null }
  public element: { [key in PokemonTypeENUM]: boolean | null }
  public health: { min: number | null, max: number | null }
  public attack: { min: number | null, max: number | null }
  public ability: { with_ability: boolean | null, without_ability: boolean | null }
  public stage: { [key in CardStageENUM] : boolean | null}
  public expansion: { [key in EXPANSION]: boolean | null }
  public ex: { is_ex: boolean | null, not_ex: boolean | null }
  public weak: { [key in PokemonTypeENUM]: boolean | null }

  constructor() {
    this.ability = {with_ability: null, without_ability: null};
    this.attack = {min: null, max: null};

    this.element = {
      [PokemonTypeENUM.GRASS]: null,
      [PokemonTypeENUM.FIRE]: null,
      [PokemonTypeENUM.WATER]: null,
      [PokemonTypeENUM.ELECTRIC]: null,
      [PokemonTypeENUM.PSYCHIC]: null,
      [PokemonTypeENUM.FIGHT]: null,
      [PokemonTypeENUM.DARK]: null,
      [PokemonTypeENUM.STEEL]: null,
      [PokemonTypeENUM.DRAGON]: null,
      [PokemonTypeENUM.NORMAL]: null
    };

    this.expansion = {
      [EXPANSION.PIKACHU]: null,
      [EXPANSION.MEWTWO]: null,
      [EXPANSION.CHARIZARD]: null
    };

    this.favorite = {included: null, not_favorite: null};
    this.health = {min: null, max: null};

    this.rarity = {
      [CardRarityENUM.COMMON]: null,
      [CardRarityENUM.UNCOMMON]: null,
      [CardRarityENUM.RARE]: null,
      [CardRarityENUM.DOUBLE]: null,
      [CardRarityENUM.ART]: null,
      [CardRarityENUM.SUPER]: null,
      [CardRarityENUM.INMERSIVE]: null,
      [CardRarityENUM.CROWN]: null,
      [CardRarityENUM.PROMO]: null,
    };

    this.stage = {
      [CardStageENUM.BASIC]: null,
      [CardStageENUM.ONE]: null,
      [CardStageENUM.TWO]: null,
      [CardStageENUM.SUPPORTER]: null,
      [CardStageENUM.ITEM]: null,
      [CardStageENUM.TOOL]: null,
      [CardStageENUM.FOSSIL]: null,
    };

    this.ex = {
      is_ex: null,
      not_ex: null
    };

    this.weak = {
      [PokemonTypeENUM.GRASS]: null,
      [PokemonTypeENUM.FIRE]: null,
      [PokemonTypeENUM.WATER]: null,
      [PokemonTypeENUM.ELECTRIC]: null,
      [PokemonTypeENUM.PSYCHIC]: null,
      [PokemonTypeENUM.FIGHT]: null,
      [PokemonTypeENUM.DARK]: null,
      [PokemonTypeENUM.STEEL]: null,
      [PokemonTypeENUM.DRAGON]: null,
      [PokemonTypeENUM.NORMAL]: null
    }
  }

  public resetExpansion(): void {
    this.expansion = {
      [EXPANSION.PIKACHU]: null,
      [EXPANSION.MEWTWO]: null,
      [EXPANSION.CHARIZARD]: null
    };
  }

  public areAllPropertiesNull(): boolean {
    const isAllNull = (obj: any): boolean => {
      if (typeof obj === 'object' && obj !== null) {
        if (Object.keys(obj).length === 0) {
          return true;
        }
        return Object.values(obj).every(value => isAllNull(value));
      }
      return obj === null;
    };

    return Object.values(this).every(isAllNull);
  }

}