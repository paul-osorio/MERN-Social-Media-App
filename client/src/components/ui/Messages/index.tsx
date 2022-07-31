import { useMessageContext } from "../../../context/MessageContext";
import CollapseCard from "./CollapseCard";
import { motion } from "framer-motion";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useRef } from "react";

const Messages = () => {
  const { isOpen, setIsOpen } = useMessageContext();
  const ref = useRef<any>();

  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <motion.div
      ref={ref}
      animate={{
        height: isOpen ? "480px" : "auto",
        width: isOpen ? "420px" : "320px",
      }}
      transition={{ duration: 0.2, type: "spring" }}
      className="bg-white fixed bottom-0 right-2 shadow-dark  rounded-t-lg"
    >
      <CollapseCard />
    </motion.div>
  );
};

export default Messages;
