import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TopName from "../../../components/ui/PostCard/TopName";
import { getOnePost } from "../../../lib/post";

const PostCard = () => {
  const { id } = useParams();

  const { data } = useQuery(["getOnePost", id], async () => {
    const response = await getOnePost(id);

    return response.data;
  });

  console.log(data);

  return (
    <div className="w-full bg-white rounded-3xl shadow">
      <div className="p-5 flex flex-col space-y-2">
        <TopName author={data?.user} timestamp={data?.createdAt} />
      </div>
    </div>
  );
};

export default PostCard;
