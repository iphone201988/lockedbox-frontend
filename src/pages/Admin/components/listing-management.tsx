import { useEffect, useState } from "react";
import { useChangeListingStatusMutation } from "../../../redux/api/admin";
import { getUrl, handleError } from "../../../utils/helper";
import Loader from "../../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

const ListingManagement = ({ listing }: { listing: AdminListingType }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState<string>(listing.status);
  const [changeStatus, { data, isLoading }] = useChangeListingStatusMutation();

  const handleListing = async (status: string) => {
    await changeStatus({ userId: id, listingId: listing.id, body: { status } })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      if (status == "active") {
        setStatus("reject");
      } else {
        setStatus("active");
      }
    }
  }, [data]);

  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative max-lg:gap-[12px] ">
      {isLoading && <Loader />}
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full w-[60%] max-lg:w-[50%]">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(listing.image)}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {listing.spaceType} for storage in {listing.city}
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">Location: </span>
            {listing.address}
          </p>
          <div className="mt-auto flex gap-[12px] items-center flex-wrap pt-[16px]">
            <span className="flex gap-[5px] w-[52px] h-[42px] justify-center items-center">
              {...listing.allowedStorage}
            </span>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto  max-mlg:gap-[20px] max-md:mr-0 w-[15%] max-lg:w-[20%] max-md:w-full">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="text-black font-semibold">Size:</span>{" "}
          {listing.length}’x{listing.width}’
        </p>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto   max-mlg:gap-[20px] max-md:mr-0 w-[15%] max-md:w-full">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="text-black font-semibold hidden max-md:inline-block">
            List Price:
          </span>
          ${listing.price}/month
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto w-[10%] max-lg:w-[15%] max-md:w-full">
        {status == "reject" && (
          <button
            className="btn-green cursor-pointer"
            onClick={() => handleListing("active")}
          >
            Active
          </button>
        )}
        {status == "active" && (
          <button
            className="btn-red cursor-pointer"
            onClick={() => handleListing("reject")}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ListingManagement;
