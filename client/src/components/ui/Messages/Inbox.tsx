import { useLayoutEffect, useState } from "react";
import { getMyInbox } from "../../../lib/message";
import InboxProfileCard from "./InboxProfileCard";

const Inbox = () => {
  const [inbox, setInbox] = useState([]);

  useLayoutEffect(() => {
    getMyInbox().then((res: any) => {
      setInbox(res.data.conversations);
    });
  }, []);

  return (
    <div
      className="h-full overflow-auto"
      style={{
        width: "420px",
      }}
    >
      {/* {inbox.map((message: any) => (
        <InboxProfileCard message={message} key={message.id} />
      ))} */}
    </div>
  );
};

export default Inbox;
