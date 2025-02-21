import BoxImage from "../../../assets/box-detail-image.png";
import CloseIcon from "../../../assets/icons/close-icn.png";
import DeleteIcon from "../../../assets/icons/delete-icn.png";

const DisputePopup = () => {
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px]">
          <img src={CloseIcon} alt="" />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
          Dispute Booking
          </p>
        </header>
        <body className="max-w-full mx-auto">
          <div className="flex flex-col items-center justify-center border-b border-[#EEEEEE] pb-[10px] mb-[10px]">
            <img
              className="w-[130px] h-[115px] rounded-[12px] object-cover"
              src={BoxImage}
              alt=""
            />
            <p className="text-[18px] font-semibold mt-[10px]">
              Warehouse for storage in Langley
            </p>
          </div>
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">
              Describe the issue and include pictures if applicable. The host
              may be notified if the investigation progresses.
            </p>
            <div className="w-full max-w-[100%]">
              <textarea
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer h-[120px]"
                placeholder="Enter phone number"
              >
                The host space did not match listing. It had pests in it and was
                very very messy
              </textarea>
            </div>
          </div>
          <p className=" font-semibold mb-[6px]">Entering into a dispute will cancel the booking. Are you sure you  wish to continue with the dispute?</p>
          <div className="flex flex-col gap-[8px]">
            <div className="border w-full border-[#EEEEEE] p-[8px] flex rounded-[16px] items-center gap-[8px] ">
              <img
                className="w-[46px] h-[46px] rounded-[8px] object-cover"
                src={BoxImage}
                alt=""
              />
              <p>Dispute image1.png</p>
              <img className="ml-auto" src={DeleteIcon} alt="" />
            </div>
            <div className="border w-full border-[#EEEEEE] p-[8px] flex rounded-[16px] items-center gap-[8px] ">
              <img
                className="w-[46px] h-[46px] rounded-[8px] object-cover"
                src={BoxImage}
                alt=""
              />
              <p>Dispute image2.png</p>
              <img className="ml-auto" src={DeleteIcon} alt="" />
            </div>
          </div>

          <div className="flex gap-[10px]">
            <button className="btn-sec mr-auto !block mt-[16px]">
            Upload Pic
            </button>
            <button className="btn-sec !block mt-[16px]">No</button>
            <button className="btn-pri !block mt-[16px]">Yes</button>
          </div>
        </body>
      </div>
    </div>
  );
};

export default DisputePopup;
