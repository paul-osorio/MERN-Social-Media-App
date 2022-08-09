import { useEffect, useRef } from "react";
import { useMessageContext } from "../../../context/MessageContext";
import useInView from "../../../hooks/useInView";
import { readMessage } from "../../../lib/message";

interface IMessageCard {
  isMine?: boolean;
  message?: any;
  isTyping?: boolean;
}

const MessageCard = ({ isMine, message }: IMessageCard) => {
  const { roomID } = useMessageContext();
  const ref = useRef<any>();

  const inView = useInView(ref);

  useEffect(() => {
    if (!message?.isRead) {
      readMessage({
        id: roomID,
        message_id: message?._id,
        sender_id: message?.sender,
      }).then((res) => {
        console.log(res);
      });
    }
  }, [inView]);

  if (isMine) {
    return (
      <div ref={ref} className="flex justify-end w-full p-1 px-2">
        <div className="p-3 break-words rounded-t-[20px] max-w-[60%] rounded-bl-[20px] text-white bg-indigo-500">
          {message?.content}
        </div>
      </div>
    );
  } else {
    return (
      <div ref={ref} className="flex justify-start w-full p-1 px-2">
        <div className="p-3 break-words rounded-t-[20px] max-w-[60%] rounded-br-[20px] bg-gray-200">
          {message?.content}
        </div>
      </div>
    );
  }
};

export default MessageCard;
