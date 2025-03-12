import { useParams } from "react-router-dom";
import BookingsAndPayments from "../../components/bookings-and-payments";
import { useEffect, useState } from "react";
import { useLazyGetUserBookingQuery } from "../../../../redux/api/admin";
import { usePagination } from "../../../../hooks/usePagination";
import Loader from "../../../../components/Loader";

const AdminBooking = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState<any>([]);
  const [getUserBookings, { data, isLoading, isFetching }] =
    useLazyGetUserBookingQuery();
  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => getUserBookings({ id, page: pagination.page }),
  });

  useEffect(() => {
    if (data?.success) {
      const { pagination, bookings } = data;

      setBookings((prev: any) => [...(prev ? prev : []), ...bookings]);

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
      restoreScrollPosition();
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      getUserBookings({ id, page: pagination.page });
    }
  }, []);

  return (
    <div
      className="flex flex-col gap-[16px] h-full overflow-auto no-scrollbar"
      ref={scrollableRef}
      onScroll={handleScroll}
    >
      {(isLoading || isFetching) && <Loader />}
      {bookings.map((booking: any) => (
        <BookingsAndPayments booking={booking}/>
      ))}
    </div>
  );
};

export default AdminBooking;
