import * as yup from "yup";
import { UpdatePasswordSchema } from "../../../../schema";
import { useForm } from "../../../../hooks/useForm";
import Password from "../../../../components/Password";
import { handleError } from "../../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../../../redux/api";
import Loader from "../../../../components/Loader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../constants/api-responses";

type UpdatePasswordType = yup.InferType<typeof UpdatePasswordSchema>;

const initialState: UpdatePasswordType = {
  oldPassword: "",
  newPassword: "",
};

const RenterSecurity = () => {
  const navigate = useNavigate();
  const { formData, setFormData, errors, validate } = useForm(
    UpdatePasswordSchema,
    initialState
  );

  const [updateUser, { isLoading, data }] = useUpdateUserMutation();
  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    try {
      await updateUser({
        currentPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.PASSWORD_UPDATED);
      setFormData(initialState);
    }
  }, [data]);

  return (
    <div className="flex flex-col">
      {isLoading && <Loader />}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Change Password
          </p>
          <p className="max-w-[280px] mt-[6px]">
            Manage your password to make sure it is safe.
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Old Password</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Password
                  classes="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  name="oldPassword"
                  value={formData?.oldPassword}
                  error={errors?.oldPassword}
                  placeholder="Password"
                  setFormData={setFormData}
                />
              </div>
            </div>
            <div className="w-full max-w-[100%] mt-[20px]">
              <p className=" font-semibold mb-[6px]">New Password</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Password
                  classes="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  name="newPassword"
                  value={formData?.newPassword}
                  error={errors?.newPassword}
                  placeholder="Confirm Password"
                  setFormData={setFormData}
                />
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
