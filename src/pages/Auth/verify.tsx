import SignupBgImg from "../../assets/signup-img.png";
import BackButton from "../../components/BackButton";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { useVerifyOTPMutation } from "../../redux/api";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../constants/api-responses";
import Loader from "../../components/Loader";
import { getNextAuthUrl, handleError } from "../../utils/helper";
import { OtpType } from "../../constants";
import ResendOTP from "../../components/ResendOTP";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state || !location.state.id || !location.state.formData) {
    return <Navigate to="/" />;
  }

  const [otp, setOtp] = useState<VerifyFormType>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [error, setError] = useState("");
  const [verifyOTP, { isLoading, data }] = useVerifyOTPMutation();
  const { id, forgot, formData } = location.state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length > 1) return;

    setOtp((prev) => ({
      ...prev,
      [name as keyof VerifyFormType]: value,
    }));

    if (value && e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    } else if (!value && e.target.previousSibling) {
      (e.target.previousSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpCode = Object.values(otp).join("");
    if (otpCode.length < 4) {
      setError("Please enter all four digits.");
      return;
    }

    setError("");

    try {
      const finalOtp = otp.first + otp.second + otp.third + otp.fourth;
      await verifyOTP({
        id,
        otp: finalOtp,
        typeFor: forgot ? 2 : 1,
        type: formData?.email ? 1 : 2,
      }).unwrap();
    } catch (error: any) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.VERIFIED);
      const { step } = data.userExists;
      if (forgot) {
        navigate("/reset-password", { replace: true, state: { id } });
      } else {
        const url = getNextAuthUrl(step);
        navigate(url, { replace: true, state: { id } });
      }
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {isLoading && <Loader />}
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className="relative w-full">
          <img className="rounded-4xl max-md:hidden" src={SignupBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]" />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Verify your account
          </h1>
          <p className="text-center mt-[16px]">
            Enter the code you received via SMS or email
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[540px] flex flex-col items-center"
          >
            <div className="w-full mt-[30px] flex gap-[20px] justify-center">
              {(
                [
                  "first",
                  "second",
                  "third",
                  "fourth",
                ] as (keyof VerifyFormType)[]
              ).map((name, index) => (
                <input
                  key={index}
                  className="border border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl text-[24px] w-[60px] h-[60px] text-center"
                  type="number"
                  name={name}
                  min="0"
                  max="9"
                  value={otp[name]}
                  onChange={handleChange}
                />
              ))}
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button className="btn-pri mt-[40px] cursor-pointer" type="submit">
              Verify
            </button>
          </form>

          <ResendOTP
            formData={formData}
            type={forgot ? OtpType.RESEND_FORGET : OtpType.RESEND_REGISTER}
          />
        </div>
      </div>
    </div>
  );
};

export default Verify;
