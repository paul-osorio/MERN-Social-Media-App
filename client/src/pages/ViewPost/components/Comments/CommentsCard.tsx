import { useState } from "react";
import useAvatar from "../../../../hooks/useAvatar";
import useFullname from "../../../../hooks/useFullname";
import NestedCommentArea from "./NestedCommentArea";
import Options from "./Options";

const CommentsCard = ({
  comment,
  postId,
  commentId,
}: {
  comment: any;
  postId: any;
  commentId: any;
}) => {
  const [openComment, setOpenComment] = useState(false);
  // console.log(comment);
  const fullname = useFullname(comment.user);
  const avatar = useAvatar(comment.user);

  return (
    <div className="w-full">
      <div className="flex space-x-2">
        <div>
          <div className="w-7 h-7 rounded-ful">
            <img src={avatar} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-[93%]">
          <div className="bg-gray-100 p-3 rounded-3xl  text max-w-fit">
            <div className="text-sm">
              <span className="font-medium">{fullname} </span>
              <span className=" text-gray-500">• 9h</span>
            </div>
            <div className="break-words text-sm overflow-hidden text-ellipsis ">
              {comment.content}
            </div>
          </div>
          <Options setOpenComment={setOpenComment} />
          {openComment && (
            <NestedCommentArea postId={postId} commentId={commentId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
