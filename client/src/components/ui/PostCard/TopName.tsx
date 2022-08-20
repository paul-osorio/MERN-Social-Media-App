import moment from "moment";
import useAvatar from "../../../hooks/useAvatar";
import classNames from "classnames";
import { useAppContext } from "../../../context/AppProvider";

const TopName = ({ author, timestamp }: { author: any; timestamp: any }) => {
  const { onlineUsers, user } = useAppContext();
  const fullname = author?.nameFirst + " " + author?.nameLast;
  const fromnow = moment(timestamp).fromNow();

  const avatar = useAvatar(author);
  const isOnline = onlineUsers.includes(author?._id);

  return (
    <div className="w-full flex justify-between items-center h-10">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <img
            src={avatar}
            className="w-9 h-9 object-cover rounded-full"
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
        <div className="">
          <span className="block leading-3 font-medium text-gray-600">
            {fullname}
          </span>
          <span className="text-sm block text-gray-400">{fromnow}</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopName;
