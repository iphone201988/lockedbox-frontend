import { DropDownIcon } from "../../../../icons";
import * as yup from "yup";
import { StripeOnboardingSchema } from "../../../../schema";
import { useForm } from "../../../../hooks/useForm";
import Input from "../../../../components/Input";
import { handleError, handleInputChange } from "../../../../utils/helper";
import Phone from "../../../../components/Phone";
import Select from "../../../../components/Select";
import DatePickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import {
  useCustomStripeConnectMutation,
  useGetStripeConnectInfoQuery,
  useGetUserQuery,
} from "../../../../redux/api";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import Loader from "../../../../components/Loader";
import StripeUploadDocuments from "./components/UploadDocuments";
import AddBankAccount from "./components/AddBankAccount";
import { Elements } from "@stripe/react-stripe-js";
// import countryList from "react-select-country-list";
// import { useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";

type StripeOnboardingType = yup.InferType<typeof StripeOnboardingSchema>;

const initialState: StripeOnboardingType = {
  firstName: "",
  lastName: "",
  businessType: "",
  dob: "",
  phone: "",
  email: "",
  addressLine1: "",
  city: "",
  state: "",
  zip: "",
};

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeOnboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.state?.step) return <Navigate to="/" />;

  const { data: stripeConnectData, isLoading: stripeConnectLoading } =
    useGetStripeConnectInfoQuery();

  const { data: userData } = useGetUserQuery();
  const [step, setStep] = useState<number>(location.state?.step);

  const { formData, setFormData, validate, errors } = useForm(
    StripeOnboardingSchema,
    initialState
  );

  const [customStripeConnect, { data, isLoading }] =
    useCustomStripeConnectMutation();

  // const options = useMemo(() => countryList().getData(), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    // Handle form submission here
    console.log("Form data:", formData);
    const date = moment(new Date(formData.dob));

    const body = {
      email: formData.email,
      phone: formData.phone,
      first_name: formData.firstName,
      last_name: formData.lastName,
      dob_day: date.date(),
      dob_month: date.month() + 1,
      dob_year: date.year(),
      address_line1: formData.addressLine1,
      address_city: formData.city,
      address_state: formData.state,
      address_zip: formData.zip,
    };

    await customStripeConnect(body)
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      setStep(2);
    }
  }, [data]);

  useEffect(() => {
    if (stripeConnectData?.success) {
    }
  }, [stripeConnectData]);

  useEffect(() => {
    if (userData?.success) {
      setFormData((prev: any) => ({
        ...prev,
        email: userData?.userExists?.email || "",
        phone: userData?.userExists?.phone || "",
      }));
    }
  }, [userData]);

  const handleDateChange = (date: Date) => {
    setFormData((prev: any) => ({ ...prev, dob: new Date(date) }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col space-y-5 items-center my-5 overflow-y-auto">
      {(isLoading || stripeConnectLoading) && <Loader />}
      {step == 1 && (
        <div className="text-2xl font-bold">Create your Account</div>
      )}
      {step == 2 && (
        <div className="text-2xl font-extrabold">Verify your identity</div>
      )}
      {step == 3 && <div className="text-2xl font-bold">Add your Account</div>}
      <div className="text-xl font-bold">Step {step} of 3</div>
      {step == 1 && (
        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="border border-[#eeeeee] p-[20px] rounded-[16px] max-w-[520px] w-full flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <label className="flex flex-col gap-[4px] w-full">
                First Name
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="text"
                  name="firstName"
                  value={formData?.firstName}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Enter First name"
                  error={errors?.firstName}
                />
              </label>
              <label className="flex flex-col gap-[4px] w-full">
                Last Name
                <Input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                  type="text"
                  name="lastName"
                  value={formData?.lastName}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  placeholder="Enter Last name"
                  error={errors?.lastName}
                />
              </label>
            </div>

            <label className="flex flex-col gap-[4px]">
              Date of Birth
              {/* <Input
              className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
              type="date"
              name="dob"
              value={formData?.dob}
              onChange={(e: any) => handleInputChange(e, setFormData)}
              placeholder="Enter Date of Birth"
              error={errors?.dob}
            /> */}
              <DatePickerInput
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                selected={formData.dob ? new Date(formData.dob) : null}
                onChange={handleDateChange as any}
                placeholderText="MM/DD/YYYY"
              />
              {errors?.dob && (
                <span className="text-red-500">{errors?.dob}</span>
              )}
            </label>

            <label className="flex flex-col gap-[4px]">
              Business type
              <div className="input-with-icon relative w-full max-w-[100%]">
                <Select
                  options={["Individual", "Corporation", "Partnership", "LLC"]}
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name="businessType"
                  value={formData?.businessType}
                  onChange={(e: any) => handleInputChange(e, setFormData)}
                  error={errors?.businessType}
                />
                <span className="absolute right-[16px] top-[20px]">
                  <DropDownIcon />
                </span>
              </div>
            </label>

            <label className="flex flex-col gap-[4px]">
              Phone Number
              <Phone
                error={errors?.phone}
                value={formData?.phone}
                isCADOnly={true}
                onChange={(phone: any, data: any) =>
                  setFormData({
                    ...formData,
                    phone: phone == data.dialCode ? "" : phone,
                    // countryCode: `+${data.dialCode}`,
                  })
                }
              />
            </label>
            <label className="flex flex-col gap-[4px]">
              Email
              <Input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl"
                type="email"
                name="email"
                value={formData?.email}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="Email"
                error={errors?.email}
              />
            </label>

            <div className="">
              <p className="text-[20px] font-semibold ">Billing address</p>
              <div className="my-[16px]">
                <p className=" font-semibold mb-[6px]">Address Line 1</p>
                <div className="w-full max-w-[100%]">
                  <Input
                    className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                    type="text"
                    name="addressLine1"
                    value={formData?.addressLine1}
                    onChange={(e: any) => handleInputChange(e, setFormData)}
                    placeholder="Enter Address"
                    error={errors?.addressLine1}
                  />
                </div>
              </div>

              <div className="w-full my-3">
                <p className=" font-semibold mb-[6px]">City</p>
                <div className="w-full max-w-[100%]">
                  <Input
                    className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                    type="text"
                    name="city"
                    value={formData?.city}
                    onChange={(e: any) => handleInputChange(e, setFormData)}
                    placeholder="Enter City"
                    error={errors?.city}
                  />
                </div>
              </div>
              <div className=" flex gap-[16px] max-sm:flex-wrap ">
                <div className="w-full">
                  <p className=" font-semibold mb-[6px]">State</p>
                  <div className="w-full max-w-[100%]">
                    <Input
                      className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                      type="text"
                      name="state"
                      value={formData?.state}
                      onChange={(e: any) => handleInputChange(e, setFormData)}
                      placeholder="Enter State"
                      error={errors?.state}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className=" font-semibold mb-[6px]">Zip Code</p>
                  <div className="w-full max-w-[100%]">
                    <Input
                      className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                      type="string"
                      name="zip"
                      value={formData?.zip}
                      onChange={(e: any) => handleInputChange(e, setFormData)}
                      placeholder="Enter Zip Code"
                      error={errors?.zip}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-[#235370] py-[12px] px-[16px] rounded-[12px] text-white cursor-pointer hover:bg-[#1a3f57] transition-colors"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {step == 2 && <StripeUploadDocuments setStep={setStep} />}
      {step == 3 && (
        <Elements stripe={stripePromise}>
          <AddBankAccount />
        </Elements>
      )}
    </div>
  );
};

export default StripeOnboarding;
