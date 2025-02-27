import BookingInfo from "../../components/BookingReview/booking-info";
import PriceSummary from "../../components/BookingReview/price-summary";
import InsuranceOptions from "../../components/BookingReview/insurance-options";
import MessageHost from "../../components/BookingReview/message-host";
import ProfileNavbar from "../../components/ProfileNavbar";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  useGetListingByIdQuery,
  useRequestBookingMutation,
} from "../../redux/api";
import Loader from "../../components/Loader";
import { useEffect, useRef, useState } from "react";
import PriceInfo from "../../components/BookingReview/price-info";
import moment from "moment";
import { toast } from "react-toastify";
import { handleError } from "../../utils/helper";
import { ResponseMessages } from "../../constants/api-responses";

const BookingReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [listing, setListing] = useState<any>();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [content, setContent] = useState<string>("");
  const paymentRef = useRef<any>(null);

  const [requestBooking, { data: bookingData, isLoading: requestLoading }] =
    useRequestBookingMutation();

  if (!id || !location.state?.startDate || !location.state?.endDate) {
    return <Navigate to="/" />;
  }

  const { startDate, endDate } = location.state;

  const monthsDifference = Math.ceil(
    moment(endDate).diff(moment(startDate), "days") / 30
  );

  const { data, isLoading } = useGetListingByIdQuery(id);
  useEffect(() => {
    if (data?.success) {
      setListing(data.listing);
    }
  }, [data]);

  const handleRequestBooking = async () => {
    if (!paymentRef.current) {
      toast.error("Something went wrong!");
      return;
    }
    const paymentMethodId = await paymentRef.current.handleSubmit();

    if (!paymentMethodId) {
      return;
    }

    await requestBooking({
      listingId: id,
      startDate,
      endDate,
      hostId: listing?.userId,
      content,
    })
      .unwrap()
      .catch((error) => handleError(error, navigate));
  };

  useEffect(() => {
    console.log("bookingData :::", bookingData);
    if (bookingData?.success) {
      toast.success(ResponseMessages.BOOKING_REQUESTED);
      // navigate("/dashboard/booking", { replace: true });
    }
  }, [bookingData]);
  return (
    <div className="">
      {(isLoading || requestLoading) && <Loader />}
      <ProfileNavbar />
      <div className="max-w-[1120px]  mx-auto mt-[24px] max-mlg:px-[20px]">
        <div className=" flex border border-[#EEEEEE] rounded-[16px] max-md:flex-col">
          <div className="w-[50%] max-lg:w-[40%] max-md:w-[100%]">
            <BookingInfo />
            <div className="px-[20px]">
              <PriceInfo
                monthsDifference={monthsDifference}
                price={listing?.price}
                selectedPlan={selectedPlan}
              />
            </div>
          </div>
          <div className="w-[50%] border-l border-[#EEEEEE] max-lg:w-[60%] max-md:w-[100%] max-md:border-l-0 max-md:border-t">
            {listing && (
              <PriceSummary
                startDate={moment(startDate).format("MMM DD YYYY")}
                endDate={moment(endDate).format("MMM DD YYYY")}
                paymentRef={paymentRef}
              />
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto  max-mlg:px-[20px]">
        <div className="max-w-[520px]">
          <InsuranceOptions
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
          <MessageHost
            handleRequestBooking={handleRequestBooking}
            setContent={setContent}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingReview;
