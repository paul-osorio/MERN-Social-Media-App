import PostContainer from "./components/PostContainer";

import { useAuth } from "../../hooks";
import SharePost from "../../components/modal/SharePost";
import { useAppContext } from "../../context/AppProvider";

const Homepage = () => {
  const { setSharePost, sharePost } = useAppContext();

  const handleClose = () => setSharePost(null);
  return (
    <>
      <div className="grid grid-cols-5 w-full gap-x-2">
        <div className="col-span-3">
          <PostContainer />
        </div>
        <div className="col-span-2"></div>
      </div>
      {sharePost && <SharePost handleClose={handleClose} />}
    </>
  );
};

export default Homepage;
