const InsuranceOptions = ({
  selectedPlan,
  setSelectedPlan,
}: {
  selectedPlan: any;
  setSelectedPlan: any;
}) => {
  const insurancePlans = [
    { name: "Extended", price: 20.0, coverage: "$8,000" },
    { name: "Primary", price: 15.99, coverage: "$3,000" },
    { name: "Essential", price: 5.99, coverage: "$300" },
  ];

  return (
    <div className="py-[16px] border-b border-[#EEEEEE]">
      <p className="text-[20px] font-semibold mb-[6px]">Insurance Options</p>
      <div className="grid grid-cols-[repeat(3,_1fr)] gap-[10px] max-md:grid-cols-[repeat(1,_1fr)]">
        {insurancePlans.map((plan) => (
          <div
            key={plan.name}
            className={`on-hover-text border border-[#EEEEEE] p-[24px] rounded-[16px] cursor-pointer hover:bg-[#235370] hover:text-[#fff] relative ${
              selectedPlan?.name === plan.name ? "bg-[#235370] text-white" : ""
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <p className="text-[18px] text-center font-semibold">{plan.name}</p>
            <p className="show-on-hover font-semibold">
              Coverage of items up to {plan.coverage}. <br /> ${plan.price}
              /month
            </p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <p className="mt-4 text-[18px] font-semibold">
          Selected Plan: {selectedPlan.name} - ${selectedPlan.price}/month
        </p>
      )}
    </div>
  );
};

export default InsuranceOptions;
