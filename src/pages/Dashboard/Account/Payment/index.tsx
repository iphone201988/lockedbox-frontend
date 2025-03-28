import AddIcon from "../../../../assets/icons/add-icn.png";
import PaymentHistory from "./components/payment-history";
import { useEffect, useState } from "react";
import AddCardPopup from "../../../../components/Popups/Card";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  useGetPaymentMethodsQuery,
  useGetUserQuery,
} from "../../../../redux/api";
import PaymentMethod from "./components/payment-method";
import Loader from "../../../../components/Loader";
import BankAccounts from "./components/bank-accounts";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const RenterPayment = () => {
  const { data: userData } = useGetUserQuery();
  const role = userData?.userExists?.dashboardRole;
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetPaymentMethodsQuery();
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    if (data?.success) {
      console.log("payments data:::", data);
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

  return (
    <div className="flex flex-col h-full">
      {isLoading && <Loader />}
      {showPopup && (
        <Elements stripe={stripePromise}>
          <AddCardPopup setShowPopup={setShowPopup} refetch={refetch} />
        </Elements>
      )}

      {role == "rent" && (
        <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
          <div className="max-w-[380px] w-full max-md:max-w-full">
            <p className="text-[18px] text-[#235370] font-semibold">
              Payment Method
            </p>
            <p className="max-w-[280px] mt-[6px]">
              You can update or add your card information here
            </p>
          </div>
          <div className="max-w-[100%] w-full">
            <div className=" max-w-[100%] w-full flex gap-[20px] flex-wrap">
              {cards.map((card: any) => (
                <PaymentMethod
                  brand={card.brand}
                  last4={card.last4}
                  paymentMethodId={card.paymentMethodId}
                  refetch={refetch}
                />
              ))}

              {/* add card */}
              <button
                className=" cursor-pointer flex max-w-[150px] flex-col justify-center items-center border border-[#235370] border-dashed rounded-[16px] p-[20px] hover:bg-[#EEEEEE]"
                onClick={() => setShowPopup(!showPopup)}
              >
                <img src={AddIcon} alt="" />
                <p className="text-[14px] text-[#235370] text-center">
                  Add new <br />
                  payment method
                </p>
              </button>
            </div>
            {/* <button className="btn-pri mt-[24px] ml-auto ">Update</button> */}
          </div>
        </div>
      )}

      {role == "host" && <BankAccounts />}

      <PaymentHistory />
    </div>
  );
};

export default RenterPayment;
