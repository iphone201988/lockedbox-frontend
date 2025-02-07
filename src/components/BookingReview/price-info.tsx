const PriceInfo = () => {
  return (
    <div className="">
      <p className="text-[20px] font-semibold">Price summary</p>
      <div className="">
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">$55 x 12 months</p>
          <p className="text-right font-semibold">$660.00 CAD</p>
        </div>
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">Service fee</p>
          <p className="text-right font-semibold"> $79.20 CAD</p>
        </div>
        <div className="flex justify-between py-[16px] border-b border-[#EEEEEE]">
          <p className="text-left text-[#959595]">Taxes</p>
          <p className="text-right font-semibold">$99.00 CAD</p>
        </div>
        <div className="flex justify-between py-[16px] ">
          <p className="text-left text-[#235370] font-bold">Total (CAD)</p>
          <p className="text-right text-[#235370] font-bold">$838.20 CAD</p>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
