import PostContainer from "./components/PostContainer";

import { useAuth } from "../../hooks";

const Homepage = () => {
  return (
    <div className="grid grid-cols-5 w-full gap-x-2">
      <div className="col-span-3">
        <PostContainer />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Homepage;
