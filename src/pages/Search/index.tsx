import { useNavigate } from "react-router-dom";
import ProfileNavbar from "../../components/ProfileNavbar";
import { SizeIcon } from "../../icons";
import * as yup from "yup";
import { SearchPropertySchema } from "../../schema";
import { useForm } from "../../hooks/useForm";
import MapInput from "../../components/MapInput";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";

type SearchPropertyFormType = yup.InferType<typeof SearchPropertySchema>;

const initialState: SearchPropertyFormType = {
  address: "",
  latitude: "",
  longitude: "",
  length: "",
  width: "",
};

const Search = () => {
  const navigate = useNavigate();
  const { formData, setFormData, errors, validate } = useForm(
    SearchPropertySchema,
    initialState
  );

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    navigate("/search-results", { state: { formData } });
  };  

  return (
    <div>
      <ProfileNavbar />
      <div className="max-w-[1440px] px-[40px] mx-auto py-16 max-lg:px-[20px] max-lg:py-[40px] h-[88vh] flex justify-center items-center">
        <div className=" flex flex-col items-center">
          <h2 className="text-[42px] text-center font-bold max-lg:text-[36px]">
            Where are you located?
          </h2>
          <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[540px] max-md:mt-[16px] max-md:mb-[24px]">
            <MapInput value={formData?.address} setFormData={setFormData} />
            {errors?.address && (
              <span className="mx-2 text-red-500">{errors?.address}</span>
            )}
          </div>
          <h2 className="text-[42px] text-center font-bold max-lg:text-[36px]">
            What size do require?
          </h2>
          <div className="flex items-center">
            <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[170px] max-md:mt-[16px] max-md:mb-[24px]">
              <Input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                type="text"
                name="length"
                value={formData?.length}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="ft"
                error={errors?.length}
              />
              <span className=" absolute right-[16px] top-[20px]">
                <SizeIcon />
              </span>
            </div>
            <p className="text-[26px] font-semibold px-[20px] leading-[26px]">
              X
            </p>
            <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[170px] max-md:mt-[16px] max-md:mb-[24px]">
              <Input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                type="text"
                name="width"
                value={formData?.width}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="ft"
                error={errors?.width}
              />
              <span className=" absolute right-[16px] top-[20px]">
                <SizeIcon />
              </span>
            </div>
          </div>
          <button className="btn-pri cursor-pointer" onClick={handleSubmit}>
            Start Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
