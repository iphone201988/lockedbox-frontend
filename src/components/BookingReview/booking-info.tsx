import BookingListingBox from "./booking-listing-box";
import HostProfilePic from "../../assets/host-profile-pic.png";

const BookingInfo = () => {
  return (
    <div className="p-[20px]">
      <h3 className="text-[32px] font-bold max-lg:text-[26px]">
        Booking Review
      </h3>
      <div className="pt-[24px] pb-[16px] border-b border-[#EEEEEE]">
        <BookingListingBox />
      </div>
      <div className=" ">
        {/* host name */}
        <div className=" py-[16px] border-b border-[#EEEEEE]">
          <div className=" flex gap-[8px] items-center">
            <img
              className="w-[48px] h-[48px] object-cover"
              src={HostProfilePic}
              alt=""
            />
            <div className="">
              <p>Meet your host Frank</p>
              <span className="text-[14px] text-[#959595]">
                5+ years of hosting experience
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[16px] ">
        <p className="text-[20px] font-semibold text-[#959595]">
          <span className="text-[#000000]">Confirmation Number:</span> 987654321
        </p>
      </div>
    </div>
  );
};

export default BookingInfo;
