import CommentsMain from "./CommentsMain";

const Comments = ({ comments, post }: { comments: any; post: any }) => {
  return (
    <div className="flex flex-col space-y-3">
      {comments
        ?.sort((a: any, b: any) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        })
        .map((comment: any) => (
          <CommentsMain
            key={comment._id}
            comment={comment}
            postId={post?._id}
          />
        ))}
    </div>
  );
};

export default Comments;
