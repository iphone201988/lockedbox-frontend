import moment from "moment";
import DisputeIcon from "../../../assets/icons/dispute-icn.png";
import { getUrl } from "../../../utils/helper";
import { useEffect, useState } from "react";
import RefundAmountPopup from "./refund-amount-popup";
import { useCloseDisputeMutation } from "../../../redux/api/admin";
import Loader from "../../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BookingsAndPayments = ({ booking }: { booking: any }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const transaction = booking.transactionRentId.length
    ? booking.transactionRentId[0]
    : {};
  let { startDate, endDate } = booking;
  startDate = moment(startDate).format("MMM DD YYYY");
  endDate = moment(endDate).format("MMM DD YYYY");
  const transactionDate = moment(transaction?.createdAt).format("MMM DD YYYY");

  const [showRefundPopup, setShowRefundPopup] = useState(false);

  const [closeDispute, { data, isLoading }] = useCloseDisputeMutation();

  const handleCloseDispute = async () => {
    await closeDispute({ userId: id, bookingId: booking._id })
      .unwrap()
      .catch((error: any) => {
        toast.error(error.data.message);
        if (error.status == 401) {
          sessionStorage.removeItem("token");
          navigate("/admin/logout");
        }
      });
  };

  useEffect(() => {
    if (data?.success) {
      window.location.href = `/admin/home/bookings/${id}`;
    }
  }, [data]);

  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative">
      {isLoading && <Loader />}
      {showRefundPopup && (
        <RefundAmountPopup
          image={getUrl(booking.listingId.storageImages[0])}
          spaceType={booking.listingId.spaceType}
          city={booking.listingId.city}
          setShowRefundPopup={setShowRefundPopup}
          bookingId={booking._id}
          totalAmount={booking.totalAmount}
        />
      )}
      {booking.status == "under_review" && (
        <button
          className=" absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]"
          onClick={handleCloseDispute}
        >
          <img src={DisputeIcon} alt="" />
        </button>
      )}
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(booking.listingId.storageImages[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {booking.listingId.spaceType} for storage in{" "}
            {booking.listingId.city}
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">
              Booking Confirmation:
            </span>{" "}
            {booking._id}
          </p>
          <p className="text-[#959595] max-md:text-[16px]">
            <span className="font-semibold text-black">From:</span> {startDate}-{" "}
            {endDate}
          </p>
          {transaction?.cardLast4Digits && (
            <p className="mt-auto text-[#959595]">
              Paid on {transactionDate} with card{" "}
              <span className="text-[#235370]">
                XXXX XXXX XXXX {transaction?.cardLast4Digits}
              </span>
            </p>
          )}
        </div>
      </div>
      <div className=" flex items-center gap-[40px] ml-auto mr-[50px] max-mlg:mr-[20px] max-mlg:gap-[20px] max-md:mr-0">
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          <span className="font-semibold text-black">Size:</span>{" "}
          {booking.listingId.length}’x{booking.listingId.width}’
        </p>
        <p className="text-[18px] text-[#959595] max-mlg:text-[16px]">
          ${booking?.totalAmount} total
        </p>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        {/* under review btn class */}
        {/* <button className='btn-yellow'>Under Review</button> */}

        {booking.status == "approve" && (
          <button className="btn-green cursor-pointer">Refunded</button>
        )}

        {booking.status == "reject" && (
          <button className="btn-red cursor-pointer">Rejected</button>
        )}

        {booking.status == "under_review" && (
          <button
            className="btn-red cursor-pointer"
            onClick={() => setShowRefundPopup(true)}
          >
            Refund
          </button>
        )}
      </div>
      <button
        className="text-[14px] text-[#235370] underline ml-[8px] font-semibold absolute bottom-[10px] right-[10px] cursor-pointer max-md:left-0"
        onClick={() =>
          navigate(`/booking/${booking._id}/receipt`, {
            state: { isAdmin: true },
          })
        }
      >
        View Receipt
      </button>
    </div>
  );
};

export default BookingsAndPayments;
