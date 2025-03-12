import ImageModal from "../../../components/ImageModal";
import { getUrl } from "../../../utils/helper";

const CheckInPhotos = ({ checkIn }: { checkIn: any }) => {
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      <div className="flex w-full gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(checkIn.images[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px] w-full">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {checkIn.listingId.spaceType} for storage in{" "}
            {checkIn.listingId.city}
          </p>
          <p className="text-[#959595] max-md:text-[16px]">
            <span className="font-semibold text-black">From:</span> May 18/2024
            - June 18/2024
          </p>
          <div className="flex gap-[12px] w-full">
            <textarea
              className="border border-[#EEEEEE] rounded-[16px] max-w-[460px] w-full p-[12px] h-[80px]"
              name=""
              id=""
              disabled
            >
              {checkIn.note}
            </textarea>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-[6px] items-end max-md:ml-auto">
        <div className="flex gap-[8px]">
          {checkIn.images.map((image: string) => (
            <ImageModal
              className="w-[60px] h-[60px] rounded-[8px]"
              url={getUrl(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckInPhotos;
