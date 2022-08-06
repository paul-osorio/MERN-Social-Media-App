import { useEffect, useRef, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useMessageContext } from "../../../context/MessageContext";
import { sendMessage } from "../../../lib/message";
import "./style.css";

import { useAuth } from "../../../hooks";
import { useAppContext } from "../../../context/AppProvider";

interface ITextArea {
  typing?: boolean;
  setTyping?: any;
  socketConnected?: boolean;
  scrollToBottom?: any;
  inView?: boolean;
}

const TextArea = ({
  typing,
  setTyping,
  socketConnected,
  scrollToBottom,
  inView,
}: ITextArea) => {
  const { socket, user } = useAppContext();
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<any>();
  const { setMessage, setMessages, messages, message, roomID, receiver } =
    useMessageContext();

  const onSendMessage = async (evt: any) => {
    if (evt.keyCode == 13 && !evt.shiftKey) {
      evt.preventDefault();

      if (message) {
        socket.emit("stop typing", roomID);

        try {
          const { data } = await sendMessage({
            roomID: roomID,
            message,
          });

          setMessage("");

          socket.emit("new message", { data, roomID });
          setMessages([...messages, data.lastMessage]);

          scrollToBottom();
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const typingHandler = (e: any) => {
    setMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", receiver);
    }

    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;

    setTimeout(() => {
      var timeNow = new Date().getTime();

      var timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", receiver);
        setTyping(false);
      }
    }, timerLength);
  };

  return (
    <div
      className={
        (isFocused && "border-indigo-500 ") +
        " w-full border flex relative items-center pr-10 focus:border-indigo-500 bg-white py-2 px-4 rounded-[20px]"
      }
    >
      <ReactTextareaAutosize
        onKeyDown={onSendMessage}
        onChange={typingHandler}
        value={message}
        placeholder="Type a message..."
        className="overflow-auto resize-none max-h-36 w-full rtl border-gray-300 outline-none  bg-white cursor-text"
      />

      <button
        type="button"
        onClick={onSendMessage}
        disabled={message.length === 0}
        className="bg-indigo-500 disabled:hover:bg-indigo-300 disabled:bg-indigo-300 hover:bg-indigo-600 flex items-center justify-center absolute right-1 h-8 rounded-full w-8 text-white"
      >
        <span className="material-icons text-[18px]">send</span>{" "}
      </button>
    </div>
  );
};

export default TextArea;
