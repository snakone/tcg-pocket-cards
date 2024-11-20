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