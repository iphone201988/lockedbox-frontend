import logo from "../../../assets/logo.png";
import Input from "../../../components/Input";
import Password from "../../../components/Password";
import * as yup from "yup";
import { SignInSchema } from "../../../schema";
import { useForm } from "../../../hooks/useForm";
import { handleError, handleInputChange } from "../../../utils/helper";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import { useEffect } from "react";
import { useAdminLoginMutation } from "../../../redux/api/admin";
type AdminLoginFormType = yup.InferType<typeof SignInSchema>;

const initialState: AdminLoginFormType = {
  email: "",
  password: "",
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const { formData, setFormData, validate, errors } = useForm(
    SignInSchema,
    initialState
  );

  const [loginAdmin, { isLoading, data }] = useAdminLoginMutation();

  const token = sessionStorage.getItem("token");

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;
    try {
      await loginAdmin(formData).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      const { accessToken } = data?.admin;
      sessionStorage.setItem("token", accessToken);
      navigate("/admin/home");
    }
  }, [data]);

  if (token) return <Navigate to="/admin/home" />;

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {isLoading && <Loader />}
      <div className="max-w-[640px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col border border-[#EEEEEE] rounded-[16px]">
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <img
            className="max-w-[158px] max-lg:max-w-[120px] mb-[4rem] max-mlg:mb-[2rem]"
            src={logo}
            alt=""
          />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Admin Log-In
          </h1>
          <div className="w-full mt-[30px] flex flex-col gap-[20px] items-center">
            <div className="w-full max-w-[540px]">
              {/* for email */}
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
            </div>
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
          </div>
          <button
            className="btn-pri mt-[40px] cursor-pointer"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
