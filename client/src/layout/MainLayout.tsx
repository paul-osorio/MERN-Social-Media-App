import { Outlet } from "react-router-dom";
import { Messages, Navbar } from "../components/ui";
import { MessageProvider } from "../context/MessageContext";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
      <MessageProvider>
        <Messages />
      </MessageProvider>
    </>
  );
};

export default MainLayout;
