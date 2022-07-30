import { useState } from "react";
import { usePopper } from "react-popper";
import { motion } from "framer-motion";

interface IAccountProps {
  referenceElement: any;
}

const AccountSetting = ({ referenceElement }: IAccountProps) => {
  const [popperElement, setPopperElement] = useState<any>(null);
  const [arrowElement, setArrowElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      { name: "arrow", options: { element: arrowElement, padding: 10 } },
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
      {
        name: "flip",
        options: {
          padding: 10,
        },
      },
    ],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      ref={setPopperElement}
      className="bg-red-500 drop-shadow-lg w-52 h-52 rounded"
      style={styles.popper}
      {...attributes.popper}
    >
      Element
      <div ref={setArrowElement} style={styles.arrow} />
    </motion.div>
  );
};

export default AccountSetting;
