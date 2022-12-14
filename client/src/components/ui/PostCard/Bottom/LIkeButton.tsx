import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import useThousands from "../../../../hooks/useThousands";

interface ILikeButton {
  isLiked?: boolean;
  onClick?: any;
  dataId?: any;
  likes: any;
}

const LikeButton = ({ isLiked, onClick, dataId, likes }: ILikeButton) => {
  const thousand = useThousands(likes, 1);
  const heartRef = useRef<any>(null);

  return (
    <div
      role="button"
      onClick={() => {
        onClick();
      }}
      className="flex group  items-center relative transition-all duration-75 space-x-1 hover:bg-gray-100  pr-2 rounded-full"
    >
      {!isLiked ? (
        <div
          ref={heartRef}
          className="group-hover:bg-red-100 h-7 absolute left-0 w-7 flex items-center justify-center rounded-full"
        >
          <i className="fal fa-heart group-hover:text-red-500"></i>
        </div>
      ) : (
        <div
          ref={heartRef}
          className="group-hover:bg-red-100 h-7 absolute w-7 flex items-center justify-center rounded-full"
        >
          <i className="fas text-red-500 fa-heart"></i>
        </div>
      )}

      <span className="text-sm text-gray-500 pl-7">{thousand}</span>
    </div>
  );
};
export default LikeButton;
