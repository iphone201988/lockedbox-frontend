import { useNavigate } from "react-router-dom";
import { getUrl } from "../../utils/helper";

const ListingBox = ({ listing }: { listing: any }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full bg-white rounded-[16px] p-[10px] relative cursor-pointer max-w-[320px]"
      onClick={() => navigate(`listing-details/${listing._id}`)}
    >
      <img
        className="w-full rounded-[10px] h-full object-cover min-h-[260px] max-h-[260px]"
        src={getUrl(listing.storageImages[0])}
        alt=""
      />
      <div className="flex justify-center items-center flex-col bg-[#235370] text-[#ffffff] rounded-[8px] p-[5px] absolute right-[15px] top-[15px]">
        <span className="flex gap-[4px] items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5L11.9583 7.3L17.1333 7.68333L13.1667 11.0333L14.4083 16.0667L10 13.3333L5.59167 16.0667L6.83334 11.0333L2.86667 7.68333L8.04167 7.3L10 2.5Z"
              fill="white"
            />
            <path
              d="M10 2.5L8.04167 7.3L2.86667 7.68333L6.83334 11.0333L5.59167 16.0667L10 13.3333M10 2.5L11.9583 7.3L17.1333 7.68333L13.1667 11.0333L14.4083 16.0667L10 13.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <b>{listing.averageRating}</b>
        </span>
        <p className="text-[14px] mt-[-2px]">
          ({listing.totalReviews} reviews)
        </p>
      </div>
      <a
        className="mt-[10px] text-[24px] font-semibold text-[#235370] block w-[80%] leading-[normal] max-lg:text-[20px] max-md:text-[18px] max-mlg:text-[18px]"
        href="#"
      >
        {listing.spaceType} space for storage
      </a>
      <p className="flex text-[#959595] gap-[6px] mt-[4px] items-center max-lg:text-[14px]">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z"
              fill="#959595"
            />
          </svg>
        </span>
        {listing.city}
      </p>
    </div>
  );
};

export default ListingBox;
