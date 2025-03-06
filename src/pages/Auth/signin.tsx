import { Link, useNavigate } from "react-router-dom";
import LoginBgImg from "../../assets/login-img.png";
import BackButton from "../../components/BackButton";
import Phone from "../../components/Phone";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import {
  getNextAuthUrl,
  handleError,
  handleInputChange,
  setToken,
} from "../../utils/helper";
import SignUpMethod from "../../components/SignUpMethod";
import { SignInSchema } from "../../schema";
import * as yup from "yup";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { useLoginUserMutation } from "../../redux/api";
import Loader from "../../components/Loader";
import Password from "../../components/Password";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../../redux/reducer/auth";

type SignUpFormType = yup.InferType<typeof SignInSchema>;

const initialState: SignUpFormType = {
  email: "",
  phone: "",
  countryCode: "",
  password: "",
};

const SignIn = () => {
  const { formData, setFormData, validate, errors } = useForm(
    SignInSchema,
    initialState
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading, data }] = useLoginUserMutation();

  const [signupMethod, setSignupMethod] = useState<AuthType>({
    email: true,
    phone: false,
  });

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;
    try {
      await loginUser(formData).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      const { _id: id, step, accessToken } = data.userExists;
      if (accessToken && step == 4) setToken(accessToken);
      const url = getNextAuthUrl(step);
      dispatch(setUserAuth(accessToken));
      navigate(url, { replace: true, state: { id } });
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
                  onChange={(e: any) => handleInputChange(e, setFormData)}
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
                      phone: phone == data.dialCode ? "" : phone,
                      countryCode: `+${data.dialCode}`,
                    })
                  }
                />
              </div>
            )}

            <div className="input-with-icon relative  w-full max-w-[540px]">
              <Password
                classes="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                name="password"
                value={formData?.password}
                error={errors?.password}
                placeholder="Password"
                setFormData={setFormData}
              />
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
