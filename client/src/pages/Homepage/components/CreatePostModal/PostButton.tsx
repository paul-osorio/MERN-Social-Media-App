import { useCreatePost } from "../../../../context/CreatePostContext";

const PostButton = () => {
  const { post, images } = useCreatePost();

  const onPost = () => {
    const newPost = JSON.stringify(post);
    console.log(newPost);
    console.log("images", images);
  };
  return (
    <button
      onClick={onPost}
      className="w-full bg-indigo-500 py-2 shadow hover:bg-indigo-600 text-white rounded-3xl"
    >
      Post
    </button>
  );
};

export default PostButton;
