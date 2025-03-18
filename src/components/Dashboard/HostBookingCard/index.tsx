import DisputeIcon from "../../../assets/icons/dispute-icn.png";
import UserIcon from "../../../assets/icons/user-icn.png";
import DateIcon from "../../../assets/icons/date-picker-icn.png";
import DarkDateIcon from "../../../assets/icons/date-picker-black-icn.png";
import { allowedStorage as allowedStorageType } from "../../../constants/index";
import { Link, Navigate, useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import {
  useGetUserQuery,
  useUpdateBookingStatusMutation,
} from "../../../redux/api";
import Loader from "../../Loader";
import { toast } from "react-toastify";
import { getUrl, handleError } from "../../../utils/helper";
import { useEffect } from "react";
import { ResponseMessages } from "../../../constants/api-responses";

const HostBookingCard = ({
  booking,
  refetch,
}: {
  booking: any;
  refetch: any;
}) => {
  const navigate = useNavigate();

  if (!booking || !booking.listingId) return <Navigate to="/" />;

  const { listingId: listing } = booking;
  let { startDate, endDate } = booking;
  startDate = moment(startDate).format("MMM DD YYYY");
  endDate = moment(endDate).format("MMM DD YYYY");

  const monthsDifference = Math.ceil(
    moment(endDate).diff(moment(startDate), "days") / 30
  );

  const { data: userData } = useGetUserQuery();
  const [updateBookingStatus, { isLoading, data }] =
    useUpdateBookingStatusMutation();

  const icons = listing.allowedStorage.map((storage: string) => {
    return allowedStorageType.map((allowedStorage: any) => {
      if (allowedStorage.name == storage) return allowedStorage.icon;
    });
  });

  const handleUpdate = async (status: string) => {
    if (!status || !["approve", "reject"].includes(status)) {
      toast.error("Please approve or reject the booking");
    }

    await updateBookingStatus({ bookingId: booking._id, body: { status } })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.BOOKING_STATUS_UPDATED);
      refetch();
    }
  }, [data]);

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const bookingDayStart = moment(startDate).tz(timeZone).startOf("day");
  const currentTime = moment().tz(timeZone);
  const isCheckInAllowed = currentTime.isSameOrAfter(bookingDayStart);
  const canUserCheckIn = booking.status == "approve" && !booking.isCheckIn;

  return (
    <div className="border border-[#EEEEEE] rounded-[16px] ">
      {isLoading && <Loader />}
      <div className="p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
        <button className=" absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]">
          <img src={DisputeIcon} alt="" />
        </button>
        <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
          <img
            className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
            src={getUrl(listing.storageImages[0])}
            alt=""
          />
          <div className="storage-details flex flex-col gap-[4px]">
            <p className="text-[18px] font-semibold max-md:text-[16px]">
              {listing.spaceType} for Storage at {listing.city}
            </p>
            <p className="text-[#959595] max-md:text-[14px]">
              <span className="font-semibold text-black">
                Booking Confirmation:
              </span>{" "}
              123456789
            </p>
            <div className="mt-auto flex gap-[12px] items-center">
              <span className="flex gap-[5px] w-[52px] h-[42px] justify-center items-center">
                {...icons}
              </span>
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-[40px] ml-auto mr-[50px] max-mlg:mr-[20px] max-mlg:gap-[20px] max-md:mr-0">
          <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
            {" "}
            ${listing.price}/month
          </p>
          <p className="text-[18px] text-[#235370] max-mlg:text-[16px] font-semibold">
            ${booking.totalAmount.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
          {userData?.firstName && (
            <p className="text-[#235370] font-semibold flex gap-[6px] items-center">
              <img src={UserIcon} /> {userData?.firstName}
            </p>
          )}
          <p className="text-[#235370] font-semibold flex gap-[6px] items-center">
            <img src={DateIcon} /> {monthsDifference}{" "}
            {monthsDifference > 1 ? "Months" : "Month"}
          </p>
        </div>
      </div>
      <div className="border-t border-[#EEEEEE] py-[10px] mx-[10px] flex items-center max-md:flex-col-reverse max-md:gap-[12px]">
        {booking.type == "future" && booking.status == "under_review" && (
          <div className="flex gap-[12px] mr-auto">
            <button className="btn-pri" onClick={() => handleUpdate("approve")}>
              Approve
            </button>
            <button className="btn-sec" onClick={() => handleUpdate("reject")}>
              Reject
            </button>
          </div>
        )}

        <div className=" flex items-center w-full justify-end max-sm:flex-col-reverse gap-[12px] max-sm:items-start">
          {canUserCheckIn &&
            (isCheckInAllowed ? (
              <Link
                className="inline-block text-[14px] text-[#FFFFFF]  font-regular cursor-pointer bg-green-700 rounded-[8px] px-[8px] py-[4px]"
                to={`/dashboard/booking/${booking._id}/check-in/${listing._id}`}
              >
                Check in
              </Link>
            ) : (
              <button className="inline-block text-[14px] text-[#FFFFFF]  font-regular cursor-pointer bg-[#959595] rounded-[8px] px-[8px] py-[4px]">
                Check in
              </button>
            ))}

          {/* start end date */}
          <div className="before-dotted-line flex justify-between relative max-sm:gap-[20px] max-w-[350px] w-full  max-md:max-w-[300px] max-sm:max-w-full max-sm:items-start">
            <div className="bg-white flex items-start gap-[6px] border border-[#EEEEEE] rounded-[8px] p-[10px] w-max">
              <img src={DarkDateIcon} alt="" />
              <div className="">
                <p className="mb-[4px]">Start Date</p>
                <span className="font-semibold text-[#959595] max-sm:text-[14px]">
                  {startDate}
                </span>
              </div>
            </div>
            <div className="bg-white flex items-start gap-[6px] border border-[#EEEEEE] rounded-[8px] p-[10px] w-max">
              <img src={DarkDateIcon} alt="" />
              <div className="">
                <p className="mb-[4px]">End Date</p>
                <span className="font-semibold text-[#959595] max-sm:text-[14px]">
                  {endDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostBookingCard;
