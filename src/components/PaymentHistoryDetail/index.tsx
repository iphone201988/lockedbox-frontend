import BoxImage from "../../assets/box-detail-image.png";

const PaymentHistoryDetail = () => {
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px]">
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={BoxImage}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            Warehouse for storage in Langley
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">
              Booking Confirmation:
            </span>{" "}
            123456789
          </p>
          <p className="text-[#959595] max-md:text-[16px]">
            May 18/2024 - June 18/2024
          </p>
          <p className="text-[#959595] text-[14px] mt-auto">
            Refunded on May 18/2024 with card{" "}
            <span className="text-[#235370]">XXXX XXXX XXXX 1234</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        <p className="text-[20px] font-semibold max-md:text-[18px]">$1263.67</p>
        <button className="btn-green">Refunded</button>
      </div>
    </div>
  );
};

export default PaymentHistoryDetail;
