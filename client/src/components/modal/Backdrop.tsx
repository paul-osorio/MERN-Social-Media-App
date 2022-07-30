import { motion } from "framer-motion";

interface BackdropProps {
  handleClose?: () => void;
  children?: React.ReactNode;
}

const Backdrop = ({ children, handleClose }: BackdropProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      transition={{ duration: 0.2 }}
      className="fixed h-screen w-screen top-0 left-0 bg-black/20 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
