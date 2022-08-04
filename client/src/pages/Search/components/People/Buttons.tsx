import classNames from "classnames";
import { useLayoutEffect, useState } from "react";
import { useAuth } from "../../../../hooks";
import { AcceptFriend, AddFriend, RejectFriend } from "../../../../lib/user";

const Buttons = ({ user }: { user: any }) => {
  const friend = user?.friendStatus;

  const [friendStatus, setFriendStatus] = useState<string>("Add Friend");

  const addFriend = async () => {
    try {
      await AddFriend(user?._id);
      setFriendStatus("Cancel Request");
    } catch (error) {
      console.log(error);
    }
  };

  const rejectFriend = async () => {
    try {
      await RejectFriend(user?._id);
      setFriendStatus("Add Friend");
    } catch (error) {
      console.log(error);
    }
  };

  const acceptFriend = async () => {
    try {
      await AcceptFriend(user?._id);
      setFriendStatus("Message");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    switch (friendStatus) {
      case "Add Friend":
        addFriend();
        break;
      case "Cancel Request":
        rejectFriend();
        break;
      case "Accept":
        acceptFriend();
        break;
      default:
        break;
    }
  };

  const status = () => {
    if (user?.myId === user?._id) {
      setFriendStatus("View Profile");
    } else if (friend) {
      if (friend?.recipient === user?._id) {
        if (friend?.status === 0) setFriendStatus("Cancel Request");
        else setFriendStatus("Message");
      } else {
        if (friend?.status === 0) setFriendStatus("Accept");
        else setFriendStatus("Message");
      }
    } else {
      setFriendStatus("Add Friend");
    }
  };

  useLayoutEffect(() => {
    status();
  }, []);

  return (
    <div className="flex space-x-2">
      <button
        onClick={handleClick}
        className={classNames("outline-none py-1.5 px-5 text-sm rounded-3xl", {
          "bg-gray-100 text-gray-800 font-medium hover:bg-gray-200":
            friendStatus === "Cancel Request",
          "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 font-medium":
            friendStatus === "Message" ||
            friendStatus === "Accept" ||
            friendStatus === "View Profile",
          "bg-gray-700 hover:bg-gray-800 text-white":
            friendStatus === "Add Friend",
        })}
      >
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
