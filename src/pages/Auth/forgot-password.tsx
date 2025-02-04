import { useState } from "react";
import LoginBgImg from "../../assets/login-img.png";
import BackButton from "../../components/BackButton";
import SignUpMethod from "../../components/SignUpMethod";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";
import Phone from "../../components/Phone";
import { SignUpSchema, validateForm } from "../../schema";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Logo from "../../components/Logo";

type ForgotPasswordFormType = yup.InferType<typeof SignUpSchema>;

const initialState: ForgotPasswordFormType = {
  email: "",
  phone: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] =
    useState<ForgotPasswordFormType>(initialState);
  const [errors, setErrors] = useState<ForgotPasswordFormType>(initialState);

  const [signupMethod, setSignupMethod] = useState<AuthType>({
    email: true,
    phone: false,
  });

  const handleSubmit = async () => {
    const errors: any = await validateForm(SignUpSchema, formData);

    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors(initialState);
    }

    navigate("/verify");
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className=" relative w-full">
          <img className="rounded-4xl max-md:hidden" src={LoginBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]" />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Forgot Password
          </h1>
          <p className="text-center mt-[16px]">
            Enter Email/Phone number to get OTP
          </p>
          <div className="w-full mt-[30px] flex flex-col gap-[20px] items-center">
            <SignUpMethod
              signupMethod={signupMethod}
              setSignupMethod={setSignupMethod}
            />
            {signupMethod.email && (
              <div className="input-with-icon relative w-full max-w-[540px]">
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={(e) => handleInputChange(e, setFormData)}
                  placeholder="Email"
                  error={errors?.email}
                />
              </div>
            )}
            {signupMethod.phone && (
              <div className="input-with-icon relative w-full max-w-[540px]">
                <Phone
                  error={errors?.email}
                  value={formData?.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                />
              </div>
            )}
          </div>
          <button
            className="btn-pri mt-[40px] cursor-pointer"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
