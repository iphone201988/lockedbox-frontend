import { useState } from "react";
import ConfirmReview from "../../../../components/Popups/ConfirmReview";
import Ratings from "./components/ratings";
import ReviewFor from "./components/review-for";

const ReviewYourHost = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  return (
    <div className="px-[30px] max-lg:px-[20px] ">
      <div className=" py-[10px]  border-b border-[#EEEEEE]">
        <h4 className="text-[22px] font-bold">Review your host Frank</h4>
        <p>Give review</p>
      </div>
      <div className=" py-[24px] flex gap-[16px] max-md:flex-col">
        <div className=" w-full max-w-[440px] max-md:max-w-full">
          <ReviewFor />

          {/* form comment input */}
          <div className="w-full mt-[16px]">
            <textarea
              className="border border-[#EEEEEE] rounded-[16px] p-[16px] w-full min-h-[140px]"
              name=""
              id=""
            >
              Add comments
            </textarea>
          </div>
        </div>
        <div className=" w-full">
          <Ratings setShowPopup={setShowPopup} />
        </div>
      </div>

      {/* reviews popus */}
      <div className="">
        {showPopup && <ConfirmReview setShowPopup={setShowPopup} />}
      </div>
    </div>
  );
};

export default ReviewYourHost;
