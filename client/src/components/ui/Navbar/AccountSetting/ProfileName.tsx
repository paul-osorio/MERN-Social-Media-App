import avatarPlaceholder from "../../../../assets/images/avatarPlaceholder.png";

const ProfileName = () => {
  return (
    <div className="flex items-center space-x-2 mb-2 p-1 py-2 rounded-lg hover:bg-gray-100">
      <img
        src={avatarPlaceholder}
        alt=""
        className="w-9 h-9 border-2 border-blue-100 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm leading-3 font-medium text-gray-700">
          Paul Osorio
        </span>
        <span className="text-sm text-gray-400">osoriojohnpaulc@gmail.com</span>
      </div>
    </div>
  );
};

export default ProfileName;
