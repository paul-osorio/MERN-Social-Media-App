import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useAppContext } from "../../../context/AppProvider";
import ShareProvider from "../../../context/ShareContext";
import { getOnePost } from "../../../lib/post";
import Backdrop from "../Backdrop";
import CloseButton from "./CloseButton";
import Options from "./Options";
import PostButton from "./PostButton";
import PostCard from "./PostCard";
import TextArea from "./TextArea";

const SharePost = ({ handleClose }: { handleClose: any }) => {
  const { sharePost } = useAppContext();
  const [content, setContent] = useState("");

  const { data } = useQuery(["getOnePost", sharePost], async () => {
    const response = await getOnePost(sharePost);
    return response.data;
  });

  return (
    <Backdrop handleClose={handleClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-5 rounded-3xl w-[500px] flex flex-col space-y-3 shadow-dark"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-gray-600">Share a Post</h1>

          <CloseButton onClick={handleClose} />
        </div>
        <div className="min-h-[50px] max-h-[22rem] flex flex-col overflow-auto createpost-scrollbar">
          <TextArea setContent={setContent} content={content} />

          <PostCard data={data} />
        </div>
        <div className="flex items-center justify-between">
          <Options />
        </div>
        <PostButton content={content} handleClose={handleClose} />
      </div>
    </Backdrop>
  );
};

export default SharePost;
