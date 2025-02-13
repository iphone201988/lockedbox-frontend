import MessageArea from "../../../../components/Dashboard/Chat/MessageArea";
import MessageInbox from "../../../../components/Dashboard/Chat/MessageInbox";

const RenterMessage = () => {
  return (
    <div className="h-full flex max-md:flex-col">
      <div className="px-[30px] py-[24px] max-w-[310px] min-w-[310px] border-r border-[#EEEEEE] h-full max-lg:px-[20px] max-md:max-w-full max-md:overflow-auto max-md:border-b">
        <MessageInbox />
      </div>
      <div className="w-full max-md:min-h-[500px] ">
        <MessageArea />
      </div>
    </div>
  );
};

export default RenterMessage;
