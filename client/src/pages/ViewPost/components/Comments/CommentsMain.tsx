import CommentsCard from "./CommentsCard";

const CommentsMain = () => {
  return (
    <div>
      <CommentsCard />
      <div className="ml-14 mt-2">
        <CommentsCard />
      </div>
    </div>
  );
};

export default CommentsMain;
