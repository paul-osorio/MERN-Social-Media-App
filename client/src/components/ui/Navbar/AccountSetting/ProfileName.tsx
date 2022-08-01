import avatarPlaceholder from "../../../../assets/images/avatarPlaceholder.png";

const ProfileName = () => {
  return (
    <div className="flex items-center space-x-2 mb-2 px-2 py-2 rounded-3xl hover:bg-gray-100">
      <img
        src={avatarPlaceholder}
        alt=""
        className="w-9 h-9 border-2 border-blue-100 rounded-full"
      />
      <div className="flex flex-col w-[200px]">
        <span className="text-sm leading-3 break-words font-medium text-gray-700">
          Paul Osorio
        </span>
        <div className="flex">
          <span className="text-sm  break-words line-clamp-1 text-gray-400">
            osoriojohnpaulc
          </span>
          <span className="text-gray-400 text-sm">@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileName;
