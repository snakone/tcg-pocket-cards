import { PressableAndroidRippleConfig } from "react-native";
import { ItemWithRoute, SortItem } from "../interfaces/layout.interfaces";
import { Card, CardPackTag } from "../interfaces/card.interfaces";

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
  PROMO_A_ICON
} from "../sentences/path.sentences";

import { FilterSearch } from "../classes/filter.class";
import { EXPANSION } from "../enums/packs.enums";
import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardStageENUM } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";

export const APP_VERSION = '1.0.2';
export const MENU_WIDTH = 250;
export const MENU_HEIGHT = 405;
export const PAGE_TITLE = 'TCG Pocket Cards';
export const LOCAL_HOST = 'http://192.168.1.71:3000';
export const SERVER_URL = 'https://tcg-pocket-cards.onrender.com';
export const DEFAULT_LANG = 'es';
export const FILTER_CARDS_HEIGHT = 350;

// MODALS
export const MIN_MODAL_HEIGHT = 96;
export const DEFAULT_MODAL_HEIGHT = 236;
export const LARGE_MODAL_HEIGHT = 508;
export const SORT_MODAL_HEIGHT = 527;

export const RIPPLE_CONFIG: PressableAndroidRippleConfig = {
  color: 'rgba(0, 0, 0, .32)', 
  borderless: true, 
  foreground: false, 
  radius: 58
}

export const LIST: ItemWithRoute[] = [
  { label: 'decks', icon: 'wind', route: '' },
  { label: 'expansions', icon: 'note', route: '' },
  { label: 'favorites', icon: 'star', route: 'favorites' },
];

export const HELP: ItemWithRoute[] = [
  { label: 'help', icon: 'questionmark.app.fill', route: 'help' },
  { label: 'config', icon: 'washer.circle', route: 'settings' },
];

export const SORT_FIELD_MAP: Record<string, keyof Card> = {
  order_by_id: 'id',
  order_by_element: 'element',
  order_by_rarity: 'rarity',
  order_by_pokedex: 'pokedex',
  order_by_retreat: 'retreat',
  order_by_hp: 'health',
  order_by_stage: 'stage'
};

export function getFilterSearch(): FilterSearch {
  return new FilterSearch();
}

export const INITIAL_SORT_DATA: SortItem[] = [
  { id: 1, label: 'order_by_id', icon: 'content-paste-search', active: true, order: 'asc' },
  { id: 2, label: 'order_by_element', icon: 'stars', active: false, order: 'desc' },
  { id: 3, label: 'order_by_rarity', icon: 'diamond', active: false, order: 'desc' },
  { id: 4, label: 'order_by_pokedex', icon: 'smartphone', active: false, order: 'desc' },
  { id: 5, label: 'order_by_retreat', icon: 'grass', active: false, order: 'desc' },
  { id: 6, label: 'order_by_hp', icon: 'favorite-outline', active: false, order: 'desc' },
  { id: 7, label: 'order_by_stage', icon: 'pets', active: false, order: 'desc' },
];

export const RARITY_MAP: Record<CardRarityENUM, {image: any, amount: number}> = {
  [CardRarityENUM.COMMON]: { image: NORMAL_RARITY, amount: 1 },
  [CardRarityENUM.UNCOMMON]: { image: NORMAL_RARITY, amount: 2 },
  [CardRarityENUM.RARE]: { image: NORMAL_RARITY, amount: 3 },
  [CardRarityENUM.DOUBLE]: { image: NORMAL_RARITY, amount: 4 },
  [CardRarityENUM.ART]: { image: STAR_RARITY, amount: 1 },
  [CardRarityENUM.SUPER]: { image: STAR_RARITY, amount: 2 },
  [CardRarityENUM.INMERSIVE]: { image: STAR_RARITY, amount: 3 },
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
  [CardExpansionENUM.GENETIC_APEX]: { label: 'A', tag: 'A1', color: 'white', background: 'black', amount: 'P-A' },
  [CardExpansionENUM.PROMO_A]: { label: 'A', tag: 'PROMO-A', color: 'white', background: 'black', amount: 'P-A' },
  [CardExpansionENUM.MYSTICAL_ISLAND]: { label: 'A', tag: 'A1a', color: 'white', background: 'black', amount: 'P-A' }
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
  [EXPANSION.MYSTICAL_ISLAND]: null,
}

export const PACK_AMOUNT_MAP: Record<CardExpansionENUM, number> = {
  [CardExpansionENUM.GENETIC_APEX]: 286,
  [CardExpansionENUM.PROMO_A]: 23,
  [CardExpansionENUM.MYSTICAL_ISLAND]: 0
}

export const DAMAGES = Array.from({ length: 30 }, (_, index) => (index + 1) * 10);

export const ICON_WIDTH = 36;

export function getDaysRemaining(): { progress: number; remainingText: string } {
  const target = new Date(2025, 0, 29); 
  const start = new Date(2024, 10, 25);
  const today = new Date();
  const diff = target.getTime() - today.getTime();
  const totalDiff = target.getTime() - start.getTime();
  const remainingDays = Math.ceil(diff / (1000 * 3600 * 24));
  const elapsedDiff = today.getTime() - start.getTime();
  const elapsedDays = Math.ceil(elapsedDiff / (1000 * 3600 * 24));
  const progress = (elapsedDays / (totalDiff / (1000 * 3600 * 24))) * 100;
  const hours = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));
  const remainingText = `${remainingDays} d ${hours} h`;

  return { progress, remainingText };
}