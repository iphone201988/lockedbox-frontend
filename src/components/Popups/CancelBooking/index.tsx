import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/icons/close-icn.png";
import { CrossIcon } from "../../../icons";
import { useCancelBookingMutation, useGetUserQuery } from "../../../redux/api";
import Loader from "../../Loader";
import { handleError } from "../../../utils/helper";
import { useEffect } from "react";
import {
  HostCancellationPolicies,
  RenterCancellationPolicies,
} from "../../../constants";
import { toast } from "react-toastify";
import { ResponseMessages } from "../../../constants/api-responses";

const CancelBooking = ({
  bookingId,
  onClose,
}: {
  bookingId: string;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const { data: userData } = useGetUserQuery();
  const policies =
    userData?.userExists?.dashboardRole == "host"
      ? HostCancellationPolicies
      : RenterCancellationPolicies;
  const [cancelBooking, { data, isLoading }] = useCancelBookingMutation();

  const handleCancelBoking = async () => {
    console.log("bookingId::", bookingId);

    await cancelBooking({ bookingId })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      toast.success(ResponseMessages.BOOKING_CANCELED);
      onClose();
    }
  }, [data]);

  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.2)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      {isLoading && <Loader />}
      <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
        <button className=" absolute right-[20px] top-[20px]">
          <img
            src={CloseIcon}
            alt=""
            onClick={onClose}
            className="cursor-pointer"
          />
        </button>
        <header className="text-center pb-[20px]">
          <p className="text-[18px] text-[#235370] font-semibold">
            Cancel Booking
          </p>
        </header>
        <body className="mx-auto">
          <div className="mb-[24px] flex justify-center items-center flex-col">
            <span className="mb-[10px]">
              <CrossIcon />
            </span>

            <p className=" font-semibold text-center text-[18px] mb-[16px]">
              Are you sure you want to <br /> cancel your Booking?
            </p>
            <p className="mb-[6px]">
              The renter is entitled to the following cancellation policies:-
            </p>
            <ul className="flex flex-col gap-[6px] text-[#959595]">
              {policies.map((policy: string, index: number) => (
                <li className=" text-[14px]" key={index}>{policy}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-[20px] items-center justify-center">
            <button className="btn-sec" onClick={onClose}>
              Close
            </button>
            <button className="btn-pri" onClick={handleCancelBoking}>
              Confirm
            </button>
          </div>
        </body>
      </div>
    </div>
  );
};

export default CancelBooking;
