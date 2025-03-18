import { useNavigate } from "react-router-dom";
import { StarIcon } from "../../../icons";
import { getUrl } from "../../../utils/helper";

const SearchListing = ({
  id,
  image,
  title,
  distance,
  price,
  totalReviews,
  averageRating,
}: Properties) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer max-w-[300px] h-[260px] max-sm:max-w-full"
      onClick={() => navigate(`/listing-details/${id}`)}
    >
      <div className="relative h-[calc(100%-30px)]">
        <img
          className="rounded-[16px] w-full h-full object-cover"
          src={getUrl(image)}
          alt=""
        />
        <div className="flex justify-center items-center  bg-[#ffffff] text-[#1f1f1f] rounded-[6px] py-[2px] px-[6px] absolute right-[8px] top-[8px]">
          <span className="flex gap-[4px] items-center">
            <StarIcon />
            {averageRating ? (
              <b className="text-[13px] font-normal">{averageRating}</b>
            ) : (
              <></>
            )}
          </span>
          <p className="text-[13px] ml-[4px]">
            ({totalReviews ? totalReviews : "No"} reviews)
          </p>
        </div>
        <div className="bg-[#ffffff] text-[#1f1f1f] rounded-[6px] py-[2px] px-[6px] absolute left-[8px] bottom-[8px]">
          <span className="text-[13px] font-normal">{distance} km</span>
        </div>
      </div>
      <div className="flex justify-between items-start mt-[6px]">
        <a
          className=" text-[16px] font-semibold text-[#1f1f1f] block w-[150px] leading-[normal] max-md:w-[120px]"
          href="#"
        >
          {title} space
        </a>
        <span className="text-[#235370] max-md:text-[14px]">
          ${price}/ month
        </span>
      </div>
    </div>
  );
};

export default SearchListing;
