import { useState } from "react";
import { usePopper } from "react-popper";
import { motion } from "framer-motion";
import ProfileName from "./ProfileName";
import SubMenu from "./SubMenu";
import { userSignOut } from "../../../../lib/auth";

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
    ],
  });

  const onLogout = async () => {
    await userSignOut();
    location.href = "/login";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      ref={setPopperElement}
      className="bg-white shadow-dark w-72 rounded-3xl p-5  flex flex-col "
      style={styles.popper}
      {...attributes.popper}
    >
      <ProfileName />
      <hr className="mb-2" />

      <SubMenu
        Name="Lightmode"
        Icon={<i className="fas fa-sun"></i>}
        Type="Button"
      />
      <SubMenu
        Name="Log Out"
        Icon={<i className="fas fa-sign-out-alt"></i>}
        Type="Button"
        onClick={onLogout}
      />

      <div ref={setArrowElement} style={styles.arrow} {...attributes.arrow} />
    </motion.div>
  );
};

export default AccountSetting;
