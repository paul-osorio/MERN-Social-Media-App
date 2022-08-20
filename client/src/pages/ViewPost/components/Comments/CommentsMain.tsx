import CommentsCard from "./CommentsCard";

const CommentsMain = ({ comment, postId }: { comment: any; postId: any }) => {
  return (
    <div>
      <CommentsCard comment={comment} postId={postId} commentId={comment._id} />
      {comment.replies.length > 0 && (
        <div className="ml-14 mt-2">
          {comment.replies.map((reply: any) => (
            <CommentsCard
              comment={reply}
              key={reply._id}
              postId={postId}
              commentId={comment._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsMain;
