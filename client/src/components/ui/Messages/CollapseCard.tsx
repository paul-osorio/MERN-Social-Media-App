import { useMessageContext } from "../../../context/MessageContext";

const CollapseCard = () => {
  const { isOpen, setIsOpen, setOpenNewMessage } = useMessageContext();
  const openMessages = () => {
    setIsOpen(!isOpen);
  };

  const openNewMessage = () => {
    setOpenNewMessage(true);
  };

  return (
    <div className=" border-b h-16 ">
      <div className="flex items-center h-full px-7 font-medium justify-between">
        <span>
          <i className="fad mr-2 fa-envelope"></i>
          <span className="text-gray-800">Messages</span>
        </span>
        <div className="flex items-center">
          <button
            onClick={openNewMessage}
            className="h-10 w-10 hover:bg-gray-100 rounded-full"
          >
            <span className="material-icons-outlined text-lg text-gray-700">
              add_box
            </span>
          </button>

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
    </div>
  );
};

export default CollapseCard;
