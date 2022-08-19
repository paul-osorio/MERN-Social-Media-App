import { useQuery } from "@tanstack/react-query";
import { getOnePost } from "../../../lib/post";
import Body from "./Body";
import TopName from "./TopName";

const SharedPost = ({ shareID }: { shareID: any }) => {
  const { data } = useQuery(["getOnePost", shareID], async () => {
    const res = await getOnePost(shareID);
    return res.data;
  });

  return (
    <div className="border rounded-3xl p-5">
      <TopName author={data?.user} timestamp={data?.createdAt} />
      <Body data={data} />
    </div>
  );
};
export default SharedPost;
