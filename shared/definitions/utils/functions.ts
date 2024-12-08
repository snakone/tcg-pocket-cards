import { Platform } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import { FilterSearch } from "../classes/filter.class";
import { Card } from "../interfaces/card.interfaces";
import { SortItem } from "../interfaces/layout.interfaces";

export function sortCards(field: keyof Card, data: Card[], sort: SortItem): Card[] {
  return [...data].sort((a, b) => {
    const aValue = a[field] ?? '';
    const bValue = b[field] ?? '';

    if (aValue === -1 && bValue !== -1) return 1;
    if (bValue === -1 && aValue !== -1) return -1;

    if (field === 'rarity') {
      if (aValue === 8 && bValue !== 8) return 1;
      if (bValue === 8 && aValue !== 8) return -1;
    }

    if (aValue <= bValue) return sort.order === 'asc' ? -1 : 1;
    if (aValue >= bValue) return sort.order === 'asc' ? 1 : -1;

    const numberA = a.id ?? 0;
    const numberB = b.id ?? 0;
    if (numberA <= numberB) return -1;
    if (numberA >= numberB) return 1;

    return 0;
  });
}

export function filterCards(filter: FilterSearch, data: Card[], favorites: number[]): Card[] {
  return data.filter(card => {
    if (
      filter.favorite.included !== null &&
      !favorites?.includes(card.id) &&
      filter.favorite.included != filter.favorite.not_favorite
    ) return false;

    if (
      filter.favorite.not_favorite !== null &&
      favorites?.includes(card.id) && 
      filter.favorite.not_favorite != filter.favorite.included
    ) return false;

    if (
      filter.ability.with_ability !== null &&
      filter.ability.with_ability !== !!card.ability &&
      filter.ability.with_ability != filter.ability.without_ability
    ) return false;

    if (
      filter.ability.without_ability !== null &&
      filter.ability.without_ability === !!card.ability && 
      filter.ability.with_ability != filter.ability.without_ability
    ) return false;

    const rarity = Object.keys(filter.rarity).filter(key => Boolean((filter.rarity as any)[key]));
    
    if(rarity.length > 0 && !rarity.includes(String(card.rarity))) {
      return false;
    }

    const element = Object.keys(filter.element).filter(key => Boolean((filter.element as any)[key]));
    
    if(element.length > 0 && !element.includes(String(card.element))) {
      return false;
    }

    if (card.health && 
      (filter.health.min !== null && 
      filter.health.min > 0 &&
      filter.health.min > card.health)
    ) {
      return false;
    }

    if (
      card.health &&
      filter.health.max !== null && 
      filter.health.max > 0 &&
      filter.health.max < card.health 
    ) {
      return false;
    }

    if(
      filter.attack.max !== null && 
      filter.attack.max > 0 ||
      filter.attack.min !== null && 
      filter.attack.min > 0
    ) {

      if (!card.attacks || (card.attacks?.length === 1 && card.attacks[0].damage === 0)) {
        return false;
      }

      const lower = Math.min(...card.attacks!.map(att => att.damage).filter(k => Boolean(k)));
      const upper = Math.max(...card.attacks!.map(att => att.damage).filter(k => Boolean(k)));

      if (filter.attack.min && lower < filter.attack.min) {
        return false;
      }

      if (filter.attack.max && upper > filter.attack.max) {
        return false;
      }
    }

    const stage = Object.keys(filter.stage).filter(key => Boolean((filter.stage as any)[key]));
    
    if(stage.length > 0 && !stage.includes(String(card.stage))) {
      return false;
    }

    const expansion = Object.keys(filter.expansion).filter(key => Boolean((filter.expansion as any)[key]));
    
    if(expansion.length > 0 && !card.found?.some(pack => expansion.includes(String(pack)))) {
      return false;
    }

    const weakenss = Object.keys(filter.weak).filter(key => Boolean((filter.weak as any)[key]));
    
    if(weakenss.length > 0 && !weakenss.includes(String(card.weak))) {
      return false;
    }

    if (
      filter.ex.is_ex !== null &&
      filter.ex.is_ex !== !!card.isEX &&
      filter.ex.is_ex != filter.ex.not_ex
    ) return false;

    if (
      filter.ex.not_ex !== null &&
      filter.ex.not_ex === !!card.isEX && 
      filter.ex.not_ex != filter.ex.is_ex
    ) return false;

    return true;
  });
}

export function isEmptyObject(obj: any): boolean {
  return obj && typeof obj === 'object' && Object.keys(obj).length === 0;
}

export function handleWebInit(): void {
  if (Platform.OS !== 'web') return;
  require('@/shared/styles/web_styles.css');
}

export function isRouteComingFromSettings(
  navigation: NavigationProp<ReactNavigation.RootParamList>
): boolean {
  const state = navigation.getState();
  return state && 
         state.routes && 
         state.routes[1]?.params && 
         (state.routes[1].params as any).show === 'true';
}