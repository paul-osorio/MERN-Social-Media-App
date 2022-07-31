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
        <div className="flex justify-start w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-br-[20px] bg-gray-200">
            asfasfasfasfasfsafsaf asf asf sasfas as fas fas fasf asf asf as
          </div>
        </div>

        <div className="flex justify-end w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-bl-[20px] text-white bg-indigo-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ex
            quis nunc tincidunt euismod. asf asf f as fas fasas
          </div>
        </div>
        <div className="flex justify-start w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-br-[20px] bg-gray-200">
            asfasfasfasfasfsafsaf asf asf sasfas as fas fas fasf asf asf as
          </div>
        </div>
        <div className="flex justify-start w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-br-[20px] bg-gray-200">
            asfasfasfasfasfsafsaf asf asf sasfas as fas fas fasf asf asf as
          </div>
        </div>
        <div className="flex justify-start w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-br-[20px] bg-gray-200">
            asfasfasfasfasfsafsaf asf asf sasfas as fas fas fasf asf asf as
          </div>
        </div>
        <div className="flex justify-start w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-br-[20px] bg-gray-200">
            asfasfasfasfasfsafsaf asf asf sasfas as fas fas fasf asf asf as
          </div>
        </div>
        <div className="flex justify-start w-full p-1 px-2">
          <div className="p-3 rounded-t-[20px] w-[60%] rounded-br-[20px] bg-gray-200">
            asfasfasfasfasfsafsaf asf asf sasfas as fas fas fasf asf asf as
          </div>
        </div>
      </div>
      <div className="flex items-center p-2 py-3 bg-white border-t">
        <TextArea sendOnEnter={sendOnEnter} />
      </div>
    </div>
  );
};

export default Message;
