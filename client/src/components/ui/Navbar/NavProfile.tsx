import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";
import { useAppContext } from "../../../context/AppProvider";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import AccountSetting from "./AccountSetting";

const NavProfile = () => {
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const showSetting = () => setIsOpen(!isOpen);
  const divRef = useRef<any>();

  const { user } = useAppContext();

  const imageUrl = import.meta.env.VITE_APP_BASE_URL;

  const avatar = user?.profile
    ? `${imageUrl}/profile/${user?.profile}`
    : user?.avatar
    ? `${imageUrl}/avatar/${user?.avatar}.png`
    : avatarPlaceholder;

  useOnClickOutside(divRef, () => setIsOpen(false));

  return (
    <div className="h-full mr-5 flex items-center">
      <div ref={divRef}>
        <div
          role="button"
          ref={setReferenceElement}
          onClick={showSetting}
          className="hover:ring-4 hover:ring-gray-100 rounded-full relative"
        >
          <img src={avatar} className="w-8 h-8 rounded-full border" />
          <AnimatePresence>
            {isOpen && <AccountSetting referenceElement={referenceElement} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
