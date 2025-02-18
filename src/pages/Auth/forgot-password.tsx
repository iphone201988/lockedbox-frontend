import { useEffect, useState } from "react";
import LoginBgImg from "../../assets/login-img.png";
import BackButton from "../../components/BackButton";
import SignUpMethod from "../../components/SignUpMethod";
import Input from "../../components/Input";
import { handleError, handleInputChange } from "../../utils/helper";
import Phone from "../../components/Phone";
import { SignUpSchema } from "../../schema";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { useSendOTPMutation } from "../../redux/api";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { OtpType } from "../../constants";

type ForgotPasswordFormType = yup.InferType<typeof SignUpSchema>;

const initialState: ForgotPasswordFormType = {
  email: "",
  phone: "",
  countryCode: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { formData, setFormData, errors, validate } = useForm(
    SignUpSchema,
    initialState
  );

  const [signupMethod, setSignupMethod] = useState<AuthType>({
    email: true,
    phone: false,
  });
  const [sendOTP, { data, isLoading }] = useSendOTPMutation();

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();

    if (hasErrors) return;

    try {
      await sendOTP({ ...formData, type: OtpType.FORGET }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(data.message);
      const { _id: id } = data.userExists;
      navigate("/verify", { state: { id, forgot: true, formData } });
    }
  }, [data]);

  useEffect(() => {
    if (signupMethod.email)
      setFormData({ ...formData, phone: undefined, countryCode: undefined });
    if (signupMethod.phone) setFormData({ ...formData, email: undefined });
  }, [signupMethod]);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {isLoading && <Loader />}
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
                  onChange={(phone: any, data: any) =>
                    setFormData({
                      ...formData,
                      phone,
                      countryCode: `+${data.dialCode}`,
                    })
                  }
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
