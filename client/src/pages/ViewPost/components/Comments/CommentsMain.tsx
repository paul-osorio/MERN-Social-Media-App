import { useState } from "react";
import CommentsCard from "./CommentsCard";

const CommentsMain = ({ comment, postId }: { comment: any; postId: any }) => {
  const [showReplies, setShowReplies] = useState(comment.replies.length === 1);
  return (
    <div>
      <CommentsCard
        comment={comment}
        postId={postId}
        commentId={comment._id}
        setShowReplies={setShowReplies}
      />
      {comment.replies.length > 0 && (
        <>
          {showReplies ? (
            <>
              <div className="ml-14 mt-2 flex flex-col space-y-2">
                {comment.replies.map((reply: any) => (
                  <CommentsCard
                    setShowReplies={setShowReplies}
                    comment={reply}
                    key={reply._id}
                    postId={postId}
                    commentId={comment._id}
                  />
                ))}
              </div>
              {comment.replies.length > 1 && (
                <div className="mx-11">
                  <div
                    role="button"
                    onClick={() => setShowReplies(false)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    <i className="fas fa-angle-up"></i> Hide Replies
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="mx-11 mt-1">
              <div
                role="button"
                onClick={() => setShowReplies(true)}
                className="text-sm text-blue-500 hover:underline"
              >
                <i className="fas fa-angle-down"></i> {comment.replies.length}{" "}
                Replies
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CommentsMain;
