import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/icons/close-icn.png";
import { useForm } from "../../../hooks/useForm";
import { VerifyPhonechema } from "../../../schema";
import { handleError } from "../../../utils/helper";
import Phone from "../../Phone";
import * as yup from "yup";
import { useChangeUserAuthMutation, useGetUserQuery } from "../../../redux/api";
import Loader from "../../Loader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../constants/api-responses";

type VerifyPopupFormType = yup.InferType<typeof VerifyPhonechema>;
const initialState: VerifyPopupFormType = {
  phone: "",
  countryCode: "",
};
const VerifyPhonePopup = ({ setShowPopup }: VerificationPopupProps) => {
  const navigate = useNavigate();
  const { formData, errors, setFormData, validate } =
    useForm<VerifyPopupFormType>(VerifyPhonechema, initialState);
  const [changeUserAuth, { data, isLoading }] = useChangeUserAuthMutation();
  const { data: userData } = useGetUserQuery();

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    if (!userData) toast.error("Something went wrong!");

    const { phone, countryCode } = userData?.userExists;
    if (phone == formData.phone || countryCode == formData.countryCode) {
      toast.error("Phone number can't be same with the existing phone number");
      return;
    }
    try {
      await changeUserAuth({ ...formData, type: 2, typeFor: 1 }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.OTP_SENT);
      setShowPopup((prev: any) => ({
        ...prev,
        verification: true,
      }));
    }
  }, [data]);

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      {isLoading && <Loader />}
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px] cursor-pointer">
          <img
            src={CloseIcon}
            alt=""
            onClick={() =>
              setShowPopup((prev: any) => ({
                ...prev,
                phone: false,
              }))
            }
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Verify phone number
          </p>
        </header>
        <body className="max-w-[400px] mx-auto">
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Phone number</p>
            <div className="w-full max-w-[100%]">
              <Phone
                error={errors?.phone}
                value={formData?.phone}
                onChange={(phone: any, data: any) => {
                  console.log(phone, data);
                  setFormData({
                    phone: phone == data.dialCode ? "" : phone,
                    countryCode: `+${data.dialCode}`,
                  });
                }}
              />
            </div>
          </div>
          <button
            className="btn-pri ml-auto !block mt-[16px]"
            onClick={handleSubmit}
          >
            Send Code
          </button>
        </body>
      </div>
    </div>
  );
};

export default VerifyPhonePopup;
