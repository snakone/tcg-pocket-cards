import { ReactNode } from "react";
import { RarityWithoutSpecial } from "../enums/card.enums";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { PACKS_TYPE } from "../enums/packs.enums";

export interface HeaderWithCustomModalProps {
  title: string;
  modalTitle: string;
  modalContent: ReactNode;
  modalHeight?: number;
  animatedStyle?: any,
  animatedIconStyle?: any
}

export interface TabMenu {
  isVisible: boolean;
  onClose: (value?: any) => void;
  animatedStyle: any;
}

export interface TabDesiredMenu extends TabMenu {
  desired: (number | null)[];
}

export interface TabOffersMenu extends TabMenu {
  desired: (number | null)[];
  offers: (number | null)[];
}

export interface RouteItem {
  onClick: () => void;
  children: React.ReactNode;
  item: IconItemWithModal;
}

export interface IconItemWithModal {
  modal: string;
  icon: string;
  content?: React.ReactNode;
  height: number;
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