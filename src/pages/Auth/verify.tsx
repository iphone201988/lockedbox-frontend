import SignupBgImg from "../../assets/signup-img.png";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../components/Logo";

const Verify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<VerifyFormType>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length > 1) return;

    setOtp((prev) => ({
      ...prev,
      [name as keyof VerifyFormType]: value,
    }));

    if (value && e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpCode = Object.values(otp).join("");
    if (otpCode.length < 4) {
      setError("Please enter all four digits.");
      return;
    }

    console.log("Entered OTP:", otpCode);
    setError("");

    navigate("/create-password");
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
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

          <p className="mt-[40px]">
            Resend code in{" "}
            <a className="text-[#235370] font-semibold" href="#">
              60s
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
