import { CardRarityENUM, RarityWithoutSpecial } from "../enums/card.enums"
import { PokemonTypeENUM } from "../enums/pokemon.enums"

export class FilterSearch {
  public favorite: { included: boolean | null, not_favorite: boolean | null }
  public rarity: { [key in RarityWithoutSpecial]: boolean | null }
  public element: { [key in PokemonTypeENUM]: boolean | null }
  public health: { min: number | null, max: number | null }
  public attack: { min: number | null, max: number | null }
  public ability: { with_ability: boolean | null, without_ability: boolean | null }
  public stage: { 
    object: boolean | null, 
    tool: boolean | null, 
    fossil: boolean | null, 
    supporter: boolean | null
  }
  public expansion: { [key: number]: boolean }

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
    }
    this.expansion = {};
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
    },
    this.stage = {
      object: null,
      tool: null,
      fossil: null,
      supporter: null,
    }
  }
}