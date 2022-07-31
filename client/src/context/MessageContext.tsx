import { createContext, useContext, useState } from "react";

interface IMessageContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  receiverID: string;
  setReceiverID: (messageID: string) => void;
}
interface IMessageProvider {
  children: React.ReactNode;
}

export const MessageContext = createContext<IMessageContext>({
  isOpen: false,
  setIsOpen: () => {},
  receiverID: "",
  setReceiverID: () => {},
});

export const MessageProvider = ({ children }: IMessageProvider) => {
  const [isOpen, setIsOpen] = useState(false);
  const [receiverID, setReceiverID] = useState("asfasf");

  const values: IMessageContext = {
    isOpen,
    setIsOpen,
    receiverID,
    setReceiverID,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
