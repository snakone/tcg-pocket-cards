import { PressableAndroidRippleConfig } from "react-native";
import { ItemWithRoute, SortItem } from "../interfaces/layout.interfaces";
import { Card } from "../interfaces/card.interfaces";

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
  NORMAL_ICON 
} from "../sentences/path.sentences";
import { FilterSearch } from "../classes/filter.class";

export const APP_VERSION = '1.0.2';
export const MENU_WIDTH = 250;
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
  { label: 'favorites', icon: 'star', route: '' },
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

export const STAGE_MAP: any = {
  0: { label: 'basic' },
  1: { label: 'stage_one' },
  2: { label: 'stage_two' },
  3: { label: 'object' },
  4: { label: 'tool' },
  5: { label: 'fossil' },
  6: { label: 'supporter' },
}

export const DAMAGES = Array.from({ length: 30 }, (_, index) => (index + 1) * 10);

export const iconWidth = 36;

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