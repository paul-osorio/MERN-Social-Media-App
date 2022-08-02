import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CreatePostModal from "../CreatePostModal";
import CreatePostCard from "./CreatePostCard";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../../lib/post";
import PostCard from "../../../../components/ui/PostCard";

const PostContainer = () => {
  const { isLoading, data, error } = useQuery(["posts"], async () => {
    const response = await getPosts();
    return response.data;
  });

  const [postModal, setPostModal] = useState(false);

  const openPostModal = () => setPostModal(true);
  const closePostModal = () => setPostModal(false);

  return (
    <>
      <div className="flex flex-col space-y-4">
        <CreatePostCard onClick={openPostModal} />
        <div className="">
          <span className="font-medium text-gray-500">Your Feed</span>
          <div className="flex flex-col space-y-4">
            {isLoading ? (
              <div className="text-center">
                <div className="text-gray-500">Loading...</div>
              </div>
            ) : data.length > 0 ? (
              data.map((post: any) => <PostCard key={post._id} data={post} />)
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2 mt-10">
                <img
                  src="https://www.svgrepo.com/show/400205/emptypages.svg"
                  alt=""
                  className="w-16 h-16"
                />
                <p className="w-72 text-center text-gray-400  font-normal">
                  Seems like there are no posts yet. <br />
                  Be the first to post or add a friend to see their posts.
                </p>
              </div>
            )}
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
