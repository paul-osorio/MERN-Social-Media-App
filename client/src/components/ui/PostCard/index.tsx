import ShareProvider, { ShareContext } from "../../../context/ShareContext";
import SharePost from "../../modal/SharePost";
import Body from "./Body";
import OptionsCard from "./Bottom";
import TopName from "./TopName";

interface IPostCard {
  data: any;
}
const PostCard = ({ data }: IPostCard) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow">
      <div className="p-5 flex flex-col space-y-2">
        <TopName author={data?.user} timestamp={data?.createdAt} />
        <Body data={data} />
        <OptionsCard data={data} />
      </div>
    </div>
  );
};

export default PostCard;
