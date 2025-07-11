import DisputeIcon from "../../../assets/icons/dispute-icn.png";
import UserIcon from "../../../assets/icons/user-icn.png";
import DateIcon from "../../../assets/icons/date-picker-icn.png";
import DarkDateIcon from "../../../assets/icons/date-picker-black-icn.png";
import { allowedStorage as allowedStorageType } from "../../../constants/index";
import { Link, Navigate, useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import {
  useAddStripeConnectMutation,
  useGetUserQuery,
  useUpdateBookingStatusMutation,
} from "../../../redux/api";
import Loader from "../../Loader";
import { toast } from "react-toastify";
import { getUrl, handleError } from "../../../utils/helper";
import { useEffect, useState } from "react";
import { ResponseMessages } from "../../../constants/api-responses";
import CancelBooking from "../../Popups/CancelBooking";
import CheckInPopup from "../../Popups/CheckInPopUp";

const HostBookingCard = ({
  booking,
  refetch,
}: {
  booking: any;
  refetch: any;
}) => {
  const navigate = useNavigate();
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [disputePopup, setDisputePopup] = useState(false);
  const [cancelBookingPopup, setCancelBookingPopup] = useState(false);
  if (!booking || !booking.listingId) return <Navigate to="/" />;

  const { listingId: listing } = booking;
  let { startDate, endDate } = booking;
  startDate = moment.utc(startDate).format("MMM DD YYYY");
  endDate = moment.utc(endDate).format("MMM DD YYYY");
  
  console.log("------------------------------",startDate)

  const monthsDifference = Math.ceil(
    moment(endDate, "MMM DD YYYY").diff(
      moment(startDate, "MMM DD YYYY"),
      "months",
      true
    )
  );
  

  const { data: userData } = useGetUserQuery();
  const role = userData?.userExists?.dashboardRole;
  const [updateBookingStatus, { isLoading, data }] =
    useUpdateBookingStatusMutation();
  const [addStripeConnect, { isLoading: stripeLoading }] =
    useAddStripeConnectMutation();

  const icons = listing.allowedStorage.map((storage: string) => {
    return allowedStorageType.map((allowedStorage: any) => {
      if (allowedStorage.name == storage) return allowedStorage.icon;
    });
  });

  const updateBookingHandler = async (status: string) => {
    updateBookingStatus({ bookingId: booking._id, body: { status } })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  const handleUpdate = async (status: string) => {
    if (!status || !["approve", "reject"].includes(status)) {
      toast.error("Please approve or reject the booking");
    }

    if (!userData?.userExists.isStripeAccountConnected) {
      const response = await addStripeConnect({});

      if (response?.data?.success) {
        const { url, stripeAccountId, isStripeAccountConnected } =
          response?.data.accountLink;

        if (stripeAccountId && isStripeAccountConnected) {
          updateBookingHandler(status);
          return;
        }
        if (url) window.open(url, "_blank");
      }
      return;
    }
    updateBookingHandler(status);
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
  const canUserCancelBooking =
    booking.status != "reject" && booking.status != "under_review";

    
  return (
    <div className="border border-[#EEEEEE] rounded-[16px] ">
      {(isLoading || stripeLoading) && <Loader />}
      <div className="p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
        {booking.isCheckIn && (
          <button
            className="text-red-500 font-semibold underline absolute top-[10px] right-[60px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]"
            onClick={() => setDisputePopup(true)}
          >
            Raise a Dispute
          </button>
        )}
        {disputePopup && (
          <CheckInPopup
            listing={listing}
            handleClose={() => setDisputePopup(false)}
            dispute={true}
            imageItems={imageItems}
            setImageItems={setImageItems}
            role={role}
            bookingId={booking._id}
          />
        )}
        {canUserCancelBooking && (
          <button
            className=" absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]"
            onClick={() => setCancelBookingPopup(true)}
          >
            <img src={DisputeIcon} alt="" />
          </button>
        )}
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
              {booking._id}
            </p>
            <p className="text-[#959595] max-md:text-[14px]">
              <span className="font-semibold text-black">Address:</span>{" "}
              {/* {booking.renterId?.firstName} {booking.renterId?.lastName}  */}
              {listing?.address}
            </p>
            <div className="mt-auto flex items-center">
              <span className="flex gap-[5px] w-auto justify-center items-center fix-svg-height">
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
            ${(booking.amount * 0.97).toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
          {userData?.firstName && (
            <p className="text-[#235370] font-semibold flex gap-[6px] items-center">
              <img src={UserIcon} /> {userData?.firstName}
            </p>
          )}
          <p className="text-[#235370] font-semibold flex gap-[6px] items-center relative">
            <img src={DateIcon} /> {monthsDifference}{" "}
            {monthsDifference > 1 ? "Months" : "Month"}
          </p>
        </div>
        {booking.status == "approve" && (
          <Link
            className="inline-block text-[14px] text-[#235370] underline font-semibold  cursor-pointer absolute bottom-[10px] right-[10px]"
            to={`/booking/${booking._id}/receipt`}
          >
            View Receipt
          </Link>
        )}
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

      {cancelBookingPopup && (
        <CancelBooking
          bookingId={booking._id}
          onClose={() => setCancelBookingPopup(false)}
        />
      )}
    </div>
  );
};

export default HostBookingCard;
