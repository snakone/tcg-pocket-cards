import { CardRarityENUM, CardSpecialConditionENUM, CardStageENUM, RarityWithoutSpecial } from "../enums/card.enums"
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
  public shiny: { is_shiny: boolean | null, not_shiny: boolean | null }
  public weak: { [key in PokemonTypeENUM]: boolean | null }
  public condition: { [key in CardSpecialConditionENUM]: boolean | null }
  public collection: { owned: boolean | null, not_owned: boolean | null }

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
      [EXPANSION.CHARIZARD]: null,
      [EXPANSION.PROMO_A1]: null,
      [EXPANSION.PROMO_A2]: null,
      [EXPANSION.PREMIUM]: null,
      [EXPANSION.WONDER_PICK]: null,
      [EXPANSION.SPECIAL_MISSION]: null,
      [EXPANSION.MEW]: null,
      [EXPANSION.PROMO_A3]: null,
      [EXPANSION.DIALGA]: null,
      [EXPANSION.PALKIA]: null,
      [EXPANSION.PROMO_A4]: null,
      [EXPANSION.ARCEUS]: null,
      [EXPANSION.PROMO_A5]: null,
      [EXPANSION.SHINY]: null
    };

    this.favorite = {included: null, not_favorite: null};
    this.health = {min: null, max: null};
    this.collection = {owned: null, not_owned: null};

    this.rarity = {
      [CardRarityENUM.COMMON]: null,
      [CardRarityENUM.UNCOMMON]: null,
      [CardRarityENUM.RARE]: null,
      [CardRarityENUM.DOUBLE]: null,
      [CardRarityENUM.ART]: null,
      [CardRarityENUM.SUPER]: null,
      [CardRarityENUM.INMERSIVE]: null,
      [CardRarityENUM.RAINBOW]: null,
      [CardRarityENUM.DOUBLE_RAINBOW]: null,
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

    this.shiny = {
      is_shiny: null,
      not_shiny: null
    }

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

    this.condition = {
      [CardSpecialConditionENUM.ATTACK_BENCH]: null,
      [CardSpecialConditionENUM.HEAL]: null,
      [CardSpecialConditionENUM.RECOIL]: null,
      [CardSpecialConditionENUM.POISON]: null,
      [CardSpecialConditionENUM.PARALYZE]: null,
      [CardSpecialConditionENUM.SLEEP]: null,
      [CardSpecialConditionENUM.CONFUSION]: null,
      [CardSpecialConditionENUM.BURNED]: null,
      [CardSpecialConditionENUM.FLIP]: null,
      [CardSpecialConditionENUM.NOTHING]: null,
      [CardSpecialConditionENUM.DISCARD]: null,
      [CardSpecialConditionENUM.ADD]: null,
      [CardSpecialConditionENUM.EXTRA_DAMAGE]: null,
      [CardSpecialConditionENUM.RESIST]: null,
      [CardSpecialConditionENUM.CORNER]: null,
      [CardSpecialConditionENUM.WITHDRAW_CARD]: null,
      [CardSpecialConditionENUM.RETIRE]: null,
      [CardSpecialConditionENUM.CALL]: null,
      [CardSpecialConditionENUM.INACTIVE]: null,
      [CardSpecialConditionENUM.ARCEUS_LINK]: null,
      [CardSpecialConditionENUM.FORCE_SWITCH]: null,
      [CardSpecialConditionENUM.PLAY_CARDS]: null,
      [CardSpecialConditionENUM.END_TURN]: null,
      [CardSpecialConditionENUM.RANDOM_ATTACK]: null
    };
  }

  public resetExpansion(): void {
    this.expansion = {
      [EXPANSION.PIKACHU]: null,
      [EXPANSION.MEWTWO]: null,
      [EXPANSION.CHARIZARD]: null,
      [EXPANSION.PROMO_A1]: null,
      [EXPANSION.PROMO_A2]: null,
      [EXPANSION.PREMIUM]: null,
      [EXPANSION.WONDER_PICK]: null,
      [EXPANSION.SPECIAL_MISSION]: null,
      [EXPANSION.MEW]: null,
      [EXPANSION.PROMO_A3]: null,
      [EXPANSION.DIALGA]: null,
      [EXPANSION.PALKIA]: null,
      [EXPANSION.PROMO_A4]: null,
      [EXPANSION.ARCEUS]: null,
      [EXPANSION.PROMO_A5]: null,
      [EXPANSION.SHINY]: null
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
      return (obj === null || obj === false);
    };

    return Object.values(this).every(isAllNull);
  }

}