import { ListingStepProp, StepOneFormType } from "..";
import CustomOptions from "../../../../../components/CustomOptions";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import {
  spaceFeatures,
  allowedStorage,
  spaceType,
} from "../../../../../constants";
import { DropDownIcon, PriceIcon, SizeIcon } from "../../../../../icons";
import { handleInputChange } from "../../../../../utils/helper";
import MultiSelect from "../../../../../components/MultiSelect";
import MapInput from "../../../../../components/MapInput";

const StepOne = ({
  handleComplete,
  formData,
  setFormData,
  errors,
  isChecked,
  setIsChecked,
  checkboxError,
}: ListingStepProp<StepOneFormType>) => {
  return (
    <div className="flex flex-col">
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Where is the space located? <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <MapInput setFormData={setFormData} value={formData?.address} />
              {errors?.address && (
                <span className="mx-2 text-red-500">{errors?.address}</span>
              )}
            </div>
            <div className=" mt-[8px]">
              <label className="flex  items-start gap-[8px]" htmlFor="">
                <input
                  className="w-[24px] h-[24px] min-w-[24px] rounded-[5px] accent-[#235370]"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    if (setIsChecked) {
                      setIsChecked(!isChecked);
                    }
                  }}
                />
                By continuing, you certify you inhabit the address or have legal
                right to use it for hosting. Exact address is not shown until
                you confirm a request to book
              </label>
              {checkboxError && (
                <p className="text-red-500 mt-2">{checkboxError}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What type of space is it? <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select type</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Select
                  options={spaceType}
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name="spaceType"
                  value={formData?.spaceType}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  error={errors?.spaceType}
                />
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
            Does the space have any <br /> additional features ? <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select feature</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <MultiSelect
                  options={spaceFeatures}
                  setFormData={setFormData}
                  error={errors?.features as any}
                  value={formData?.features}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What can be stored? <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[55%] w-full max-md:max-w-full">
          <div className="mb-[16px] flex flex-wrap gap-[16px]">
            <CustomOptions
              options={allowedStorage}
              value={formData?.allowedStorage}
              handleChange={(e: any) => handleInputChange(e, setFormData)}
              error={errors.allowedStorage as any}
              className="stored-hover"
              name="allowedStorage"
            />
          </div>
        </div>
      </div>

      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What is the size of your space? <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter size</p>
              <div className=" flex items-center">
                <div className="input-with-icon relative w-full max-w-[100%]">
                  <Input
                    className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                    type="number"
                    name="length"
                    value={formData?.length}
                    onChange={(e: any) => handleInputChange(e, setFormData)}
                    placeholder="10ft"
                    error={errors?.length}
                  />
                  <span className=" absolute right-[16px] top-[20px]">
                    <SizeIcon />
                  </span>
                </div>
                <p className="text-[26px] font-semibold px-[20px]">X</p>
                <div className="input-with-icon relative w-full max-w-[100%]">
                  <Input
                    className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                    type="number"
                    name="width"
                    value={formData?.width}
                    onChange={(e: any) => handleInputChange(e, setFormData)}
                    placeholder="10ft"
                    error={errors?.width}
                  />
                  <span className=" absolute right-[16px] top-[20px]">
                    <SizeIcon />
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
            What is the monthly price? <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter price</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  name="price"
                  value={formData?.price}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Enter price"
                  error={errors?.price}
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <PriceIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto" onClick={handleComplete}>
        Next
      </button>
    </div>
  );
};

export default StepOne;
