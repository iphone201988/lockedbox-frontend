const InsuranceOptions = () => {
  return (
    <div className="py-[16px] border-b border-[#EEEEEE]">
      <p className="text-[20px] font-semibold mb-[6px]">Insurance Options</p>
      <div className="grid grid-cols-[repeat(3,_1fr)] gap-[10px] max-md:grid-cols-[repeat(1,_1fr)]">
        <div className="on-hover-text border border-[#EEEEEE] p-[24px] rounded-[16px] cursor-pointer hover:bg-[#235370] hover:text-[#fff] relative">
          <p className="text-[18px] text-center font-semibold">Extended</p>
          <p className="show-on-hover font-semibold">
            Coverage of items up to $8,000. <br /> $20.00/month
          </p>
        </div>
        <div className="on-hover-text border border-[#EEEEEE] p-[24px] rounded-[16px] cursor-pointer hover:bg-[#235370] hover:text-[#fff] relative">
          <p className="text-[18px] text-center font-semibold">Primary</p>
          <p className="show-on-hover font-semibold">
            Coverage of items up to $3,000. <br />
            $15.99/month
          </p>
        </div>
        <div className="on-hover-text border border-[#EEEEEE] p-[24px] rounded-[16px] cursor-pointer hover:bg-[#235370] hover:text-[#fff] relative">
          <p className="text-[18px] text-center font-semibold">Essential</p>
          <p className="show-on-hover font-semibold">
            Coverage of items up to $300. <br />
            $5.99/month
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceOptions;
