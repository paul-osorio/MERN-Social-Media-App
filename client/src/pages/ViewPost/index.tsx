import PostCard from "./components/PostCard";

const ViewPost = () => {
  return (
    <div className="grid grid-cols-5 w-full gap-x-2">
      <div className="col-span-3">
        <PostCard />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default ViewPost;
