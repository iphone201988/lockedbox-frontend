import { useNavigate } from "react-router-dom";
import { useRemovePaymentMethodMutation } from "../../../../../../redux/api";
import { handleError } from "../../../../../../utils/helper";
import Loader from "../../../../../../components/Loader";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../../../../constants/api-responses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const brandIcons: any = {
  visa: faCcVisa,
  mastercard: faCcMastercard,
  amex: faCcAmex,
  discover: faCcDiscover,
};

const PaymentMethod = ({
  brand,
  last4,
  paymentMethodId,
  refetch,
  remove = true,
  handleSelect,
  isSelected,
}: PaymentMethodProps) => {
  const navigate = useNavigate();
  const [removePaymentMethod, { isLoading, data }] =
    useRemovePaymentMethodMutation();
  const handleRemoveCard = async (paymentMethodId: string) => {
    try {
      await removePaymentMethod(paymentMethodId).unwrap();
    } catch (error) {
      handleError(error, navigate);
    }
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.PAYMENT_METHOD_REMOVED);
      refetch();
    }
  }, [data]);
  return (
    <div
      className={`flex flex-col w-full max-w-[400px] border p-[16px] rounded-[16px] ${
        isSelected ? "border-black" : "border-[#EEEEEE]"
      }`}
    >
      {isLoading && <Loader />}
      <div className="flex gap-[24px] items-start">
        {/* <img src={CardLogo} alt="" /> */}
        <FontAwesomeIcon icon={brandIcons[brand] || faCreditCard} size="2x" />
        <div className="">
          <p className="capitalize">{brand} Card</p>
          <p className=" font-semibold mt-[8px]">XXXX XXXX XXXX {last4}</p>
        </div>
      </div>
      {remove ? (
        <button
          className="btn-sec mt-[20px] ml-auto"
          onClick={() => handleRemoveCard(paymentMethodId)}
        >
          Remove
        </button>
      ) : (
        <button className={`btn-sec mt-[20px] ml-auto`} onClick={handleSelect}>
          {isSelected ? "Remove" : "Select"}
        </button>
      )}
    </div>
  );
};

export default PaymentMethod;
