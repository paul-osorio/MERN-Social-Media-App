import PostContainer from "./components/PostContainer";

const Homepage = () => {
  return (
    <div className="h-10 grid grid-cols-5 my-3 gap-x-2">
      <div className="col-span-1 "></div>
      <PostContainer />
      <div className="col-span-2 "></div>
    </div>
  );
};

export default Homepage;
