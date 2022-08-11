import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import {
  checkIsLiked,
  getLikesCount,
  likePost,
  unlikePost,
} from "../../../../lib/post";
import CommentButton from "./CommentButton";
import LikeButton from "./LIkeButton";
import ShareButton from "./ShareButton";
import { postSocket } from "../../../../lib/socket.config";

const OptionsCard = ({ data }: { data: any }) => {
  const { data: likes, refetch } = useQuery(
    ["likesCount", data?._id],
    async () => {
      const response = await getLikesCount(data?._id);
      return response.data;
    }
  );

  const [isLiked, setIsLiked] = useState(false);

  useLayoutEffect(() => {
    postSocket.on("likePost", (id: any) => {
      if (id === data?._id) {
        refetch();
      }
    });
    checkIsLiked(data?._id)
      .then((res: any) => {
        if (res.data === "liked") {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [data]);

  const onLike = async () => {
    if (isLiked) {
      try {
        await unlikePost(data?._id);
        postSocket.emit("likePost", data?._id);
        setIsLiked(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await likePost(data?._id);
        postSocket.emit("likePost", data?._id);
        setIsLiked(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="flex justify-between items-center w-full "
      style={{
        userSelect: "none",
      }}
    >
      <div className="flex w-full space-x-5 items-center">
        <LikeButton
          isLiked={isLiked}
          dataId={data?._id}
          onClick={onLike}
          likes={likes}
        />
        <ShareButton data={data} />
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

export default OptionsCard;
