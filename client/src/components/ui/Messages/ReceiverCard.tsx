import { useMessageContext } from "../../../context/MessageContext";
import useAvatar from "../../../hooks/useAvatar";
import useFullname from "../../../hooks/useFullname";

const ReceiverCard = () => {
  const { isOpen, setIsOpen, setRoomID, receiver } = useMessageContext();
  const openMessages = () => setIsOpen(!isOpen);
  const changeroomID = () => setRoomID("");

  const fullname = useFullname(receiver);
  const avatar = useAvatar(receiver);

  return (
    <div className=" border-b h-16 ">
      <div className="flex items-center h-full px-5  justify-between">
        <div className="flex items-center space-x-2 h-full">
          {isOpen && (
            <button
              onClick={changeroomID}
              className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-full"
            >
              <i className="fas fa-long-arrow-left"></i>
            </button>
          )}
          <img
            src={avatar}
            className="h-10 w-10 rounded-full object-cover"
            alt=""
          />
          <div className="flex flex-col ">
            <span className="text-gray-800 leading-3 font-medium">
              {fullname}
            </span>
            <span className="text-gray-400 text-sm ">{receiver?.email}</span>
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
