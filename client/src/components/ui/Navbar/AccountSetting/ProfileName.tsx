import avatarPlaceholder from "../../../../assets/images/avatarPlaceholder.png";
import { useAppContext } from "../../../../context/AppProvider";

const ProfileName = () => {
  const { user } = useAppContext();

  const imageUrl = import.meta.env.VITE_APP_BASE_URL;
  const fullname = user?.nameFirst + " " + user?.nameLast;

  //seperate domain name from email
  const domain = user?.email.split("@")[1];
  const username = user?.email.split("@")[0];

  const avatar = user?.profile
    ? `${imageUrl}/profile/${user?.profile}`
    : user?.avatar
    ? `${imageUrl}/avatar/${user?.avatar}.png`
    : avatarPlaceholder;

  return (
    <div className="flex items-center space-x-2 mb-2 px-2 py-2 rounded-3xl hover:bg-gray-100">
      <img
        src={avatar}
        alt=""
        className="w-9 h-9 border-2 border-blue-100 rounded-full"
      />
      <div className="flex flex-col w-[200px]">
        <span className="text-sm leading-3 break-words font-medium text-gray-700">
          {fullname}
        </span>
        <div className="flex">
          <span className="text-sm  break-words line-clamp-1 text-gray-400">
            {username}
          </span>
          <span className="text-gray-400 text-sm">@{domain}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileName;
