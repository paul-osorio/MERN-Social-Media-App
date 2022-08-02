import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

interface IOptions {
  isLiked?: boolean;
}

const Options = ({ isLiked }: IOptions) => {
  const heartRef = useRef<any>(null);

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex w-full space-x-5 items-center">
        <div
          role="button"
          onClick={() => {
            heartRef.current.click();
          }}
          className="flex group  items-center relative transition-all space-x-1 hover:bg-gray-100  pr-2 rounded-full"
        >
          {isLiked ? (
            <div className="group-hover:bg-red-100 h-7 absolute left-0 w-7 flex items-center justify-center rounded-full">
              <i className="fal fa-heart"></i>
            </div>
          ) : (
            <div className="group-hover:bg-red-100 h-7 absolute w-7 flex items-center justify-center rounded-full">
              <i className="fas text-red-500 fa-heart"></i>
            </div>
          )}

          <span className="text-sm text-gray-500 pl-7">5.5k</span>
        </div>
        <div
          role="button"
          className="flex items-center space-x-1 hover:bg-gray-100 p-1 px-2 rounded-full"
        >
          <i className="fal fa-share text-lg text-gray-600"></i>

          <span className="text-sm text-gray-500">5.5k</span>
        </div>
        <div
          role="button"
          className="flex items-center space-x-1 hover:bg-gray-100 p-1 px-2 rounded-full"
        >
          <i className="fal fa-comment-alt text-gray-600 "></i>

          <span className="text-sm text-gray-500">5.5k</span>
        </div>
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
