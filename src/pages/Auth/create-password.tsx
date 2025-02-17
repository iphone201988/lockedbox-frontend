import SignupBgImg from "../../assets/signup-img.png";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreatePasswordSchema } from "../../schema";
import * as yup from "yup";
import Logo from "../../components/Logo";
import Password from "../../components/Password";
import { useForm } from "../../hooks/useForm";
import { useCreatePasswordMutation } from "../../redux/api";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import Loader from "../../components/Loader";
import { ResponseMessages } from "../../constants/api-responses";
import { getNextAuthUrl } from "../../utils/helper";
import { toast } from "react-toastify";

const initialState: CreatePasswordFormType = {
  password: "",
  confirmPassword: "",
};

type CreatePasswordFormType = yup.InferType<typeof CreatePasswordSchema>;

const CreatePassword = () => {
  const navigate = useNavigate();
  const { formData, setFormData, validate, errors } = useForm(
    CreatePasswordSchema,
    initialState
  );
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [createPassword, { data, isLoading }] = useCreatePasswordMutation();
  const { id } = useSelector((state: any) => state.userAuth);

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();

    if (hasErrors) return;

    if (!isChecked) {
      setCheckboxError("You must agree to the Privacy Policy.");
      return;
    }

    setCheckboxError("");

    try {
      await createPassword({ id, password: formData.password }).unwrap();
    } catch (error: any) {
      console.log("error:::", error);
      toast.error(error.data.message);
    }
  };

  useEffect(() => {
    if (!data?.success) {
      toast.error(data.message);
    }

    if (data?.success) {
      toast.success(ResponseMessages.ACCOUNT_CREATED);
      const { step } = data.userExists;
      const url = getNextAuthUrl(step);
      navigate(url);
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {isLoading && <Loader />}
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className=" relative w-full">
          <img className="rounded-4xl max-md:hidden" src={SignupBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]" />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">
            Create your password
          </h1>
          <p className="text-center mt-[16px]">
            A strong password helps protect your shared files from unauthorized
            access. <br className=" max-mlg:hidden" /> Choose a unique and
            memorable password to ensure your data remains secure.
          </p>
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
            <div className="input-with-icon relative  w-full max-w-[540px] flex gap-[6px]">
              <input
                className="border border-[#235370] rounded-2xl w-[24px] h-[24px] min-w-[24px] cursor-pointer"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>
                {" "}
                I agree to the{" "}
                <a className="text-[#235370] underline" href="">
                  terms of service
                </a>{" "}
                and{" "}
                <a className="text-[#235370] underline" href="">
                  privacy policy
                </a>
                .{" "}
              </p>
            </div>
            {checkboxError && <p className="text-red-500">{checkboxError}</p>}
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

export default CreatePassword;
