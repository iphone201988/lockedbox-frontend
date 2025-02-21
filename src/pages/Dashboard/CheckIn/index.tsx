import BoxImage from "../../../assets/box-detail-image.png";
import CheckInConfirmPopup from "../../../components/Popups/ConfirmCheckIn";
import DisputePopup from "../../../components/Popups/DisputePopup";
import UploadPicPopup from "../../../components/Popups/UploadPic";

const CheckIn = () => {
  return (
    <>
      <div className="px-[30px] py-[32px] max-lg:px-[20px]">
        <div className="max-w-[500px] border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
          <div className="flex gap-[12px] max-md:flex-col w-full ">
            <img
              className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
              src={BoxImage}
              alt=""
            />
            <div className="storage-details flex flex-col gap-[4px] w-full">
              <p className="text-[18px] font-semibold max-md:text-[16px]">
                Warehouse for storage in Langley
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[24px]">
          <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
            <div className="max-w-[380px] w-full max-md:max-w-full">
              <p className="text-[18px] text-[#235370] font-semibold">
                Step 1: Confirm Host Space
              </p>
            </div>
            <div className=" max-w-[440px] w-full max-md:max-w-full">
              <div className="">
                <label className="flex  items-start gap-[8px]" htmlFor="">
                  <input
                    className="w-[24px] h-[24px] min-w-[24px] rounded-[5px] accent-[#235370] cursor-pointer"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>
                    I confirm that I have read and understood the{" "}
                    <a className="text-[#235370] underline" href="#">
                      Safe Storage
                    </a>{" "}
                    and{" "}
                    <a className="text-[#235370] underline" href="#">
                      Prohibited Items Policy
                    </a>
                    . I agree that I am satisfied with the host's storage space
                    and that the items I am storing comply fully with the
                    prohibited items policy.
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
            <div className="max-w-[380px] w-full max-md:max-w-full">
              <p className="text-[18px] text-[#235370] font-semibold">
                Step 2: Upload photos of your items
              </p>
            </div>
            <div className=" max-w-[440px] w-full max-md:max-w-full">
              <div className="flex flex-col gap-[16px]">
                <p>
                  Please upload a minimum of two (2) photos. These images will
                  serve as a reference in the event of any disputes.
                </p>
                <button className="btn-pri ml-auto">Upload</button>
              </div>
            </div>
          </div>

          {/* For Host  */}

          <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
               <div className="max-w-[380px] w-full max-md:max-w-full">
                 <p className="text-[18px] text-[#235370] font-semibold">
                 Step 3: Note Existing Damages
                 </p>
               </div>
               <div className=" max-w-[600px] w-full max-md:max-w-full">
                 <div className="flex flex-col gap-[8px]">
                   <p className=' font-semibold'>
                   Please note any existing damages on the renters items. This protects you from the renter making false claims
                   </p>
                   <textarea className='h-[180px] border border-[#EEEEEE] rounded-[16px] p-[16px]' name="" id="">
                    Enter here
                   </textarea>
                 </div>
               </div>
             </div>


          <div className="flex py-[24px] max-md:flex-col max-md:gap-[20px]">
            <div className="max-w-[380px] w-full max-md:max-w-full">
              <p className="max-w-[300px]">
                You must confirm the host’s space is adequate before completing
                renter check in. Problem with the host’s space? Please see our{" "}
                <a href="" className="text-[#235370] underline">
                  FAQ
                </a>{" "}
                page for dispute options.
              </p>

              {/* when tick */}
              {/* <p>Please upload photos</p> */}

              {/* when photos uploaded */}
              {/* <p>Photos Uploaded</p> */}
            </div>
            <div className=" max-w-[440px] w-full max-md:max-w-full">
              <div className="flex flex-col gap-[16px]">
                <button className="btn-pri ml-auto !bg-[#FF3636] !border-0">
                  Dispute Booking
                </button>

                {/* button when check mark is tick */}
                {/* <button className='btn-pri ml-auto !bg-[#959595] !border-0'> Complete Renter Check in</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* checkin popus */}
      <div className="">
        {/* <UploadPicPopup/> */}
        {/* <DisputePopup/> */}
        {/* <CheckInConfirmPopup /> */}
      </div>
    </>
  );
};

export default CheckIn;
