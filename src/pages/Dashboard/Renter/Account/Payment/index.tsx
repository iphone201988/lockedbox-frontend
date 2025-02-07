import CardLogo from "../../../../../assets/visa-logo.png";
import AddIcon from "../../../../../assets/icons/add-icn.png";
import PaymentHistory from "./components/payment-history";

const RenterPayment = () => {
  return (
    <div className="flex flex-col">
      {/* Your passowrd */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Payment Method
          </p>
          <p className="max-w-[280px] mt-[6px]">
            You can update or add your card information here
          </p>
        </div>
        <div className="max-w-[100%] w-full">
          <div className=" max-w-[100%] w-full flex gap-[20px] flex-wrap">
            {/* added card */}
            <div className="flex flex-col w-full max-w-[400px] border border-[#EEEEEE] p-[16px] rounded-[16px]">
              <div className="flex gap-[24px] items-start">
                <img src={CardLogo} alt="" />
                <div className="">
                  <p>Visa Card</p>
                  <p className=" font-semibold mt-[8px]">XXXX XXXX XXXX 1234</p>
                </div>
              </div>
              <button className="btn-sec mt-[20px] ml-auto">Remove</button>
            </div>

            {/* add card */}
            <button className=" cursor-pointer flex max-w-[150px] flex-col justify-center items-center border border-[#235370] border-dashed rounded-[16px] p-[20px] hover:bg-[#EEEEEE]">
              <img src={AddIcon} alt="" />
              <p className="text-[14px] text-[#235370] text-center">
                Add new <br />
                payment method
              </p>
            </button>
          </div>
          <button className="btn-pri mt-[24px] ml-auto ">Update</button>
        </div>
      </div>

      {/* Payment History */}
      <PaymentHistory />
    </div>
  );
};

export default RenterPayment;
