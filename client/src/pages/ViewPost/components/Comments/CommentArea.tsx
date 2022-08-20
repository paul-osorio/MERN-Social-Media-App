import useAvatar from "../../../../hooks/useAvatar";
import classNames from "classnames";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useAppContext } from "../../../../context/AppProvider";
import { useState } from "react";
import { addComment } from "../../../../lib/post";

const CommentArea = ({ data, post }: { data: any; post: any }) => {
  const [comment, setComment] = useState("");
  const { onlineUsers, user } = useAppContext();
  const avatar = useAvatar(user);

  const isOnline = onlineUsers.includes(data?._id);

  //add next line when shift enter is pressed
  const handleKeyDown = async (evt: any) => {
    if (evt.keyCode == 13 && !evt.shiftKey) {
      evt.preventDefault();

      if (comment.length > 0) {
        try {
          await addComment({
            postId: post?._id,
            content: comment,
          });
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
    <div className="w-full flex items-start space-x-2">
      <div>
        <div className="relative w-9 h-9">
          <div>
            <img src={avatar} className="w-8 h-8 rounded-full object-cover" />
          </div>
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

export default CommentArea;
