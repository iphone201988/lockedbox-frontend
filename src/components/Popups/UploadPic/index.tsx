import BoxImage from "../../../assets/box-detail-image.png";
import CloseIcon from "../../../assets/icons/close-icn.png";
import DeleteIcon from "../../../assets/icons/delete-icn.png";

const UploadPicPopup = () => {
  return (
     <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
          <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
            <button className=" absolute right-[20px] top-[20px]">
              <img src={CloseIcon} alt="" />
            </button>
            <header className="text-center pb-[20px]">
              <p className="text-[18px] text-[#235370] font-semibold">
              Upload Photos
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
                Please upload or take a minimum of two (2) photos of your items
                </p>
               
              </div>
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
                <button className="btn-pri !block mt-[16px]">Submit</button>
              </div>
            </body>
          </div>
        </div>
  )
}

export default UploadPicPopup
