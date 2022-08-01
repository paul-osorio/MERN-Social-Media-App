interface IMessageCard {
  isMine?: boolean;
  message?: string;
  isTyping?: boolean;
}

const MessageCard = ({ isMine, message, isTyping }: IMessageCard) => {
  if (isMine) {
    return (
      <div className="flex justify-end w-full p-1 px-2">
        <div className="p-3 rounded-t-[20px] max-w-[60%] rounded-bl-[20px] text-white bg-indigo-500">
          {message}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-start w-full p-1 px-2">
        <div className="p-3 rounded-t-[20px] max-w-[60%] rounded-br-[20px] bg-gray-200">
          {message}
        </div>
      </div>
    );
  }
};

export default MessageCard;
