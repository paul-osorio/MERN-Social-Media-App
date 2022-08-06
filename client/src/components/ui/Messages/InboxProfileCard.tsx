import avatarPlaceholder from "../../../assets/images/avatarPlaceholder.png";
import useAvatar from "../../../hooks/useAvatar";
import useFullname from "../../../hooks/useFullname";

const InboxProfileCard = ({ message }: { message: any }) => {
  const fullname = useFullname(message?.participant);
  const avatar = useAvatar(message?.participant);
  // const lastMessage = message?.lastMessageType + message?.lastMessage;
  return (
    <div
      role="button"
      className="hover:bg-gray-100 flex p-5 items-center space-x-3"
    >
      <img
        src={avatar}
        className="h-10 w-10 rounded-full object-cover"
        alt=""
      />
      <div className="flex flex-col w-[320px]">
        <div className="flex items-center space-x-2">
          <span className="line-clamp-1 block break-words ">{fullname}</span>
          <span className="text-gray-500 block">•</span>
          <span className=" text-gray-500 whitespace-nowrap text-sm block">
            Jan 7 2015
          </span>
        </div>
        <p className="line-clamp-1 break-words text-gray-500 w-[320px]">
          {message?.messages[0].sender._id === message?.participant._id
            ? message?.messages[0].content
            : "You: " + message?.messages[0].content}
        </p>
      </div>
    </div>
  );
};
export default InboxProfileCard;
