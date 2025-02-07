import BookingInfo from "../../components/BookingReview/booking-info";
import PriceSummary from "../../components/BookingReview/price-summary";
import InsuranceOptions from "../../components/BookingReview/insurance-options";
import MessageHost from "../../components/BookingReview/message-host";
import ProfileNavbar from "../../components/ProfileNavbar";

const BookingReview = () => {
  return (
    <div className="">
      <ProfileNavbar />
      <div className="max-w-[1120px]  mx-auto mt-[24px] max-mlg:px-[20px]">
        <div className=" flex border border-[#EEEEEE] rounded-[16px] max-md:flex-col">
          <div className="w-[50%] max-lg:w-[40%] max-md:w-[100%]">
            <BookingInfo />
          </div>
          <div className="w-[50%] border-l border-[#EEEEEE] max-lg:w-[60%] max-md:w-[100%] max-md:border-l-0 max-md:border-t">
            <PriceSummary />
          </div>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto  max-mlg:px-[20px]">
        <div className="max-w-[520px]">
          <InsuranceOptions />
          <MessageHost />
        </div>
      </div>
    </div>
  );
};

export default BookingReview;
