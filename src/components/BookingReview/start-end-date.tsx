import DateIcon from "../../assets/icons/date-picker-black-icn.png";

const StartEndDate = () => {
  return (
    <div className="before-dotted-line flex justify-between relative max-sm:flex-col max-sm:gap-[20px] max-sm:items-center">
      <div className="bg-white flex items-start gap-[6px] border border-[#EEEEEE] rounded-[8px] p-[10px] w-max">
        <img src={DateIcon} alt="" />
        <div className="">
          <p className="mb-[4px]">Start Date</p>
          <span className="font-semibold text-[#959595]">Nov 15 2024</span>
        </div>
      </div>
      <div className="bg-white flex items-start gap-[6px] border border-[#EEEEEE] rounded-[8px] p-[10px] w-max">
        <img src={DateIcon} alt="" />
        <div className="">
          <p className="mb-[4px]">End Date</p>
          <span className="font-semibold text-[#959595]">Nov 15 2025</span>
        </div>
      </div>
    </div>
  );
};

export default StartEndDate;
