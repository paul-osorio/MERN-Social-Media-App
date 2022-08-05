import classNames from "classnames";
import useFriendStatus from "../../../../hooks/useFriendStatus";
import socket from "../../../../lib/socketClient";

const Buttons = ({ user }: { user: any }) => {
  const {
    rejectFriend,
    handleClick,
    status: friendStatus,
  } = useFriendStatus(user);

  const buttonClass = classNames(
    "outline-none py-1.5 px-5 text-sm rounded-3xl",
    {
      "bg-gray-100 text-gray-800 font-medium hover:bg-gray-200":
        friendStatus === "Cancel Request",
      "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 font-medium":
        friendStatus === "Message" ||
        friendStatus === "Accept" ||
        friendStatus === "View Profile",
      "bg-gray-700 hover:bg-gray-800 text-white": friendStatus === "Add Friend",
    }
  );

  return (
    <div className="flex space-x-2">
      <button onClick={handleClick} className={buttonClass}>
        {friendStatus}
      </button>
      {friendStatus === "Accept" && (
        <button
          onClick={rejectFriend}
          className="py-1.6 px-5 text-sm rounded-3xl bg-gray-100 text-gray-800 font-medium hover:bg-gray-200"
        >
          Decline
        </button>
      )}
    </div>
  );
};

export default Buttons;
