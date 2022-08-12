import { useNavigate } from "react-router-dom";
import Images from "./Images";
import SharedPost from "./SharedPost";

interface IBody {
  data?: any;
}
const Body = ({ data }: IBody) => {
  const navigate = useNavigate();
  const id = data?.shareID || data?.id;

  const onViewPost = () => {
    navigate("/" + id);
  };

  return (
    <div
      onClick={onViewPost}
      className=" cursor-pointer flex flex-col space-y-2"
    >
      <p>{data?.content}</p>
      {data?.images?.length > 0 && <Images images={data?.images} />}
      {data?.shareID && <SharedPost shareID={data?.shareID} />}
    </div>
  );
};

export default Body;
