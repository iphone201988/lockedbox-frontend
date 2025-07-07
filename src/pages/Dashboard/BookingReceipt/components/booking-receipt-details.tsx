import moment from "moment";
import StartEndDate from "../../../../components/BookingReview/start-end-date";
import PriceInfo from "../../../../components/BookingReview/price-info";
import { useGetUserQuery } from "../../../../redux/api";

const BookingReceiptDetails = ({ booking }: { booking: any }) => {
  let { startDate, endDate } = booking;
  startDate = moment.utc(startDate).format("MMM DD YYYY");
  endDate = moment.utc(endDate).format("MMM DD YYYY");

  const { transactionRentId: transaction } = booking;
  const { listingId: listing } = booking;
  const { data: userData } = useGetUserQuery();

  console.log("listing:::", userData);
  return (
    <div className="p-[20px]">
      <div className="">
        <StartEndDate startDate={startDate} endDate={endDate} />
      </div>
      <div className="py-[20px]">
        <PriceInfo
          monthsDifference={booking.totalMonth}
          price={listing.price}
          role={userData?.userExists?.dashboardRole}
          // selectedPlan={0}
        />
      </div>
      <div className="">
        <div className="">
          <div className="pb-[20px]">
            <p className="text-[20px] font-semibold ">Payment details</p>
            <div className="my-[16px]">
              <p className=" font-semibold mb-[6px]">Card Number</p>
              <div className="w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder={`XXXX XXXX XXXX ${transaction.cardLast4Digits}`}
                />
                <p className="mt-[8px]">
                  {moment(transaction.createdAt).format(
                    "MMM Do, YYYY, h:mma z"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReceiptDetails;
