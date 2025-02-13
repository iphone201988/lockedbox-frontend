import HostProfilePic from "../../assets/host-profile-pic.png";
import AppliancesIcon from "../../assets/icons/appliances-icn.png";
import AutoPartIcon from "../../assets/icons/autoPart-icn.png";
import FurnitureIcon from "../../assets/icons/furniture-icn.png";
import OfficeIcon from "../../assets/icons/office-icn.png";
import SeasonalIcon from "../../assets/icons/seasonal-icn.png";
import VehicleIcon from "../../assets/icons/vehicles-icn.png";

const ListingInfoDetails = () => {
  return (
    <div className="">
      <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
        <div className="">
          <p className="text-[26px] font-semibold">Room for storage</p>
          <p className="location text-[18px] text-[#959595]">Surrey</p>
        </div>
        <div className="">
          <div className="flex justify-center items-center ">
            <span className="flex gap-[4px] items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_196_1218)">
                  <path
                    d="M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295L2.91003 10.7617L3.78034 7.22836L1 4.87669L4.6273 4.60759L5.99995 1.23802Z"
                    fill="#235370"
                  />
                  <path
                    d="M5.99995 1.23802L4.6273 4.60759L1 4.87669L3.78034 7.22836L2.91003 10.7617L5.99995 8.84295M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295"
                    stroke="#235370"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_196_1218">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <b className="text-[16px] font-normal">4.5</b>
            </span>
            <p className="text-[16px] ml-[4px]">(7 reviews)</p>
          </div>
          <p className="text-[18px] text-[#959595] mt-[6px] text-right">
            <b className="text-[#000000]">Size:</b> 10’x15’
          </p>
        </div>
      </div>

      {/* host name */}
      <div className=" py-[16px] border-b border-[#EEEEEE]">
        <div className=" flex gap-[8px] items-center">
          <img
            className="w-[48px] h-[48px] object-cover"
            src={HostProfilePic}
            alt=""
          />
          <div className="">
            <p>Meet your host Frank</p>
            <span className="text-[14px] text-[#959595]">
              5+ years of hosting experience
            </span>
          </div>
        </div>
      </div>
      {/* About this place */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <p className="text-[18px] font-semibold mb-[6px]">About this place</p>
        <p>
          Secure and clean storage room available for rent! This spacious, empty
          room is perfect for storing furniture, seasonal items, or business
          inventory. Located in a safe and accessible area, it offers easy
          access and flexible rental terms to meet your needs. Ideal for both
          short- and long-term storage solutions!
        </p>
      </div>
      {/* storage info */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <div className=" flex flex-wrap gap-x-[40px] gap-y-[16px]">
          <div className="w-[40%] flex items-center gap-[8px]">
            <img src={FurnitureIcon} alt="" />
            <p>Furniture & Household</p>
          </div>
          <div className="w-[40%] flex items-center gap-[8px]">
            <img src={AutoPartIcon} alt="" />
            <p>Auto Parts & Accessories</p>
          </div>
          <div className="w-[40%] flex items-center gap-[8px]">
            <img src={SeasonalIcon} alt="" />
            <p>Seasonal & Recreation</p>
          </div>
          <div className="w-[40%] flex items-center gap-[8px]">
            <img src={AppliancesIcon} alt="" />
            <p>Appliances & Electronics</p>
          </div>
          <div className="w-[40%] flex items-center gap-[8px]">
            <img src={OfficeIcon} alt="" />
            <p>Office, School & Business</p>
          </div>
          <div className="w-[40%] flex items-center gap-[8px]">
            <img src={VehicleIcon} alt="" />
            <p>Vehicles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInfoDetails;
