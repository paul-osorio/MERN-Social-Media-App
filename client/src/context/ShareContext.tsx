import { createContext, useContext, useState } from "react";

interface IShareContext {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

interface IShareProviderProps {
  children: React.ReactNode;
}
export const ShareContext = createContext<IShareContext>({
  openModal: false,
  setOpenModal: () => {},
});

const ShareProvider = ({ children }: IShareProviderProps) => {
  const [openModal, setOpenModal] = useState(false);

  const value: IShareContext = {
    openModal,
    setOpenModal,
  };
  return (
    <ShareContext.Provider value={value}>{children}</ShareContext.Provider>
  );
};

export const useShareContext = () => useContext(ShareContext);

export default ShareProvider;
