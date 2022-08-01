import { useCreatePost } from "../../../../context/CreatePostContext";
import { motion } from "framer-motion";

interface ImageHolderInterface {
  image: any;
  id: any;
}

const ImageHolder = ({ image, id }: ImageHolderInterface) => {
  const { setImages } = useCreatePost();

  const onRemove = () => {
    setImages((prevImages: any) =>
      prevImages.filter((image: any) => image.id !== id)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <div
        role="button"
        onClick={onRemove}
        className="h-8 items-center justify-center flex w-8 absolute top-2 right-2 rounded-full bg-black/50"
      >
        <span className="material-icons text-white text-lg">close</span>
      </div>
      <img
        className="w-full rounded-3xl border h-52 object-cover"
        src={image}
        alt="image"
      />
    </motion.div>
  );
};

export default ImageHolder;
