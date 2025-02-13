import StorePic from "../../../../assets/box-detail-image.png";

import AttachIcon from "../../../../assets/icons/attach-icn.png";
import SendIcon from "../../../../assets/icons/send-icn.png";
import IncomingMessage from "../Message/incoming-message";
import OutgoingMessage from "../Message/outging-message";

const MessageArea = () => {
  return (
    <div className="flex flex-col h-full">
      {/* message stor head */}
      <div className="px-[30px] py-[24px]  border-b border-[#EEEEEE] flex gap-[10px] items-center max-lg:px-[20px] max-md:py-[10px]">
        <img
          className="w-[60px] h-[60px] object-cover rounded-[10px]"
          src={StorePic}
          alt=""
        />
        <div className="">
          <p className="text-[18px] font-semibold">
            Room for storage in Surrey
          </p>
          <p className="text-[#959595]">
            <span className="text-[#000000] font-semibold">From:</span> Nov.
            15/24 - Nov. 15/25
          </p>
        </div>
      </div>

      {/* message area */}
      <div className="py-[24px] px-[30px] h-full overflow-auto no-scrollbar max-lg:px-[20px]">
        <div className="text-center">
          <span className=" inline-block text-[14px] px-[10px] py-[4px] border border-[#EEEEEE] rounded-[4px] text-[#959595] mx-auto">
            Today
          </span>
        </div>

        <div className="mt-[24px]">
          {/* your message */}
          <OutgoingMessage />
          {/* host message */}
          <IncomingMessage />
        </div>
      </div>

      {/* message input */}
      <div className="px-[30px] mt-auto pb-[24px] pt-[16px] bg-white max-lg:px-[20px] max-md:pb-[16px]">
        <div className=" border border-[#EEEEEE] rounded-[8px] p-[6px] flex items-center ">
          <button className=" cursor-pointer pr-[24px] pl-[10px]">
            <img src={AttachIcon} alt="" />
          </button>
          <input
            className=" w-full !outline-none"
            type="text"
            placeholder="Write a response"
          />
          <button className="p-[10px] rounded-[4px] bg-[#235370] hover:bg-[#000000] cursor-pointer">
            <img src={SendIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
