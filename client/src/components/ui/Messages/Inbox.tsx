import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppContext } from "../../../context/AppProvider";
import { useMessageContext } from "../../../context/MessageContext";
import { getMyInbox } from "../../../lib/message";
import InboxProfileCard from "./InboxProfileCard";

const Inbox = () => {
  const { socket } = useMessageContext();
  const { user } = useAppContext();

  const { data: inbox, refetch } = useQuery(
    ["fetchAllInbox"],
    async () => {
      const { data } = await getMyInbox();
      return data;
    },
    {
      refetchOnWindowFocus: true,
    }
  );
  useEffect(() => {
    socket.emit("setup", user?._id);
  }, []);

  useEffect(() => {
    socket.on("message received", (data: any) => {
      refetch();
    });
  });

  return (
    <div
      className="h-full overflow-auto py-2"
      style={{
        width: "420px",
      }}
    >
      {inbox?.map((message: any) => (
        <InboxProfileCard message={message} key={message._id} />
      ))}
    </div>
  );
};

export default Inbox;
