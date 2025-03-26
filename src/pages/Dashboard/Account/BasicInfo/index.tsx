import * as yup from "yup";
import { BasicInfoSchema } from "../../../../schema";
import { useForm } from "../../../../hooks/useForm";
import Input from "../../../../components/Input";
import { handleError, handleInputChange } from "../../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation } from "../../../../redux/api";
import { useEffect } from "react";
import Loader from "../../../../components/Loader";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../constants/api-responses";

type BasicInfoFormType = yup.InferType<typeof BasicInfoSchema>;
const initialState: BasicInfoFormType = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "",
};
const RenterBasicInfo = () => {
  const navigate = useNavigate();
  const { formData, validate, setFormData, errors } =
    useForm<BasicInfoFormType>(BasicInfoSchema, initialState);

  const { data: userData } = useGetUserQuery();
  const [updateUser, { data, isLoading }] = useUpdateUserMutation();

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;
    try {
      const { firstName, lastName } = userData.userExists;
      if (
        (formData.firstName != "" || formData.lastName != "") &&
        (firstName != formData.firstName || lastName != formData.lastName)
      ) {
        await updateUser({
          firstName: formData.firstName ? formData.firstName : undefined,
          lastName: formData.lastName ? formData.lastName : undefined,
          email: undefined,
          phone: undefined,
          countryCode: undefined,
        });
      }
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (userData?.success) {
      const { firstName, lastName, email, phone, countryCode } =
        userData.userExists;
      setFormData({
        firstName: firstName ? firstName : "",
        lastName: lastName ? lastName : "",
        email: email ? email : "",
        phone: phone ? phone : "",
        countryCode: countryCode ? countryCode : "",
      });
    }
  }, [userData]);

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.PROFILE_UPDATED);
    }
  }, [data]);

  return (
    <div className="flex flex-col">
      {isLoading && <Loader />}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Basic Information
          </p>
          <p className="max-w-[280px] mt-[6px]">
            This is your personal information that you can update anytime.
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">
              First Name<span className="text-red-500">*</span>
            </p>
            <div className="w-full max-w-[100%]">
              <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                name="firstName"
                value={formData?.firstName}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="First Name"
                error={errors?.firstName}
              />
            </div>
          </div>
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">
              Last Name<span className="text-red-500">*</span>
            </p>
            <div className="w-full max-w-[100%]">
              <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                name="lastName"
                value={formData?.lastName}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="Last Name"
                error={errors?.lastName}
              />
            </div>
          </div>
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Email<span className="text-red-500">*</span></p>
            <div className="w-full max-w-[100%]">
              {/* <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="email"
                name="email"
                value={formData?.email}
                onChange={(e) => handleInputChange(e, setFormData)}
                placeholder="Email"
                error={errors?.email}
                disable={true}
              /> */}
              <input
                type="email"
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                name="email"
                placeholder="Email"
                value={formData?.email}
                disabled={true}
              />
            </div>
          </div>
          <div className="">
            <p className=" font-semibold mb-[6px]">Phone<span className="text-red-500">*</span></p>
            <div className="w-full max-w-[100%]">
              {/* <Phone
                error={errors?.phone}
                value={formData?.phone}
                disable={true}
              /> */}
              <input
                type="text"
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                name="phone"
                placeholder="Phone"
                value={
                  formData?.phone
                    ? "+" + (formData?.phone ? formData?.phone : "")
                    : ""
                }
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn-pri mt-[24px] ml-auto" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default RenterBasicInfo;
