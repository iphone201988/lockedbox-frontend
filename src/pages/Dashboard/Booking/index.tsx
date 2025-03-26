import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NoBooking from "../../../components/Dashboard/NoBooking";
import {
  useGetUserQuery,
  useLazyFindHostBookingsQuery,
  useLazyFindRenterBookingsQuery,
} from "../../../redux/api";
import Loader from "../../../components/Loader";
import { useEffect, useState } from "react";
import { handleError } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";
import BookingCard from "../../../components/Dashboard/BookingCard";
import HostBookingCard from "../../../components/Dashboard/HostBookingCard";

type BookingType = {
  future: any[];
  past: any[];
  current: any[];
  dispute: any[];
};
const Booking = () => {
  const navigate = useNavigate();
  const { data: userData, isLoading } = useGetUserQuery();
  const [
    findRenterBookings,
    { data: renterData, isFetching: isRentBookingFetching },
  ] = useLazyFindRenterBookingsQuery();
  const [
    findHostBookings,
    { data: hostData, isFetching: isHostBookingFetching },
  ] = useLazyFindHostBookingsQuery();

  const [bookings, setBookings] = useState<BookingType>({
    future: [],
    past: [],
    current: [],
    dispute: [],
  });
  const [hasAnyBookings, setHasAnyBookings] = useState<boolean>(false);
  const [currentBookingType, setCurrentBookingType] =
    useState<string>("future");
  const [dashboardRole, setDashboardRole] = useState<string>("");

  useEffect(() => {
    console.log(renterData);
    if (renterData?.success) {
      setBookings((prev: any) => ({
        ...prev,
        [renterData.type]: renterData.bookings,
      }));
    }
  }, [renterData]);

  useEffect(() => {
    console.log(hostData);
    if (hostData?.success) {
      setBookings((prev: any) => ({
        ...prev,
        [hostData.type]: hostData.bookings,
      }));
    }
  }, [hostData]);

  useEffect(() => {
    if (userData?.success) {
      const { dashboardRole } = userData.userExists;
      setDashboardRole(dashboardRole);
    }
  }, [userData]);

  useEffect(() => {
    (async () => {
      await findBookings("future");
    })();
  }, [dashboardRole]);

  useEffect(() => {
    const hasAnyBookings =
      bookings.future.length || bookings.current.length || bookings.past.length;
    setHasAnyBookings(hasAnyBookings ? true : false);
  }, [bookings]);

  const findBookings = async (type: string) => {
    setCurrentBookingType(type);
    if (bookings[type as keyof BookingType].length) {
      console.log("already fetched", bookings);
      return;
    }

    if (dashboardRole == "rent") {
      await findRenterBookings({ type })
        .unwrap()
        .catch((error) => handleError(error, navigate));
    }

    if (dashboardRole == "host") {
      await findHostBookings({ type })
        .unwrap()
        .catch((error) => handleError(error, navigate));
    }
  };

  const refetchFutureBookings = async () => {
    if (dashboardRole == "host") {
      await findHostBookings({ type: "future" })
        .unwrap()
        .catch((error) => handleError(error, navigate));
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      {(isHostBookingFetching || isRentBookingFetching) && <Loader />}
      <Tabs className={" border-0"}>
        <TabList>
          <Tab onClick={() => findBookings("future")}>Future</Tab>
          <Tab onClick={() => findBookings("current")}>Current</Tab>
          <Tab onClick={() => findBookings("past")}>Past</Tab>
          <Tab onClick={() => findBookings("dispute")}>Dispute</Tab>
        </TabList>

        {hasAnyBookings ? (
          <>
            <TabPanel>
              <div className=" flex flex-col gap-[16px]">
                {bookings.future.map((booking: any) =>
                  dashboardRole == "host" ? (
                    <HostBookingCard
                      booking={booking}
                      refetch={refetchFutureBookings}
                    />
                  ) : (
                    <BookingCard
                      type="future"
                      booking={booking}
                      role={dashboardRole}
                    />
                  )
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-col gap-[16px]">
                {bookings.current.map((booking: any) =>
                  dashboardRole == "host" ? (
                    <HostBookingCard
                      booking={booking}
                      refetch={refetchFutureBookings}
                    />
                  ) : (
                    <BookingCard
                      type="current"
                      booking={booking}
                      role={dashboardRole}
                    />
                  )
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-col gap-[16px]">
                {bookings.past.map((booking: any) => (
                  <BookingCard
                    type="past"
                    booking={booking}
                    role={dashboardRole}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-col gap-[16px]">
                {bookings.dispute.map((booking: any) => (
                  <BookingCard
                    type="dispute"
                    booking={booking}
                    role={dashboardRole}
                  />
                ))}
              </div>
            </TabPanel>
          </>
        ) : !(isHostBookingFetching || isRentBookingFetching) ? (
          <NoBooking type={currentBookingType} />
        ) : (
          <></>
        )}
      </Tabs>
    </div>
  );
};

export default Booking;
