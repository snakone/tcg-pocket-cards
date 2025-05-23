import { Platform, PressableAndroidRippleConfig } from "react-native";
import { ItemWithRoute, SortItem } from "../interfaces/layout.interfaces";
import { Attack, Card, CardPackTag } from "../interfaces/card.interfaces";

import { 
  NORMAL_RARITY,
  STAR_RARITY,
  CROWN_RARITY,
  GRASS_ICON,
  FIRE_ICON,
  WATER_ICON,
  ELECTRIC_ICON,
  PSYCHIC_ICON,
  FIGHT_ICON,
  DARK_ICON,
  STEEL_ICON,
  DRAGON_ICON,
  NORMAL_ICON, 
  GENETIC_APEX_PIKACHU_ICON,
  GENETIC_APEX_CHARIZARD_ICON,
  GENETIC_APEX_MEWTWO_ICON,
  PROMO_A_ICON,
  MYTHICAL_ISLAND_MEW_ICON,
  EEVEE_COIN,
  EEVEE_AVATAR,
  ERIKA_GREEN_COIN,
  ERIKA_RAINBOW_COIN,
  GARDEVOIR_COIN,
  MEOWTH_COIN,
  MEWTWO_COIN,
  POKEBALL_COIN,
  SPECIAL1_COIN,
  ELECTRODE_AVATAR,
  CHARIZARD_AVATAR,
  ERIKA_AVATAR,
  GARDEVOIR_AVATAR,
  GIOVANNI_AVATAR,
  MEWTWO_AVATAR,
  PIKACHU_AVATAR,
  SLOWPOKE_AVATAR,
  SNORLAX_AVATAR,
  MEOWTH_AVATAR,
  DECK_BG_BLACK,
  DECK_BG_BLUE,
  DECK_BG_CHARIZARD,
  DECK_BG_CHARIZARD_2,
  DECK_BG_EEVEE,
  DECK_BG_ERIKA,
  DECK_BG_FOREST,
  DECK_BG_GARDEVOIR,
  DECK_BG_LAKE,
  DECK_BG_MEOWTH,
  DECK_BG_MEW,
  DECK_BG_MEWTWO,
  DECK_BG_MEWTWO_2,
  DECK_BG_PIKACHU,
  DECK_BG_PIKACHU_2,
  DECK_BG_ROCK,
  DECK_BG_SERPERIOR,
  DECK_BG_SPECIAL_1,
  DECK_BG_TREES,
  DECK_BG_VENUSAUR,
  DECK_BG_TREES_70x70,
  DECK_BG_BLACK_70x70,
  DECK_BG_BLUE_70x70,
  DECK_BG_CHARIZARD_2_70x70,
  DECK_BG_CHARIZARD_70x70,
  DECK_BG_EEVEE_70x70,
  DECK_BG_ERIKA_70x70,
  DECK_BG_FOREST_70x70,
  DECK_BG_GARDEVOIR_70x70,
  DECK_BG_LAKE_70x70,
  DECK_BG_MEOWTH_70x70,
  DECK_BG_MEW_70x70,
  DECK_BG_MEWTWO_2_70x70,
  DECK_BG_MEWTWO_70x70,
  DECK_BG_PIKACHU_2_70x70,
  DECK_BG_PIKACHU_70x70,
  DECK_BG_ROCK_70x70,
  DECK_BG_SERPERIOR_70x70,
  DECK_BG_SPECIAL_1_70x70,
  DECK_BG_VENUSAUR_70x70,
  CYNTHIA_COIN,
  CHARIZARD_COIN,
  MEW_COIN,
  BLUE_AVATAR,
  BLASTOISE_AVATAR,
  CHIMCHAR_AVATAR,
  MEW_AVATAR,
  PIPLUP_AVATAR,
  TURTWIG_AVATAR,
  DECK_BG_DIALGA,
  DECK_BG_PALKIA,
  DECK_BG_DIALGA_70x70,
  DECK_BG_PALKIA_70x70,
  SMACK_DOWN_DIALGA_ICON,
  SMACK_DOWN_PALKIA_ICON,
  TRIUMPH_LIGHT_ARCEUS_ICON,
  CHARIZARD_EMBLEM,
  PIKACHU_EMBLEM,
  MEWTWO_EMBLEM,
  MEW_EMBLEM,
  DIALGA_EMBLEM,
  PALKIA_EMBLEM,
  ARCEUS_EMBLEM,
  PROMO_A_EMBLEM,
  CHARIZARD_ICON,
  PIKACHU_ICON,
  MEWTWO_ICON,
  DIALGA_ICON,
  MEW_ICON,
  PALKIA_ICON,
  ARCEUS_ICON,
  DECK_BG_CYNTHIA_70x70,
  DECK_BG_CHIMCHAR_70x70,
  DECK_BG_DARKRAI_70x70,
  DECK_BG_PIPLUP_70x70,
  DECK_BG_ARCEUS_70x70,
  DECK_BG_NAKARA_70x70,
  DECK_BG_CYNTHIA,
  DECK_BG_CHIMCHAR,
  DECK_BG_DARKRAI,
  DECK_BG_PIPLUP,
  DECK_BG_ARCEUS,
  DECK_BG_NAKARA,
  LEKTRO_AVATAR,
  MARIL_AVATAR,
  ARCEUS_COIN,
  DARKRAI_COIN,
  GLACEON_COIN,
  LEAFEON_COIN,
  MANAPHY_COIN,
  RAINBOW_RARITY,
  GIRATINA_EMBLEM,
  SHINY_ICON,
  ASH_RAINBOW_COIN,
  LUCARIO_COIN,
  MEWTWO_SHINY_COIN,
  ASH_RED_COIN,
  SPRIGATITO_AVATAR,
  DECK_BG_LUCARIO,
  DECK_BG_CHARIZARD_SHINY,
  DECK_BG_ASH,
  DECK_BG_SKY,
  DECK_BG_LUCARIO_70x70,
  DECK_BG_CHARIZARD_SHINY_70x70,
  DECK_BG_ASH_70x70,
  DECK_BG_SKY_70x70,
} from "../sentences/path.sentences";

import { FilterSearch } from "../classes/filter.class";
import { EXPANSION } from "../enums/packs.enums";
import { CardExpansionENUM, CardLanguageENUM, CardRarityENUM, CardSpecialConditionENUM, CardStageENUM } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { AvatarIcon, ExpansionEmblem, TradeItem } from "../interfaces/global.interfaces";
import { FilterAttackSearch } from "../classes/filter_attack.class";

export const MENU_LIST: ItemWithRoute[] = [
  { label: 'share', icon: 'note', route: 'share' },
  { label: 'attacks', icon: 'snowboard', route: 'attacks' },
  { label: 'infographics', icon: 'info.bubble', route: 'infographics' },
  { label: 'games', icon: 'poweroutlet.type.j.fill', route: 'games' },
];

export const MENU_HELP: ItemWithRoute[] = [
  { label: 'news', icon: 'newspaper', route: 'news' },
  { label: 'help', icon: 'questionmark.app.fill', route: 'help' },
  { label: 'config', icon: 'washer.circle', route: 'settings' },
];

export const APP_VERSION = '1.5.0';
export const MENU_WIDTH = 250;
export const MENU_HEIGHT = 180 + (45 * [...MENU_LIST, ...MENU_HELP].length);
export const PAGE_TITLE = 'TCG Pocket Cards';
export const LOCAL_HOST = 'http://localhost:3000';
export const SERVER_URL = 'https://tcg-pocket-cards.onrender.com';
export const FRONTEND_URL = 'https://tcg-pocket-cards.netlify.app/';
export const DEFAULT_LANG = 'es';
export const FILTER_CARDS_HEIGHT = 718;
export const MAX_CONTENT = 30;

// MODALS
export const MIN_MODAL_HEIGHT = 96;
export const DEFAULT_MODAL_HEIGHT = 236;
export const LARGE_MODAL_HEIGHT = (Platform.OS === 'web' && window?.innerWidth < 550) ? 'auto' : 505;
export const SORT_MODAL_HEIGHT = (Platform.OS === 'web' && window?.innerWidth < 550) ? 'auto' : 640;
export const SELECT_ENERGY_HEIGHT = (Platform.OS === 'web' && window?.innerWidth < 550) ? 'auto' : 580;
export const BACKUP_HEIGHT = (Platform.OS === 'web' && window?.innerWidth < 550) ? 'auto' : 506;

export const RIPPLE_CONFIG: PressableAndroidRippleConfig = {
  color: 'rgba(0, 0, 0, .32)', 
  borderless: true, 
  foreground: false, 
  radius: 58
}

export const SORT_FIELD_MAP: Record<string, keyof Card | 'height' | 'weight' | keyof Attack | 'number_energy'> = {
  order_by_id: 'order',
  order_by_element: 'element',
  order_by_rarity: 'rarity',
  order_by_pokedex: 'pokedex',
  order_by_retreat: 'retreat',
  order_by_hp: 'health',
  order_by_stage: 'stage',
  order_by_height: 'height',
  order_by_weight: 'weight',
  order_by_name: 'name',
  order_by_energy: 'energy',
  order_by_damage: 'damage',
  order_by_number_energy: 'number_energy',
};

export function getFilterSearch(): FilterSearch {
  return new FilterSearch();
}

export function getFilterAttackSearch(): FilterAttackSearch {
  return new FilterAttackSearch();
}

export const INITIAL_SORT_DATA: SortItem[] = [
  { id: 1, label: 'order_by_id', icon: 'content-paste-search', active: true, order: 'asc' },
  { id: 2, label: 'order_by_element', icon: 'stars', active: false, order: 'desc' },
  { id: 3, label: 'order_by_rarity', icon: 'diamond', active: false, order: 'desc' },
  { id: 4, label: 'order_by_pokedex', icon: 'smartphone', active: false, order: 'desc' },
  { id: 5, label: 'order_by_retreat', icon: 'grass', active: false, order: 'desc' },
  { id: 6, label: 'order_by_hp', icon: 'favorite-outline', active: false, order: 'desc' },
  { id: 7, label: 'order_by_stage', icon: 'pets', active: false, order: 'desc' },
  { id: 8, label: 'order_by_height', icon: 'height', active: false, order: 'desc' },
  { id: 9, label: 'order_by_weight', icon: 'scale', active: false, order: 'desc' },
];

export const INITIAL_ATTACK_SORT_DATA: SortItem[] = [
  { id: 1, label: 'order_by_id', icon: 'content-paste-search', active: true, order: 'asc' },
  { id: 2, label: 'order_by_name', icon: 'badge', active: false, order: 'desc' },
  { id: 3, label: 'order_by_energy', icon: 'bolt', active: false, order: 'desc' },
  { id: 4, label: 'order_by_damage', icon: 'warning', active: false, order: 'desc' },
  { id: 5, label: 'order_by_number_energy', icon: 'pin', active: false, order: 'desc' },
];

export const SINGLE_SORT_DATA: SortItem = {active: true, id: 1, icon: 'content-paste-search', label: 'order_by_id', order: 'asc'}

export const RARITY_MAP: Record<CardRarityENUM, {image: any, amount: number | null}> = {
  [CardRarityENUM.COMMON]: { image: NORMAL_RARITY, amount: 1 },
  [CardRarityENUM.UNCOMMON]: { image: NORMAL_RARITY, amount: 2 },
  [CardRarityENUM.RARE]: { image: NORMAL_RARITY, amount: 3 },
  [CardRarityENUM.DOUBLE]: { image: NORMAL_RARITY, amount: 4 },
  [CardRarityENUM.ART]: { image: STAR_RARITY, amount: 1 },
  [CardRarityENUM.SUPER]: { image: STAR_RARITY, amount: 2 },
  [CardRarityENUM.INMERSIVE]: { image: STAR_RARITY, amount: 3 },
  [CardRarityENUM.SHINY]: { image: RAINBOW_RARITY, amount: 1 },
  [CardRarityENUM.DOUBLE_SHINY]: { image: RAINBOW_RARITY, amount: 2 },
  [CardRarityENUM.CROWN]: { image: CROWN_RARITY, amount: 1 },
  [CardRarityENUM.PROMO]: { image: null, amount: 0 },
  [CardRarityENUM.SPECIAL]: { image: null, amount: 0 },
}

export const TYPE_MAP: Record<PokemonTypeENUM | -1, {image: any, label: string}> = {
  [PokemonTypeENUM.GRASS]: { image: GRASS_ICON, label: 'grass' },
  [PokemonTypeENUM.FIRE]: { image: FIRE_ICON, label: 'fire' },
  [PokemonTypeENUM.WATER]: { image: WATER_ICON, label: 'water' },
  [PokemonTypeENUM.ELECTRIC]: { image: ELECTRIC_ICON, label: 'electric' },
  [PokemonTypeENUM.PSYCHIC]: { image: PSYCHIC_ICON, label: 'psychic' },
  [PokemonTypeENUM.FIGHT]: { image: FIGHT_ICON, label: 'fight' },
  [PokemonTypeENUM.DARK]: { image: DARK_ICON, label: 'dark' },
  [PokemonTypeENUM.STEEL]: { image: STEEL_ICON, label: 'steel' },
  [PokemonTypeENUM.DRAGON]: { image: DRAGON_ICON, label: 'dragon' },
  [PokemonTypeENUM.NORMAL]: { image: NORMAL_ICON, label: 'normal' },
  [-1]: { image: null, label: '' }
}

export const STAGE_MAP: Record<CardStageENUM, {label: string}> = {
  [CardStageENUM.BASIC]: { label: 'basic' },
  [CardStageENUM.ONE]: { label: 'stage_one' },
  [CardStageENUM.TWO]: { label: 'stage_two' },
  [CardStageENUM.ITEM]: { label: 'object' },
  [CardStageENUM.TOOL]: { label: 'tool' },
  [CardStageENUM.FOSSIL]: { label: 'fossil' },
  [CardStageENUM.SUPPORTER]: { label: 'supporter' },
}

export const EXPANSION_MAP: Record<CardExpansionENUM, CardPackTag> = {
  [CardExpansionENUM.GENETIC_APEX]: { label: 'A', tag: 'A1', color: 'white', background: 'black', promo_amount: 'P-A' },
  [CardExpansionENUM.PROMO_A]: { label: 'A', tag: 'PROMO-A', color: 'white', background: 'black', promo_amount: 'P-A' },
  [CardExpansionENUM.MYTHICAL_ISLAND]: { label: 'A', tag: 'A1a', color: 'white', background: 'black', promo_amount: 'P-A' },
  [CardExpansionENUM.SPACE_TIME_SMACKDOWN]: { label: 'A', tag: 'A2', color: 'white', background: 'black', promo_amount: 'P-A' },
  [CardExpansionENUM.TRIUMPH_LIGHT]: { label: 'A', tag: 'A2a', color: 'white', background: 'black', promo_amount: 'P-A' },
  [CardExpansionENUM.SHINING_REVELRY]: { label: 'A', tag: 'A2b', color: 'white', background: 'black', promo_amount: 'P-A' },
}

export const CONDITION_MAP: Record<CardSpecialConditionENUM, {label: string}> = {
  [CardSpecialConditionENUM.ATTACK_BENCH]: { label: 'condition_attack_bench' },
  [CardSpecialConditionENUM.HEAL]: { label: 'condition_heal' },
  [CardSpecialConditionENUM.RECOIL]: { label: 'condition_recoil' },
  [CardSpecialConditionENUM.POISON]: { label: 'condition_poison' },
  [CardSpecialConditionENUM.PARALYZE]: { label: 'condition_paralyze' },
  [CardSpecialConditionENUM.SLEEP]: { label: 'condition_sleep' },
  [CardSpecialConditionENUM.CONFUSION]: { label: 'condition_confusion' },
  [CardSpecialConditionENUM.BURNED]: { label: 'condition_burned' },
  [CardSpecialConditionENUM.FLIP_COIN]: { label: 'condition_flip' },
  [CardSpecialConditionENUM.NOTHING]: { label: 'condition_nothing' },
  [CardSpecialConditionENUM.DISCARD]: { label: 'condition_discard' },
  [CardSpecialConditionENUM.ADD_ENERGY]: { label: 'condition_add' },
  [CardSpecialConditionENUM.EXTRA_DAMAGE]: { label: 'condition_extra_damage' },
  [CardSpecialConditionENUM.RESIST]: { label: 'condition_resist' },
  [CardSpecialConditionENUM.CORNER]: { label: 'condition_corner' },
  [CardSpecialConditionENUM.WITHDRAW_CARD]: { label: 'condition_withdraw' },
  [CardSpecialConditionENUM.RETIRE]: { label: 'condition_retire' },
  [CardSpecialConditionENUM.CALL_CARDS]: { label: 'condition_call' },
  [CardSpecialConditionENUM.INACTIVE]: { label: 'condition_inactive' },
  [CardSpecialConditionENUM.FORCE_SWITCH]: { label: 'condition_force_switch' },
  [CardSpecialConditionENUM.ARCEUS_LINK]: { label: 'condition_arceus' },
  [CardSpecialConditionENUM.PLAY_CARDS]: { label: 'condition_play_cards' },
  [CardSpecialConditionENUM.RANDOM_ATTACK]: { label: 'condition_random_attack' },
  [CardSpecialConditionENUM.END_TURN]: { label: 'condition_end_turn' },
  [CardSpecialConditionENUM.PLUS_EX]: { label: 'condition_plus_ex' }
}

export const CONDITION_ATTACK = [
  CardSpecialConditionENUM.ATTACK_BENCH,
  CardSpecialConditionENUM.RECOIL,
  CardSpecialConditionENUM.EXTRA_DAMAGE,
  CardSpecialConditionENUM.RESIST,
  CardSpecialConditionENUM.RANDOM_ATTACK,
  CardSpecialConditionENUM.PLUS_EX
];

export const CONDITION_STATUS = [
  CardSpecialConditionENUM.HEAL,
  CardSpecialConditionENUM.POISON,
  CardSpecialConditionENUM.PARALYZE,
  CardSpecialConditionENUM.SLEEP,
  CardSpecialConditionENUM.CONFUSION,
  CardSpecialConditionENUM.BURNED
];

interface ConditionOthers extends Array<CardSpecialConditionENUM> {}

export const CONDITION_OTHERS: ConditionOthers = [
  CardSpecialConditionENUM.FLIP_COIN,
  CardSpecialConditionENUM.NOTHING,
  CardSpecialConditionENUM.DISCARD,
  CardSpecialConditionENUM.ADD_ENERGY,
  CardSpecialConditionENUM.CORNER,
  CardSpecialConditionENUM.WITHDRAW_CARD,
  CardSpecialConditionENUM.RETIRE,
  CardSpecialConditionENUM.CALL_CARDS,
  CardSpecialConditionENUM.INACTIVE,
  CardSpecialConditionENUM.FORCE_SWITCH,
  CardSpecialConditionENUM.PLAY_CARDS,
  CardSpecialConditionENUM.END_TURN,
];

export const CONDITION_LINKS = [
  CardSpecialConditionENUM.ARCEUS_LINK,
];

export const EXPANSION_POINTS_RARITY: Record<CardRarityENUM, number> = {
  [CardRarityENUM.COMMON]: 35,
  [CardRarityENUM.UNCOMMON]: 70,
  [CardRarityENUM.RARE]: 150,
  [CardRarityENUM.DOUBLE]: 500,
  [CardRarityENUM.ART]: 400,
  [CardRarityENUM.SUPER]: 1250,
  [CardRarityENUM.INMERSIVE]: 1500,
  [CardRarityENUM.SHINY]: 1000,
  [CardRarityENUM.DOUBLE_SHINY]: 1350,
  [CardRarityENUM.CROWN]: 2500,
  [CardRarityENUM.PROMO]: 0,
  [CardRarityENUM.SPECIAL]: 0,
}

export const PACK_MAP: Record<EXPANSION, any> = {
  [EXPANSION.PIKACHU]: GENETIC_APEX_PIKACHU_ICON,
  [EXPANSION.MEWTWO]: GENETIC_APEX_MEWTWO_ICON,
  [EXPANSION.CHARIZARD]: GENETIC_APEX_CHARIZARD_ICON,
  [EXPANSION.PROMO_A1]: PROMO_A_ICON,
  [EXPANSION.PROMO_A2]: PROMO_A_ICON,
  [EXPANSION.PREMIUM]: null,
  [EXPANSION.WONDER_PICK]: null,
  [EXPANSION.SPECIAL_MISSION]: null,
  [EXPANSION.MEW]: MYTHICAL_ISLAND_MEW_ICON,
  [EXPANSION.PROMO_A3]: PROMO_A_ICON,
  [EXPANSION.DIALGA]: SMACK_DOWN_DIALGA_ICON,
  [EXPANSION.PALKIA]: SMACK_DOWN_PALKIA_ICON,
  [EXPANSION.PROMO_A4]: PROMO_A_ICON,
  [EXPANSION.ARCEUS]: TRIUMPH_LIGHT_ARCEUS_ICON,
  [EXPANSION.PROMO_A5]: PROMO_A_ICON,
  [EXPANSION.SHINY]: null,
  [EXPANSION.PROMO_A6]: PROMO_A_ICON,
}

export const PACK_AMOUNT_MAP: Record<CardExpansionENUM, number> = {
  [CardExpansionENUM.GENETIC_APEX]: 286,
  [CardExpansionENUM.PROMO_A]: 41,
  [CardExpansionENUM.MYTHICAL_ISLAND]: 86,
  [CardExpansionENUM.SPACE_TIME_SMACKDOWN]: 207,
  [CardExpansionENUM.TRIUMPH_LIGHT]: 96,
  [CardExpansionENUM.SHINING_REVELRY]: 110
}

export const COIN_MAP: Record<string, any> = {
  eevee: EEVEE_COIN,
  erika_green: ERIKA_GREEN_COIN,
  erika_rainbow: ERIKA_RAINBOW_COIN,
  gardevoir: GARDEVOIR_COIN,
  meowth: MEOWTH_COIN,
  mewtwo: MEWTWO_COIN,
  pokeball: POKEBALL_COIN,
  special1: SPECIAL1_COIN,
  cynthia: CYNTHIA_COIN,
  charizard: CHARIZARD_COIN,
  mew: MEW_COIN,
  arceus: ARCEUS_COIN,
  darkrai: DARKRAI_COIN,
  glaceon: GLACEON_COIN,
  leafeon: LEAFEON_COIN,
  manaphy: MANAPHY_COIN,
  ash_rainbow: ASH_RAINBOW_COIN,
  lucario: LUCARIO_COIN,
  mewtwo_shiny: MEWTWO_SHINY_COIN,
  ash_red: ASH_RED_COIN
}

export const AVATAR_MAP: Record<string, any> = {
  eevee: EEVEE_AVATAR,
  charizard: CHARIZARD_AVATAR,
  electrode: ELECTRODE_AVATAR,
  erika: ERIKA_AVATAR,
  gardevoir: GARDEVOIR_AVATAR,
  giovanni: GIOVANNI_AVATAR,
  meowth: MEOWTH_AVATAR,
  mewtwo: MEWTWO_AVATAR,
  pikachu: PIKACHU_AVATAR,
  slowpoke: SLOWPOKE_AVATAR,
  snorlax: SNORLAX_AVATAR,
  blue: BLUE_AVATAR,
  blastoise: BLASTOISE_AVATAR,
  chimchar: CHIMCHAR_AVATAR,
  mew: MEW_AVATAR,
  piplup: PIPLUP_AVATAR,
  turtwig: TURTWIG_AVATAR,
  lektro: LEKTRO_AVATAR,
  maril: MARIL_AVATAR,
  sprigatito: SPRIGATITO_AVATAR
}

export const DECK_BACKGROUND_MAP: Record<string, any> = {
  trees: DECK_BG_TREES,
  forest: DECK_BG_FOREST,
  charizard: DECK_BG_CHARIZARD,
  mewtwo: DECK_BG_MEWTWO,
  pikachu: DECK_BG_PIKACHU,
  lake: DECK_BG_LAKE,
  black: DECK_BG_BLACK,
  serperior: DECK_BG_SERPERIOR,
  rock: DECK_BG_ROCK,
  blue: DECK_BG_BLUE,
  charizard_2: DECK_BG_CHARIZARD_2,
  eevee: DECK_BG_EEVEE,
  erika: DECK_BG_ERIKA,
  gardevoir: DECK_BG_GARDEVOIR,
  mew: DECK_BG_MEW,
  meowth: DECK_BG_MEOWTH,
  mewtwo_2: DECK_BG_MEWTWO_2,
  pikachu_2: DECK_BG_PIKACHU_2,
  special_1: DECK_BG_SPECIAL_1,
  venusaur: DECK_BG_VENUSAUR,
  dialga: DECK_BG_DIALGA,
  palkia: DECK_BG_PALKIA,
  cynthia: DECK_BG_CYNTHIA,
  chimchar: DECK_BG_CHIMCHAR,
  darkrai: DECK_BG_DARKRAI,
  piplup: DECK_BG_PIPLUP,
  arceus: DECK_BG_ARCEUS,
  nakara: DECK_BG_NAKARA,
  lucario: DECK_BG_LUCARIO,
  charizard_shiny: DECK_BG_CHARIZARD_SHINY,
  ash: DECK_BG_ASH,
  sky: DECK_BG_SKY
}

export const AVATAR_LIST: AvatarIcon[] = [
  { label: 'Eevee', value: 'eevee', icon: EEVEE_AVATAR },
  { label: 'Charizard', value: 'charizard', icon: CHARIZARD_AVATAR },
  { label: 'Electrode', value: 'electrode', icon: ELECTRODE_AVATAR },
  { label: 'Erika', value: 'erika', icon: ERIKA_AVATAR },
  { label: 'Gardevoir', value: 'gardevoir', icon: GARDEVOIR_AVATAR },
  { label: 'Giovanni', value: 'giovanni', icon: GIOVANNI_AVATAR },
  { label: 'Meowth', value: 'meowth', icon: MEOWTH_AVATAR },
  { label: 'Mewtwo', value: 'mewtwo', icon: MEWTWO_AVATAR },
  { label: 'Pikachu', value: 'pikachu', icon: PIKACHU_AVATAR },
  { label: 'Slowpoke', value: 'slowpoke', icon: SLOWPOKE_AVATAR },
  { label: 'Snorlax', value: 'snorlax', icon: SNORLAX_AVATAR },
  { label: 'Blue', value: 'blue', icon: BLUE_AVATAR },
  { label: 'Blastoise', value: 'blastoise', icon: BLASTOISE_AVATAR },
  { label: 'Chimchar', value: 'chimchar', icon: CHIMCHAR_AVATAR },
  { label: 'Mew', value: 'mew', icon: MEW_AVATAR },
  { label: 'Piplup', value: 'piplup', icon: PIPLUP_AVATAR },
  { label: 'Turtwig', value: 'turtwig', icon: TURTWIG_AVATAR },
  { label: 'Lektro', value: 'lektro', icon: LEKTRO_AVATAR },
  { label: 'Maril', value: 'maril', icon: MARIL_AVATAR },
  { label: 'Sprigatito', value: 'sprigatito', icon: SPRIGATITO_AVATAR },
];

export const COIN_LIST: AvatarIcon[] = [
  { label: 'Eevee', value: 'eevee', icon: EEVEE_COIN },
  { label: 'Erika Green', value: 'erika_green', icon: ERIKA_GREEN_COIN },
  { label: 'Erika Rainbow', value: 'erika_rainbow', icon: ERIKA_RAINBOW_COIN },
  { label: 'Gardevoir', value: 'gardevoir', icon: GARDEVOIR_COIN },
  { label: 'Meowth', value: 'meowth', icon: MEOWTH_COIN },
  { label: 'Mewtwo', value: 'mewtwo', icon: MEWTWO_COIN },
  { label: 'Pokéball', value: 'pokeball', icon: POKEBALL_COIN },
  { label: 'Special 1', value: 'special1', icon: SPECIAL1_COIN },
  { label: 'Charizard', value: 'charizard', icon: CHARIZARD_COIN },
  { label: 'Cynthia', value: 'cynthia', icon: CYNTHIA_COIN },
  { label: 'Mew', value: 'mew', icon: MEW_COIN },
  { label: 'Arceus', value: 'arceus', icon: ARCEUS_COIN },
  { label: 'Darkrai', value: 'darkrai', icon: DARKRAI_COIN },
  { label: 'Glaceon', value: 'glaceon', icon: GLACEON_COIN },
  { label: 'Leafeon', value: 'leafeon', icon: LEAFEON_COIN },
  { label: 'Manaphy', value: 'manaphy', icon: MANAPHY_COIN },
  { label: 'Ash Rainbow', value: 'ash_rainbow', icon: ASH_RAINBOW_COIN },
  { label: 'Lucario', value: 'lucario', icon: LUCARIO_COIN },
  { label: 'Mewtwo Shiny', value: 'mewtwo_shiny', icon: MEWTWO_SHINY_COIN },
  { label: 'ASh Red', value: 'ash_red', icon: ASH_RED_COIN },
];

export const DECK_BACKGROUNDS_70x70: AvatarIcon[] = [
  {label: 'Trees', value: 'trees', icon: DECK_BG_TREES_70x70},
  {label: 'Forest', value: 'forest', icon: DECK_BG_FOREST_70x70},
  {label: 'Charizard', value: 'charizard', icon: DECK_BG_CHARIZARD_70x70},
  {label: 'Mewtwo', value: 'mewtwo', icon: DECK_BG_MEWTWO_70x70},
  {label: 'Pikachu', value: 'pikachu', icon: DECK_BG_PIKACHU_70x70},
  {label: 'Lake', value: 'lake', icon: DECK_BG_LAKE_70x70},
  {label: 'Black', value: 'black', icon: DECK_BG_BLACK_70x70},
  {label: 'Serperior', value: 'serperior', icon: DECK_BG_SERPERIOR_70x70},
  {label: 'Rocks', value: 'rock', icon: DECK_BG_ROCK_70x70},
  {label: 'Blue', value: 'blue', icon: DECK_BG_BLUE_70x70},
  {label: 'Charizard 2', value: 'charizard_2', icon: DECK_BG_CHARIZARD_2_70x70},
  {label: 'Eevee', value: 'eevee', icon: DECK_BG_EEVEE_70x70},
  {label: 'Erika', value: 'erika', icon: DECK_BG_ERIKA_70x70},
  {label: 'Gardevoir', value: 'gardevoir', icon: DECK_BG_GARDEVOIR_70x70},
  {label: 'Mew', value: 'mew', icon: DECK_BG_MEW_70x70},
  {label: 'Meowth', value: 'meowth', icon: DECK_BG_MEOWTH_70x70},
  {label: 'Mewtwo 2', value: 'mewtwo_2', icon: DECK_BG_MEWTWO_2_70x70},
  {label: 'Pikachu 2', value: 'pikachu_2', icon: DECK_BG_PIKACHU_2_70x70},
  {label: 'Special 1', value: 'special_1', icon: DECK_BG_SPECIAL_1_70x70},
  {label: 'Venusaur', value: 'venusaur', icon: DECK_BG_VENUSAUR_70x70},
  {label: 'Dialga', value: 'dialga', icon: DECK_BG_DIALGA_70x70},
  {label: 'Palkia', value: 'palkia', icon: DECK_BG_PALKIA_70x70},
  {label: 'Cynthia', value: 'cynthia', icon: DECK_BG_CYNTHIA_70x70},
  {label: 'Chimchar', value: 'chimchar', icon: DECK_BG_CHIMCHAR_70x70},
  {label: 'Darkrai', value: 'darkrai', icon: DECK_BG_DARKRAI_70x70},
  {label: 'Piplup', value: 'piplup', icon: DECK_BG_PIPLUP_70x70},
  {label: 'Arceus', value: 'arceus', icon: DECK_BG_ARCEUS_70x70},
  {label: 'Nakara', value: 'nakara', icon: DECK_BG_NAKARA_70x70},
  {label: 'Lucario', value: 'lucario', icon: DECK_BG_LUCARIO_70x70},
  {label: 'Charizard Shiny', value: 'charizard_shiny', icon: DECK_BG_CHARIZARD_SHINY_70x70},
  {label: 'Ash', value: 'ash', icon: DECK_BG_ASH_70x70},
  {label: 'Sky', value: 'sky', icon: DECK_BG_SKY_70x70},
];

export const DAMAGES = Array.from({ length: 30 }, (_, index) => (index + 1) * 10);
export const ATTACK_DAMAGES = Array.from({ length: 20 }, (_, index) => (index + 1) * 10);
export const ENERGY_AMOUNT = Array.from({ length: 5 }, (_, index) => (index + 1) * 1);

export const ICON_WIDTH = 36;

export const RARITY_CAN_TRADE = [
  CardRarityENUM.COMMON,
  CardRarityENUM.UNCOMMON,
  CardRarityENUM.RARE,
  CardRarityENUM.DOUBLE,
  CardRarityENUM.ART
]

export const TRADE_COST_MAP = {
  [CardRarityENUM.COMMON]: 0,
  [CardRarityENUM.UNCOMMON]: 0,
  [CardRarityENUM.RARE]: 120,
  [CardRarityENUM.DOUBLE]: 500,
  [CardRarityENUM.ART]: 400
}

export const PACK_PER_EXPANSION_MAP: Record<CardExpansionENUM, number> = {
  [CardExpansionENUM.GENETIC_APEX]: 3,
  [CardExpansionENUM.MYTHICAL_ISLAND]: 1,
  [CardExpansionENUM.SPACE_TIME_SMACKDOWN]: 2,
  [CardExpansionENUM.PROMO_A]: 0,
  [CardExpansionENUM.TRIUMPH_LIGHT]: 1,
  [CardExpansionENUM.SHINING_REVELRY]: 1
}

export const COLLECTION_LANGUAGE_MAP: Record<CardLanguageENUM, string> = {
  [CardLanguageENUM.ALE]: 'ALE',
  [CardLanguageENUM.BR]: 'PT-BR',
  [CardLanguageENUM.CHI]: 'CH-TR',
  [CardLanguageENUM.COR]: 'COR',
  [CardLanguageENUM.EN]: 'ING',
  [CardLanguageENUM.ES]: 'ES',
  [CardLanguageENUM.FRA]: 'FRA',
  [CardLanguageENUM.ITA]: 'ITA',
  [CardLanguageENUM.JAP]: 'JAP',
}

export const LANGUAGE_COLLECTION_MAP: Record<string, CardLanguageENUM> = {
  'ALE': CardLanguageENUM.ALE,
  'PT-BR': CardLanguageENUM.BR,
  'CH-TR': CardLanguageENUM.CHI,
  'COR': CardLanguageENUM.COR,
  'ING': CardLanguageENUM.EN,
  'ES': CardLanguageENUM.ES,
  'FRA': CardLanguageENUM.FRA,
  'ITA': CardLanguageENUM.ITA,
  'JAP': CardLanguageENUM.JAP,
}

export const CollectionLanguageList = [
  CardLanguageENUM.EN,
  CardLanguageENUM.ES,
  CardLanguageENUM.FRA,
  CardLanguageENUM.ALE,
  CardLanguageENUM.ITA,
  CardLanguageENUM.BR,
  CardLanguageENUM.JAP,
  CardLanguageENUM.COR,
  CardLanguageENUM.CHI
];

export const EXPANSION_EMBLEM_LIST: ExpansionEmblem[] = [
  { label: 'expansion_charizard', value: EXPANSION.CHARIZARD, icon: CHARIZARD_EMBLEM },
  { label: 'expansion_mewtwo', value: EXPANSION.MEWTWO, icon: MEWTWO_EMBLEM },
  { label: 'expansion_pikachu', value: EXPANSION.PIKACHU, icon: PIKACHU_EMBLEM },
  { label: 'expansion_mew', value: EXPANSION.MEW, icon: MEW_EMBLEM },
  { label: 'expansion_dialga', value: EXPANSION.DIALGA, icon: DIALGA_EMBLEM },
  { label: 'expansion_palkia', value: EXPANSION.PALKIA, icon: PALKIA_EMBLEM },
  { label: 'expansion_arceus', value: EXPANSION.ARCEUS, icon: ARCEUS_EMBLEM },
  { label: 'expansion_shiny', value: EXPANSION.SHINY, icon: GIRATINA_EMBLEM },
  { label: 'expansion_promo_a', value: 99, icon: PROMO_A_EMBLEM }
];

export const EXPANSION_PACK_MAP: any = {
  expansion_charizard: CHARIZARD_ICON,
  expansion_mewtwo: MEWTWO_ICON,
  expansion_pikachu: PIKACHU_ICON,
  expansion_mew: MEW_ICON,
  expansion_dialga: DIALGA_ICON,
  expansion_palkia: PALKIA_ICON,
  expansion_arceus: ARCEUS_ICON,
  expansion_shiny: SHINY_ICON
}

export const STATS_EXPANSION_MAP: any = {
  [EXPANSION.PIKACHU]: 2,
  [EXPANSION.MEWTWO]: 1,
  [EXPANSION.CHARIZARD]: 0,
  [EXPANSION.MEW]: 3,
  [EXPANSION.DIALGA]: 4,
  [EXPANSION.PALKIA]: 5,
  [EXPANSION.ARCEUS]: 6,
  [EXPANSION.SHINY]: 7,
  99: 8
}

export const DEFAULT_PROFILE = {
  name: '', 
  avatar: 'eevee', 
  coin: 'eevee', 
  best: null
};

export const ROUTES_MAP = {
  profile: "/profile",
  share: "/share",
  attacks: "/attacks",
  infographics: "/infographics",
  news: "/news",
  help: "/screens/help",
  settings: "/screens/settings",
  games: "/games"
} as const;

export const DEFAULT_ELEMENT = {
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

export const DEFAUL_TRADE_ITEM: TradeItem = {
  id: 0,
  created: null,
  desired: [null, null, null, null, null],
  valid: false,
  discord: '',
  offers: [null, null, null, null, null],
  tcg: ['', '', '', ''],
  title: '',
  rarity: null
}

export const MODE_MAP: any = {
  4: "4x4",
  6: "6x6",
  8: "8x8"
};

export const EXPANSION_MAP_STRING: Partial<Record<EXPANSION, string>> = {
  [EXPANSION.CHARIZARD]: 'charizard',
  [EXPANSION.PIKACHU]: 'pikachu',
  [EXPANSION.MEWTWO]: 'mewtwo',
  [EXPANSION.MEW]: 'mew',
  [EXPANSION.DIALGA]: 'dialga',
  [EXPANSION.PALKIA]: 'palkia',
  [EXPANSION.ARCEUS]: 'arceus',
  [EXPANSION.SHINY]: 'shiny',
};