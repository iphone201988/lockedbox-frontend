import { toast } from "react-toastify";
import { useUpdateBookingStatusMutation } from "../../../../redux/api";
import { getUrl, handleError } from "../../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../../Loader";
import ImageModal from "../../../ImageModal";
import moment from "moment-timezone";

const IncomingMessage = ({
  image,
  message,
  bookingId,
  status,
  contentType,
  createdAt,
}: {
  image: any;
  message: string;
  bookingId: string;
  status: string;
  contentType: string;
  createdAt: string;
}) => {
  const navigate = useNavigate();
  const [updateBookingStatus, { isLoading, data }] =
    useUpdateBookingStatusMutation();
  const [bookingStatus, setBookingStatus] = useState(status);

  const isImage = contentType == "image";

  const handleUpdate = async (status: string) => {
    if (!status || !["approve", "reject"].includes(status)) {
      toast.error("Please approve or reject the booking");
    }

    await updateBookingStatus({ bookingId, body: { status } })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedTime = moment.utc(createdAt).tz(userTimezone).format("h:mm A");

  useEffect(() => {
    if (data?.success) {
      setBookingStatus(data?.booking?.status);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex items-start mt-[24px] gap-[8px] flex-col">
        <div className="flex gap-[8px] relative">
          <img src={image} alt="" className="w-[34px] h-[34px] rounded-full" />
          <div className="bg-[#EEEEEE] p-[10px] max-w-[480px]  rounded-[8px] ">
            {isImage ? (
              <ImageModal
                url={getUrl(message)}
                className="w-[200px] h-[200px] rounded-[8px] object-cover"
              />
            ) : (
              <p className="">{message}</p>
            )}
          </div>
          <p className="absolute left-[42px] bottom-[-16px] text-[12px] text-[#afafaf] whitespace-nowrap">
            {formattedTime}
          </p>
        </div>
        {bookingStatus == "under_review" && (
          <div className="flex gap-[12px] ml-[50px] mt-3">
            <button className="btn-pri" onClick={() => handleUpdate("approve")}>
              Accept
            </button>
            <button className="btn-sec" onClick={() => handleUpdate("reject")}>
              Decline
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default IncomingMessage;
