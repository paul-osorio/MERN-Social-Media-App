import { useMessageContext } from "../../../context/MessageContext";
import CollapseCard from "./CollapseCard";
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useRef } from "react";
import ReceiverCard from "./ReceiverCard";
import Inbox from "./Inbox";
import Message from "./Message";

const Messages = () => {
  const { isOpen, setIsOpen, receiverID } = useMessageContext();
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
      className="bg-white fixed bottom-0 right-2 shadow-dark  rounded-t-lg"
    >
      {receiverID ? <ReceiverCard /> : <CollapseCard />}
      {isOpen ? receiverID ? <Message /> : <Inbox /> : null}
    </motion.div>
  );
};

export default Messages;
