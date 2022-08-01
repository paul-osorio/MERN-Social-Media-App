import { useRef, useState } from "react";
import { useMessageContext } from "../../../context/MessageContext";
import "./style.css";

interface ITextArea {
  sendOnEnter: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const TextArea = ({ sendOnEnter }: ITextArea) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<any>();
  const { setMessage, message } = useMessageContext();

  return (
    <div
      className={
        (isFocused && "border-indigo-500 ") +
        " w-full border flex relative items-center pr-10 focus:border-indigo-500 bg-white py-2 px-4 rounded-[20px]"
      }
    >
      <div
        ref={ref}
        role="textbox"
        contentEditable="true"
        onKeyDown={sendOnEnter}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onInput={(e: any) => {
          setMessage(e.target.innerText);
        }}
        placeholder="Type a message..."
        className=" overflow-auto max-h-36 w-full border-gray-300 outline-none  bg-white cursor-text"
      ></div>

      <button
        type="button"
        disabled={message.length === 0}
        className="bg-indigo-500 disabled:hover:bg-indigo-300 disabled:bg-indigo-300 hover:bg-indigo-600 flex items-center justify-center absolute right-1 h-8 rounded-full w-8 text-white"
      >
        <span className="material-icons text-[18px]">send</span>{" "}
      </button>
    </div>
  );
};

export default TextArea;
