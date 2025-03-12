import { Link } from "react-router-dom";
import { allowedStorage as allowedStorageType } from "../../../constants/index";
import { getUrl } from "../../../utils/helper";

const PropertyListingCard = ({
  id,
  spaceType,
  city,
  width,
  length,
  price,
  status,
  storageImages,
  allowedStorage,
}: ListingType) => {
  const icons = allowedStorage.map((storage: string) => {
    return allowedStorageType.map((allowedStorage: any) => {
      if (allowedStorage.name == storage) return allowedStorage.icon;
    });
  });
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative max-lg:gap-[12px] ">
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full w-[60%] max-lg:w-[50%]">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(storageImages[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {spaceType} for Storage
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">Location: </span> {city}
          </p>
          <div className="mt-auto flex gap-[12px] items-center flex-wrap pt-[16px]">
            <span className="flex gap-[5px] w-[52px] h-[42px] justify-center items-center">
              {...icons}
            </span>
            <Link
              className="text-[14px] text-[#235370] underline ml-[8px] font-semibold"
              to={`/dashboard/listing/edit-listing/${id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto  max-mlg:gap-[20px] max-md:mr-0 w-[15%] max-lg:w-[20%] max-md:w-full">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="text-black font-semibold hidden max-md:inline-block">
            Measurements:
          </span>{" "}
          {width}’x{length}’
        </p>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto   max-mlg:gap-[20px] max-md:mr-0 w-[15%] max-md:w-full">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="text-black font-semibold hidden max-md:inline-block">
            List Price:
          </span>
          ${price}/month
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto w-[10%] max-lg:w-[15%] max-md:w-full">
        {/* under review btn class */}
        {status == "under_review" && (
          <button className="btn-yellow capitalize">Under Review</button>
        )}

        {/* confirmed btn class */}
        {status == "active" && <button className="btn-green capitalize">{status}</button>}
      </div>
    </div>
  );
};

export default PropertyListingCard;
