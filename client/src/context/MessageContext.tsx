import { createContext, useContext, useState } from "react";

interface IMessageContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  receiverID: string;
  setReceiverID: (messageID: string) => void;
  message: string;
  setMessage: (message: string) => void;
  openNewMessage: boolean;
  setOpenNewMessage: (openNewMessage: boolean) => void;
}

interface IMessageProvider {
  children: React.ReactNode;
}

export const MessageContext = createContext<IMessageContext>({
  isOpen: false,
  setIsOpen: () => {},
  receiverID: "",
  setReceiverID: () => {},
  message: "",
  setMessage: () => {},
  openNewMessage: false,
  setOpenNewMessage: () => {},
});

export const MessageProvider = ({ children }: IMessageProvider) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openNewMessage, setOpenNewMessage] = useState(false);
  const [receiverID, setReceiverID] = useState("");
  const [message, setMessage] = useState("");

  const values: IMessageContext = {
    isOpen,
    setIsOpen,
    receiverID,
    setReceiverID,
    message,
    setMessage,
    openNewMessage,
    setOpenNewMessage,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
