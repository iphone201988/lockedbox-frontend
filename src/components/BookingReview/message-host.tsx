import NoUser from "../../assets/icons/if-no-user.png";
import { useGetUserQuery } from "../../redux/api";
import { getUrl } from "../../utils/helper";

const MessageHost = ({
  handleRequestBooking,
  setContent,
  listing,
}: {
  handleRequestBooking: any;
  setContent: any;
  listing: any;
}) => {
  const { data } = useGetUserQuery();
  const isHost = data?.userExists?.dashboardRole == "host";
  return (
    <div className="py-[16px]">
      <p className="text-[20px] font-semibold mb-[6px]">Message Host</p>
      <div className=" ">
        <div className=" flex gap-[8px] items-center">
          <img
            className="w-[48px] h-[48px] object-cover rounded-full"
            src={
              listing.userId[0]?.profileImage
                ? getUrl(listing.userId[0]?.profileImage)
                : NoUser
            }
            alt=""
          />
          <div className="">
            <p>Message {listing.userId[0]?.firstName}</p>
            <span className="text-[14px] text-[#959595]">
              Let your host know any other important details
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[20px] mb-[16px]">
        <div className=" border border-[#EEEEEE] p-[16px] rounded-[16px] relative">
          <textarea
            className="w-full h-[180px] outline-none"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          {/* <div className="flex items-center gap-[12px]">
            <input
              className="border border-[#EEEEEE] rounded-[8px] py-[12px] px-[16px] w-full "
              type="text"
              placeholder="Write your message"
            />
            <button className="bg-[#235370] font-semibold rounded-[8px] text-[#fff] py-[8px] px-[18px] cursor-pointer">
              Send
            </button>
          </div> */}
        </div>
      </div>
      <button
        className={`btn-pri ml-auto !block ${
          isHost ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
        onClick={handleRequestBooking}
        disabled={isHost}
      >
        Request Booking
      </button>
    </div>
  );
};

export default MessageHost;
