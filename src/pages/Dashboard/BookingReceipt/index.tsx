import BookingReceiptDetails from "./components/booking-receipt-details";
import Logo from "../../../assets/logo.png";
import BookingReceiptInfo from "./components/booking-receipt-info";
import { useGetBookingReceiptQuery } from "../../../redux/api";
import { Navigate, useLocation, useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
import { useGetBookingReceiptForAdminQuery } from "../../../redux/api/admin";

const BookingReceipt = () => {
  const { bookingId } = useParams();
  const location = useLocation();
  const isAdmin = location.state?.isAdmin;
  if (!bookingId) return <Navigate to="/dashboard/home" />;
  const { data, isLoading } = isAdmin
    ? useGetBookingReceiptForAdminQuery(bookingId)
    : useGetBookingReceiptQuery(bookingId);

  const [listing, setListing] = useState(null);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (data?.success) {
      setListing(data?.booking?.listingId);
      setBooking({ ...data.booking, listingId: undefined });
    }
  }, [data]);
  return (
    <div className="">
      {isLoading && <Loader />}
      <div className="flex justify-center pt-[40px]">
        <img className="max-w-[158px]" src={Logo} alt="" />
      </div>
      <div className="max-w-[1120px]  mx-auto mt-[24px] max-mlg:px-[20px]">
        <div className=" flex border border-[#EEEEEE] rounded-[16px] max-md:flex-col">
          <div className="w-[50%] max-lg:w-[40%] max-md:w-[100%]">
            {listing && <BookingReceiptInfo listing={listing} />}
          </div>
          <div className="w-[50%] border-l border-[#EEEEEE] max-lg:w-[60%] max-md:w-[100%] max-md:border-l-0 max-md:border-t">
            {booking && <BookingReceiptDetails booking={booking} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReceipt;
