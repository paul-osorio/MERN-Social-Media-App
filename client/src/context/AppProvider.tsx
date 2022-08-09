import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../lib/user";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";
import { userSession } from "../lib/auth";
import { useAuth } from "../hooks";

interface AppProps {
  user: any;
  searchQuery: any;
  setSearchQuery: (query: any) => void;
  socket: any;
  onlineUsers: any[];
}

export const AppContext = createContext<AppProps>({
  user: null,
  searchQuery: null,
  setSearchQuery: (query: any) => {},
  socket: null,
  onlineUsers: [],
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q"));
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

  const { data: user } = useQuery(["userDetails"], async () => {
    const response = await getUserDetails();
    return response.data;
  });

  const socket = io(import.meta.env.VITE_APP_BASE_URL);

  useEffect(() => {
    if (user) {
      socket.on("connect", () => {
        socket.emit("status", user._id);

        socket.on("online", (data: any) => {
          // setOnlineUsers((prevState) => [...prevState, data]);
          setOnlineUsers(data);
        });

        socket.on("offline", (data: any) => {
          // Remove user from online users list
          setOnlineUsers(data);
        });
      });
    }
  }, [user]);

  const value: AppProps = {
    user,
    searchQuery,
    setSearchQuery,
    socket,
    onlineUsers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
