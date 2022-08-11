import { useEffect, useLayoutEffect, useState } from "react";
import { AcceptFriend, AddFriend, RejectFriend } from "../lib/user";
import io from "socket.io-client";
import { useAppContext } from "../context/AppProvider";

const socket = io(import.meta.env.VITE_APP_BASE_URL + "/friends");

export default (user: any) => {
  const friend = user?.friendStatus;
  const [status, setStatus] = useState<any>("Add Friend");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addFriend = async () => {
    setIsLoading(true);
    try {
      await AddFriend(user?._id);
      setStatus("Cancel Request");
      setIsLoading(false);
      socket.emit("add-friend", {
        to: user?._id,
        from: user?.myId,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const rejectFriend = async () => {
    setIsLoading(true);
    try {
      await RejectFriend(user?._id);
      setStatus("Add Friend");
      setIsLoading(false);
      socket.emit("reject-friend", {
        to: user?._id,
        from: user?.myId,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const acceptFriend = async () => {
    setIsLoading(true);
    try {
      await AcceptFriend(user?._id);
      setStatus("Message");
      setIsLoading(false);
      socket.emit("accept-friend", {
        to: user?._id,
        from: user?.myId,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    switch (status) {
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

  const initialStatus = () => {
    if (user?.myId === user?._id) {
      setStatus("View Profile");
    } else if (friend) {
      if (friend?.recipient === user?._id) {
        if (friend?.status === 0) setStatus("Cancel Request");
        else setStatus("Message");
      }
      if (friend?.status === 0) setStatus("Accept");
      else setStatus("Message");
    } else {
      setStatus("Add Friend");
    }
  };

  useLayoutEffect(() => {
    // socket.on("connect", () => {
    socket.emit("setup", user?.myId);

    socket.on("sent request", (friendId: any) => {
      if (friendId === user?._id) {
        setStatus("Accept");
      }
    });

    socket.on("rejected request", (friendId: any) => {
      if (friendId === user?._id) {
        setStatus("Add Friend");
      }
    });

    socket.on("accepted request", (friendId: any) => {
      if (friendId === user?._id) {
        setStatus("Message");
      }
    });
    // });

    initialStatus();
  }, [user]);

  return {
    status,
    isLoading,
    addFriend,
    rejectFriend,
    acceptFriend,
    handleClick,
  };
};
