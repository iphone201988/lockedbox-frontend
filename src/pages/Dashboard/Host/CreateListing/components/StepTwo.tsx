import AddPicIcon from "../../../../../assets/icons/add-pic-icn.png";
import { DropDownIcon } from "../../../../../icons";

const StepTwo = () => {
  return (
    <div className="flex flex-col">
      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Room for storage in Surrey
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="py-[30px] px-[20px] border border-dashed border-[#EEEEEE] rounded-[8px] cursor-pointer">
            <div className=" flex items-center justify-center flex-col gap-[4px]">
              <img src={AddPicIcon} alt="" />
              <p className="text-[#235370]">
                Click here to add pics for your listing
              </p>
              <p className="text-[14px]">2 minimum photos</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Create a tagline for your listing
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Create a tagline</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter here"
                />
                <p className="text-[#959595] text-[14px]">
                  (eg. “safe, secure, garage available!”) 20 word max.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Write a short listing description
          </p>
        </div>
        <div className=" max-w-[600px] w-full max-md:max-w-full">
          <div className="">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Description</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <textarea
                  className="border w-full h-[180px] border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  name=""
                  id=""
                >
                  Enter here
                </textarea>
                <p className="text-[#959595] text-[14px]">1000 words max</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">Policies</p>
        </div>
        <div className=" max-w-[600px] w-full max-md:max-w-full">
          <div className="">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">
                Enter Polices{" "}
                <span className="text-[#959595] text-[14px] font-normal">
                  (Write additional policies specific to your listing not
                  included in our general policy)
                </span>
              </p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <textarea
                  className="border w-full h-[180px] border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  name=""
                  id=""
                >
                  Enter here
                </textarea>
                <p className="text-[#959595] text-[14px]">1000 words max</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Display an access and frequency policy
          </p>
          <p>(flexible policies attract more renters)</p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="">
            <div className="flex gap-[16px] mb-[16px] max-md:flex-wrap">
              <div className=" rounded-[16px] border border-[#EEEEEE] min-w-[220px] flex items-center justify-center p-[30px] hover:bg-[#235370] hover:text-white cursor-pointer">
                <p className="text-center">
                  Access requires <br />
                  appointment.
                </p>
              </div>
              <div className=" rounded-[16px] border border-[#EEEEEE] min-w-[220px] flex items-center justify-center p-[30px] hover:bg-[#235370] hover:text-white cursor-pointer">
                <p className="text-center">
                  No appointment <br />
                  required for access.
                </p>
              </div>
            </div>
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select type</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <select
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name=""
                  id=""
                >
                  <option value="">Weekly</option>
                </select>
                <span className=" absolute right-[16px] top-[20px]">
                  <DropDownIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[12px] justify-end">
        <button className="btn-sec mt-[24px]  ">Back</button>
        <button className="btn-pri mt-[24px] ">Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
