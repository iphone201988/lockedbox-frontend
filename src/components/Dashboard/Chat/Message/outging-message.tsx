import { getUrl } from "../../../../utils/helper";
import ImageModal from "../../../ImageModal";

const OutgoingMessage = ({
  message,
  contentType,
}: {
  message: string;
  contentType: string;
}) => {
  console.log("dd", message, contentType);
  const isImage = contentType == "image";
  return (
    <div className="bg-[#235370] p-[12px] max-w-[480px] text-white rounded-[8px] ml-auto mb-[16px] mt-[24px] w-fit relative">
      {isImage ? (
        <ImageModal
          url={getUrl(message)}
          className="w-[200px] h-[200px] rounded-[8px] object-cover"
        />
      ) : (
        <p className="text-white">{message}</p>
      )}
      <p className=" absolute right-[4px] bottom-[-16px] text-[12px] text-[#afafaf] whitespace-nowrap">2:05 pm</p>
    </div>
  );
};

export default OutgoingMessage;
