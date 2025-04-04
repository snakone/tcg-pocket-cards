import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import ConfirmationPortal from "@/components/shared/ConfirmationPortal";
import { ErrorType } from "@/shared/definitions/types/global.types";

interface ConfirmationContextType {
  confirm: (title: string, message: string, type?: ErrorType) => Promise<boolean>;
}

const ConfirmationContext = createContext<ConfirmationContextType | undefined>(
  undefined
);

export const useConfirmation = (): ConfirmationContextType => {
  const context = useContext(ConfirmationContext);
  if (!context) {
    throw new Error(
      "useConfirmation debe usarse dentro de un ConfirmationProvider"
    );
  }
  return context;
};

export const ConfirmationProvider = ({children}: {children: React.ReactNode}) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ErrorType | undefined>(undefined);
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback((
    title: string, 
    message: string, 
    type?: ErrorType
  ): Promise<boolean> => {
    setMessage(message);
    setTitle(title);
    setType(type);
    setVisible(true);

    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
    });
  }, []);

  const handleResponse = (response: boolean) => {
    if (resolvePromise) {
      resolvePromise(response);
    }
    
    setVisible(false);
    setMessage("");
    setTitle("");
    setType(undefined);
    setResolvePromise(null);
  };

  const contextValue = useMemo(() => ({ confirm }), [confirm]);

  return (
    <ConfirmationContext.Provider value={contextValue}>
      {children}
      <ConfirmationPortal
        visible={visible}
        title={title}
        type={type}
        message={message}
        handleConfirm={handleResponse}
      />
    </ConfirmationContext.Provider>
  );
};