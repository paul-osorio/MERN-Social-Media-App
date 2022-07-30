import { useSignUpContext } from "../../../context/SignUpContext";

interface AvatarImageInterface {
  avatar: any;
  onClick: () => void;
}

const AvatarImage = ({ avatar, onClick }: AvatarImageInterface) => {
  const { selectedAvatar } = useSignUpContext();
  return (
    <div
      onClick={onClick}
      role="button"
      className={
        (selectedAvatar === avatar.name
          ? "ring border-white ring-orange-500"
          : "hover:ring-2 hover:border-2 border-2 hover:border-white") +
        " flex items-center justify-center   rounded-full"
      }
    >
      <img src={avatar.src} alt="" className="w-16 h-16 " />
    </div>
  );
};

export default AvatarImage;
