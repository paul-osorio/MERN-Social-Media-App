import { useState } from "react";
import { avatarMale, avatarFemale } from "../../../assets/images";
import { Backdrop } from "../../../components/modal";
import { useSignUpContext } from "../../../context/SignUpContext";
import AvatarImage from "./AvatarImage";
import OwnProfile from "./OwnProfile";
import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";

interface AvatarModalInterface {
  handleClose: () => void;
}

const AvatarsModal = ({ handleClose }: AvatarModalInterface) => {
  const { setAvatar, selectedAvatar, setSelectedAvatar } = useSignUpContext();

  /**
   *
   * @param avatar
   * Pass the avatar to the context variable
   */
  const handleAvatarClick = (avatar: any) => {
    setSelectedAvatar(avatar.name);
    setAvatar(avatar.src);
  };
  /**
   * Clear the avatar from the context variable
   */
  const handleClear = () => {
    setSelectedAvatar("");
    setAvatar(null);
  };

  return (
    <Backdrop handleClose={handleClose}>
      <div
        className="bg-white p-10 relative rounded-lg shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="hover:text-red-500 absolute top-2 right-5"
        >
          <i className="far text-xl fa-times "></i>
        </button>
        <OwnProfile />
        <div className=" grid grid-cols-4 gap-2">
          {avatarMale.map((avatar, index) => {
            return (
              <AvatarImage
                avatar={avatar}
                key={index}
                onClick={() => handleAvatarClick(avatar)}
              />
            );
          })}
          {avatarFemale.map((avatar, index) => {
            return (
              <AvatarImage
                avatar={avatar}
                key={index}
                onClick={() => handleAvatarClick(avatar)}
              />
            );
          })}
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="border px-5 py-1 mt-2 hover:bg-gray-100"
        >
          Clear
        </button>
      </div>
    </Backdrop>
  );
};

export default AvatarsModal;
