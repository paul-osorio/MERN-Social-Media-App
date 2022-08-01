import { useEffect, useRef, useState } from "react";
import { convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useCreatePost } from "../../../../context/CreatePostContext";
import TextareaAutosize from "react-textarea-autosize";

const TextArea = () => {
  const { post, setPost } = useCreatePost();

  const onChange = (e: any) => {
    setPost(e.target.value);
  };

  return (
    <div className="">
      <TextareaAutosize
        onChange={onChange}
        placeholder="What's happening?"
        className="resize-none outline-none w-full"
        autoFocus
      />
    </div>
  );
};

export default TextArea;
