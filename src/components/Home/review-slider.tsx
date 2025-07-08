import { Link } from "react-router-dom";
import ReviewProfilePic from "../../assets/host-profile-pic.png";
import StarIconFill from "../../assets/icons/star-fill-icn.png";

const ReviewSlider = () => {
  return (
    <div className="py-[60px] max-lg:py-[40px] bg-[#f7f7f7]" id="review-slider">
        <h2 className="text-[36px] text-center font-bold max-lg:text-[26px] max-lg:text-center mb-[32px]">
           From our <span className="text-[#235370]">community</span>
          </h2>
        <div className="max-w-[1440px] px-[40px] mx-auto flex items-center justify-between gap-[20px] max-lg:px-[20px] max-lg:flex-col">
           
        <div className=" relative w-full">
          <button className="flex z-[9999] justify-center items-center leading-[1] w-[42px] h-[42px] absolute left-[-60px] top-[calc(50%-20px)] text-white text-4xl bg-[#235370] bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 cursor-pointer  hover:bg-[#235270cb] max-2xl:left-[20px]">‹</button>
          <div className="">
            <div className='bg-white shadow mx-auto p-[20px] border border-[#EEEEEE] rounded-[32px] max-w-[480px]'>
              <div className="flex items-center gap-[8px]">
                <img className='w-[58px] h-[58px] rounded-full object-cover' src={ReviewProfilePic} alt="" />
                <div className="flex items-center gap-[12px]">
                    <p className='text-[24px] font-bold'>Sherry</p>
                    <div className="flex gap-[4px]">
                <img className='w-[20px] h-[20px]' src={StarIconFill} alt="" />
                <img className='w-[20px] h-[20px]' src={StarIconFill} alt="" />
                <img className='w-[20px] h-[20px]' src={StarIconFill} alt="" />
                <img className='w-[20px] h-[20px]' src={StarIconFill} alt="" />
                <img className='w-[20px] h-[20px]' src={StarIconFill} alt="" />
              </div>
                </div>
              </div>
              
                <p className='text-[18px] mt-[16px]'>“The location was superb! I needed to store some of 
my school items between moves and this was the 
perfect spot…clean, safe, responsive host. He offers to 
pickup and deliver your items (although I didnt need 
that) which is very appreciative.”</p>
            </div>
          </div>
        <button className="flex z-[9999] justify-center items-center leading-[1] w-[42px] h-[42px] absolute right-[-60px] top-[calc(50%-20px)] text-white text-4xl bg-[#235370] bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 cursor-pointer  hover:bg-[#235270cb] max-2xl:right-[20px]">›</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
