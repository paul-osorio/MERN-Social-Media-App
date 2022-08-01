import MessageCard from "./MessageCard";
import TextArea from "./TextArea";

const Message = () => {
  const onSend = () => {
    alert("sent");
  };

  const sendOnEnter = (evt: any) => {
    if (evt.keyCode == 13 && !evt.shiftKey) {
      evt.preventDefault();
      onSend();
    }
  };

  return (
    <div
      className="flex flex-col"
      style={{
        height: "calc(500px - 64px)",
      }}
    >
      <div className="h-full w-full  overflow-auto">
        <MessageCard isMine={true} message="HI" />
        <MessageCard isMine={false} message="Hello" />
        <MessageCard isMine={true} message="Hello" />
      </div>
      <div className="flex items-center p-2 py-3 bg-white border-t">
        <TextArea sendOnEnter={sendOnEnter} />
      </div>
    </div>
  );
};

export default Message;
