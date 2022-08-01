import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CreatePostModal from "../CreatePostModal";
import CreatePostCard from "./CreatePostCard";
import PostCard from "./PostCard";

const PostContainer = () => {
  const [postModal, setPostModal] = useState(false);

  const openPostModal = () => setPostModal(true);
  const closePostModal = () => setPostModal(false);

  return (
    <>
      <div className="col-span-2 ">
        <div className="flex flex-col space-y-4">
          <CreatePostCard onClick={openPostModal} />
          <div className="">
            <span className="font-medium text-gray-500">Your Feed</span>
            <div className="flex flex-col space-y-4">
              <PostCard image="true" />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {postModal && <CreatePostModal handleClose={closePostModal} />}
      </AnimatePresence>
    </>
  );
};
export default PostContainer;
