import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../lib/user";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";
const socket = io(import.meta.env.VITE_APP_BASE_URL);

interface AppProps {
  user: any;
  searchQuery: any;
  setSearchQuery: (query: any) => void;
  socket: any;
  onlineUsers: any[];
  sharePost: any;
  setSharePost: (post: any) => void;
}

export const AppContext = createContext<AppProps>({
  user: null,
  searchQuery: null,
  setSearchQuery: (query: any) => {},
  socket: null,
  onlineUsers: [],
  sharePost: null,
  setSharePost: (post: any) => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q"));
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const [sharePost, setSharePost] = useState<any>("");

  const { data: user } = useQuery(["userDetails"], async () => {
    const response = await getUserDetails();
    return response.data;
  });

  useEffect(() => {
    if (user) {
      socket.on("connect", () => {
        socket.emit("status", user._id);

        socket.on("online", (data: any) => {
          setOnlineUsers(data);
        });

        socket.on("offline", (data: any) => {
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
    sharePost,
    setSharePost,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
