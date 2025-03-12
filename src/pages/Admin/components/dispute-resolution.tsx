import { getUrl } from "../../../utils/helper";
import NoUser from "../../../assets/icons/if-no-user.png";
import ImageModal from "../../../components/ImageModal";

const DisputeResolution = ({ dispute }: { dispute: any }) => {
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      <div className="flex w-full gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(dispute.images[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px] w-full">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {dispute.listingId.spaceType} for storage in{" "}
            {dispute.listingId.city}
          </p>
          <div className="flex gap-[12px] w-full">
            <img
              className="w-[38px] h-[38px] rounded-full"
              src={
                dispute.userId?.profileImage
                  ? getUrl(dispute.userId?.profileImage)
                  : NoUser
              }
              alt=""
            />
            <textarea
              className="border border-[#EEEEEE] rounded-[16px] max-w-[360px] w-full p-[12px] h-[80px] no-scrollbar"
              name=""
              id=""
              disabled
            >
              {dispute.desc}
            </textarea>
            <div className="flex gap-[8px]">
              {dispute.images.map((image: string) => (
                <ImageModal
                  className="w-[60px] h-[60px] rounded-[8px]"
                  url={getUrl(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-[6px] items-end max-md:ml-auto">
        <p className="text-[#959595]">Requested amount</p>
        <p className="text-[#235370] font-semibold">
          ${dispute.bookingId.amount}
        </p>
      </div>
    </div>
  );
};

export default DisputeResolution;
