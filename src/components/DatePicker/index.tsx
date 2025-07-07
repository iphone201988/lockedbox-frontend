import { useEffect, useState, useMemo } from "react";
import DateIcon from "../../assets/icons/date-picker-icn.png";
import DatePickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { addMonths, addDays } from "date-fns";
import { toast } from "react-toastify";
import { useLazyCheckBookingAvailabilityQuery } from "../../redux/api";
import Loader from "../Loader";
import { getToken, handleError } from "../../utils/helper";
import moment from "moment";

const DatePicker = ({
  id,
  price,
  bookingDates,
}: {
  id: string;
  price: number;
  bookingDates: any[];
}) => {
  const navigate = useNavigate();
  const token = getToken();
  const [today] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const [checkAvailability, { data, isLoading, isFetching }] =
    useLazyCheckBookingAvailabilityQuery();

  // Compute booked ranges from bookingDates
  const bookedRanges = useMemo(() => {
    return bookingDates.map((booking) => {
      const start = new Date(moment.utc(booking.startDate).format("YYYY MM DD"));
      const end = new Date(moment.utc(booking.endDate).format("YYYY MM DD"));
      const localStart = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate()
        );
      const localEnd = new Date(
        end.getFullYear(),
        end.getMonth(),
        end.getDate()
        );
        // console.log("booking.startDate::::",new Date(moment.utc(booking.startDate).format("YYYY MM DD")),end)
      return { start: localStart, end: localEnd };
    });
  }, [bookingDates]);

  // Function to check if a date is within any booked range
  const isDateBooked = (date: Date) => {
    return bookedRanges.some(
      (range) => date >= range.start && date <= range.end
    );
  };

  // Function to check if a period [start, end] is free from bookings
  const isPeriodFree = (start: Date, end: Date) => {
    return !bookedRanges.some(
      (range) => start <= range.end && end >= range.start
    );
  };

  // Compute the default start date (earliest date where a 1-month period is free)
  const defaultStartDate = useMemo(() => {
    let date = new Date(today);
    while (isDateBooked(date) || !isPeriodFree(date, addMonths(date, 1))) {
      date = addDays(date, 1);
    }
    return date;
  }, [today, bookedRanges]);

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(addMonths(defaultStartDate, 1));

  // Update start and end dates when bookingDates change
  useEffect(() => {
    setStartDate(defaultStartDate);
    setEndDate(addMonths(defaultStartDate, 1));
  }, [defaultStartDate]);

  // Optional: Add a class to booked days for styling
  const getDayClassName = (date: Date) => {
    let className = "";
    if (isDateBooked(date)) {
      className = "booked-day";
    }

    // else if (date >= today && !isPeriodFree(date, addMonths(date, 1))) {
    //   className = "unavailable-day";
    // }
    return className;
  };

  // Handle start date selection
  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
    const minEndDate = addMonths(date, 1);
    setEndDate(minEndDate); // Set to minEndDate; filter ensures validity
  };

  // Handle end date selection
  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  const handleRequest = async () => {
    if (!token) {
      navigate("/signup");
      return;
    }

    if (!endDate) {
      toast.error("Please select end date");
      return;
    }

    await checkAvailability({
      id,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      _cacheBuster: Date.now(),
    })
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      const { available } = data;
      if (!available) {
        toast.error("Booking is not available in the selected time period");
        return;
      }
      if (available)
        navigate(`/booking-review/${id}`, { state: { startDate, endDate } });
    }
  }, [data]);

  return (
    <div className="select-dates">
      {(isLoading || isFetching) && <Loader />}
      <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] max-w-[370px] w-full">
        <div className="flex items-center justify-between">
          <p className="text-[26px] font-semibold">${price}/month</p>
          {/* <div className="dots"> */}
          {/* <div className="flex items-center gap-[5px]">
              <div className="rounded-full w-[10px] h-[10px] bg-[#008000]"></div>
              <span className="text-xs">Booked</span>
            </div> */}
          {/* <div className="flex items-center gap-[5px]">
              <div className="rounded-full w-[10px] h-[10px] bg-[#ff0000]"></div>
              <span className="text-xs">Booked</span>
            </div> */}
          {/* </div> */}
        </div>
        <span className="text-[14px] text-[#959595]">Taxes not included</span>

        <div className="w-full mt-[10px]">
          <p className="font-semibold mb-[6px]">
            Start date <span className="text-red-500">*</span>
          </p>
          <div className="input-with-icon relative w-full max-w-[100%]">
            <span className="absolute right-[16px] top-[20px]">
              <img src={DateIcon} alt="" />
            </span>
            <DatePickerInput
              className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
              selected={startDate}
              onChange={handleStartDateChange as any}
              minDate={today}
              filterDate={
                (date) => date >= today && !isDateBooked(date) /*&&
                isPeriodFree(date, addMonths(date, 1))*/
              }
              dayClassName={getDayClassName}
              placeholderText="Select start date"
            />
          </div>

          <p className="font-semibold mb-[6px] mt-[12px]">
            End date<span className="text-red-500">*</span>
          </p>
          <div className="input-with-icon relative w-full max-w-[100%]">
            <span className="absolute right-[16px] top-[20px]">
              <img src={DateIcon} alt="" />
            </span>
            <DatePickerInput
              className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
              selected={endDate}
              onChange={handleEndDateChange as any}
              minDate={addMonths(startDate, 1)}
              filterDate={(date) =>
                date >= addMonths(startDate, 1) && isPeriodFree(startDate, date)
              }
              dayClassName={getDayClassName}
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
