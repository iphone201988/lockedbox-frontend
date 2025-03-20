import BannerImg from "../../assets/banner-img.png";
import * as yup from "yup";
import { SearchPropertySchema } from "../../schema";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import MapInput from "../MapInput";

type SearchPropertyFormType = yup.InferType<typeof SearchPropertySchema>;

const initialState: SearchPropertyFormType = {
  address: "",
  latitude: "",
  longitude: "",
};

const BannerHome = () => {
  const navigate = useNavigate();
  const { formData, setFormData, errors, validate } = useForm(
    SearchPropertySchema,
    initialState
  );

  const handleSearch = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    navigate("/search-results", { state: { formData } });
  };
  return (
    <div className="max-w-[1440px] px-[40px] mx-auto flex items-center gap-10 py-16 max-lg:px-[20px] max-lg:py-[40px] max-lg:gap-[20px] max-md:flex-col-reverse">
      <div className="left-side flex flex-col items-center w-full">
        <h1 className="text-[52px] font-bold max-lg:text-[36px]">
          Find your Space
        </h1>
        <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[540px] max-md:mt-[16px] max-md:mb-[24px]">
          <MapInput
            value={formData?.address}
            setFormData={setFormData}
            showLabel={false}
            placeholder="Search Location"
          />
          {errors?.address && (
            <span className="mx-2 text-red-500">{errors?.address}</span>
          )}
        </div>
        <button className="btn-pri cursor-pointer" onClick={handleSearch}>
          Search Nearby
        </button>
      </div>
      <div className="right-side w-full">
        <img
          className="rounded-[32px] max-md:w-[70%] max-md:mx-auto max-sm:w-full"
          src={BannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerHome;
