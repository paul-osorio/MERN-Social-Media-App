import MessageCard from "./MessageCard";
import TextArea from "./TextArea";
import { useMessageContext } from "../../../context/MessageContext";
import { getMessages } from "../../../lib/message";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import socket from "../../../lib/socketClient";
import { useAppContext } from "../../../context/AppProvider";
import useInView from "../../../hooks/useInView";
import Typing from "./Typing";

const Message = () => {
  const { messages, setMessages, roomID, receiver } = useMessageContext();
  const { user } = useAppContext();
  const bottomRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
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
    setTimeout(() => {
      bottomRef.current.scrollIntoView(true);
    });
  };

  useEffect(() => {
    if (inView) scrollToBottom();
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
    socket.on("message received", (data: any) => {
      if (roomID !== data.roomID) return;

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
      <div ref={scrollRef} className="h-full w-full  overflow-auto">
        {messages.map((message) => (
          <MessageCard
            isMine={message.sender !== receiver}
            message={message.content}
            key={message._id}
          />
        ))}

        {isTyping ? <Typing /> : ""}

        <div ref={bottomRef} />
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
