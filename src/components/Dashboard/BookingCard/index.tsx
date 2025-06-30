import DisputeIcon from "../../../assets/icons/dispute-icn.png";
import moment from "moment-timezone";
import { allowedStorage as allowedStorageType } from "../../../constants/index";
import { Link, Navigate } from "react-router-dom";
import { getUrl } from "../../../utils/helper";
import { useState } from "react";
import CancelBooking from "../../Popups/CancelBooking";
import CheckInPopup from "../../Popups/CheckInPopUp";

const BookingCard = ({ booking, type, role }: BookingCard) => {
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [disputePopup, setDisputePopup] = useState(false);
  const showReceipt =
    (type == "future" && booking.status == "approve") || type == "current";

  if (!booking || !booking.listingId) return <Navigate to="/" />;

  const { listingId: listing } = booking;
  const [cancelBookingPopup, setCancelBookingPopup] = useState(false);
  let { startDate, endDate } = booking;
  startDate = moment(startDate).format("MMM DD YYYY");
  endDate = moment(endDate).format("MMM DD YYYY");

  const icons = listing.allowedStorage.map((storage: string) => {
    return allowedStorageType.map((allowedStorage: any) => {
      if (allowedStorage.name == storage) return allowedStorage.icon;
    });
  });

  const isHost = role == "host";
  // const from = isHost
  //   ? booking.hostId?.firstName + " " + booking.hostId?.lastName
  //   : booking.renterId?.firstName + " " + booking.renterId?.lastName;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const bookingDayStart = moment(startDate).tz(timeZone).startOf("day");
  const currentTime = moment().tz(timeZone);
  const isCheckInAllowed = currentTime.isSameOrAfter(bookingDayStart);
  const canUserCheckIn =
    (type == "future" || type == "current") &&
    !booking.isCheckIn &&
    booking.status == "approve";

  const canUserCancelBooking =
    booking.status != "reject" && booking.status != "under_review";

  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      {booking.isCheckIn && type == "current" && (
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

      <button className=" absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]">
        {showReceipt && canUserCancelBooking && (
          <img
            src={DisputeIcon}
            alt=""
            className="cursor-pointer"
            onClick={() => setCancelBookingPopup(true)}
          />
        )}
      </button>
      <div className="flex w-[70%] gap-[12px] max-md:flex-col max-md:w-full pr-[12px]">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(listing.storageImages[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-mlg:text-[16px]">
            {listing.spaceType} for Storage at {listing.city}
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">
              Booking Confirmation:
            </span>{" "}
            {booking._id}
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            {role == "host" ? (
              <>
                <span className="font-semibold text-black">Address:</span>{" "}
                {listing?.address}
              </>
            ) : (
              <>
                {/* <span className="font-semibold text-black">From:</span> {from} */}
                <span className="font-semibold text-black">Address:</span>{" "}
                {listing?.address}
              </>
            )}
          </p>
          {!isHost && (
            <p className="text-[#959595] max-md:text-[16px]">
              <span className="font-semibold text-black">From:</span>{" "}
              {/* {startDate} - {endDate} */}
              {moment(startDate).tz(timeZone).format("MMM DD YYYY")} -{" "}
              {moment(endDate).tz(timeZone).format("MMM DD YYYY")}
            </p>
          )}
          <div className="mt-auto flex items-center">
            <span className="flex gap-[5px] w-auto justify-center items-center fix-svg-height">
              {...icons}
            </span>
            {!isHost && (
              <Link
                className="text-[14px] text-[#235370] underline ml-[8px] font-semibold"
                to={`/listing-details/${listing._id}`}
              >
                View listing
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto mr-[50px] max-mlg:mr-[20px] max-mlg:gap-[20px] max-md:mr-0">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="font-semibold text-black">Size:</span>{" "}
          {listing.length}’x{listing.width}’
        </p>
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          ${booking.totalAmount.toFixed(2)} total
        </p>
      </div>

      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        {/* under review btn class */}
        {booking.status == "under_review" && (
          <button className="btn-yellow">Under Review</button>
        )}

        {/* confirmed btn class */}
        {booking.status == "approve" && (
          <button className="btn-green">Confirmed</button>
        )}

        {booking.status == "reject" && booking.isBookingConfirmed && (
          <button className="btn-red">Cancelled</button>
        )}

        {booking.status == "reject" && !booking.isBookingConfirmed && (
          <button className="btn-red">Rejected</button>
        )}
      </div>

      {showReceipt && (
        <div className="flex gap-[12px] items-end absolute bottom-[10px] right-[10px] max-md:left-[10px] max-sm:flex-col max-sm:items-start max-sm:gap-[6px]">
          <Link
            className=" inline-block text-[14px] text-[#235370] underline font-semibold  cursor-pointer"
            to={`/booking/${booking._id}/receipt`}
          >
            View Receipt
          </Link>
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
        </div>
      )}

      {cancelBookingPopup && (
        <CancelBooking
          bookingId={booking._id}
          onClose={() => setCancelBookingPopup(false)}
        />
      )}
    </div>
  );
};

export default BookingCard;
