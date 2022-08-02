import Body from "./Body";
import Options from "./Options";
import TopName from "./TopName";

interface IPostCard {
  data: any;
}
const PostCard = ({ data }: IPostCard) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow">
      <div className="p-5 flex flex-col space-y-2">
        <TopName author={data.author} timestamp={data.createdAt} />
        <Body content={data.content} images={data.images} />
        <Options />
      </div>
    </div>
  );
};

export default PostCard;
