import { AnimatePresence, motion } from "framer-motion";
import { useCreatePost } from "../../../../context/CreatePostContext";
import ImageHolder from "./ImageHolder";

const Images = () => {
  const { images } = useCreatePost();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-2 border rounded-3xl"
    >
      <div className="w-full grid grid-cols-2 overflow-hidden gap-2 rounded-3xl">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                images.length === 3
                  ? index === 0
                    ? "col-span-2 h-52 "
                    : "col-span-1 h-52 "
                  : images.length === 1
                  ? "col-span-2 max-h-[424px]"
                  : "col-span-1 h-52"
              }
            >
              <ImageHolder
                image={URL.createObjectURL(image.file)}
                id={image.id}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Images;
