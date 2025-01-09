import ErrorPortal from "@/components/shared/ErrorPortal";
import { ErrorType } from "@/shared/definitions/types/global.types";
import React, { createContext, useContext, useState, useCallback } from "react";

interface ErrorContextType {
  show: (message: string, type?: ErrorType) => void;
  close: () => void
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError debe usarse dentro de un ErrorProvider");
  }
  return context;
};

export const ErrorProvider = ({ children }: { children: React.ReactNode}) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ErrorType>("error");

  const show = useCallback((message: string, type = ("error") as ErrorType) => {
    setMessage(message);
    setType(type);
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setMessage('');
  }, [])

  return (
    <ErrorContext.Provider value={{ show, close }}>
      {children}
      <ErrorPortal
        visible={visible}
        message={message}
        type={type}
        close={close}
      />
    </ErrorContext.Provider>
  );
};