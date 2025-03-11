import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserAccountDetails from "../components/user-account-details";
import BookingsAndPayments from "../components/bookings-and-payments";
import DisputeResolution from "../components/dispute-resolution";
import CheckInPhotos from "../components/check-in-photos";
import ListingManagement from "../components/listing-management";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const tabRoutes = [
  "/admin/home/account",
  "/admin/home/listings",
  "/admin/home/bookings",
  "/admin/home/disputes",
  "/admin/home/check-in",
];

const AdminHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = tabRoutes.findIndex((route) =>
      location.pathname.includes(route)
    );
    setSelectedIndex(index !== -1 ? index : 0);

    if (
      location.pathname == "/admin/home/" ||
      location.pathname == "/admin/home"
    ) {
      navigate("/admin/home/account");
    }
  }, [location.pathname]);

  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs
        className="border-0"
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
          navigate(tabRoutes[index]);
        }}
      >
        <TabList>
          <Tab>Account</Tab>
          <Tab>Listing Management</Tab>
          <Tab>Bookings & Payments</Tab>
          <Tab>Dispute Resolution</Tab>
          <Tab>Check In Photos</Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </div>
  );
};

export default AdminHome;
