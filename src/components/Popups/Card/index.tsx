import CloseIcon from "../../../assets/icons/close-icn.png";

const AddCardPopup = ({
  setShowPopup,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => { 
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button
          className=" absolute right-[20px] top-[20px] cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
          <img src={CloseIcon} alt="" />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Add Payment Method
          </p>
        </header>
        <body className="max-w-[400px] mx-auto">
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Card Number</p>
            <div className="w-full max-w-[100%]">
              <input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                placeholder="Enter card number"
              />
            </div>
          </div>
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Account Holder Name</p>
            <div className="w-full max-w-[100%]">
              <input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                placeholder="Account Holder Name"
              />
            </div>
          </div>
          <div className=" flex gap-[16px]">
            <div className="">
              <p className=" font-semibold mb-[6px]">Expiry Date</p>
              <div className="w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Expiry Date"
                />
              </div>
            </div>
            <div className="">
              <p className=" font-semibold mb-[6px]"> CVV</p>
              <div className="w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter CVV"
                />
              </div>
            </div>
          </div>
          <button className="btn-pri ml-auto !block mt-[16px]">Add</button>
        </body>
      </div>
    </div>
  );
};

export default AddCardPopup;
