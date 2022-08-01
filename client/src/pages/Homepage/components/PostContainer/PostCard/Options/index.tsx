import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import CommentButton from "./CommentButton";
import LikeButton from "./LIkeButton";
import ShareButton from "./ShareButton";

const Options = () => {
  const heartRef = useRef<any>(null);
  const [isLiked, setIsLiked] = useState(false);
  const onLike = () => setIsLiked(!isLiked);

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex w-full space-x-5 items-center">
        <LikeButton isLiked={isLiked} onClick={onLike} />
        <ShareButton />
        <CommentButton />
      </div>
      <div
        role="button"
        className="hover:bg-gray-100    h-8 w-8 flex items-center justify-center rounded-full"
      >
        <i className="fas text-gray-600 fa-ellipsis-v "></i>
      </div>
    </div>
  );
};

export default Options;
