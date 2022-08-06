import { motion } from "framer-motion";
const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Typing = () => {
  const spanClass = "h-1 w-1 rounded-full bg-gray-500";

  return (
    <div className="flex justify-start w-full p-1 px-2">
      <div className="p-3 rounded-t-[20px] flex items-center mb-1 rounded-br-[20px] text-white bg-gray-100">
        <motion.div
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
          className="flex space-x-1"
        >
          <motion.span
            variants={DotVariants}
            transition={DotTransition}
            className={spanClass}
          ></motion.span>
          <motion.span
            variants={DotVariants}
            transition={DotTransition}
            className={spanClass}
          ></motion.span>
          <motion.span
            variants={DotVariants}
            transition={DotTransition}
            className={spanClass}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Typing;
