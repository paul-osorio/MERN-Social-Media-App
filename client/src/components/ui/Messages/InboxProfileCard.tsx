import { useMessageContext } from "../../../context/MessageContext";
import useAvatar from "../../../hooks/useAvatar";
import useFullname from "../../../hooks/useFullname";
import moment from "moment";
import useTimeAgo from "../../../hooks/useTimeAgo";
import classNames from "classnames";
import { useAppContext } from "../../../context/AppProvider";

const InboxProfileCard = ({ message }: { message: any }) => {
  const { onlineUsers } = useAppContext();
  const { setRoomID, setReceiver, receiver } = useMessageContext();
  const fullname = useFullname(message?.participants[0]);
  const avatar = useAvatar(message?.participants[0]);
  const createdAt = message?.messages[0].createdAt;
  const item = moment(createdAt);
  const timeAgo = useTimeAgo(item);

  const isRead =
    message?.messages[0].sender === receiver?._id
      ? message?.messages[0].isRead
      : true;

  const isOnline = onlineUsers.includes(message?.participants[0]._id);

  console.log(isOnline);

  return (
    <div
      onClick={() => {
        setRoomID(message._id);
        setReceiver(message?.participants[0]);
      }}
      role="button"
      className={classNames(
        "flex px-5 py-4 mx-2 rounded-3xl items-center space-x-3 relative hover:bg-gray-100"
      )}
    >
      <div className="relative">
        <img
          src={avatar}
          className="h-10 w-10 rounded-full object-cover"
          alt=""
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
      <div className="flex flex-col w-[305px]">
        <div className="flex items-center ">
          <p
            className={classNames(
              "overflow-hidden break-words text-ellipsis whitespace-nowrap",
              {
                "font-bold": !isRead,
              }
            )}
          >
            {fullname}
          </p>
          <span className="text-gray-500 block px-1">•</span>
          <span className=" text-gray-500 whitespace-nowrap text-sm block">
            {timeAgo}
          </span>
        </div>
        <p
          className={classNames(
            "overflow-hidden break-words text-ellipsis whitespace-nowrap text-gray-500",
            {
              "font-medium text-black": !isRead,
            }
          )}
        >
          {message?.messages[0].sender === message?.participants[0]._id
            ? message?.messages[0].content
            : "You: " + message?.messages[0].content}
        </p>
      </div>
    </div>
  );
};
export default InboxProfileCard;
