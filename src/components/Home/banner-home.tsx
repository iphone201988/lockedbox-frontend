import BannerImg from "../../assets/banner-img.png";
import { LocationIcon } from "../../icons";

const BannerHome = () => {
  return (
    <div className="max-w-[1440px] px-[40px] mx-auto flex items-center gap-10 py-16 max-lg:px-[20px] max-lg:py-[40px] max-lg:gap-[20px] max-md:flex-col-reverse">
      <div className="left-side flex flex-col items-center w-full">
        <h1 className="text-[52px] font-bold max-lg:text-[36px]">
          Find your Space
        </h1>
        <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[540px] max-md:mt-[16px] max-md:mb-[24px]">
          <input
            className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
            type="text"
            placeholder="Search location"
          />
          <span className=" absolute right-[16px] top-[20px]">
            <LocationIcon />
          </span>
        </div>
        <button className="btn-pri cursor-pointer">Search Nearby</button>
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
