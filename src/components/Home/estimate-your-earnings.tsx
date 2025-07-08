import { Link } from "react-router-dom";
import earning_img from "../../assets/earning-img.png";

const EstimateYourEarnings = () => {
  return (
    <div className="py-[60px] max-lg:py-[40px]" id="estimate">
        <div className="max-w-[1440px] px-[40px] mx-auto flex items-center justify-between gap-[20px] max-lg:px-[20px] max-lg:flex-col">
             <div className="right relative w-[50%] max-lg:w-full">
          <img className="rounded-[80px] max-lg:w-full" src={earning_img} alt="" />
          <div className=" absolute top-[40px] right-[20px] rounded-4xl bg-white p-[8px] flex items-center gap-[12px]">
            <span className="flex justify-center items-center rounded-full text-white text-[26px] font-black bg-[#39a27f] w-[52px] h-[52px]">$</span>
            <p className="text-[18px] font-semibold pr-[12px]">+$4200/year</p>
          </div>
        </div>
        <div className="left w-[50%] max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
         <h2 className="text-[36px] font-bold max-lg:text-[26px] max-lg:text-center">
           Estimate your  <span className="text-[#235370]">earnings</span>
          </h2>
          <p className="text-[24px] font-medium mt-[6px] max-lg:text-center max-lg:text-[16px] ">Discover how much you can earn as a storage host</p>

          <div className="block mt-[40px] w-max min-w-[500px] max-md:min-w-[320px]">
            <label className="text-black flex justify-between text-[16px]">How much empty space <br /> do you want to rent out? <span className="font-bold max-lg:pl-[30px]">500 ft²</span>
                     </label>
            <input id="range" type="range" min="0" max="1000" step="1" className="border-0 focus:ring-0 block w-full py-2 mt-2 text-gray-700 bg-white border-gray-300 rounded-md focus:border-[#235370] focus:outline-none accent-[#235370]" />
            
            </div>
            <div className="mt-[30px]">
                <div className=" ">
                <p className="text-[20px] font-medium max-lg:text-center">Your estimated monthly earnings:</p>
                <h4 className="text-[28px] font-bold text-[#235370] mt-[6px] max-lg:text-center">$1,000.00</h4>
            </div>
            <div className="mt-[30px]">
                <p className="text-[20px] font-medium max-lg:text-center">Your estimated yearly earnings:</p>
                <h4 className="text-[28px] font-bold text-[#235370] mt-[6px] max-lg:text-center">$12,000.00</h4>
            </div>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default EstimateYourEarnings;
