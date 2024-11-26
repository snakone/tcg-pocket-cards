import { ReactNode } from "react";
import { RarityWithoutSpecial } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { PACKS } from "../enums/packs.enums";

export interface HeaderWithCustomModalProps {
  title: string;
  modalTitle: string;
  modalContent: ReactNode;
  animatedStyle?: any,
  animatedIconStyle?: any
}

export interface TabMenu {
  isVisible: boolean;
  onClose: () => void;
  animatedStyle: any;
}

export interface RouteItem {
  onClick: () => void;
  children: React.ReactNode;
}

export interface IconItemWithModal {
  modal: string;
  icon: string;
  content?: React.ReactNode;
}

export interface ItemWithRoute {
  label: string;
  icon: string;
  route: string;
}

export interface SortItem {
  id: number,
  label: string;
  icon: string,
  active: boolean,
  order: 'desc' | 'asc'
}

export interface FilterSearch {
  favorite: { included: boolean | null, not_favorite: boolean | null },
  rarity: { [key in RarityWithoutSpecial]: boolean | null },
  element: { [key in PokemonTypeENUM]: boolean | null },
  health: { min: number | null, max: number | null },
  attack: { min: number | null, max: number | null },
  ability: { with: boolean | null, without: boolean | null },
  stage: { 
    object: boolean | null, 
    tool: boolean | null, 
    fossil: boolean | null, 
    supporter: boolean | null
  },
  expansion: { pack: PACKS | null}
}

export interface DataSection {
  title: string;
  data: (
    | { included: boolean | null, not_favorite: boolean | null }
    | { [key in RarityWithoutSpecial]: boolean | null }
    | { [key in PokemonTypeENUM]: boolean | null }
    | { min: number | null, max: number | null }
    | { min: number | null, max: number | null } 
    | { with: boolean | null, without: boolean | null }
    | { object: boolean | null, tool: boolean | null, fossil: boolean | null, supporter: boolean | null }
    | { pack: PACKS | null }
  )[];
}