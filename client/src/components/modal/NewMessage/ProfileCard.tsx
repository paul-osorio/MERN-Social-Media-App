// import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";
import { useAppContext } from "../../../context/AppProvider";
import { useMessageContext } from "../../../context/MessageContext";
import useAvatar from "../../../hooks/useAvatar";
import useFullname from "../../../hooks/useFullname";
import { createConvo } from "../../../lib/message";
import classNames from "classnames";

const ProfileCard = ({ friend }: { friend: any }) => {
  const { onlineUsers } = useAppContext();
  const { setIsOpen, setRoomID, setOpenNewMessage, setReceiver } =
    useMessageContext();
  const avatar = useAvatar(friend);
  const fullname = useFullname(friend);

  const onClick = async () => {
    setOpenNewMessage(false);
    setIsOpen(true);

    try {
      const response = await createConvo(friend._id);
      const roomID = response.data.roomID;
      setRoomID(roomID);
      setReceiver(friend);
    } catch (err) {
      console.log(err);
    }
  };

  const isOnline = onlineUsers.includes(friend._id);

  return (
    <div
      onClick={onClick}
      role="button"
      className=" p-2 hover:bg-gray-100 rounded-3xl"
    >
      <div className="flex items-center space-x-2">
        <div className="relative">
          <img
            src={avatar}
            className="w-9 h-9 rounded-full object-cover"
            alt=""
            loading="lazy"
          />
          <div
            className={classNames(
              "h-2 w-2 ring-2 ring-white rounded-full absolute bottom-1 right-0",
              {
                "bg-green-500": isOnline,
                "bg-gray-300": !isOnline,
              }
            )}
          />
        </div>
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
