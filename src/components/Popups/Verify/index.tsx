import CloseIcon from "../../../assets/icons/close-icn.png";

const VerificationCodePopup = () => {
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px] cursor-pointer">
          <img src={CloseIcon} alt="" />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Verify phone number
          </p>
        </header>
        <body className="max-w-[400px] mx-auto">
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Enter verification code</p>
            <div className="w-full max-w-[100%]">
              <input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                placeholder="Enter code"
              />
            </div>
          </div>
          <button className="btn-pri ml-auto !block mt-[16px]">Verify</button>
        </body>
      </div>
    </div>
  );
};

export default VerificationCodePopup;
