import { useNavigate } from "react-router-dom";
import { StarIcon } from "../../../icons";

const SearchListing = ({
  id,
  image,
  title,
  lat,
  lng,
  distance,
  price,
}: Properties) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/listing-details/${id}`)}
    >
      <div className="relative ">
        <img
          className="rounded-[16px] w-full"
          src={import.meta.env.VITE_BACKEND_URL + image}
          alt=""
        />
        <div className="flex justify-center items-center  bg-[#ffffff] text-[#1f1f1f] rounded-[6px] py-[2px] px-[6px] absolute right-[8px] top-[8px]">
          <span className="flex gap-[4px] items-center">
            {" "}
            <StarIcon />
            <b className="text-[13px] font-normal">4.5</b>
          </span>
          <p className="text-[13px] ml-[4px]">(7 reviews)</p>
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
          {title}
        </a>
        <span className="text-[#235370] max-md:text-[14px]">
          ${price}/ month
        </span>
      </div>
    </div>
  );
};

export default SearchListing;
