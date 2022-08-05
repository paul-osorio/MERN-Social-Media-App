import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import NewMessage from "../components/modal/NewMessage";
import { Messages, Navbar } from "../components/ui";
import { MessageContext, MessageProvider } from "../context/MessageContext";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
      <MessageProvider>
        <MessageContext.Consumer>
          {(context) => (
            <>
              <Messages />
              <AnimatePresence>
                {context.openNewMessage && <NewMessage />}
              </AnimatePresence>
            </>
          )}
        </MessageContext.Consumer>
      </MessageProvider>
    </>
  );
};

export default MainLayout;
