import { WhiteStarIcon } from "../../icons";
import { getUrl } from "../../utils/helper";

const BookingListingBox = ({ listing }: { listing: any }) => {
  return (
    <div className="bg-white rounded-[16px] relative max-w-[260px] ">
      <img
        className="rounded-[10px]"
        src={getUrl(listing.storageImages[0])}
        alt=""
      />
      <div className="flex justify-center items-center flex-col bg-[#235370] text-[#ffffff] rounded-[8px] p-[5px] absolute right-[15px] top-[15px]">
        <span className="flex gap-[4px] items-center">
          <WhiteStarIcon />
          {listing.averageRating ? (
            <b>{Number(listing.averageRating).toFixed(2)}</b>
          ) : (
            <></>
          )}
        </span>
        <p className="text-[14px] mt-[-2px]">
          ({listing.totalReviews ? listing.totalReviews : "No"} reviews)
        </p>
      </div>
      <p className="text-[18px] font-semibold mt-[10px]">
        {listing?.spaceType} for storage in{" "}
        <p className="location text-[18px] text-[#959595]">{listing?.city}</p>
      </p>
      <p className="text-[#959595] ">
        <span className="text-[#000]">Size:</span> {listing.length}’x
        {listing.width}’
      </p>
    </div>
  );
};

export default BookingListingBox;
