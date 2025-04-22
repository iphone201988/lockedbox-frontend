const PriceInfo = ({
  monthsDifference,
  price,
  role,
}: // selectedPlan,
{
  monthsDifference: number;
  price: number;
  role: string;
  // selectedPlan: any;
}) => {
  const total = price * monthsDifference;
  const isHost = role == "host";
  let serviceFee, grandTotal;
  if (isHost) {
    serviceFee = total * 0.03;
    grandTotal = (total - serviceFee).toFixed(2);
  } else {
    serviceFee = total * 0.12;
    grandTotal = (total + serviceFee).toFixed(2);
  }

  // const taxes = total * 0.12 + serviceFee * 0.12;
  // const grandTotal = (total + serviceFee + taxes).toFixed(2);

  return (
    <div className="">
      <p className="text-[20px] font-semibold">Price summary</p>
      <div className="">
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">
            ${price} x {monthsDifference} months
          </p>
          <p className="text-right font-semibold">${total.toFixed(2)} CAD</p>
        </div>
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">Service fee</p>
          <p className="text-right font-semibold">
            {" "}
            ${serviceFee.toFixed(2)} CAD
          </p>
        </div>
        {/* <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">Taxes</p>
          <p className="text-right font-semibold">${taxes.toFixed(2)} CAD</p>
        </div> */}
        <div className="flex flex-col justify-between py-[16px] gap-2">
          <div className="flex justify-between">
            <p className="text-left text-[#235370] font-bold">Total (CAD)</p>
            <p className="text-right text-[#235370] font-bold">
              ${grandTotal} CAD
            </p>
          </div>
          {/* <div className="flex justify-between">
            <p className="text-left text-[#235370] font-bold">
              Monthly Payout (CAD)
            </p>
            <p className="text-right text-[#235370] font-bold">
              ${(total / monthsDifference).toFixed(2)} CAD
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
