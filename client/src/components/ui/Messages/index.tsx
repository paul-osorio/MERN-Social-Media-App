import { useMessageContext } from "../../../context/MessageContext";
import CollapseCard from "./CollapseCard";
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useEffect, useRef } from "react";
import ReceiverCard from "./ReceiverCard";
import Inbox from "./Inbox";
import Message from "./Message";
import { useAppContext } from "../../../context/AppProvider";
import { useAuth } from "../../../hooks";

const Messages = () => {
  const { user } = useAuth();
  const { isOpen, setIsOpen, roomID } = useMessageContext();
  const { socket } = useAppContext();
  const ref = useRef<any>();

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <motion.div
      ref={ref}
      animate={{
        height: isOpen ? 500 : 64,
        width: isOpen ? 420 : 350,
      }}
      transition={{ duration: 0.2, type: "tween" }}
      style={{
        height: "500px",
      }}
      className="bg-white fixed bottom-0 right-2 shadow-dark  rounded-t-3xl"
    >
      {roomID ? <ReceiverCard /> : <CollapseCard />}
      {isOpen ? roomID ? <Message /> : <Inbox /> : null}
    </motion.div>
  );
};

export default Messages;
