import { useCreatePost } from "../../../../context/CreatePostContext";

const PostButton = () => {
  const { post, images } = useCreatePost();

  const onPost = () => {
    const newPost = JSON.stringify(post);
    console.log(newPost);
    console.log("images", images);
  };
  const checker = images.length || post;
  return (
    <button
      onClick={onPost}
      className="w-full disabled:bg-indigo-300 bg-indigo-500 py-2 shadow hover:bg-indigo-600 text-white rounded-3xl"
      disabled={!checker}
    >
      Post
    </button>
  );
};

export default PostButton;
