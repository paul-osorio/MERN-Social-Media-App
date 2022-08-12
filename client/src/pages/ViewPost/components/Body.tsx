import Images from "./Images";

const Body = ({ data }: { data: any }) => {
  return (
    <div>
      <p>{data?.content}</p>
      {data?.images?.length > 0 && <Images images={data?.images} />}
    </div>
  );
};

export default Body;
