import { createContext, useContext, useState } from "react";

interface IMessageContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  roomID: string;
  setRoomID: (messageID: string) => void;
  message: string;
  setMessage: (message: string) => void;
  openNewMessage: boolean;
  setOpenNewMessage: (openNewMessage: boolean) => void;
  messages: any[];
  setMessages: (messages: any[]) => void;
  receiver: any;
  setReceiver: (receiver: any) => void;
}

interface IMessageProvider {
  children: React.ReactNode;
}

export const MessageContext = createContext<IMessageContext>({
  isOpen: false,
  setIsOpen: () => {},
  roomID: "",
  setRoomID: () => {},
  message: "",
  setMessage: () => {},
  openNewMessage: false,
  setOpenNewMessage: () => {},
  messages: [],
  setMessages: () => {},
  receiver: "",
  setReceiver: () => {},
});

export const MessageProvider = ({ children }: IMessageProvider) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openNewMessage, setOpenNewMessage] = useState(false);
  const [roomID, setRoomID] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [receiver, setReceiver] = useState<any>("");

  const values: IMessageContext = {
    isOpen,
    setIsOpen,
    roomID,
    setRoomID,
    message,
    setMessage,
    openNewMessage,
    setOpenNewMessage,
    messages,
    setMessages,
    receiver,
    setReceiver,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
