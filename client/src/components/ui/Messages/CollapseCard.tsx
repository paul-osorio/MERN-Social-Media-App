import { useMessageContext } from "../../../context/MessageContext";

const CollapseCard = () => {
  const { isOpen, setIsOpen } = useMessageContext();
  const openMessages = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-b h-16 ">
      <div className="flex items-center h-full px-5 font-medium justify-between">
        <span>
          <i className="fal mr-2 fa-envelope"></i>
          <span className="text-gray-800">Messages</span>
        </span>
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

export default CollapseCard;
