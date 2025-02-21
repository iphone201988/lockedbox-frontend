import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/icons/close-icn.png";
import { useChangeUserAuthMutation } from "../../../redux/api";
import { handleError } from "../../../utils/helper";
import Loader from "../../Loader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../constants/api-responses";

const VerificationCodePopup = ({
  setShowPopup,
  showPopup,
  refetch,
}: VerificationCodePopupProps) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<VerifyFormType>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [isPhone, setIsPhone] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [changeUserAuth, { data, isLoading }] = useChangeUserAuthMutation();

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
      await changeUserAuth({
        newOtp: finalOtp,
        type: isPhone ? 2 : 1,
        typeFor: 2,
      }).unwrap();
    } catch (error: any) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      console.log("verified data::::", data);
      toast.success(
        isPhone
          ? ResponseMessages.PHONE_VERIFIED
          : ResponseMessages.EMAIL_VERIFIED
      );
      refetch();
      setShowPopup((prev: any) => ({ ...prev, verification: false }));
    }
  }, [data]);

  useEffect(() => {
    if (showPopup?.phone) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }

    setShowPopup((prev: any) => ({ ...prev, phone: false, email: false }));
  }, []);

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      {isLoading && <Loader />}
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px] cursor-pointer">
          <img
            src={CloseIcon}
            alt=""
            onClick={() =>
              setShowPopup((prev: any) => ({
                ...prev,
                verification: false,
              }))
            }
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Verify phone number
          </p>
        </header>
        <body className="max-w-[400px] mx-auto">
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Enter verification code</p>
            {/* <div className="w-full max-w-[100%]">
              <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="number"
                name="code"
                value={formData?.otp ? formData?.otp : ""}
                onChange={(e) => handleInputChange(e, setFormData)}
                placeholder="Enter code"
                error={errors?.otp ? errors?.otp.toString() : ""}
              />
            </div> */}

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
              <button
                className="btn-pri mt-[40px] cursor-pointer"
                type="submit"
              >
                Verify
              </button>
            </form>
          </div>
          {/* <button
            className="btn-pri ml-auto !block mt-[16px]"
            onClick={handleSubmit}
          >
            Verify
          </button> */}

          {/* <ResendOTP
            formData={formData}
            type={forgot ? OtpType.RESEND_FORGET : OtpType.RESEND_REGISTER}
          /> */}
        </body>
      </div>
    </div>
  );
};

export default VerificationCodePopup;
