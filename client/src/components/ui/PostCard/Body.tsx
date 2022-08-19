import { Link, useNavigate } from "react-router-dom";
import Images from "./Images";
import SharedPost from "./SharedPost";

interface IBody {
  data?: any;
}
const Body = ({ data }: IBody) => {
  const navigate = useNavigate();
  const id = data?.shareID || data?.id;
  const onViewPost = () => {
    navigate(`/post/${data?._id}`);
  };
  const onViewSharedPost = () => {
    navigate(`/post/${data?.shareID}`);
  };

  return (
    <div className=" flex flex-col space-y-2">
      <div role="button" onClick={onViewPost}>
        <p>{data?.content}</p>
        {data?.images?.length > 0 && <Images images={data?.images} />}
      </div>

      {data?.shareID && (
        <div role="button" onClick={onViewSharedPost}>
          <SharedPost shareID={data?.shareID} />
        </div>
      )}
    </div>
  );
};

export default Body;
