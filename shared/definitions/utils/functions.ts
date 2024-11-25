import { Card } from "../interfaces/card.interfaces";
import { SortItem } from "../interfaces/layout.interfaces";

export function sortData(field: keyof Card, data: Card[], sort: SortItem): Card[] {
  return [...data].sort((a, b) => {
    const aValue = a[field] ?? '';
    const bValue = b[field] ?? '';

    if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
    if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;

    const numberA = a.number ?? 0;
    const numberB = b.number ?? 0;
    if (numberA < numberB) return -1;
    if (numberA > numberB) return 1;

    const pokedexA = a.pokedex ?? 0;
    const pokedexB = b.pokedex ?? 0;
    if (pokedexA < pokedexB) return -1;
    if (pokedexA > pokedexB) return 1;

    return 0;
  });
}