import { ReactNode } from "react";

export interface HeaderWithCustomModalProps {
  title: string;
  modalTitle: string;
  modalContent: ReactNode;
  closeText: string;
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
  label: string;
  icon: string;
  content?: React.ReactNode;
}

export interface ItemWithRoute {
  label: string;
  icon: string;
  route: string;
}