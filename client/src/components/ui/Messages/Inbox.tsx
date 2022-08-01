import InboxProfileCard from "./InboxProfileCard";

const Inbox = () => {
  return (
    <div
      className="h-full overflow-auto"
      style={{
        width: "420px",
      }}
    >
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
      <InboxProfileCard />
    </div>
  );
};

export default Inbox;
