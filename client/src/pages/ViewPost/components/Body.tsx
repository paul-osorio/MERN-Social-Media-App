import SharedPost from "../../../components/ui/PostCard/SharedPost";
import Images from "./Images";

const Body = ({ data }: { data: any }) => {
  return (
    <div>
      <p>{data?.content}</p>
      {data?.images?.length > 0 && <Images images={data?.images} />}
      {data?.shareID && <SharedPost shareID={data?.shareID} />}
    </div>
  );
};

export default Body;
