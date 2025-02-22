import { ListingStepProp, StepTwoFormType } from "..";
import CustomOptions from "../../../../../components/CustomOptions";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { accessPolicyType } from "../../../../../constants";
import { DropDownIcon } from "../../../../../icons";
import { handleInputChange } from "../../../../../utils/helper";
import MultiImageSelect from "../../../../../components/MultipleImages";

const StepTwo = ({
  handleComplete,
  formData,
  setFormData,
  errors,
}: ListingStepProp<StepTwoFormType>) => {
  return (
    <div className="flex flex-col">
      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Room for storage in Surrey
          </p>
        </div>
        <MultiImageSelect setFormData={setFormData} />
        {/* <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="py-[30px] px-[20px] border border-dashed border-[#EEEEEE] rounded-[8px] cursor-pointer">
            <div className=" flex items-center justify-center flex-col gap-[4px]">
              <img src={AddPicIcon} alt="" />
              <p className="text-[#235370]">
                Click here to add pics for your listing
              </p>
              <p className="text-[14px]">2 minimum photos</p>
            </div>
          </div>
        </div> */}
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
                <Input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  name="tagline"
                  value={formData?.tagline}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Enter here"
                  error={errors?.tagline}
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
                  name="description"
                  value={formData?.description}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                ></textarea>
                <p className="text-[#959595] text-[14px]">1000 words max</p>
                {errors?.description && (
                  <span className="mx-2 text-red-500">
                    {errors.description}
                  </span>
                )}
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
                  name="policies"
                  value={formData?.policies}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                ></textarea>
                <p className="text-[#959595] text-[14px]">1000 words max</p>
                {errors?.policies && (
                  <span className="mx-2 text-red-500">{errors.policies}</span>
                )}
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
              <CustomOptions
                options={accessPolicyType}
                handleChange={(e: any) => handleInputChange(e, setFormData)}
                name="accessPolicy"
                className="stored-hover rounded-[16px] border border-[#EEEEEE] min-w-[220px] flex items-center justify-center p-[30px] hover:bg-[#235370] hover:text-white cursor-pointer"
                multiple={false}
                value={formData?.accessPolicy}
              />
            </div>
            {errors.accessPolicy && (
              <span className="mx-2 text-red-500">{errors.accessPolicy}</span>
            )}
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select type</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Select
                  options={["Weekly"]}
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name="frequency"
                  value={formData?.frequency}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  error={errors?.frequency}
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <DropDownIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[12px] justify-end">
        <button className="btn-sec mt-[24px]">Back</button>
        <button className="btn-pri mt-[24px]" onClick={handleComplete}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
