import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/icons/close-icn.png";
import { CrossIcon } from "../../../icons";
import { useCancelBookingMutation } from "../../../redux/api";
import Loader from "../../Loader";
import { handleError } from "../../../utils/helper";
import { useEffect } from "react";

const CancelBooking = ({
  bookingId,
  onClose,
}: {
  bookingId: string;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  // const { data: userData } = useGetUserQuery();
  const [cancelBooking, { data, isLoading }] = useCancelBookingMutation();

  const handleCancelBoking = async () => {
    console.log("bookingId::", bookingId);

    await cancelBooking({ bookingId })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    console.log("data::::", data);
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
              <li className=" text-[14px]">
                <b>A:</b> 100% free cancellation 5 days or more prior to
                reservation start. Refund listing fee and service fees
              </li>
              <li className=" text-[14px]">
                <b>B:</b> 75% refund if the renter cancels within 4 days. No
                refund of service fee.
              </li>
              <li className=" text-[14px]">
                <b>C:</b> If a monthly contract has started, cancellation of the
                next month and remaining months can only occur on or before the
                anniversary date free of charge. If a renter cancels after their
                anniversary date, they lose out on the next month and service
                fee.{" "}
              </li>
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
