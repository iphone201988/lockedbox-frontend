import moment from "moment";
import { getUrl } from "../../utils/helper";
import { Link } from "react-router-dom";

const PaymentHistoryDetail = ({ transaction }: { transaction: any }) => {
  const isRefund = transaction.transactionFor == "refund";
  const status = isRefund ? "Refunded" : transaction?.status;
  const { listingId: listing } = transaction;
  const { bookingId: booking } = transaction;

  let { startDate, endDate } = booking;
  startDate = moment(startDate).format("MMM DD YYYY");
  endDate = moment(endDate).format("MMM DD YYYY");

  const transactionDate = moment(transaction?.createdAt).format("MMM DD YYYY");

  return (
    <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px]">
      <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
        <img
          className="w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]"
          src={getUrl(listing.storageImages[0])}
          alt=""
        />
        <div className="storage-details flex flex-col gap-[4px]">
          <p className="text-[18px] font-semibold max-md:text-[16px]">
            {listing.spaceType} for storage in {listing.city}
          </p>
          <p className="text-[#959595] max-md:text-[14px]">
            <span className="font-semibold text-black">
              Booking Confirmation:
            </span>{" "}
            {booking._id}
          </p>
          <p className="text-[#959595] max-md:text-[16px]">
            {startDate} - {endDate}
          </p>
          <p className="text-[#959595] text-[14px] mt-auto">
            Paid on {transactionDate} with card{" "}
            <span className="text-[#235370]">
              XXXX XXXX XXXX {transaction?.cardLast4Digits}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
        <p className="text-[20px] font-semibold max-md:text-[18px]">
          ${transaction?.amount?.toFixed(2)}
        </p>
        <button className="btn-green capitalize">{status}</button>
        <Link
          className=" inline-block text-[14px] text-[#235370] underline font-semibold  cursor-pointer"
          to={`/booking/${booking._id}/receipt`}
        >
          View Receipt
        </Link>
      </div>
    </div>
  );
};

export default PaymentHistoryDetail;
