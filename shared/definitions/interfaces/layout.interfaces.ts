import { ReactNode } from "react";
import { CardLanguageENUM } from "../enums/card.enums";
import { CollectionStat, ExpansionEmblem } from "./global.interfaces";
import { FilterKey } from "@/hooks/filter.reducer";

export interface HeaderWithCustomModalProps {
  title: string;
  modalTitle?: string;
  modalContent: ReactNode;
  modalHeight?: number;
  animatedStyle?: any,
  animatedIconStyle?: any,
  showHeader?: boolean;
}

export interface TabMenu {
  isVisible: boolean;
  onClose: (value?: any) => void;
  animatedStyle: any;
}

export interface TabMenuCards extends TabMenu {
  filterKey: FilterKey;
}

export interface TabMenuCollection extends TabMenu {
  selectedLanguage: CardLanguageENUM;
  onViewStats: (language: CardLanguageENUM) => void
}

export interface TabDesiredMenu extends TabMenu {
  desired: (number | null)[];
}

export interface TabOffersMenu extends TabMenu {
  desired: (number | null)[];
  offers: (number | null)[];
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
  route: string;
}

export interface SortItem {
  id: number,
  label: string;
  icon: string,
  active: boolean,
  order: 'desc' | 'asc'
}