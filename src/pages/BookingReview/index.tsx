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
  const [insuranceError, setInsuranceError] = useState<string>("");
  const paymentRef = useRef<any>(null);

  const [requestBooking, { data: bookingData, isLoading: requestLoading }] =
    useRequestBookingMutation();

  if (!id || !location.state?.startDate || !location.state?.endDate) {
    return <Navigate to="/" />;
  }

  const { startDate, endDate } = location.state;

  const monthsDifference = Math.ceil(
    moment(endDate, "MM-DD-YYYY").diff(
      moment(startDate, "MM-DD-YYYY"),
      "months",
      true
    )
  );

  console.log("monthsDifference:::", monthsDifference);

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

    if (!content) {
      toast.error("Content is required!");
      return;
    }

    const paymentMethodId = await paymentRef.current.handleSubmit();

    if (!paymentMethodId) {
      toast.error("Please select your payment method details");
      return;
    }

    if (!selectedPlan || !selectedPlan?.price) {
      setInsuranceError("Please select any insurance plan");
      return;
    }

    const amount = listing.price * monthsDifference;
    const serviceFee = amount * 0.12;
    const tax = amount * 0.12 + serviceFee * 0.05;
    const grandTotal =
      amount + serviceFee + tax + (selectedPlan ? selectedPlan?.price : 0);

    await requestBooking({
      listingId: id,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      hostId: listing?.userId[0]._id,
      content,
      paymentMethodId,
      currency: "cad",
      insuranceId: selectedPlan.id,
      amount: amount.toFixed(2),
      tax: tax.toFixed(2),
      serviceFee: serviceFee.toFixed(2),
      totalAmount: grandTotal.toFixed(2),
      isCurrentDate:
        moment(startDate).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD"),
    })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (bookingData?.success) {
      toast.success(ResponseMessages.BOOKING_REQUESTED);
      navigate("/dashboard/booking", { replace: true });
    }
  }, [bookingData]);
  return (
    <div className="">
      {(isLoading || requestLoading) && <Loader />}
      <ProfileNavbar />
      <div className="max-w-[1120px]  mx-auto mt-[24px] max-mlg:px-[20px]">
        <div className=" flex border border-[#EEEEEE] rounded-[16px] max-md:flex-col">
          <div className="w-[50%] max-lg:w-[40%] max-md:w-[100%]">
            {listing && <BookingInfo listing={listing} />}
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
            insuranceError={insuranceError}
          />
          {listing && (
            <MessageHost
              handleRequestBooking={handleRequestBooking}
              setContent={setContent}
              listing={listing}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingReview;
