import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../lib/user";
import { useSearchParams } from "react-router-dom";

interface AppProps {
  user: any;
  searchQuery: any;
  setSearchQuery: (query: any) => void;
}

export const AppContext = createContext<AppProps>({
  user: null,
  searchQuery: null,
  setSearchQuery: (query: any) => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q"));

  const { data } = useQuery(["userDetails"], async () => {
    const response = await getUserDetails();
    return response.data;
  });

  const value: AppProps = {
    user: data,
    searchQuery,
    setSearchQuery,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
