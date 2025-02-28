import { useNavigate } from "react-router-dom";
import NoBookingIcon from "../../../assets/icons/no-booking-icn.png";

const NoBooking = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[440px] w-full border border-[#EEEEEE] rounded-[16px] p-[20px] flex items-center justify-center flex-col">
      <img src={NoBookingIcon} alt="" />
      <div className="mt-[16px] mb-[20px]">
        <p className="text-[18px] text-center mb-[10px]">
          You currently do not have any <br /> active bookings
        </p>
        <p className="text-[24px] font-semibold">Begin your search today!</p>
      </div>
      <button className="btn-pri" onClick={() => navigate("/search")}>
        Find a space
      </button>
    </div>
  );
};

export default NoBooking;
