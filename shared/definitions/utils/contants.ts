import { PressableAndroidRippleConfig } from "react-native";
import { FilterSearch, ItemWithRoute, SortItem } from "../interfaces/layout.interfaces";
import { Card } from "../interfaces/card.interfaces";
import { NORMAL_RARITY, STAR_RARITY, CROWN_RARITY, GRASS_ICON, FIRE_ICON, WATER_ICON, ELECTRIC_ICON, PSYCHIC_ICON, FIGHT_ICON, DARK_ICON, STEEL_ICON, DRAGON_ICON, NORMAL_ICON } from "../sentences/path.sentences";

export const MENU_WIDTH = 250;
export const PAGE_TITLE = "TCG Pocket Cards";
export const LOCAL_HOST = 'http://192.168.1.71:3000';
export const DEFAULT_LANG = 'es';
export const FILTER_CARDS_HEIGHT = 350;

export const RIPPLE_CONFIG: PressableAndroidRippleConfig = {
  color: 'rgba(0, 0, 0, .32)', 
  borderless: true, 
  foreground: false, 
  radius: 58
}

export const CARD_IMAGE_MAP: any = {
  'Bulbasaur': require('@/assets/cards/en/Genetic Apex/cPK_10_000010_00_FUSHIGIDANE_C.png'),
  'Ivysaur': require("@/assets/cards/en/Genetic Apex/cPK_10_000020_00_FUSHIGISOU_U.png"),
  'Venusaur': require("@/assets/cards/en/Genetic Apex/cPK_10_000030_00_FUSHIGIBANA_R.png"),
  'Venusaur EX' :require("@/assets/cards/en/Genetic Apex/cPK_10_000040_00_FUSHIGIBANAex_RR.png"),
  'Caterpie': require("@/assets/cards/en/Genetic Apex/cPK_10_000050_00_CATERPIE_C.png"),
  'Metapod': require("@/assets/cards/en/Genetic Apex/cPK_10_000060_00_TRANSEL_C.png"),
  'Butterfree': require("@/assets/cards/en/Genetic Apex/cPK_10_000070_00_BUTTERFREE_R.png"),
  'Weedle': require("@/assets/cards/en/Genetic Apex/cPK_10_000080_00_BEEDLE_C.png"),
  'Kakuna': require("@/assets/cards/en/Genetic Apex/cPK_10_000090_00_COCOON_C.png"),
  'Beedrill': require("@/assets/cards/en/Genetic Apex/cPK_10_000100_00_SPEAR_R.png"),
  'Oddish': require("@/assets/cards/en/Genetic Apex/cPK_10_000110_00_NAZONOKUSA_C.png"),
  'Gloom': require("@/assets/cards/en/Genetic Apex/cPK_10_000120_00_KUSAIHANA_U.png"),
  'Vileplume': require("@/assets/cards/en/Genetic Apex/cPK_10_000130_00_RUFFRESIA_R.png"),
  'Paras': require("@/assets/cards/en/Genetic Apex/cPK_10_000140_00_PARAS_C.png"),
  'Parasect': require("@/assets/cards/en/Genetic Apex/cPK_10_000150_00_PARASECT_U.png"),
  'Venonat': require("@/assets/cards/en/Genetic Apex/cPK_10_000160_00_KONGPANG_C.png"),
  'Venomoth': require("@/assets/cards/en/Genetic Apex/cPK_10_000170_00_MORPHON_U.png"),
  'Bellsprout': require("@/assets/cards/en/Genetic Apex/cPK_10_000180_00_MADATSUBOMI_C.png"),
  'Weepinbell': require("@/assets/cards/en/Genetic Apex/cPK_10_000190_00_UTSUDON_U.png"),
  'Victreebel': require("@/assets/cards/en/Genetic Apex/cPK_10_000200_00_UTSUBOT_R.png"),
  'Exeggcute': require("@/assets/cards/en/Genetic Apex/cPK_10_000210_00_TAMATAMA_C.png"),
  'Exeggutor': require("@/assets/cards/en/Genetic Apex/cPK_10_000220_00_NASSY_R.png"),
  'Exeggutor EX': require("@/assets/cards/en/Genetic Apex/cPK_10_000230_00_NASSYex_RR.png"),
  'Tangela': require("@/assets/cards/en/Genetic Apex/cPK_10_000240_00_MONJARA_C.png"),
  'Scyther': require("@/assets/cards/en/Genetic Apex/cPK_10_000250_00_STRIKE_C.png"),
  'Pinsir': require("@/assets/cards/en/Genetic Apex/cPK_10_000260_00_KAILIOS_U.png"),
  'Cottonee': require("@/assets/cards/en/Genetic Apex/cPK_10_000270_00_MONMEN_C.png"),
  'Whimsicott': require("@/assets/cards/en/Genetic Apex/cPK_10_000280_00_ELFUUN_U.png"),
  'Petilil': require("@/assets/cards/en/Genetic Apex/cPK_10_000290_00_CHURINE_C.png"),
  'Lilligant': require("@/assets/cards/en/Genetic Apex/cPK_10_000300_00_DREDEAR_U.png"),
  'Skiddo': require("@/assets/cards/en/Genetic Apex/cPK_10_000310_00_MEECLE_C.png"),
  'Gogoat': require("@/assets/cards/en/Genetic Apex/cPK_10_000320_00_GOGOAT_C.png"),
  'Charmander': require("@/assets/cards/en/Genetic Apex/cPK_10_000330_00_HITOKAGE_C.png"),
  'Charmeleon': require("@/assets/cards/en/Genetic Apex/cPK_10_000340_00_LIZARDO_U.png"),
  'Charizard': require("@/assets/cards/en/Genetic Apex/cPK_10_000350_00_LIZARDON_R.png"),
  'Charizard EX': require("@/assets/cards/en/Genetic Apex/cPK_10_000360_00_LIZARDONex_RR.png"),
  'Vulpix': require("@/assets/cards/en/Genetic Apex/cPK_10_000370_00_ROKON_C.png"),
  'Ninetales': require("@/assets/cards/en/Genetic Apex/cPK_10_000380_00_KYUKON_U.png"),
  'Growlithe': require("@/assets/cards/en/Genetic Apex/cPK_10_000390_00_GARDIE_C.png"),
  'Arcanine': require("@/assets/cards/en/Genetic Apex/cPK_10_000400_00_WINDIE_R.png"),
  'Arcanine EX': require("@/assets/cards/en/Genetic Apex/cPK_10_000410_00_WINDIEex_RR.png"),
  'Ponyta': require("@/assets/cards/en/Genetic Apex/cPK_10_000420_00_PONYTA_C.png"),
  'Rapidash': require("@/assets/cards/en/Genetic Apex/cPK_10_000430_00_GALLOP_U.png"),
  'Magmar': require("@/assets/cards/en/Genetic Apex/cPK_10_000440_00_BOOBER_C.png"),
  'Flareon': require("@/assets/cards/en/Genetic Apex/cPK_10_000450_00_BOOSTER_R.png"),
  'Moltres': require("@/assets/cards/en/Genetic Apex/cPK_10_000460_00_FIRE_R.png"),
  'Moltres EX': require("@/assets/cards/en/Genetic Apex/cPK_10_000470_00_FIREex_RR.png"),
  'Heatmor': require("@/assets/cards/en/Genetic Apex/cPK_10_000480_00_KUITARAN_C.png"),
  'Salandit': require("@/assets/cards/en/Genetic Apex/cPK_10_000490_00_YATOUMORI_C.png"),
  'Salazzle': require("@/assets/cards/en/Genetic Apex/cPK_10_000500_00_ENNEWT_C.png"),
  'Sizzlipede': require("@/assets/cards/en/Genetic Apex/cPK_10_000510_00_YAKUDE_C.png"),
  'Centiskorch': require("@/assets/cards/en/Genetic Apex/cPK_10_000520_00_MARUYAKUDE_U.png"),
  'Squirtle': require("@/assets/cards/en/Genetic Apex/cPK_10_000530_00_ZENIGAME_C.png"),
  'Wartortle': require("@/assets/cards/en/Genetic Apex/cPK_10_000540_00_KAMEIL_U.png"),
  'Blastoise': require("@/assets/cards/en/Genetic Apex/cPK_10_000550_00_KAMEX_R.png"),
  'Blastoise EX': require("@/assets/cards/en/Genetic Apex/cPK_10_000560_00_KAMEXex_RR.png"),
  'Psyduck': require("@/assets/cards/en/Genetic Apex/cPK_10_000570_00_KODUCK_C.png"),
  'Golduck': require("@/assets/cards/en/Genetic Apex/cPK_10_000580_00_GOLDUCK_U.png"),
};

export const LIST: ItemWithRoute[] = [
  { label: 'decks', icon: 'wind', route: '' },
  { label: 'expansions', icon: 'note', route: '' },
  { label: 'favorites', icon: 'star', route: '' },
];

export const HELP: ItemWithRoute[] = [
  { label: 'config', icon: 'washer.circle', route: 'settings' },
  { label: 'help', icon: 'questionmark.app.fill', route: 'help' },
];

export const SORT_FIELD_MAP: Record<string, keyof Card> = {
  order_by_number: 'number',
  order_by_type: 'element',
  order_by_rarity: 'rarity',
  order_by_pokedex: 'pokedex',
  order_by_retreat: 'retreat',
  order_by_hp: 'health',
  order_by_stage: 'stage'
};

const FILTER_SEARCH: FilterSearch = {
  ability: {with: null, without: null},
  attack: {min: null, max: null},
  element: {
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null
  },
  expansion: {pack: null},
  favorite: {included: null, not_favorite: null},
  health: {min: null, max: null},
  rarity: {
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
  },
  stage: {
    fossil: null,
    object: null,
    supporter: null,
    tool: null
  }
}

export function getFilterSearch(): FilterSearch {
  return {...FILTER_SEARCH};
}

export const INITIAL_SORT_DATA: SortItem[] = [
  { id: 1, label: 'order_by_number', icon: 'content-paste-search', active: true, order: 'asc' },
  { id: 2, label: 'order_by_type', icon: 'stars', active: false, order: 'desc' },
  { id: 3, label: 'order_by_rarity', icon: 'diamond', active: false, order: 'desc' },
  { id: 4, label: 'order_by_pokedex', icon: 'smartphone', active: false, order: 'desc' },
  { id: 5, label: 'order_by_retreat', icon: 'grass', active: false, order: 'desc' },
  { id: 6, label: 'order_by_hp', icon: 'favorite-outline', active: false, order: 'desc' },
  { id: 7, label: 'order_by_stage', icon: 'pets', active: false, order: 'desc' },
];

export const RARITY_MAP: any = {
  0: { image: NORMAL_RARITY, amount: 1 },
  1: { image: NORMAL_RARITY, amount: 2 },
  2: { image: NORMAL_RARITY, amount: 3 },
  3: { image: NORMAL_RARITY, amount: 4 },
  4: { image: STAR_RARITY, amount: 1 },
  5: { image: STAR_RARITY, amount: 2 },
  6: { image: STAR_RARITY, amount: 3 },
  7: { image: CROWN_RARITY, amount: 1 },
  8: { image: null, amount: 0 },
}

export const TYPE_MAP: any = {
  0: { image: GRASS_ICON, label: 'grass' },
  1: { image: FIRE_ICON, label: 'fire' },
  2: { image: WATER_ICON, label: 'water' },
  3: { image: ELECTRIC_ICON, label: 'electric' },
  4: { image: PSYCHIC_ICON, label: 'psychic' },
  5: { image: FIGHT_ICON, label: 'fight' },
  6: { image: DARK_ICON, label: 'dark' },
  7: { image: STEEL_ICON, label: 'steel' },
  8: { image: DRAGON_ICON, label: 'dragon' },
  9: { image: NORMAL_ICON, label: 'normal' },
}