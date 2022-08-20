import classNames from "classnames";
import { useState } from "react";
import { useAppContext } from "../../../../context/AppProvider";
import useAvatar from "../../../../hooks/useAvatar";
import useFullname from "../../../../hooks/useFullname";
import useTimeAgo from "../../../../hooks/useTimeAgo";
import NestedCommentArea from "./NestedCommentArea";
import Options from "./Options";

const CommentsCard = ({
  comment,
  postId,
  commentId,
  setShowReplies,
}: {
  comment: any;
  postId: any;
  commentId: any;
  setShowReplies: any;
}) => {
  const timeAgo = useTimeAgo(comment.createdAt);

  const { onlineUsers, user } = useAppContext();

  const [openComment, setOpenComment] = useState(false);
  // console.log(comment);
  const fullname = useFullname(comment.user);
  const avatar = useAvatar(comment.user);
  const isOnline = onlineUsers.includes(user?._id);

  return (
    <div className="w-full">
      <div className="flex space-x-2">
        <div>
          <div className="w-7 h-7 rounded-full relative">
            <img src={avatar} className="w-full h-full object-cover" />
            <div
              className={classNames(
                "h-2 w-2 ring-2 ring-white rounded-full absolute bottom-0 right-0",
                {
                  "bg-green-500": isOnline,
                  "bg-gray-300": !isOnline,
                }
              )}
            />
          </div>
        </div>
        <div className="w-[93%]">
          <div className="bg-gray-100 p-3 rounded-3xl  text max-w-fit">
            <div className="text-sm">
              <span className="font-medium">{fullname} </span>
              <span className=" text-gray-500">• {timeAgo}</span>
            </div>
            <div className="break-words text-sm overflow-hidden text-ellipsis ">
              {comment.content}
            </div>
          </div>
          <Options setOpenComment={setOpenComment} />
          {openComment && (
            <NestedCommentArea
              setShowReplies={setShowReplies}
              postId={postId}
              commentId={commentId}
              setOpenComment={setOpenComment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
