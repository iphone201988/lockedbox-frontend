import { Link, useNavigate } from "react-router-dom";
import LoginBgImg from "../../assets/login-img.png";
import BackButton from "../../components/BackButton";
import { EyeOpen } from "../../icons";
import Phone from "../../components/Phone";
import { useState } from "react";
import Input from "../../components/Input";
import { handleInputChange } from "../../utils/helper";
import SignUpMethod from "../../components/SignUpMethod";
import { SignInSchema, validateForm } from "../../schema";
import * as yup from "yup";
import Logo from "../../components/Logo";

type SignUpFormType = yup.InferType<typeof SignInSchema>;

const initialState: SignUpFormType = {
  email: "",
  phone: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormType>(initialState);
  const [errors, setErrors] = useState<SignUpFormType>(initialState);

  const [signupMethod, setSignupMethod] = useState<AuthType>({
    email: true,
    phone: false,
  });

  const handleSubmit = async () => {
    const errors: any = await validateForm(SignInSchema, formData);

    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors(initialState);
    }

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className=" relative w-full">
          <img className="rounded-4xl max-md:hidden" src={LoginBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]"/>
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Log-In
          </h1>
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

            <div className="input-with-icon relative  w-full max-w-[540px]">
              <Input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                type="password"
                name="password"
                value={formData?.password}
                onChange={(e) => handleInputChange(e, setFormData)}
                placeholder="Password"
                error={errors?.password}
              />
              <span className=" absolute right-[16px] top-[20px] cursor-pointer">
                <EyeOpen />
              </span>
              <Link
                className="text-right block mt-[4px] text-[#235370] "
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            className="btn-pri mt-[40px] cursor-pointer"
            onClick={handleSubmit}
          >
            Continue
          </button>
          <p className="mt-[40px]">
            Don’t have an account?{" "}
            <Link className="text-[#235370] font-semibold" to="/signup">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
