import "draft-js/dist/Draft.css";
import TextareaAutosize from "react-textarea-autosize";

const TextArea = () => {
  const onChange = (e: any) => {};

  return (
    <div>
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
