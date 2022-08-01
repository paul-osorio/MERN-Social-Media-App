import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";

const InboxProfileCard = () => {
  return (
    <div
      role="button"
      className="hover:bg-gray-100 flex p-5 items-center space-x-3"
    >
      <img src={avatarPlaceholder} className="h-10 w-10" alt="" />
      <div className="flex flex-col w-[320px]">
        <div className="flex items-center space-x-2">
          <span className="line-clamp-1 block break-words ">
            ASASGASGASGAASASGASGASGASGASG ASGSAGSGAS
          </span>
          <span className="text-gray-500 block">•</span>
          <span className=" text-gray-500 whitespace-nowrap text-sm block">
            Jan 7 2015
          </span>
        </div>
        <p className="line-clamp-1 break-words text-gray-500 w-[320px]">
          ASGKJSHGJASHGJKASHKHSAJHGKASHGSAHJGASHKSAGHJASGHKASJH
        </p>
      </div>
    </div>
  );
};
export default InboxProfileCard;
