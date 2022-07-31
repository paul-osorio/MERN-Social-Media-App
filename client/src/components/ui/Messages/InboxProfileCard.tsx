import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";

const InboxProfileCard = () => {
  return (
    <div
      role="button"
      className="hover:bg-gray-100 flex p-5 items-center space-x-3"
    >
      <img src={avatarPlaceholder} className="h-10 w-10" alt="" />
      <div>
        <div className="leading-3 flex  items-center space-x-2">
          <span className="line-clamp-1">
            Paul Osorio asf sa fsa f asf asf as f{" "}
          </span>
          <span className="text-gray-500">•</span>
          <span className=" text-gray-500 whitespace-nowrap">Jan 7 2015</span>
        </div>
        <p className="line-clamp-1 text-gray-500">
          asf saf asf sa as fas f asf asf asf asf sa fasf Paul Osorio
        </p>
      </div>
    </div>
  );
};
export default InboxProfileCard;
