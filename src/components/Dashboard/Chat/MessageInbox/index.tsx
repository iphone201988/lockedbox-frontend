import ChatProfile from "../ChatProfile";

const MessageInbox = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <ChatProfile />
      <ChatProfile />
    </div>
  );
};

export default MessageInbox;
