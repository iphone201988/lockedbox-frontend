import { useNavigate } from "react-router-dom";
import BoxImage from "../../../assets/box-detail-image.png";

const CommonListing = ({ type, btnTxt, path }: CommonListing) => {
  const navigate = useNavigate();
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      <i className="notify-dot absolute right-[10px] top-[10px]"></i>
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={BoxImage}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px] max-mlg:max-w-[280px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            Room for storage in Surrey 16356 North Vale Road, Surrey
          </p>
          {type == "RenterHome" && (
            <p className="text-[20px] max-md:text-[16px]">
              Your reservation was confirmed.
            </p>
          )}
          {type == "Review" && (
            <p className="text-[16px] text-[#959595]">
              <span className="text-black font-semibold">From:</span> Nov. 15/24
              - Nov. 15/25
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        <button className="btn-pri" onClick={() => navigate(path)}>
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default CommonListing;
