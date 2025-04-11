import { useEffect, useState } from "react";
import CloseIcon from "../../../assets/icons/close-icn.png";
import { useMakeRefundMutation } from "../../../redux/api/admin";
import Loader from "../../../components/Loader";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const RefundAmountPopup = ({
  image,
  spaceType,
  city,
  setShowRefundPopup,
  bookingId,
  totalAmount,
}: {
  image: string;
  spaceType: string;
  city: string;
  setShowRefundPopup: any;
  bookingId: string;
  totalAmount: number;
}) => {
  const { id } = useParams();
  const [makeRefund, { data, isLoading }] = useMakeRefundMutation();
  const [amount, setAmount] = useState<number>();

  const handleMakeRefund = async () => {
    if (!amount) {
      toast.error("Please select any amount for refund");
      return;
    }

    if (amount > totalAmount) {
      toast.error("Refund amount cannot be greater than requested amount");
      return;
    }
    await makeRefund({ userId: id, bookingId: bookingId, body: { amount } });
  };

  useEffect(() => {
    if (data?.success) {
      window.location.href = `/admin/home/bookings/${id}`;
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
            onClick={() => setShowRefundPopup(false)}
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Refund Amount
          </p>
        </header>
        <body className="max-w-full mx-auto">
          <div className="flex flex-col items-center justify-center border-b border-[#EEEEEE] pb-[10px] mb-[10px]">
            <img
              className="w-[130px] h-[115px] rounded-[12px] object-cover"
              src={image}
              alt=""
            />
            <p className="text-[18px] font-semibold mt-[10px]">
              {spaceType} for storage in {city}
            </p>
          </div>
          <div className="mb-[0]">
            <p className=" font-semibold mb-[6px]">Enter price</p>
            <div className="w-full max-w-[100%]">
              <input
                type="number"
                className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                placeholder="Enter price"
                value={amount}
                onChange={(e: any) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex justify-end gap-[10px]">
            <button
              className="btn-pri !block mt-[16px]"
              onClick={handleMakeRefund}
            >
              Refund
            </button>
          </div>
        </body>
      </div>
    </div>
  );
};

export default RefundAmountPopup;
