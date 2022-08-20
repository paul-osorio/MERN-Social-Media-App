import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TopName from "../../../components/ui/PostCard/TopName";
import { getOnePost } from "../../../lib/post";
import Body from "./Body";
import CommentArea from "./Comments/CommentArea";
import Comments from "./Comments/Comments";
import Options from "./Options";

const PostCard = () => {
  const { postId } = useParams();

  const { data } = useQuery(["getOnePost", postId], async () => {
    const response = await getOnePost(postId);
    return response.data;
  });

  return (
    <div className="w-full bg-white rounded-3xl shadow mb-10">
      <div className="p-5 flex flex-col space-y-2">
        <TopName author={data?.user} timestamp={data?.createdAt} />
        <Body data={data} />
        <Options />
        <CommentArea data={data?.user} post={data} />
        <Comments comments={data?.comments} post={data} />
      </div>
    </div>
  );
};

export default PostCard;
