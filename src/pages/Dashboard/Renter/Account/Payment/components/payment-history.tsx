import { useState } from "react";
import FilterIcon from "../../../../../../assets/icons/filter-icn.png";
import PaymentHistoryDetail from "../../../../../../components/PaymentHistoryDetail";

const PaymentHistory = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  return (
    <div className="flex flex-col py-[24px] ">
      <div className="flex items-center justify-between w-full">
        <div className="max-w-[380px] w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Your Payment History
          </p>
          <p className="max-w-[280px] mt-[6px]">View your previous billing.</p>
        </div>
        <div className=" relative">
          <button
            className="flex items-center gap-[6px] cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
          >
            <p className="text-[#235370] font-semibold">Filter</p>
            <img src={FilterIcon} alt="" />
          </button>
          <div
            className={`${
              showFilters ? "flex" : "hidden"
            } shadow border border-[#EEEEEE] bg-white rounded-[16px] p-[10px] flex-col gap-[8px] absolute w-max right-0 top-[30px]`}
          >
            <button
              className="border border-[#EEEEEE] p-[6px] rounded-[8px] cursor-pointer hover:bg-[#235370] hover:text-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              Old to New
            </button>
            <button
              className="border border-[#EEEEEE] p-[6px] rounded-[8px] cursor-pointer  hover:bg-[#235370] hover:text-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              New to Old
            </button>
          </div>
        </div>
      </div>
      <div className="py-[16px] flex flex-col gap-[16px]">
        <PaymentHistoryDetail />
        <PaymentHistoryDetail />
        <PaymentHistoryDetail />
        <PaymentHistoryDetail />
      </div>
    </div>
  );
};

export default PaymentHistory;
