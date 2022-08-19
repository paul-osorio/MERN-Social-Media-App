import "draft-js/dist/Draft.css";
import TextareaAutosize from "react-textarea-autosize";

const TextArea = ({
  content,
  setContent,
}: {
  content: string;
  setContent: (content: string) => void;
}) => {
  const onChange = (e: any) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <TextareaAutosize
        onChange={onChange}
        value={content}
        placeholder="What's happening?"
        className="resize-none outline-none w-full"
        autoFocus
      />
    </div>
  );
};

export default TextArea;
