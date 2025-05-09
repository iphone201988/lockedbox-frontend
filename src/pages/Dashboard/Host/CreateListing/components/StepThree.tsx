import { useEffect, useState } from "react";
import { useAddStripeConnectMutation } from "../../../../../redux/api";
import Loader from "../../../../../components/Loader";
import { handleError } from "../../../../../utils/helper";
import { useNavigate, useParams } from "react-router-dom";

const StepThree = ({ handleSubmit }: { handleSubmit: any }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [addStripeConnect, { isLoading, data }] = useAddStripeConnectMutation();

  const handleClick = async () => {
    try {
      await addStripeConnect({}).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      console.log("stripe connect account::::", data);
      const { url, stripeAccountId, isStripeAccountConnected } =
        data?.accountLink;

      if (stripeAccountId && isStripeAccountConnected) {
        setIsConnected(true);
        return;
      }

      if (url) {
        window.open(url, "_blank");
      }
    }
  }, [data]);

  return (
    <div className="flex flex-col">
      {isLoading && <Loader />}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Confirm your identity & <br/>
            connect bank account{" "}
            <span className="text-red-500">*</span>
          </p>
        </div>
        <div className=" max-w-[460px] w-full max-md:max-w-full">
          <div className="">
            {!isConnected ? (
              <p>
                To build trust and ensure security, all hosts must complete
                identity verification through Stripe. You'll also connect your
                bank account to receive automatic payments securely.
              </p>
            ) : (
              <p className=" text-green-600 font-bold">
                Account Verified Successfully
              </p>
            )}
          </div>
          {!isConnected ? (
            <button
              className="btn-pri mr-auto mt-[16px]"
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          ) : (
            <button
              className="btn-pri mr-auto mt-[16px]"
              onClick={handleSubmit}
            >
              {id ? "Update Listing" : "Create Listing"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
