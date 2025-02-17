import BoxImage from "../../../assets/box-detail-image.png";
import SeasonalIcom from "../../../assets/icons/seasonal-icn.png";
import OfficeIcon from "../../../assets/icons/office-icn.png";
import AppliancesIcon from "../../../assets/icons/appliances-icn.png";
import FurnitureIcon from "../../../assets/icons/furniture-icn.png";
import VehiclesIcon from "../../../assets/icons/vehicles-icn.png";
import AutoPartIcon from "../../../assets/icons/autoPart-icn.png";

const PropertyListingCard = () => {
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative max-lg:gap-[12px] ">
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full w-[60%] max-lg:w-[50%]">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={BoxImage}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            Warehouse for storage in Langley
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">Location: </span> 132
            Dominion Road, Surrey, VH5 3D5
          </p>
          <div className="mt-auto flex gap-[12px] items-center flex-wrap pt-[16px]">
            <img src={SeasonalIcom} alt="" />
            <img src={OfficeIcon} alt="" />
            <img src={AppliancesIcon} alt="" />
            <img src={FurnitureIcon} alt="" />
            <img src={VehiclesIcon} alt="" />
            <img src={AutoPartIcon} alt="" />
            <a
              className="text-[14px] text-[#235370] underline ml-[8px] font-semibold"
              href="#"
            >
              Edit
            </a>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto  max-mlg:gap-[20px] max-md:mr-0 w-[15%] max-lg:w-[20%] max-md:w-full">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="text-black font-semibold hidden max-md:inline-block">
            Measurements:
          </span>{" "}
          10’x10’
        </p>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto   max-mlg:gap-[20px] max-md:mr-0 w-[15%] max-md:w-full">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="text-black font-semibold hidden max-md:inline-block">
            List Price:
          </span>
          $50/month
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto w-[10%] max-lg:w-[15%] max-md:w-full">
        {/* under review btn class */}
        {/* <button className='btn-yellow'>Under Review</button> */}

        {/* confirmed btn class */}
        <button className="btn-green">Active</button>
      </div>
    </div>
  );
};

export default PropertyListingCard;
