import BookingListingBox from "./booking-listing-box";
import NoUser from "../../assets/icons/if-no-user.png";
import { getUrl } from "../../utils/helper";

const BookingInfo = ({ listing }: { listing: any }) => {
  return (
    <div className="p-[20px]">
      <h3 className="text-[32px] font-bold max-lg:text-[26px]">
        Booking Review
      </h3>
      <div className="pt-[24px] pb-[16px] border-b border-[#EEEEEE]">
        <BookingListingBox listing={listing} />
      </div>
      <div className=" ">
        {/* host name */}
        <div className=" py-[16px] border-b border-[#EEEEEE]">
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
              <p>Meet your host {listing.userId[0]?.firstName}</p>
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
