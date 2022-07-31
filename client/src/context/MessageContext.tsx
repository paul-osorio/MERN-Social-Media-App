import { createContext, useContext, useState } from "react";

interface IMessageContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
interface IMessageProvider {
  children: React.ReactNode;
}

export const MessageContext = createContext<IMessageContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const MessageProvider = ({ children }: IMessageProvider) => {
  const [isOpen, setIsOpen] = useState(false);

  const values: IMessageContext = {
    isOpen,
    setIsOpen,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
