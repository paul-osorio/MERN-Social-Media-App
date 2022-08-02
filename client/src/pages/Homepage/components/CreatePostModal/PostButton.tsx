import { useCreatePost } from "../../../../context/CreatePostContext";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createPost } from "../../../../lib/post";

const PostButton = ({ handleClose }: { handleClose: any }) => {
  const { post, images } = useCreatePost();
  const queryClient = useQueryClient();

  const { isLoading, mutate: postCreate } = useMutation(
    ["createPost"],
    createPost,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        handleClose();
      },
    }
  );

  const onPost = () => {
    const formData = new FormData();
    formData.append("content", post);
    for (let i = 0; i < images.length; i++) {
      formData.append(`post_images`, images[i].file);
    }

    postCreate(formData);
  };
  const checker = images.length || post;
  return (
    <button
      onClick={onPost}
      className="w-full disabled:bg-indigo-300 bg-indigo-500 py-2 shadow hover:bg-indigo-600 text-white rounded-3xl"
      disabled={!checker}
    >
      {isLoading ? "Posting..." : "Post"}
    </button>
  );
};

export default PostButton;
