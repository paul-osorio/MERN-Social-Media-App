import avatarPlaceholder from "../../../../assets/images/avatarPlaceholder.png";
import { useAppContext } from "../../../../context/AppProvider";

const CreatePostCard = ({ onClick }: { onClick: () => void }) => {
  const { user } = useAppContext();

  const imageUrl = import.meta.env.VITE_APP_BASE_URL;

  const avatar = user?.profile
    ? `${imageUrl}/profile/${user?.profile}`
    : user?.avatar
    ? `${imageUrl}/avatar/${user?.avatar}.png`
    : avatarPlaceholder;
  return (
    <div className="p-3 px-5 bg-white rounded-full shadow">
      <div className="flex items-center h-full space-x-2">
        <img
          src={avatar}
          className="w-9 h-9 rounded-full object-cover"
          alt=""
        />

        <div
          onClick={onClick}
          className="flex items-center px-5 h-10 w-full hover:shadow-sm hover:shadow-indigo-300 cursor-text bg-gray-100 rounded-full"
        >
          <span className="text-gray-500">What's happening?</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
