import SignupBgImg from "../../assets/signup-img.png";
import BackButton from "../../components/BackButton";
import { EyeOpen } from "../../icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleInputChange } from "../../utils/helper";
import Input from "../../components/Input";
import { CreatePasswordSchema, validateForm } from "../../schema";
import * as yup from "yup";
import Logo from "../../components/Logo";

const initialState: CreatePasswordFormType = {
  password: "",
  confirmPassword: "",
};

type CreatePasswordFormType = yup.InferType<typeof CreatePasswordSchema>;

const CreatePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] =
    useState<CreatePasswordFormType>(initialState);
  const [errors, setErrors] = useState<CreatePasswordFormType>(initialState);
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const handleSubmit = async () => {
    const errors: any = await validateForm(CreatePasswordSchema, formData);
    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors(initialState);
    }

    if (!isChecked) {
      setCheckboxError("You must agree to the Privacy Policy.");
      return;
    }

    setCheckboxError("");
    navigate("/host-or-rent");
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
        <div className=" relative w-full">
          <img className="rounded-4xl max-md:hidden" src={SignupBgImg} alt="" />
          <BackButton />
        </div>
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <Logo className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]"/>
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
            </div>
            <div className="input-with-icon relative  w-full max-w-[540px]">
              <Input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                type="password"
                name="confirmPassword"
                value={formData?.confirmPassword}
                onChange={(e) => handleInputChange(e, setFormData)}
                placeholder="Confirm Password"
                error={errors?.confirmPassword}
              />
              <span className=" absolute right-[16px] top-[20px] cursor-pointer">
                <EyeOpen />
              </span>
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
