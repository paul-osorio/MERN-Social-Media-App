import Images from "./Images";

interface IBody {
  images?: any;
  content?: string;
}
const Body = ({ content, images }: IBody) => {
  return (
    <div className="flex flex-col space-y-2">
      <p>{content}</p>
      {images.length > 0 && <Images images={images} />}
    </div>
  );
};

export default Body;
