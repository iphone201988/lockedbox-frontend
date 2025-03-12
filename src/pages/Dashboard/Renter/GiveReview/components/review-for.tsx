import moment from "moment";
import { getUrl } from "../../../../../utils/helper";

const ReviewFor = ({ listing }: { listing: any }) => {
  const startDate = moment().format("MMM DD YYYY");
  const endDate = moment().format("MMM DD YYYY");
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
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
    </div>
  );
};

export default ReviewFor;
