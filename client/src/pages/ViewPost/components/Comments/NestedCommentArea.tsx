import classNames from "classnames";
import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useAppContext } from "../../../../context/AppProvider";
import useAvatar from "../../../../hooks/useAvatar";
import { replyComment } from "../../../../lib/post";
import { postSocket } from "../../../../lib/socket.config";

const NestedCommentArea = ({
  postId,
  commentId,
  setShowReplies,
  setOpenComment,
}: {
  postId: any;
  commentId: any;
  setShowReplies: any;
  setOpenComment: any;
}) => {
  const [comment, setComment] = useState("");
  const { onlineUsers, user } = useAppContext();
  const avatar = useAvatar(user);
  const isOnline = onlineUsers.includes(user?._id);

  const handleKeyDown = async (evt: any) => {
    if (evt.keyCode == 13 && !evt.shiftKey) {
      evt.preventDefault();

      if (comment.length > 0) {
        try {
          await replyComment({
            postId: postId,
            commentId: commentId,
            content: comment,
          });
          postSocket.emit("new comment", postId);
          setShowReplies(true);
          setOpenComment(false);

          console.log("comment added");
        } catch (err) {
          console.log(err);
        } finally {
          setComment("");
        }
      }
    }
  };

  return (
    <div className="w-full flex items-start space-x-2 mt-2">
      <div>
        <div className="relative w-6 h-6">
          <div>
            <img src={avatar} className="w-6 h-6 rounded-full object-cover" />
          </div>
          <div
            className={classNames(
              "h-1.5 w-1.5 ring-2 ring-white rounded-full absolute bottom-0 right-0",
              {
                "bg-green-500": isOnline,
                "bg-gray-300": !isOnline,
              }
            )}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="px-4 pt-2 bg-gray-100 rounded-3xl">
          <ReactTextareaAutosize
            onKeyDown={handleKeyDown}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="resize-none text-[14px]  bg-gray-100 max-h-32   w-full outline-none"
            placeholder="Write a comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default NestedCommentArea;
