import CommentsCard from "./CommentsCard";

const Comments = () => {
  return (
    <div className="flex flex-col space-y-3">
      <CommentsCard />
      <CommentsCard />
    </div>
  );
};

export default Comments;
