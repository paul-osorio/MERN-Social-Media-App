import { useMessageContext } from "../../../context/MessageContext";

const ReceiverCard = () => {
  const { isOpen, setIsOpen, setReceiverID } = useMessageContext();
  const openMessages = () => setIsOpen(!isOpen);
  const changereceiverID = () => setReceiverID("");

  return (
    <div className=" border-b h-16 ">
      <div className="flex items-center h-full px-5 font-medium justify-between">
        <div className="flex items-center space-x-2">
          {isOpen && (
            <button
              onClick={changereceiverID}
              className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-full"
            >
              <i className="fas fa-long-arrow-left"></i>
            </button>
          )}
          <div className="flex flex-col">
            <span className="text-gray-800 leading-3">Hey</span>
            <span className="text-gray-500 text-sm">Hey</span>
          </div>
        </div>

        <button
          onClick={openMessages}
          className="h-10 w-10 hover:bg-gray-100 rounded-full"
        >
          {isOpen ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-up"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReceiverCard;
