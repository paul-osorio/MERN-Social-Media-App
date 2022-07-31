import { Outlet } from "react-router-dom";
import { Messages, Navbar } from "../components/ui";
import { MessageProvider } from "../context/MessageContext";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <MessageProvider>
        <Messages />
      </MessageProvider>
    </>
  );
};

export default MainLayout;
