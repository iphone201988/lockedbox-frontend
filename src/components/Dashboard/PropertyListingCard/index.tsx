import { Link, useNavigate } from "react-router-dom";
import { allowedStorage as allowedStorageType } from "../../../constants/index";
import { getUrl, handleError } from "../../../utils/helper";
import DisputeIcon from "../../../assets/icons/dispute-icn.png";
import { useCancelListingMutation } from "../../../redux/api";
import Loader from "../../Loader";
import { useEffect, useState } from "react";
import CancelListing from "../CancelListing";

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
  refetch,
}: ListingType) => {
  const navigate = useNavigate();
  const icons = allowedStorage.map((storage: string) => {
    return allowedStorageType.map((allowedStorage: any) => {
      if (allowedStorage.name == storage) return allowedStorage.icon;
    });
  });

  const [cancelBookingPopup, setCancelBookingPopup] = useState(false);

  const [cancelListing, { data, isLoading }] = useCancelListingMutation();

  const handleCancelListing = async (id: string) => {
    await cancelListing(id)
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      setCancelBookingPopup(false);
      refetch();
    }
  }, [data]);

  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative max-lg:gap-[12px] ">
      {isLoading && <Loader />}
      {cancelBookingPopup && (
        <CancelListing
          onConfirm={() => handleCancelListing(id)}
          onClose={() => setCancelBookingPopup(false)}
        />
      )}
      <button
        className=" absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]"
        onClick={() => setCancelBookingPopup(true)}
      >
        <img src={DisputeIcon} alt="" />
      </button>
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
        {status == "active" && (
          <button className="btn-green capitalize">{status}</button>
        )}
      </div>
    </div>
  );
};

export default PropertyListingCard;
