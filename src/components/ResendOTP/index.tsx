import { useEffect, useState } from "react";
import { useSendOTPMutation } from "../../redux/api";
import { handleError } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResendOTP = ({ formData, type }: { formData: any; type: number }) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [sendOTP, { isLoading, data }] = useSendOTPMutation();

  const handleResendOTP = async () => {
    try {
      await sendOTP({ ...formData, type }).unwrap();
      setTimer(30);
      setIsResendDisabled(true);
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) toast.success(data?.message);
  }, [data]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);
  return (
    <p className="mt-[40px]">
      {isResendDisabled ? (
        <>
          Resend code in{" "}
          <span className="text-[#235370] font-semibold">{timer}s</span>
        </>
      ) : (
        <>
          <button
            onClick={handleResendOTP}
            disabled={isLoading}
            className="text-[#235370] font-semibold cursor-pointer"
          >
            {isLoading ? "Resending..." : "Resend Code"}
          </button>
        </>
      )}
    </p>
  );
};

export default ResendOTP;
