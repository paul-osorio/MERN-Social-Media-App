import { motion } from "framer-motion";
import { useEffect } from "react";

interface BackdropProps {
  handleClose?: () => void;
  children?: React.ReactNode;
}

const Backdrop = ({ children, handleClose }: BackdropProps) => {
  useEffect(() => {
    const setBodyOverflow = () => {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    };
    const resetBodyOverflow = () => {
      document.body.style.position = "static";
      document.body.style.width = "auto";
      document.body.style.overflowY = "auto";
    };
    setBodyOverflow();
    return () => {
      resetBodyOverflow();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      transition={{ duration: 0.2 }}
      className="fixed h-screen w-screen top-0 left-0 bg-black/20  z-50 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
