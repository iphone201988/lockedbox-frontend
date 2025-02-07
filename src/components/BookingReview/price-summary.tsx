import PaymentDetail from "./payment-detail";
import PriceInfo from "./price-info";
import StartEndDate from "./start-end-date";

const PriceSummary = () => {
  return (
    <div className="p-[20px]">
      <div className="">
        <StartEndDate />
      </div>
      <div className="py-[30px]">
        <PriceInfo />
      </div>
      <div className="">
        <PaymentDetail />
      </div>
    </div>
  );
};

export default PriceSummary;
