import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { useGetPaymentMethodsQuery } from "../../redux/api";
import Loader from "../Loader";
import PaymentMethod from "../../pages/Dashboard/Renter/Account/Payment/components/payment-method";
// @ts-ignore
import countryList from "react-select-country-list";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useForm } from "../../hooks/useForm";
import * as yup from "yup";
import { BillingAddressSchema } from "../../schema";
import Input from "../Input";
import { handleInputChange } from "../../utils/helper";
import { toast } from "react-toastify";

type BillingFormType = yup.InferType<typeof BillingAddressSchema>;
const initialState: BillingFormType = {
  street: "",
  country: "",
  province: "",
  postalCode: "",
};

const PaymentDetail = forwardRef((props, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const { data, isLoading, refetch } = useGetPaymentMethodsQuery();
  const [cards, setCards] = useState<any>([]);
  const options = useMemo(() => countryList().getData(), []);

  const { formData, setFormData, validate, errors } = useForm(
    BillingAddressSchema,
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
          billing_details: {
            address: {
              line1: formData.street,
              state: formData.province,
              postal_code: formData.postalCode,
              country: formData.country,
            },
          },
        });

      if (paymentMethodError) {
        toast.error(paymentMethodError.message);
        return;
      }

      const paymentMethodId = paymentMethod.id;
      return paymentMethodId;
      // await addPaymentMethod({ paymentMethodId }).unwrap();
    } catch (error) {
      // handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      const cards: any = [];
      data.paymentMethods.forEach((element: any) =>
        cards.push({
          brand: element.card.brand,
          last4: element.card.last4,
          paymentMethodId: element.id,
        })
      );

      setCards(cards);
    }
  }, [data]);

  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));


  return (
    <div className="">
      {isLoading && <Loader />}
      {/* {cards.length ? (
        <div className="mb-5">
          <p className="text-[20px] font-semibold ">Cards</p>
          {cards.map((card: any) => (
            <PaymentMethod
              brand={card.brand}
              last4={card.last4}
              paymentMethodId={card.paymentMethodId}
              refetch={refetch}
              remove={false}
            />
          ))}
        </div>
      ) : (
        <></>
      )} */}

      <div className="pb-[30px] mt-5">
        <p className="text-[20px] font-semibold ">Payment details</p>
        <div className="my-[16px]">
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
        <div className=" flex gap-[16px] ">
          <div className="w-full">
            <p className=" font-semibold mb-[6px]">Expiry date</p>
            <div className="w-full max-w-[100%]">
              <CardExpiryElement
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                options={{
                  placeholder: "MM / YY",
                }}
              />
            </div>
          </div>
          <div className="w-full">
            <p className=" font-semibold mb-[6px]">CVV</p>
            <div className="w-full max-w-[100%]">
              <CardCvcElement
                className="border w-full border-[#EEEEEE] py-[20px] px-5 rounded-2xl cursor-pointer"
                options={{
                  placeholder: "CVC",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[20px] font-semibold ">Billing address</p>
        <div className="my-[16px]">
          <p className=" font-semibold mb-[6px]">Street</p>
          <div className="w-full max-w-[100%]">
            <Input
              className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
              type="text"
              name="street"
              value={formData?.street}
              onChange={(e: any) => handleInputChange(e, setFormData)}
              placeholder="Enter Street"
              error={errors?.street}
            />
          </div>
        </div>
        <div className=" flex gap-[16px] max-sm:flex-wrap ">
          <div className="w-full">
            <p className=" font-semibold mb-[6px]">Country</p>
            <div className="w-full max-w-[100%]">
              <select
                name="country"
                id="country"
                onChange={(e: any) => handleInputChange(e, setFormData)}
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                value={formData?.country}
              >
                {options.map((option: any) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              {errors?.country && (
                <span className="mx-2 text-red-500">{errors?.country}</span>
              )}
            </div>
          </div>
          <div className="w-full">
            <p className=" font-semibold mb-[6px]">Province</p>
            <div className="w-full max-w-[100%]">
              <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                name="province"
                value={formData?.province}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="Enter Province"
                error={errors?.province}
              />
            </div>
          </div>
          <div className="w-full">
            <p className=" font-semibold mb-[6px]">Postal Code</p>
            <div className="w-full max-w-[100%]">
              <Input
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                type="text"
                name="postalCode"
                value={formData?.postalCode}
                onChange={(e: any) => handleInputChange(e, setFormData)}
                placeholder="Enter Postal Code"
                error={errors?.postalCode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PaymentDetail;
