const PriceInfo = ({
  monthsDifference,
  price,
}: // selectedPlan,
{
  monthsDifference: number;
  price: number;
  // selectedPlan: any;
}) => {
  const total = price * monthsDifference;
  const serviceFee = total * 0.12;
  const taxes = total * 0.12 + serviceFee * 0.05;
  const grandTotal = (total + serviceFee + taxes).toFixed(2);
  return (
    <div className="">
      <p className="text-[20px] font-semibold">Price summary</p>
      <div className="">
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">
            ${price} x {monthsDifference} months
          </p>
          <p className="text-right font-semibold">${total} CAD</p>
        </div>
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">Service fee</p>
          <p className="text-right font-semibold">
            {" "}
            ${serviceFee.toFixed(2)} CAD
          </p>
        </div>
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">Taxes</p>
          <p className="text-right font-semibold">${taxes.toFixed(2)} CAD</p>
        </div>
        <div className="flex justify-between py-[16px] ">
          <p className="text-left text-[#235370] font-bold">Total (CAD)</p>
          <p className="text-right text-[#235370] font-bold">
            ${grandTotal} CAD
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
