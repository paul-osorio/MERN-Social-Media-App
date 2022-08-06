import { useEffect, useLayoutEffect, useState } from "react";
import { AcceptFriend, AddFriend, RejectFriend } from "../lib/user";
import socket from "../lib/socketClient";

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
      } else {
        if (friend?.status === 0) setStatus("Accept");
        else setStatus("Message");
      }
    } else {
      setStatus("Add Friend");
    }
  };

  useLayoutEffect(() => {
    socket.on("addFriend", (data: any) => {
      if (user?.myId === data.to && user?._id === data.from) {
        setStatus("Accept");
      }
    });
    socket.on("acceptFriend", (data: any) => {
      if (user?.myId === data.to && user?._id === data.from) {
        setStatus("Message");
      }
    });
    socket.on("rejectFriend", (data: any) => {
      if (user?.myId === data.to && user?._id === data.from) {
        setStatus("Add Friend");
      }
    });

    initialStatus();
  }, []);

  return {
    status,
    isLoading,
    addFriend,
    rejectFriend,
    acceptFriend,
    handleClick,
  };
};
