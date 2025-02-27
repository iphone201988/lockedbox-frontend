import { useState } from "react";
import DateIcon from "../../assets/icons/date-picker-icn.png";
import DatePickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { addMonths } from "date-fns";
import { toast } from "react-toastify";

const DatePicker = ({ id, price }: { id: string; price: number }) => {
  const navigate = useNavigate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // State for start and end dates
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(addMonths(today, 1));

  // Handle start date selection
  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    const minEndDate = addMonths(date, 1);
    if (endDate < minEndDate) {
      setEndDate(minEndDate); // Adjust end date if it’s before the new minimum
    }
  };

  // Handle end date selection
  const handleEndDateChange = (date: Date) => {
    setEndDate(date); // Update end date based on user selection
  };

  const handleRequest = () => {
    if (!endDate) {
      toast.error("Please select end date");
      return;
    }
    navigate(`/booking-review/${id}`, { state: { startDate, endDate } });
  };

  return (
    <div className="select-dates">
      <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] max-w-[370px] w-full">
        <p className="text-[20px] font-semibold mb-[8px]">Select your dates</p>
        <p className="text-[26px] font-semibold">${price}/month</p>
        <span className="text-[14px] text-[#959595]">Taxes not included</span>

        <div className="w-full mt-[10px]">
          <p className="font-semibold mb-[6px]">Start date</p>
          <div className="input-with-icon relative w-full max-w-[100%]">
            <span className="absolute right-[16px] top-[20px]">
              <img src={DateIcon} alt="" />
            </span>
            <DatePickerInput
              className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
              selected={startDate}
              onChange={handleStartDateChange as any}
              minDate={today} // Prevents selecting past dates
              placeholderText="Select start date"
            />
          </div>

          <p className="font-semibold mb-[6px] mt-[12px]">End date</p>
          <div className="input-with-icon relative w-full max-w-[100%]">
            <span className="absolute right-[16px] top-[20px]">
              <img src={DateIcon} alt="" />
            </span>
            <DatePickerInput
              className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
              selected={endDate}
              onChange={handleEndDateChange as any}
              minDate={addMonths(startDate, 1)} // Ensures at least one month gap
              placeholderText="Select end date"
            />
          </div>

          <button
            className="btn-pri mt-[16px] ml-auto !block"
            onClick={handleRequest}
          >
            Start Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
