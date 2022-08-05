import { useCreatePost } from "../../../../context/CreatePostContext";

interface ImageHolderInterface {
  image: any;
  id: any;
}

const ImageHolder = ({ image, id }: ImageHolderInterface) => {
  const { setImages, images, setImageWarning } = useCreatePost();

  const onRemove = () => {
    setImages((prevImages: any) =>
      prevImages.filter((image: any) => image.id !== id)
    );
  };

  return (
    <div className="relative h-full">
      <div
        role="button"
        onClick={onRemove}
        className="h-8 items-center justify-center flex w-8 absolute top-2 right-2 rounded-full bg-black/50"
      >
        <span className="material-icons text-white text-lg">close</span>
      </div>
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="image"
        loading="lazy"
      />
    </div>
  );
};

export default ImageHolder;
