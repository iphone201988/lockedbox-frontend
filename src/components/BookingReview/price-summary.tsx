import PaymentDetail from "./payment-detail";
import StartEndDate from "./start-end-date";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PriceSummary = ({
  startDate,
  endDate,
  paymentRef,
}: {
  startDate: string;
  endDate: string;
  paymentRef: any;
}) => {
  return (
    <div className="p-[20px]">
      <div className="">
        <StartEndDate startDate={startDate} endDate={endDate} />
      </div>
      <div className="">
        <Elements stripe={stripePromise}>
          <PaymentDetail ref={paymentRef} />
        </Elements>
      </div>
    </div>
  );
};

export default PriceSummary;
