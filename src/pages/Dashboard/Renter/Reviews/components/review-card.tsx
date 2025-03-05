import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getUrl } from "../../../../../utils/helper";

const ReviewCard = ({ path, booking }: { path: string; booking: any }) => {
  const navigate = useNavigate();
  const { listingId: listing } = booking;
  const startDate = moment(booking.startDate).format("MMM DD YYYY");
  const endDate = moment(booking.endDate).format("MMM DD YYYY");
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      <i className="notify-dot absolute right-[10px] top-[10px]"></i>
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(listing.storageImages?.[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px] max-mlg:max-w-[280px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {listing.spaceType} for storage in {listing.city}
          </p>

          <p className="text-[16px] text-[#959595]">
            <span className="text-black font-semibold">From:</span>
            {startDate} - {endDate}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        <button className="btn-pri" onClick={() => navigate(path)}>
          Begin Review
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
