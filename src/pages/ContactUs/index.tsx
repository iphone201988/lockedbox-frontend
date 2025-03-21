import ContactImg from "../../assets/login-img.png";
import BreadCrumbs from "../../components/BreadCrumb";
import ProfileNavbar from "../../components/ProfileNavbar";
import * as yup from "yup";
import { ContactUsSchema } from "../../schema";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Input";
import { handleError, handleInputChange } from "../../utils/helper";
import { useContactUsMutation } from "../../redux/api";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../constants/api-responses";

type ContactUsFormType = yup.InferType<typeof ContactUsSchema>;

const initialState: ContactUsFormType = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactUs = () => {
  const navigate = useNavigate();
  const { formData, setFormData, validate, errors } = useForm(
    ContactUsSchema,
    initialState
  );

  const [contactUs, { data, isLoading }] = useContactUsMutation();

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    await contactUs(formData)
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.CONTACT_US);
      setFormData(initialState);
    }
  }, [data]);

  return (
    <div>
      {isLoading && <Loader />}
      <ProfileNavbar />
      {/* <SecNavBar /> */}
      <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
        <BreadCrumbs />

        <div className="pt-[24px]">
          <h4 className="text-[36px] font-semibold max-lg:text-[28px]">
            Contact Us
          </h4>
          <div className="p-[16px] border border-[#EEEEEE] rounded-[16px] flex gap-[24px] max-md:flex-col mt-[16px]">
            <div className="w-[50%]  max-md:hidden">
              <img
                className=" rounded-[12px] h-[460px] w-full"
                src={ContactImg}
                alt=""
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[16px]">
                  <div className="w-full">
                    <p className=" font-semibold">First name</p>
                    <Input
                      className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]"
                      type="text"
                      name="firstName"
                      value={formData?.firstName}
                      onChange={(e: any) => handleInputChange(e, setFormData)}
                      placeholder="Enter first name"
                      error={errors?.firstName}
                    />
                  </div>
                  <div className="w-full">
                    <p className=" font-semibold">Last name</p>
                    <Input
                      className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]"
                      type="text"
                      name="lastName"
                      value={formData?.lastName}
                      onChange={(e: any) => handleInputChange(e, setFormData)}
                      placeholder="Enter last name"
                      error={errors?.lastName}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className=" font-semibold">Email</p>
                  <Input
                    className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={(e: any) => handleInputChange(e, setFormData)}
                    placeholder="Email"
                    error={errors?.email}
                  />
                </div>
                <div className="w-full">
                  <p className=" font-semibold">Message</p>
                  <textarea
                    className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px] h-[180px]"
                    name="message"
                    placeholder="Enter message..."
                    value={formData?.message}
                    onChange={(e: any) => handleInputChange(e, setFormData)}
                  ></textarea>
                  {errors?.message && (
                    <span className="mx-2 text-red-500">{errors.message}</span>
                  )}
                </div>
                <button className="btn-pri ml-auto" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
