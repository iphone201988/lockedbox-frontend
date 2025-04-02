import { getUrl } from "../../../../utils/helper";
import ImageModal from "../../../ImageModal";
import moment from "moment-timezone";

const OutgoingMessage = ({
  message,
  contentType,
  createdAt,
}: {
  message: string;
  contentType: string;
  createdAt: string;
}) => {
  const isImage = contentType == "image";
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedTime = moment.utc(createdAt).tz(userTimezone).format("h:mm A");

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
      <p className=" absolute right-[4px] bottom-[-16px] text-[12px] text-[#afafaf] whitespace-nowrap">
        {formattedTime}
      </p>
    </div>
  );
};

export default OutgoingMessage;
