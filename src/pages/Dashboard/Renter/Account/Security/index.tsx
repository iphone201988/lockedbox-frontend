import { useState } from "react";
import { EyeClose } from "../../../../../icons";
import * as yup from "yup";
import { UpdatePasswordSchema, validateForm } from "../../../../../schema";
import Input from "../../../../../components/Input";
import { handleInputChange } from "../../../../../utils/helper";

type UpdatePasswordType = yup.InferType<typeof UpdatePasswordSchema>;

const initialState: UpdatePasswordType = {
  oldPassword: "",
  newPassword: "",
};

const RenterSecurity = () => {
  const [formData, setFormData] = useState<UpdatePasswordType>(initialState);
  const [errors, setErrors] = useState<UpdatePasswordType>(initialState);

  const handleSubmit = async () => {
    const errors: any = await validateForm(UpdatePasswordSchema, formData);
    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors(initialState);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Your passowrd */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Change Password
          </p>
          <p className="max-w-[280px] mt-[6px]">
            Manage your password to make sure it is safe.{" "}
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Old Password</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="password"
                  name="oldPassword"
                  value={formData?.oldPassword}
                  onChange={(e) => handleInputChange(e, setFormData)}
                  placeholder="Password"
                  error={errors?.oldPassword}
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <EyeClose />
                </span>
              </div>
            </div>
            <div className="w-full max-w-[100%] mt-[20px]">
              <p className=" font-semibold mb-[6px]">New Password</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="password"
                  name="newPassword"
                  value={formData?.newPassword}
                  onChange={(e) => handleInputChange(e, setFormData)}
                  placeholder="Confirm Password"
                  error={errors?.newPassword}
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <EyeClose />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default RenterSecurity;
