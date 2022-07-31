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
      <div className="h-full bg-red-500 overflow-auto">
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
        <p>asgasgasg</p>
      </div>
      <div className="flex items-center p-2 bg-gray-200">
        <div className="w-full   bg-blue-500 p-2">
          <div
            contentEditable="true"
            onKeyDown={sendOnEnter}
            className="overflow-auto border-gray-300 outline-none p-2 bg-white"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Message;
