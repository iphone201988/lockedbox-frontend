import ProfileNavbar from "../../components/ProfileNavbar";
import { LocationIcon, SizeIcon } from "../../icons";

const Search = () => {
  return (
    <div>
      <ProfileNavbar />
      <div className="max-w-[1440px] px-[40px] mx-auto py-16 max-lg:px-[20px] max-lg:py-[40px] h-[88vh] flex justify-center items-center">
        <div className=" flex flex-col items-center">
          <h2 className="text-[42px] text-center font-bold max-lg:text-[36px]">
            Where are you located?
          </h2>
          <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[540px] max-md:mt-[16px] max-md:mb-[24px]">
            <input
              className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
              type="text"
              placeholder="Enter address"
            />
            <span className=" absolute right-[16px] top-[20px]">
              <LocationIcon />
            </span>
          </div>
          <h2 className="text-[42px] text-center font-bold max-lg:text-[36px]">
            What size do require?
          </h2>
          <div className="flex items-center">
            <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[170px] max-md:mt-[16px] max-md:mb-[24px]">
              <input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
                type="text"
                placeholder="size"
              />
              <span className=" absolute right-[16px] top-[20px]">
                <SizeIcon />
              </span>
            </div>
            <p className="text-[26px] font-semibold px-[20px] leading-[26px]">
              X
            </p>
            <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[170px] max-md:mt-[16px] max-md:mb-[24px]">
              <input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
                type="text"
                placeholder="size"
              />
              <span className=" absolute right-[16px] top-[20px]">
                <SizeIcon />
              </span>
            </div>
          </div>
          <button className="btn-pri cursor-pointer">Start Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
