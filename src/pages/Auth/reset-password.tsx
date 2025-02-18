import { useEffect } from "react";
import LoginBgImg from "../../assets/login-img.png";
import BackButton from "../../components/BackButton";
import { handleError } from "../../utils/helper";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { CreatePasswordSchema } from "../../schema";
import Logo from "../../components/Logo";
import { useForm } from "../../hooks/useForm";
import { useCreatePasswordMutation } from "../../redux/api";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../constants/api-responses";
import Password from "../../components/Password";

const initialState: CreatePasswordFormType = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  if (!location.state || !location.state.id) {
    return <Navigate to="/" />;
  }

  const { formData, setFormData, validate, errors } = useForm(
    CreatePasswordSchema,
    initialState
  );
  const [createPassword, { data, isLoading }] = useCreatePasswordMutation();

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();

    if (hasErrors) return;

    try {
      await createPassword({ id, password: formData.password }).unwrap();
    } catch (error: any) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.PASSWORD_UPDATED);
      navigate("/password-success", { replace: true });
    }
  }, [data]);

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
            Reset Password
          </h1>
          <p className="text-center mt-[16px]">Enter new password</p>
          <div className="w-full mt-[30px] flex flex-col gap-[20px] items-center">
            <div className="input-with-icon relative  w-full max-w-[540px]">
              <Password
                classes="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                name="password"
                value={formData?.password}
                error={errors?.password}
                placeholder="Password"
                setFormData={setFormData}
              />
            </div>
            <div className="input-with-icon relative  w-full max-w-[540px]">
              <Password
                classes="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                name="confirmPassword"
                value={formData?.confirmPassword}
                error={errors?.confirmPassword}
                placeholder="Confirm Password"
                setFormData={setFormData}
              />
            </div>
          </div>
          <button
            className="btn-pri mt-[40px] cursor-pointer"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
