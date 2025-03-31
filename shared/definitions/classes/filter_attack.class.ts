import { PokemonTypeENUM } from "../enums/pokemon.enums"

export class FilterAttackSearch {

  public damage: { min: number | null, max: number | null }
  public energy: { [key in PokemonTypeENUM]: boolean | null }
  public exclusive: boolean;
  public amount: { min: number | null, max: number | null }

  constructor() {
    this.damage = {min: null, max: null};
    this.exclusive = false;
    this.amount = {min: null, max: null};

    this.energy = {
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
  }

  public areAllPropertiesNull(): boolean {
    const isAllNull = (obj: any): boolean => {
      if (typeof obj === 'object' && obj !== null) {
        if (Object.keys(obj).length === 0) {
          return true;
        }
        return Object.values(obj).every(value => isAllNull(value));
      }
      return obj === null || obj === false;
    };

    return Object.values(this).every(isAllNull);
  }

}