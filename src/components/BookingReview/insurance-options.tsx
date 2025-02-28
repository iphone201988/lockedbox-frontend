import { useEffect, useState } from "react";
import { useGetInsurancePlansQuery } from "../../redux/api";

type InsurancePlans = {
  id: string;
  name: string;
  coverage: number;
  price: number;
};
const InsuranceOptions = ({
  selectedPlan,
  setSelectedPlan,
}: {
  selectedPlan: any;
  setSelectedPlan: any;
}) => {
  const { data } = useGetInsurancePlansQuery();
  const [insurancePlans, setInsurancePlans] = useState<InsurancePlans[]>([]);

  useEffect(() => {
    if (data?.success) {
      console.log("data:::", data);
      const plans = data?.imsurancePlans.map((plan: any) => ({
        id: plan._id,
        name: plan.name,
        coverage: plan.coverage,
        price: plan.price,
      }));

      setInsurancePlans(plans);
    }
  }, [data]);

  return (
    <div className="py-[16px] border-b border-[#EEEEEE]">
      <p className="text-[20px] font-semibold mb-[6px]">Insurance Options</p>
      <div className="grid grid-cols-[repeat(3,_1fr)] gap-[10px] max-md:grid-cols-[repeat(1,_1fr)]">
        {insurancePlans.map((plan: InsurancePlans) => (
          <div
            key={plan.name}
            className={`on-hover-text border border-[#EEEEEE] p-[24px] rounded-[16px] cursor-pointer hover:bg-[#235370] hover:text-[#fff] relative ${
              selectedPlan?.name === plan.name ? "bg-[#235370] text-white" : ""
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <p className="text-[18px] text-center font-semibold">{plan.name}</p>
            <p className="show-on-hover font-semibold">
              Coverage of items up to ${plan.coverage}. <br /> ${plan.price}
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
