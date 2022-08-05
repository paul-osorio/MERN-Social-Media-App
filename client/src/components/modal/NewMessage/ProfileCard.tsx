// import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";
import { useMessageContext } from "../../../context/MessageContext";
import useAvatar from "../../../hooks/useAvatar";
import useFullname from "../../../hooks/useFullname";

const ProfileCard = ({ friend }: { friend: any }) => {
  const { setIsOpen, setReceiverID, setOpenNewMessage } = useMessageContext();
  const avatar = useAvatar(friend);
  const fullname = useFullname(friend);

  const onClick = () => {
    setOpenNewMessage(false);
    setIsOpen(true);
    setReceiverID(friend._id);
  };
  console.log(friend._id);

  return (
    <div
      onClick={onClick}
      role="button"
      className=" p-2 hover:bg-gray-100 rounded-3xl"
    >
      <div className="flex items-center space-x-2">
        <img
          src={avatar}
          className="w-9 h-9 rounded-full object-cover"
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col pt-1">
          <span className="text-sm leading-3 break-words font-medium text-gray-700">
            {fullname}
          </span>
          <div className="flex">
            <span className="text-sm  break-words line-clamp-1 text-gray-400">
              {friend?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;