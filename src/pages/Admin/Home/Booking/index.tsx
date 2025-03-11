import BookingsAndPayments from "../../components/bookings-and-payments";

const AdminBooking = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <BookingsAndPayments />
      <BookingsAndPayments />
      <div className="">{/* <RefundAmountPopup/> */}</div>
    </div>
  );
};

export default AdminBooking;
