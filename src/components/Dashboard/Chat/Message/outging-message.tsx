import { getUrl } from "../../../../utils/helper";
import ImageModal from "../../../ImageModal";

const OutgoingMessage = ({
  message,
  contentType,
}: {
  message: string;
  contentType: string;
}) => {
  const isImage = contentType == "image";
  return (
    <div className="bg-[#235370] p-[12px] max-w-[480px] text-white rounded-[8px] ml-auto mb-[16px] mt-4 w-fit">
      {isImage ? (
        <ImageModal
          url={getUrl(message)}
          className="w-[200px] h-[200px] rounded-[8px] object-cover"
        />
      ) : (
        <p className="text-white">{message}</p>
      )}
    </div>
  );
};

export default OutgoingMessage;
