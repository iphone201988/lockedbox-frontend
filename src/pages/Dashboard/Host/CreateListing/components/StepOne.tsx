import {
  AutoPartsIcon,
  BusinessIcon,
  DropDownIcon,
  ElectronicsIcon,
  FurnitureIcon,
  LocationIcon,
  PriceIcon,
  RecreationIcon,
  VehicleIcon,
} from "../../../../../icons";

const StepOne = () => {
  return (
    <div className="flex flex-col">
      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Where is the space located?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter Address</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter address"
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <LocationIcon />
                </span>
              </div>
            </div>
            <div className=" mt-[8px]">
              <label className="flex  items-start gap-[8px]" htmlFor="">
                <input
                  className="w-[24px] h-[24px] min-w-[24px] rounded-[5px] accent-[#235370]"
                  type="checkbox"
                  name=""
                  id=""
                />
                By continuing, you certify you inhabit the address or have legal
                right to use it for hosting. Exact address is not shown until
                you confirm a request to book
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What type of space is it?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select type</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <select
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name=""
                  id=""
                >
                  <option value="">Basements</option>
                </select>
                <span className=" absolute right-[16px] top-[20px]">
                  <DropDownIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Does the space have any <br /> additional features ?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select feature</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <select
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name=""
                  id=""
                >
                  <option value="">Height accommodation (10’)</option>
                </select>
                <span className=" absolute right-[16px] top-[20px]">
                  <DropDownIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What can be stored?
          </p>
        </div>
        <div className=" max-w-[55%] w-full max-md:max-w-full">
          <div className="mb-[16px] flex flex-wrap gap-[16px]">
            <div className="stored-hover ">
              <span>
                <FurnitureIcon />
              </span>
              <p>Furniture & Household</p>
            </div>
            <div className="stored-hover active">
              <span>
                <AutoPartsIcon />
              </span>
              <p>Auto Parts & Accessories</p>
            </div>
            <div className="stored-hover ">
              <span>
                <RecreationIcon />
              </span>
              <p>Seasonal & Recreation</p>
            </div>
            <div className="stored-hover ">
              <span>
                <ElectronicsIcon />
              </span>
              <p>Appliances & Electronics</p>
            </div>
            <div className="stored-hover ">
              <span>
                <BusinessIcon />
              </span>
              <p>Office, School & Business</p>
            </div>
            <div className="stored-hover ">
              <span>
                <VehicleIcon />
              </span>
              <p>Vehicles</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What is the size of your space?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter size</p>
              <div className=" flex items-center">
                <div className="input-with-icon relative w-full max-w-[100%]">
                  <input
                    className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                    type="text"
                    placeholder="10ft"
                  />
                  <span className=" absolute right-[16px] top-[20px]">
                    <LocationIcon />
                  </span>
                </div>
                <p className="text-[26px] font-semibold px-[20px]">X</p>
                <div className="input-with-icon relative w-full max-w-[100%]">
                  <input
                    className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                    type="text"
                    placeholder="10ft"
                  />
                  <span className=" absolute right-[16px] top-[20px]">
                    <LocationIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What is the monthly price?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter price</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter price"
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <PriceIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn-pri mt-[24px] ml-auto ">Next</button>
    </div>
  );
};

export default StepOne;
