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
      className="p-2 mt-3 border rounded-3xl"
    >
      <div className="w-full grid grid-cols-2 overflow-auto gap-2">
        <AnimatePresence>
          {images.map((image, index) => {
            return (
              <ImageHolder
                key={index}
                image={URL.createObjectURL(image.file)}
                id={image.id}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Images;
