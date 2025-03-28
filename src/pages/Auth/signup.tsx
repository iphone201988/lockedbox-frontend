import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupBgImg from "../../assets/signup-img.png";
import BackButton from "../../components/BackButton";
import { SignUpSchema } from "../../schema";
import Input from "../../components/Input";
import {
  getNextAuthUrl,
  handleError,
  handleInputChange,
} from "../../utils/helper";
import SignUpMethod from "../../components/SignUpMethod";
import Phone from "../../components/Phone";
import Logo from "../../components/Logo";
import { useSignUpUserMutation } from "../../redux/api";
import { useForm } from "../../hooks/useForm";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../constants/api-responses";
import * as yup from "yup";

type SignUpFormType = yup.InferType<typeof SignUpSchema>;
const initialState: SignUpFormType = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "",
};

const Signup = () => {
  const [signUpUser, { isLoading, data }] = useSignUpUserMutation();
  const { formData, setFormData, validate, errors } = useForm(
    SignUpSchema,
    initialState
  );

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const [signupMethod, setSignupMethod] = useState<AuthType>({
    email: true,
    phone: false,
  });

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();

    if (hasErrors) return;

    if (!isChecked) {
      setCheckboxError("You must agree to the Privacy Policy.");
      return;
    }

    setCheckboxError("");
    try {
      await signUpUser(formData).unwrap();
    } catch (error: any) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.OTP_SENT);
      const { _id: id, step } = data.userExists;
      const url = getNextAuthUrl(step);
      navigate(url, { state: { id, formData } });
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
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className="relative w-full">
          <img className="rounded-4xl max-md:hidden" src={SignupBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]" />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Create an account
          </h1>

          <div className="w-full mt-[30px] flex flex-col gap-[20px] items-center">
            <SignUpMethod
              signupMethod={signupMethod}
              setSignupMethod={setSignupMethod}
            />
            <div className="flex gap-[16px] relative w-full max-w-[540px] mb-[10px]">
              <div className="w-full">
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="text"
                  name="firstName"
                  value={formData?.firstName}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Enter First name"
                  error={errors?.firstName}
                />
              </div>
              <div className="w-full">
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="text"
                  name="lastName"
                  value={formData?.lastName}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Enter Last name"
                  error={errors?.lastName}
                />
              </div>
            </div>
            {signupMethod.email && (
              <div className="input-with-icon relative w-full max-w-[540px]">
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Email"
                  error={errors?.email}
                />
              </div>
            )}
            {signupMethod.phone && (
              <div className="input-with-icon relative w-full max-w-[540px]">
                <Phone
                  error={errors?.phone}
                  value={formData?.phone}
                  onChange={(phone: any, data: any) =>
                    setFormData({
                      ...formData,
                      phone: phone == data.dialCode ? "" : phone,
                      countryCode: `+${data.dialCode}`,
                    })
                  }
                />
              </div>
            )}

            <div className="input-with-icon relative w-full max-w-[540px] flex gap-[6px]">
              <input
                className="border border-[#235370] rounded-2xl w-[24px] h-[24px] min-w-[24px] cursor-pointer"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>
                By continuing, you consent to receive calls and messages from
                LockedBox in accordance with our{" "}
                <Link className="text-[#235370] underline" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </p>
            </div>
            {checkboxError && <p className="text-red-500">{checkboxError}</p>}
          </div>
          <button
            className="btn-pri mt-[40px] cursor-pointer"
            onClick={handleSubmit}
          >
            Next
          </button>
          <p className="mt-[40px]">
            Already have an account?{" "}
            <Link className="text-[#235370] font-semibold" to="/signin">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
