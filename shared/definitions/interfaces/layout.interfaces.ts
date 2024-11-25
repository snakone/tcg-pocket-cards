import { ReactNode } from "react";

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