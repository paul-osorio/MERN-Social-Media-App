import useAvatar from "../../../../hooks/useAvatar";
import classNames from "classnames";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useAppContext } from "../../../../context/AppProvider";

const CommentArea = ({ data }: { data: any }) => {
  const { onlineUsers, user } = useAppContext();
  const avatar = useAvatar(data);

  const isOnline = onlineUsers.includes(data?._id);

  return (
    <div className="w-full flex items-start space-x-2">
      <div className="relative">
        <img src={avatar} className="w-9 h-9 rounded-full object-cover" />
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
      <div className="w-full">
        <ReactTextareaAutosize
          className="resize-none max-h-32 shadow bg-gray-100 rounded-3xl w-full px-3 outline-none py-2"
          placeholder="Write a comment..."
        />
      </div>
    </div>
  );
};

export default CommentArea;
