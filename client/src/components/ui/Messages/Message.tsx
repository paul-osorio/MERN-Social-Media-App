import MessageCard from "./MessageCard";
import TextArea from "./TextArea";
import { useMessageContext } from "../../../context/MessageContext";
import { getMessages } from "../../../lib/message";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useInView from "../../../hooks/useInView";
import Typing from "./Typing";
import { useAppContext } from "../../../context/AppProvider";

const Message = () => {
  const { user } = useAppContext();
  const { messages, setMessages, roomID, receiver, socket } =
    useMessageContext();
  const bottomRef = useRef<any>();
  const firstRender = useRef(true);
  const inView = useInView(bottomRef);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [socketConnected, setSocketConnected] = useState(false);

  const fetchMessages = async () => {
    if (!roomID) return;

    try {
      const { data } = await getMessages(roomID);
      setMessages(data.messages);
      socket.emit("join chat", roomID);
    } catch (err) {
      console.log(err);
    }
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  };

  useLayoutEffect(() => {
    if (firstRender.current) {
      if (inView) scrollToBottom();
    } else {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    socket.emit("setup", user?._id);

    socket.on("connected", () => {
      setSocketConnected(true);
    });
    socket.on("typing", () => {
      if (inView) scrollToBottom();
      setIsTyping(true);
    });
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [roomID]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    socket.on("message received", (data: any) => {
      if (roomID !== data.roomID || !roomID) {
        return;
      }
      setMessages([...messages, data.lastMessage]);
    });
  });

  return (
    <div
      className="flex flex-col"
      style={{
        height: "calc(500px - 64px)",
      }}
    >
      <div className="h-full w-full  overflow-auto">
        {messages.map((message) => (
          <MessageCard
            isMine={message.sender !== receiver?._id}
            message={message}
            key={message._id}
          />
        ))}

        {isTyping ? <Typing /> : ""}

        <div ref={bottomRef} className="h-2" />
      </div>

      <div className="flex items-center p-2 py-3 bg-white border-t">
        <TextArea
          scrollToBottom={scrollToBottom}
          typing={typing}
          setTyping={setTyping}
          inView={inView}
          socketConnected={socketConnected}
        />
      </div>
    </div>
  );
};

export default Message;
