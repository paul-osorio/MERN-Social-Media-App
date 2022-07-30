import { useState } from "react";
import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";
import AccountSetting from "./Account";

const NavProfile = () => {
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const showSetting = () => setIsOpen(!isOpen);

  return (
    <div className="h-full mr-5 flex items-center">
      <div
        role="button"
        ref={setReferenceElement}
        onClick={showSetting}
        className="hover:ring-4 hover:ring-gray-100 rounded-full relative"
      >
        <img src={avatarPlaceholder} className="w-8 h-8 rounded-full border" />
        {isOpen && <AccountSetting referenceElement={referenceElement} />}
      </div>
    </div>
  );
};

export default NavProfile;
