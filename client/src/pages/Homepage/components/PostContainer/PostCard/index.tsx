import Body from "./Body";
import Options from "./Options";
import TopName from "./TopName";

interface IPostCard {
  image?: string;
}
const PostCard = ({ image }: IPostCard) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow">
      <div className="p-5 flex flex-col space-y-2">
        <TopName />
        <Body image={image} />
        <Options />
      </div>
    </div>
  );
};

export default PostCard;
