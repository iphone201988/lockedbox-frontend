import CloseIcon from "../../../assets/icons/close-icn.png";
import { useNavigate } from "react-router-dom";
import { getUrl } from "../../../utils/helper";

const CheckInConfirmPopup = ({
  listing,
  handleClose,
}: {
  listing: any;
  handleClose: any;
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px]">
          <img
            src={CloseIcon}
            alt=""
            className="cursor-pointer"
            onClick={handleClose}
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Thank you for checking in!
          </p>
        </header>
        <body className="max-w-[500px] mx-auto">
          <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
            <div className="flex gap-[12px] max-md:flex-col w-full ">
              <img
                className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
                src={
                  getUrl(listing?.storageImages?.[0])
                }
                alt=""
              />
              <div className="storage-details flex flex-col gap-[4px] w-full">
                <p className="text-[18px] font-semibold max-md:text-[16px]">
                {listing.spaceType} for Storage at {listing.city}
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-pri ml-auto !block mt-[16px]"
            onClick={() => navigate("/dashboard/booking")}
          >
            Done
          </button>
        </body>
      </div>
    </div>
  );
};

export default CheckInConfirmPopup;
