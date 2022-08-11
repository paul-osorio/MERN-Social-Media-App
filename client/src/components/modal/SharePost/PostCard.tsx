import Body from "../../ui/PostCard/Body";
import TopName from "../../ui/PostCard/TopName";

const PostCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full border rounded-3xl p-5">
      <TopName author={data?.user} timestamp={data?.createdAt} />
      <Body data={data} />
    </div>
  );
};

export default PostCard;
