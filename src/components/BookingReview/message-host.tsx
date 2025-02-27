import HostProfilePic from "../../assets/host-profile-pic.png";

const MessageHost = ({
  handleRequestBooking,
  setContent,
}: {
  handleRequestBooking: any;
  setContent: any;
}) => {
  return (
    <div className="py-[16px]">
      <p className="text-[20px] font-semibold mb-[6px]">Message Host</p>
      <div className=" ">
        <div className=" flex gap-[8px] items-center">
          <img
            className="w-[48px] h-[48px] object-cover"
            src={HostProfilePic}
            alt=""
          />
          <div className="">
            <p>Message Frank</p>
            <span className="text-[14px] text-[#959595]">
              Let your host know any other important details
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[20px] mb-[16px]">
        <div className=" border border-[#EEEEEE] p-[16px] rounded-[16px] relative">
          <textarea
            className="w-full h-[180px] "
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="flex items-center gap-[12px]">
            <input
              className="border border-[#EEEEEE] rounded-[8px] py-[12px] px-[16px] w-full "
              type="text"
              placeholder="Write your message"
            />
            <button className="bg-[#235370] font-semibold rounded-[8px] text-[#fff] py-[8px] px-[18px] cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
      <button className="btn-pri ml-auto !block" onClick={handleRequestBooking}>
        Request Booking
      </button>
    </div>
  );
};

export default MessageHost;
