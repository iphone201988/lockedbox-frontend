import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DisputePopup from "../../../../components/Popups/DisputePopup";
import NoBooking from "../../../../components/Dashboard/NoBooking";
import {
  useGetUserQuery,
  useLazyFindHostBookingsQuery,
  useLazyFindRenterBookingsQuery,
} from "../../../../redux/api";
import Loader from "../../../../components/Loader";
import { useEffect, useState } from "react";
import { handleError } from "../../../../utils/helper";
import { useNavigate } from "react-router-dom";
import BookingCard from "../../../../components/Dashboard/BookingCard";
import HostBookingCard from "../../../../components/Dashboard/HostBookingCard";

type BookingType = {
  future: any[];
  past: any[];
  current: any[];
  dispute: any[];
};
const RenterBooking = () => {
  const navigate = useNavigate();
  const { data: userData, isLoading } = useGetUserQuery();
  const [
    findRenterBookings,
    {
      data: renterData,
      isLoading: isRentBookingLoading,
      isFetching: isRentBookingFetching,
    },
  ] = useLazyFindRenterBookingsQuery();
  const [
    findHostBookings,
    {
      data: hostData,
      isLoading: isHostBookingLoading,
      isFetching: isHostBookingFetching,
    },
  ] = useLazyFindHostBookingsQuery();

  const [bookings, setBookings] = useState<BookingType>({
    future: [],
    past: [],
    current: [],
    dispute: [],
  });
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

  const findBookings = async (type: string) => {
    if (bookings[type as keyof BookingType].length) {
      console.log("already fetched", bookings);
      return;
    }

    console.log("dashboardRole", dashboardRole);

    if (dashboardRole == "rent") {
      await findRenterBookings({ type: "future" })
        .unwrap()
        .catch((error) => handleError(error, navigate));
    }

    if (dashboardRole == "host") {
      await findHostBookings({ type: "future" })
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

        <TabPanel>
          <div className=" flex flex-col gap-[16px]">
            {bookings.future && bookings.future.length ? (
              bookings.future.map((booking: any) =>
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
              )
            ) : !(isHostBookingFetching || isRentBookingFetching) ? (
              <NoBooking />
            ) : (
              <></>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          {/* if booking */}
          <div className=" flex flex-col gap-[16px]">
            {bookings.current && bookings.current.length ? (
              bookings.current.map((booking: any) =>
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
              )
            ) : !(isHostBookingFetching || isRentBookingFetching) ? (
              <NoBooking />
            ) : (
              <></>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex flex-col gap-[16px]">
            {bookings.past && bookings.past.length ? (
              bookings.past.map((booking: any) => (
                <BookingCard
                  type="past"
                  booking={booking}
                  role={dashboardRole}
                />
              ))
            ) : !(isHostBookingFetching || isRentBookingFetching) ? (
              <NoBooking />
            ) : (
              <></>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex flex-col gap-[16px]">
            {bookings.dispute && bookings.dispute.length ? (
              bookings.dispute.map((booking: any) => (
                <BookingCard
                  type="dispute"
                  booking={booking}
                  role={dashboardRole}
                />
              ))
            ) : !(isHostBookingFetching || isRentBookingFetching) ? (
              <NoBooking />
            ) : (
              <></>
            )}
          </div>
        </TabPanel>
      </Tabs>

      {/* booking popus */}
      {/* <DisputePopup/> */}
    </div>
  );
};

export default RenterBooking;
