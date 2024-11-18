import { ReactNode } from "react";

export interface HeaderWithCustomModalProps {
  title: string;
  modalTitle: string;
  modalContent: ReactNode;
  closeText: string;
}