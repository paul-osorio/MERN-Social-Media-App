import { useEffect, useRef, useState } from "react";
import { convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useCreatePost } from "../../../../context/CreatePostContext";

const TextArea = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { post, setPost } = useCreatePost();

  const editor = useRef<any>(null);

  function focusEditor() {
    editor.current.focus();
  }
  const rawValue = convertToRaw(editorState.getCurrentContent());

  const onChange = (editorState: any) => {
    setEditorState(editorState);
    setPost(rawValue);
  };

  useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div onClick={focusEditor} className="">
      <Editor
        ref={editor}
        editorState={editorState}
        placeholder="What's happening?"
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
