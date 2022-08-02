import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../lib/user";

interface AppProps {
  user: any;
}

export const AppContext = createContext<AppProps>({
  user: null,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useQuery(["userDetails"], async () => {
    const response = await getUserDetails();
    return response.data;
  });

  const value: AppProps = {
    user: data,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
