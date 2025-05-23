import { ReactNode } from "react";

import { CardsState } from "@/hooks/cards.reducer";
import { CardLanguageENUM } from "../enums/card.enums";
import { CollectionStat, ExpansionEmblem } from "./global.interfaces";
import { FilterSearch } from "../classes/filter.class";
import { FilterAttackSearch } from "../classes/filter_attack.class";
import { DataKey, FilterKey, LanguageType, ModalType, RouteKey } from "../types/global.types";
import { Card } from "./card.interfaces";

export interface HeaderWithCustomModalProps {
  title: string;
  modalTitle?: string;
  modalContent: ReactNode;
  modalHeight?: number;
  animatedStyle?: any,
  animatedIconStyle?: any,
  showHeader?: boolean;
  showToggle?: boolean;
}

export interface TabMenu {
  isVisible: boolean;
  onClose?: (value?: any) => void;
  animatedStyle?: any;
}

export interface TabMenuCards extends TabMenu {
  filterKey: FilterKey;
}

export interface TabWithCards extends TabMenu {
  cards: Card[];
  language: LanguageType;
}

export interface TabMenuGames extends TabMenu {
  selectedMode: 4 | 6 | 8;
  filterObj: React.MutableRefObject<FilterSearch>;
}

export interface TabMenuCollection extends TabMenu {
  selectedLanguage: CardLanguageENUM;
  onViewStats: (language: CardLanguageENUM) => void
}

export interface TabDesiredMenu extends TabMenu {
  desired: (number | null)[];
  language: LanguageType,
  cardsState: CardsState;
}

export interface TabOffersMenu extends TabMenu {
  desired: (number | null)[];
  offers: (number | null)[];
  language: LanguageType,
  cardsState: CardsState;
}

export interface ExpansionMenu extends TabMenu {
  current: ExpansionEmblem | undefined;
}

export interface CollectionListMenu extends TabMenu {
  stats: CollectionStat[];
}

export interface RouteItem {
  onClick: () => void;
  children: React.ReactNode;
  item: IconItemWithModal;
  disabled: boolean;
}

export interface IconItemWithModal {
  modal: string;
  icon: string;
  content?: React.ReactNode;
  height: number | 'auto';
}

export interface ItemWithRoute {
  label: string;
  icon: string;
  route: RouteKey;
}

export interface SortItem {
  id: number,
  label: string;
  icon: string,
  active: boolean,
  order: 'desc' | 'asc'
}

export interface FilterStatePayload {
  key: FilterKey;
  value: FilterSearch | FilterAttackSearch;
}

export interface ModalStatePayload {
  key: ModalType;
  value: boolean;
}

export interface DataStatePayload {
  key: DataKey;
  value: any;
}
