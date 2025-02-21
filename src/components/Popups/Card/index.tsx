import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CloseIcon from "../../../assets/icons/close-icn.png";
import { toast } from "react-toastify";
import {
  useAddPaymentMethodMutation,
  useGetUserQuery,
} from "../../../redux/api";
import { useEffect } from "react";
import Input from "../../Input";
import * as yup from "yup";
import { AddCardSchema } from "../../../schema";
import { useForm } from "../../../hooks/useForm";
import { handleError, handleInputChange } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";
import { ResponseMessages } from "../../../constants/api-responses";

type AddCardFormType = yup.InferType<typeof AddCardSchema>;

const initialState: AddCardFormType = {
  name: "",
};
const AddCardPopup = ({
  setShowPopup,
  refetch,
}: {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { data: userData } = useGetUserQuery();
  const [addPaymentMethod, { isLoading, data }] = useAddPaymentMethodMutation();
  const { formData, setFormData, validate, errors } = useForm(
    AddCardSchema,
    initialState
  );

  const handleSubmit = async () => {
    const hasErrors: boolean = await validate();
    if (hasErrors) return;

    if (!stripe || !elements) {
      toast.error("Something went wrong!");
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      toast.error("Card details are missing!");
      return;
    }

    try {
      const { paymentMethod, error: paymentMethodError } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardNumberElement,
          billing_details: { name: formData.name },
        });

      if (paymentMethodError) {
        toast.error(paymentMethodError.message);
        return;
      }

      const paymentMethodId = paymentMethod.id;
      await addPaymentMethod({ paymentMethodId }).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (userData?.success) {
      const { firstName, lastName } = userData.userExists;
      setFormData({ name: firstName + " " + lastName });
    }
  }, [userData]);

  useEffect(() => {
    if (data?.success) {
      console.log("data.userExists:::", data);
      toast.success(ResponseMessages.PAYMENT_METHOD_ADDED);
      refetch();
      setShowPopup(false);
    }
  }, [data]);

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      {isLoading && <Loader />}
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button
          className=" absolute right-[20px] top-[20px] cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
          <img src={CloseIcon} alt="" />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Add Payment Method
          </p>
        </header>
        <body className="max-w-[400px] mx-auto">
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Card Number</p>
            <div className="w-full max-w-[100%]">
              <CardNumberElement
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                options={{
                  showIcon: true,
                  iconStyle: "solid",
                  disableLink: true,
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#000",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="mb-[16px]">
            <p className=" font-semibold mb-[6px]">Account Holder Name</p>
            <div className="w-full max-w-[100%]">
              <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                name="name"
                value={formData?.name}
                onChange={(e) => handleInputChange(e, setFormData)}
                placeholder="Account Holder Name"
                error={errors?.name}
                // disable={formData?.name != "" ? true : false}
              />
            </div>
          </div>
          <div className=" flex gap-[16px]">
            <div className="flex-1">
              <p className=" font-semibold mb-[6px]">Expiry Date</p>
              <div className="w-full max-w-[100%]">
                {/* <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Expiry Date"
                /> */}
                <CardExpiryElement
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  options={{
                    placeholder: "MM / YY",
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <p className=" font-semibold mb-[6px]"> CVV</p>
              <div className="w-full max-w-[100%]">
                {/* <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter CVV"
                /> */}
                <CardCvcElement
                  className="border w-full border-[#EEEEEE] py-[20px] px-5 rounded-2xl cursor-pointer"
                  options={{
                    placeholder: "CVC",
                  }}
                />
              </div>
            </div>
          </div>
          <button
            className="btn-pri ml-auto !block mt-[16px]"
            onClick={handleSubmit}
          >
            Add
          </button>
        </body>
      </div>
    </div>
  );
};

export default AddCardPopup;
