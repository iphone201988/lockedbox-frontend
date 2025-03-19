import { getUrl } from "../../../../utils/helper";
import ImageModal from "../../../ImageModal";

const OutgoingMessage = ({ message }: { message: string }) => {
  const isImage =
    message.startsWith("/uploads/") ||
    /\.(jpg|jpeg|png|gif|svg)$/i.test(message);
  return (
    <div className="bg-[#235370] p-[12px] max-w-[480px] text-white rounded-[8px] ml-auto mb-[16px] mt-4 w-fit">
      {isImage ? (
        <ImageModal
          url={getUrl(message)}
          className="max-w-full rounded-[8px]"
        />
      ) : (
        <p className="text-white">{message}</p>
      )}
    </div>
  );
};

export default OutgoingMessage;
