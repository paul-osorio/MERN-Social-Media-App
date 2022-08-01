interface IBody {
  image?: string;
}
const Body = ({ image }: IBody) => {
  return (
    <div className="flex flex-col space-y-2">
      <p>asfasf as f sa as f</p>
      {image && <div className="h-96 rounded-3xl bg-red-500"></div>}
    </div>
  );
};

export default Body;
