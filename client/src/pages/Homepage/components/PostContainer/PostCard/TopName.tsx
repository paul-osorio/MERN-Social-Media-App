import avatarPlaceholder from "../../../../../assets/images/avatarPlaceholder.png";
const TopName = () => {
  return (
    <div className="w-full flex justify-between items-center h-10">
      <div className="flex items-center space-x-2">
        <img src={avatarPlaceholder} className="w-9 h-9" alt="" />
        <div className="">
          <span className="block leading-3 font-medium text-gray-600">
            John Paul Osorio
          </span>
          <span className="text-sm block text-gray-400">3 hrs ago</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopName;
