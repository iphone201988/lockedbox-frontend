import CloseIcon from "../../../assets/icons/close-icn.png";
import { useForm } from "../../../hooks/useForm";
import { VerifyPhonechema } from "../../../schema";
import Phone from "../../Phone";
import * as yup from "yup";

type VerifyPopupFormType = yup.InferType<typeof VerifyPhonechema>;
const initialState: VerifyPopupFormType = {
  phone: "",
};
const VerifyPhonePopup = () => {
  const { formData, errors, setFormData, handleSubmit } =
    useForm<VerifyPopupFormType>(VerifyPhonechema, initialState);
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px] cursor-pointer">
          <img src={CloseIcon} alt="" />
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
                onChange={(phone) => setFormData({ ...formData, phone })}
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
