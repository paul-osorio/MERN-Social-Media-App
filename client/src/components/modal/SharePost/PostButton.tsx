import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAppContext } from "../../../context/AppProvider";
import { sharePost } from "../../../lib/post";

const PostButton = ({
  handleClose,
  content,
}: {
  handleClose: any;
  content: any;
}) => {
  const { sharePost: post } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const queryClient = useQueryClient();
  const onShare = async () => {
    setIsLoading(true);
    try {
      await sharePost({
        postId: post,
        content: content,
      });
      handleClose();
      queryClient.invalidateQueries(["posts"]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={onShare}
      className="w-full disabled:bg-indigo-300 bg-indigo-500 py-2 shadow hover:bg-indigo-600 text-white rounded-3xl"
      disabled={isLoading}
    >
      {isLoading ? "Sharing..." : "Share"}
    </button>
  );
};

export default PostButton;
